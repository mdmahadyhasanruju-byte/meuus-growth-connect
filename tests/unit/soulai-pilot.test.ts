import { describe, expect, test } from "bun:test";

import { buildSoulAiChatOptions } from "../../src/soulai/client";
import { validateSoulAiWebhookUrl } from "../../src/soulai/config";
import {
  INTERNAL_N8N_CONSENT_VERSION,
  INTERNAL_N8N_PILOT_VERSION,
  INTERNAL_N8N_SOURCE_ID,
  PUBLIC_CONSENT_VERSION,
  PUBLIC_PILOT_VERSION,
  PUBLIC_SOURCE_ID,
  publicSoulAiIdentifiersAreApproved,
} from "../../src/soulai/public-identity";
import {
  SOULAI_CONSENT_PARAGRAPHS_BANGLA,
  SOULAI_CONSENT_PARAGRAPHS_ENGLISH,
  SOULAI_PROPOSED_DELETION_CHANNEL,
  SOULAI_SHEET_RETENTION_DAYS,
} from "../../src/soulai/public-policy";
import {
  canSendSoulAiMessage,
  N8N_CHAT_LOCAL_STORAGE_KEY,
  parseSoulAiBrowserSession,
  registerSoulAiUserMessage,
  replaceSoulAiBrowserSession,
  SOULAI_MAX_USER_MESSAGES,
  SOULAI_SESSION_STORAGE_KEY,
} from "../../src/soulai/session";

describe("SoulAI official n8n integration boundary", () => {
  test("keeps missing and unsafe webhook configurations unavailable", () => {
    expect(validateSoulAiWebhookUrl(undefined).status).toBe("missing");
    expect(validateSoulAiWebhookUrl("not a url").status).toBe("invalid");
    expect(validateSoulAiWebhookUrl("http://example.com/webhook/chat").status).toBe("invalid");
    expect(validateSoulAiWebhookUrl("https://user:secret@example.com/webhook/chat").status).toBe(
      "invalid",
    );
    expect(validateSoulAiWebhookUrl("https://example.com/webhook-test/chat").status).toBe(
      "invalid",
    );
  });

  test("distinguishes a harmless localhost mock from a production endpoint", () => {
    expect(validateSoulAiWebhookUrl("http://localhost:8787/webhook/chat")).toEqual({
      status: "ready",
      endpointKind: "local-mock",
      url: "http://localhost:8787/webhook/chat",
    });
    expect(validateSoulAiWebhookUrl("https://automation.example.com/webhook/chat")).toEqual({
      status: "ready",
      endpointKind: "production",
      url: "https://automation.example.com/webhook/chat",
    });
  });

  test("builds the official client options without constructing a custom response parser", () => {
    const target = { nodeType: 1 } as Element;
    const beforeMessageSent = () => {};
    const afterMessageSent = () => {};
    const options = buildSoulAiChatOptions({
      target,
      webhookUrl: "https://automation.example.com/webhook/chat",
      sessionId: "pseudonymous-session",
      beforeMessageSent,
      afterMessageSent,
    });

    expect(options.webhookUrl).toBe("https://automation.example.com/webhook/chat");
    expect(options.target).toBe(target);
    expect(options.webhookConfig.method).toBe("POST");
    expect(options.chatInputKey).toBe("chatInput");
    expect(options.chatSessionKey).toBe("sessionId");
    expect(options.sessionId).toBe("pseudonymous-session");
    expect(options.loadPreviousSession).toBe(false);
    expect(options.allowFileUploads).toBe(false);
    expect(options.metadata).toEqual({
      source: "meuus.org/soulai-test",
      consent_version: "meuus-soulai-consent-v1",
      pilot_version: "meuus-soulai-guided-reflection-v1",
    });
  });

  test("uses the owner-approved public identifiers while preserving internal test identifiers", () => {
    expect(publicSoulAiIdentifiersAreApproved()).toBe(true);
    expect(PUBLIC_CONSENT_VERSION).toBe("meuus-soulai-consent-v1");
    expect(PUBLIC_PILOT_VERSION).toBe("meuus-soulai-guided-reflection-v1");
    expect(PUBLIC_SOURCE_ID).toBe("meuus.org/soulai-test");
    expect(INTERNAL_N8N_CONSENT_VERSION).toBe("internal-test-v1");
    expect(INTERNAL_N8N_PILOT_VERSION).toBe("soulai-pilot-v1");
    expect(INTERNAL_N8N_SOURCE_ID).toBe("n8n-soulai-test");
  });

  test("locks the approved bilingual policy constants without claiming an operational channel", () => {
    expect(SOULAI_SHEET_RETENTION_DAYS).toBe(30);
    expect(SOULAI_PROPOSED_DELETION_CHANNEL).toBe("privacy@meuus.org");
    expect(SOULAI_CONSENT_PARAGRAPHS_ENGLISH.join(" ")).toContain(
      "retained for no more than 30 days",
    );
    expect(SOULAI_CONSENT_PARAGRAPHS_ENGLISH.join(" ")).toContain(
      "deletion from every connected system cannot be guaranteed",
    );
    expect(SOULAI_CONSENT_PARAGRAPHS_BANGLA.join(" ")).toContain("সর্বোচ্চ ৩০ দিন");
    expect(SOULAI_CONSENT_PARAGRAPHS_BANGLA.join(" ")).toContain(
      "সব connected system থেকে deletion নিশ্চিত করা যাবে না",
    );
  });
});

describe("SoulAI browser-session UI limit and reset", () => {
  test("requires a valid pseudonymous session and bounded counter", () => {
    expect(parseSoulAiBrowserSession(null)).toBeNull();
    expect(parseSoulAiBrowserSession("not-json")).toBeNull();
    expect(
      parseSoulAiBrowserSession(
        JSON.stringify({ sessionId: "pilot-session", userMessageCount: 3 }),
      ),
    ).toEqual({ sessionId: "pilot-session", userMessageCount: 3 });
    expect(
      parseSoulAiBrowserSession(
        JSON.stringify({
          sessionId: "pilot-session",
          userMessageCount: SOULAI_MAX_USER_MESSAGES + 1,
        }),
      ),
    ).toBeNull();
  });

  test("allows exactly five new user messages and then refuses another", () => {
    let session = { sessionId: "pilot-session", userMessageCount: 0 };

    for (let count = 1; count <= SOULAI_MAX_USER_MESSAGES; count += 1) {
      const next = registerSoulAiUserMessage(session);
      expect(next).not.toBeNull();
      session = next!;
      expect(session.userMessageCount).toBe(count);
    }

    expect(canSendSoulAiMessage(session.userMessageCount)).toBe(false);
    expect(registerSoulAiUserMessage(session)).toBeNull();
  });

  test("reset writes a different session and removes the official client session key", () => {
    const sessionStorage = new MemoryStorage();
    const localStorage = new MemoryStorage();
    sessionStorage.setItem(
      SOULAI_SESSION_STORAGE_KEY,
      JSON.stringify({ sessionId: "previous-session", userMessageCount: 4 }),
    );
    localStorage.setItem(N8N_CHAT_LOCAL_STORAGE_KEY, "previous-session");

    const replacement = replaceSoulAiBrowserSession(sessionStorage, localStorage);
    expect(replacement.sessionId).not.toBe("previous-session");
    expect(replacement.userMessageCount).toBe(0);
    expect(localStorage.getItem(N8N_CHAT_LOCAL_STORAGE_KEY)).toBeNull();
    const stored = sessionStorage.getItem(SOULAI_SESSION_STORAGE_KEY) ?? "";
    expect(stored).toContain(replacement.sessionId);
    expect(stored).not.toContain("user_message");
    expect(stored).not.toContain("ai_response");
  });
});

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>();

  get length() {
    return this.values.size;
  }

  clear() {
    this.values.clear();
  }

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  key(index: number) {
    return [...this.values.keys()][index] ?? null;
  }

  removeItem(key: string) {
    this.values.delete(key);
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}
