import { describe, expect, test } from "bun:test";

import { getNextJourneyPath } from "../../src/journey/routing/guards";
import { createInitialJourneySession, journeyReducer } from "../../src/journey/domain/reducer";

describe("journey first slice route flow", () => {
  test("reaches only the internal non-terminal checkpoint", () => {
    let session = createInitialJourneySession();
    expect(getNextJourneyPath(session)).toBe("/journey/start");

    session = journeyReducer(session, { type: "BOUNDARY_ACCEPTED" });
    expect(getNextJourneyPath(session)).toBe("/journey/preferences");

    session = journeyReducer(session, {
      type: "PREFERENCES_SAVED",
      language: "en",
      storageMode: "progress_only",
    });
    expect(getNextJourneyPath(session)).toBe("/journey/orientation");

    session = journeyReducer(session, { type: "ORIENTATION_COMPLETED" });
    expect(getNextJourneyPath(session)).toBe("/journey/quest/KBA-LQ-001");

    session = journeyReducer(session, { type: "QUEST_COMPLETED", questId: "KBA-LQ-001" });
    expect(getNextJourneyPath(session)).toBe("/journey/reflection");

    session = journeyReducer(session, {
      type: "REFLECTION_RESOLVED",
      resolution: "not_provided",
    });

    expect(session.checkpoint.kind).toBe("first_slice_internal");
    expect(getNextJourneyPath(session)).toBe("/journey/review");
    expect(session.milestone).toBeUndefined();
  });
});
