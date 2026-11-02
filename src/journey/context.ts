import { createContext, useContext } from "react";
import type { JourneyEvent, JourneySession } from "./domain/types";

export type JourneyContextValue = {
  session: JourneySession;
  dispatch: (event: JourneyEvent) => void;
  clearJourney: () => void;
};

export const JourneyContext = createContext<JourneyContextValue | undefined>(undefined);

export function useJourney() {
  const context = useContext(JourneyContext);
  if (context === undefined) {
    throw new Error("useJourney must be used inside JourneyProvider");
  }
  return context;
}
