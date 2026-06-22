import { resolveReflection } from "./reflection";
import type { JourneyEvent, JourneySession } from "./types";

export function createInitialJourneySession(): JourneySession {
  return {
    version: 1,
    stage: "idle",
    language: "en",
    storageMode: "session_only",
    boundaryAccepted: false,
    orientationCompleted: false,
    completedQuestIds: [],
    reflection: { required: true },
    checkpoint: { kind: "not_reached" },
  };
}

export function journeyReducer(session: JourneySession, event: JourneyEvent): JourneySession {
  switch (event.type) {
    case "BOUNDARY_ACCEPTED":
      return {
        ...session,
        stage: "preferences",
        boundaryAccepted: true,
      };

    case "PREFERENCES_SAVED":
      if (!session.boundaryAccepted || session.stage !== "preferences") return session;
      return {
        ...session,
        stage: "orientation",
        language: event.language,
        storageMode: event.storageMode,
      };

    case "ORIENTATION_COMPLETED":
      if (session.stage !== "orientation") return session;
      return {
        ...session,
        stage: "quest",
        orientationCompleted: true,
        activeQuestId: "KBA-LQ-001",
      };

    case "QUEST_COMPLETED":
      if (session.stage !== "quest" || event.questId !== "KBA-LQ-001") return session;
      return {
        ...session,
        stage: "reflection",
        completedQuestIds: session.completedQuestIds.includes(event.questId)
          ? session.completedQuestIds
          : [...session.completedQuestIds, event.questId],
      };

    case "REFLECTION_RESOLVED": {
      if (session.stage !== "reflection") return session;
      const resolution = resolveReflection({
        required: session.reflection.required,
        decision: event.resolution,
        text: event.text,
      });
      if (resolution === undefined) return session;

      return {
        ...session,
        stage: "reflection",
        reflection: {
          required: true,
          resolution,
          text: event.text,
        },
        checkpoint: {
          kind: "first_slice_internal",
          reachedAt: new Date().toISOString(),
        },
      };
    }
  }
}
