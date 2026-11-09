import { useCallback, useEffect, useMemo, useState } from "react";

import { hydrateJourneyState } from "./domain/hydration";
import { createInitialJourneySession, journeyReducer } from "./domain/reducer";
import type { JourneyEvent } from "./domain/types";
import { createBrowserJourneyStorage, type JourneyStorage } from "./storage/local-storage";
import { JourneyContext } from "./context";

function getBrowserStorage(): JourneyStorage | undefined {
  if (typeof window === "undefined") return undefined;
  return createBrowserJourneyStorage();
}

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const storage = useMemo(() => getBrowserStorage(), []);
  const [session, setSession] = useState(() => hydrateJourneyState({ storage }));

  useEffect(() => {
    storage?.save(session);
  }, [session, storage]);

  const dispatch = useCallback((event: JourneyEvent) => {
    setSession((currentSession) => journeyReducer(currentSession, event));
  }, []);

  const clearJourney = useCallback(() => {
    storage?.clear();
    setSession(createInitialJourneySession());
  }, [storage]);

  const value = useMemo(
    () => ({ session, dispatch, clearJourney }),
    [session, dispatch, clearJourney],
  );

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}
