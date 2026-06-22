import { describe, expect, test } from "bun:test";

import { createInitialJourneySession, journeyReducer } from "../../src/journey/domain/reducer";
import { hydrateJourneyState } from "../../src/journey/domain/hydration";
import { createMemoryJourneyStorage } from "../../src/journey/storage/local-storage";

describe("journey storage and hydration", () => {
  test("progress_only never persists private reflection text", () => {
    const storage = createMemoryJourneyStorage();
    let session = createInitialJourneySession();

    session = journeyReducer(session, { type: "BOUNDARY_ACCEPTED" });
    session = journeyReducer(session, {
      type: "PREFERENCES_SAVED",
      language: "en",
      storageMode: "progress_only",
    });
    session = journeyReducer(session, { type: "ORIENTATION_COMPLETED" });
    session = journeyReducer(session, { type: "QUEST_COMPLETED", questId: "KBA-LQ-001" });
    session = journeyReducer(session, {
      type: "REFLECTION_RESOLVED",
      resolution: "written",
      text: "do not persist me",
    });

    storage.save(session);

    expect(storage.snapshot()).not.toContain("do not persist me");
  });

  test("cold hydration restores valid localStorage state", () => {
    const storage = createMemoryJourneyStorage();
    let session = createInitialJourneySession();
    session = journeyReducer(session, { type: "BOUNDARY_ACCEPTED" });
    session = journeyReducer(session, {
      type: "PREFERENCES_SAVED",
      language: "en",
      storageMode: "progress_only",
    });
    storage.save(session);

    expect(hydrateJourneyState({ storage }).stage).toBe("orientation");
  });

  test("active memory has priority over stale localStorage", () => {
    const storage = createMemoryJourneyStorage();
    storage.save(journeyReducer(createInitialJourneySession(), { type: "BOUNDARY_ACCEPTED" }));

    let active = journeyReducer(createInitialJourneySession(), { type: "BOUNDARY_ACCEPTED" });
    active = journeyReducer(active, {
      type: "PREFERENCES_SAVED",
      language: "bn",
      storageMode: "session_only",
    });

    expect(hydrateJourneyState({ activeSession: active, storage }).language).toBe("bn");
    expect(hydrateJourneyState({ activeSession: active, storage }).stage).toBe("orientation");
  });
});
