import {
  PUBLIC_CONSENT_VERSION,
  PUBLIC_PILOT_VERSION,
  PUBLIC_SOURCE_ID,
} from "@/soulai/public-identity";

export interface SoulAiChatApplication {
  unmount: () => void;
}

export interface SoulAiOfficialChatOptions {
  webhookUrl: string;
  webhookConfig: { method: "POST"; headers: Record<string, string> };
  target: Element;
  mode: "fullscreen";
  showWindowCloseButton: boolean;
  showWelcomeScreen: boolean;
  loadPreviousSession: boolean;
  sessionId: string;
  chatInputKey: "chatInput";
  chatSessionKey: "sessionId";
  allowFileUploads: boolean;
  enableStreaming: boolean;
  enableMessageActions: boolean;
  initialMessages: string[];
  metadata: Record<string, unknown>;
  i18n: Record<
    string,
    {
      title: string;
      subtitle: string;
      footer: string;
      getStarted: string;
      inputPlaceholder: string;
      closeButtonTooltip: string;
      [message: string]: string;
    }
  >;
  beforeMessageSent: (message: string) => void | Promise<void>;
  afterMessageSent: (message: string, response?: unknown) => void | Promise<void>;
}

export type SoulAiChatFactory = (options: SoulAiOfficialChatOptions) => SoulAiChatApplication;

interface BuildSoulAiChatOptionsInput {
  target: Element;
  webhookUrl: string;
  sessionId: string;
  beforeMessageSent: (message: string) => void | Promise<void>;
  afterMessageSent: (message: string, response?: unknown) => void | Promise<void>;
}

export function buildSoulAiChatOptions({
  afterMessageSent,
  beforeMessageSent,
  sessionId,
  target,
  webhookUrl,
}: BuildSoulAiChatOptionsInput): SoulAiOfficialChatOptions {
  return {
    webhookUrl,
    webhookConfig: { method: "POST", headers: {} },
    target,
    mode: "fullscreen",
    showWindowCloseButton: false,
    showWelcomeScreen: false,
    loadPreviousSession: false,
    sessionId,
    chatInputKey: "chatInput",
    chatSessionKey: "sessionId",
    allowFileUploads: false,
    enableStreaming: false,
    enableMessageActions: false,
    initialMessages: [
      "Before anything else, let me ask you one real question: How are you—really?",
      "You do not need to explain your entire life. Begin with one honest sentence.",
    ],
    metadata: {
      source: PUBLIC_SOURCE_ID,
      consent_version: PUBLIC_CONSENT_VERSION,
      pilot_version: PUBLIC_PILOT_VERSION,
    },
    i18n: {
      en: {
        title: "Feel meUus",
        subtitle: "A short, consent-based guided reflection.",
        footer: "Experimental · 18+ · Maximum 5 messages",
        getStarted: "Begin reflection",
        inputPlaceholder: "Begin with one honest sentence…",
        closeButtonTooltip: "Close reflection",
      },
    },
    beforeMessageSent,
    afterMessageSent,
  };
}

export function isOfficialChatFailureText(text: string): boolean {
  return text.trim().startsWith("Error: Failed to receive response");
}
