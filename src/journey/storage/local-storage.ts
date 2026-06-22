import type { JourneySession } from "../domain/types";

export type JourneyStorage = {
  load: () => JourneySession | undefined;
  save: (session: JourneySession) => void;
  clear: () => void;
  snapshot?: () => string;
};

const storageKey = "meuus.journey.v1";

function serialiseSession(session: JourneySession): string {
  const persisted: JourneySession =
    session.storageMode === "progress_only"
      ? {
          ...session,
          reflection: {
            required: true,
            resolution: session.reflection.resolution,
          },
        }
      : session;

  return JSON.stringify(persisted);
}

function parseSession(value: string | null): JourneySession | undefined {
  if (value === null) return undefined;

  try {
    const parsed = JSON.parse(value) as Partial<JourneySession>;
    if (parsed.version !== 1) return undefined;
    if (typeof parsed.stage !== "string") return undefined;
    if (parsed.checkpoint === undefined) return undefined;
    return parsed as JourneySession;
  } catch {
    return undefined;
  }
}

export function createBrowserJourneyStorage(): JourneyStorage {
  return {
    load: () => parseSession(window.localStorage.getItem(storageKey)),
    save: (session) => {
      if (session.storageMode === "session_only") {
        window.localStorage.removeItem(storageKey);
        return;
      }
      window.localStorage.setItem(storageKey, serialiseSession(session));
    },
    clear: () => window.localStorage.removeItem(storageKey),
  };
}

export function createMemoryJourneyStorage(): JourneyStorage {
  let value: string | null = null;

  return {
    load: () => parseSession(value),
    save: (session) => {
      if (session.storageMode === "session_only") {
        value = null;
        return;
      }
      value = serialiseSession(session);
    },
    clear: () => {
      value = null;
    },
    snapshot: () => value ?? "",
  };
}
