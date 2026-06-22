import { describe, expect, test } from "bun:test";

import { canEnterJourneyRoute } from "../../src/journey/routing/guards";
import { createInitialJourneySession, journeyReducer } from "../../src/journey/domain/reducer";

describe("journey route guards", () => {
  test("do not mutate state while checking eligibility", () => {
    const session = createInitialJourneySession();
    const before = JSON.stringify(session);

    expect(canEnterJourneyRoute("/journey/preferences", session)).toBe(false);
    expect(JSON.stringify(session)).toBe(before);
  });

  test("block invalid first-slice route access before prerequisites", () => {
    const session = createInitialJourneySession();

    expect(canEnterJourneyRoute("/journey/quest/KBA-LQ-001", session)).toBe(false);
  });

  test("allow first quest only after orientation", () => {
    let session = createInitialJourneySession();
    session = journeyReducer(session, { type: "BOUNDARY_ACCEPTED" });
    session = journeyReducer(session, {
      type: "PREFERENCES_SAVED",
      language: "en",
      storageMode: "progress_and_reflection",
    });
    session = journeyReducer(session, { type: "ORIENTATION_COMPLETED" });

    expect(canEnterJourneyRoute("/journey/quest/KBA-LQ-001", session)).toBe(true);
    expect(canEnterJourneyRoute("/journey/quest/KBA-LQ-002", session)).toBe(false);
  });
});
