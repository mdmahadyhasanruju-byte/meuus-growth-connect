import { describe, expect, test } from "bun:test";

import type {
  JourneyLanguage,
  JourneySession,
  JourneyStorageMode,
} from "../../src/journey/domain/types";
import { hydrateJourneyState } from "../../src/journey/domain/hydration";
import { getNextJourneyPath } from "../../src/journey/routing/guards";
import { createInitialJourneySession, journeyReducer } from "../../src/journey/domain/reducer";
import { createMemoryJourneyStorage } from "../../src/journey/storage/local-storage";

describe("journey first slice route flow", () => {
  test("preference choices advance only after explicit confirmation", () => {
    let session = journeyReducer(createInitialJourneySession(), { type: "BOUNDARY_ACCEPTED" });
    let draftLanguage: JourneyLanguage = session.language;
    let draftStorageMode: JourneyStorageMode = session.storageMode;

    draftLanguage = "bn";
    draftStorageMode = "progress_only";

    expect(getNextJourneyPath(session)).toBe("/journey/preferences");
    expect(session.stage).toBe("preferences");
    expect(session.language).toBe("en");
    expect(session.storageMode).toBe("session_only");

    session = confirmPreferences(session, draftLanguage, draftStorageMode);

    expect(session.stage).toBe("orientation");
    expect(getNextJourneyPath(session)).toBe("/journey/orientation");
    expect(session.language).toBe("bn");
    expect(session.storageMode).toBe("progress_only");
  });

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

  test("clearing local journey data returns to the start boundary", () => {
    const storage = createMemoryJourneyStorage();
    let session = createInitialJourneySession();

    session = journeyReducer(session, { type: "BOUNDARY_ACCEPTED" });
    session = confirmPreferences(session, "en", "progress_and_reflection");
    session = journeyReducer(session, { type: "ORIENTATION_COMPLETED" });
    session = journeyReducer(session, { type: "QUEST_COMPLETED", questId: "KBA-LQ-001" });
    session = journeyReducer(session, {
      type: "REFLECTION_RESOLVED",
      resolution: "written",
      text: "locally saved reflection",
    });
    storage.save(session);
    expect(storage.snapshot()).toContain("locally saved reflection");

    storage.clear();

    const restarted = hydrateJourneyState({ storage });
    expect(restarted).toEqual(createInitialJourneySession());
    expect(getNextJourneyPath(restarted)).toBe("/journey/start");
    expect(storage.snapshot()).not.toContain("locally saved reflection");
  });
});

function confirmPreferences(
  session: JourneySession,
  language: JourneyLanguage,
  storageMode: JourneyStorageMode,
) {
  return journeyReducer(session, {
    type: "PREFERENCES_SAVED",
    language,
    storageMode,
  });
}
