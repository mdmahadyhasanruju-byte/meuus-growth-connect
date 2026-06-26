import { describe, expect, test } from "bun:test";

import { createInitialJourneySession, journeyReducer } from "../../src/journey/domain/reducer";

describe("journey reducer", () => {
  test("creates the first-slice initial state without milestone progress", () => {
    const session = createInitialJourneySession();

    expect(session.stage).toBe("idle");
    expect(session.completedQuestIds).toEqual([]);
    expect(session.milestone).toBeUndefined();
  });

  test("is the only transition authority for the authorised first slice", () => {
    let session = createInitialJourneySession();

    session = journeyReducer(session, { type: "BOUNDARY_ACCEPTED" });
    expect(session.stage).toBe("preferences");

    session = journeyReducer(session, {
      type: "PREFERENCES_SAVED",
      language: "bn",
      storageMode: "progress_only",
    });
    expect(session.stage).toBe("orientation");
    expect(session.language).toBe("bn");
    expect(session.storageMode).toBe("progress_only");

    session = journeyReducer(session, { type: "ORIENTATION_COMPLETED" });
    expect(session.stage).toBe("quest");
    expect(session.activeQuestId).toBe("KBA-LQ-001");

    session = journeyReducer(session, { type: "QUEST_COMPLETED", questId: "KBA-LQ-001" });
    expect(session.stage).toBe("reflection");

    session = journeyReducer(session, {
      type: "REFLECTION_RESOLVED",
      resolution: "considered_privately",
      text: "private text",
    });
    expect(session.stage).toBe("reflection");
    expect(session.checkpoint.kind).toBe("first_slice_internal");
    expect(session.milestone).toBeUndefined();
  });
});
