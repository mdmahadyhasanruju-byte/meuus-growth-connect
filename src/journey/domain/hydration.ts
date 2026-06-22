import { createInitialJourneySession } from "./reducer";
import type { JourneySession } from "./types";
import type { JourneyStorage } from "../storage/local-storage";

type HydrationInput = {
  activeSession?: JourneySession;
  storage?: JourneyStorage;
};

export function hydrateJourneyState(input: HydrationInput = {}): JourneySession {
  if (input.activeSession !== undefined) {
    return input.activeSession;
  }

  const stored = input.storage?.load();
  if (stored !== undefined) {
    return stored;
  }

  return createInitialJourneySession();
}
