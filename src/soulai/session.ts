export const SOULAI_MAX_USER_MESSAGES = 5;
export const SOULAI_SESSION_STORAGE_KEY = "meuus:soulai-pilot:session:v1";
export const N8N_CHAT_LOCAL_STORAGE_KEY = "n8n-chat/sessionId";
export const SOULAI_LIMIT_MESSAGE =
  "Thank you for trusting this small experiment with a part of your story. You do not need to solve everything today.";
export const SOULAI_ONE_POSSIBLE_NEXT_STEP =
  "One possible next step: choose one small, reversible action from this reflection and decide when you may try it.";
export const SOULAI_AUTONOMY_MESSAGE =
  "You remain the final authority. Keep, change or reject this suggestion.";

export interface SoulAiBrowserSession {
  sessionId: string;
  userMessageCount: number;
}

export function createPseudonymousSessionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `pilot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 14)}`;
}

export function createSoulAiBrowserSession(): SoulAiBrowserSession {
  return { sessionId: createPseudonymousSessionId(), userMessageCount: 0 };
}

export function parseSoulAiBrowserSession(rawValue: string | null): SoulAiBrowserSession | null {
  if (!rawValue) return null;

  try {
    const parsed = JSON.parse(rawValue) as Partial<SoulAiBrowserSession>;
    const messageCount = Number(parsed.userMessageCount);

    if (
      typeof parsed.sessionId !== "string" ||
      !parsed.sessionId.trim() ||
      !Number.isInteger(messageCount) ||
      messageCount < 0 ||
      messageCount > SOULAI_MAX_USER_MESSAGES
    ) {
      return null;
    }

    return { sessionId: parsed.sessionId, userMessageCount: messageCount };
  } catch {
    return null;
  }
}

export function readSoulAiBrowserSession(storage: Storage): SoulAiBrowserSession {
  return (
    parseSoulAiBrowserSession(storage.getItem(SOULAI_SESSION_STORAGE_KEY)) ??
    createSoulAiBrowserSession()
  );
}

export function writeSoulAiBrowserSession(storage: Storage, session: SoulAiBrowserSession): void {
  storage.setItem(SOULAI_SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function replaceSoulAiBrowserSession(
  sessionStorage: Storage,
  localStorage?: Storage,
): SoulAiBrowserSession {
  const replacement = createSoulAiBrowserSession();
  writeSoulAiBrowserSession(sessionStorage, replacement);
  localStorage?.removeItem(N8N_CHAT_LOCAL_STORAGE_KEY);
  return replacement;
}

export function canSendSoulAiMessage(userMessageCount: number): boolean {
  return userMessageCount < SOULAI_MAX_USER_MESSAGES;
}

export function registerSoulAiUserMessage(
  session: SoulAiBrowserSession,
): SoulAiBrowserSession | null {
  if (!canSendSoulAiMessage(session.userMessageCount)) return null;

  return { ...session, userMessageCount: session.userMessageCount + 1 };
}
