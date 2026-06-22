import type { JourneyPath, JourneySession } from "../domain/types";

export function getNextJourneyPath(session: JourneySession): JourneyPath {
  if (!session.boundaryAccepted) return "/journey/start";
  if (session.stage === "preferences") return "/journey/preferences";
  if (session.stage === "orientation") return "/journey/orientation";
  if (session.stage === "quest") return "/journey/quest/KBA-LQ-001";
  if (session.stage === "reflection" && session.checkpoint.kind !== "first_slice_internal") {
    return "/journey/reflection";
  }
  if (session.checkpoint.kind === "first_slice_internal") return "/journey/review";
  return "/journey/start";
}

export function canEnterJourneyRoute(path: string, session: JourneySession): boolean {
  switch (path) {
    case "/journey":
    case "/journey/start":
    case "/journey/privacy":
    case "/journey/accessibility":
    case "/journey/safety":
      return true;
    case "/journey/preferences":
      return session.boundaryAccepted;
    case "/journey/orientation":
      return session.stage === "orientation" || session.orientationCompleted;
    case "/journey/quest/KBA-LQ-001":
      return session.stage === "quest" && session.activeQuestId === "KBA-LQ-001";
    case "/journey/reflection":
      return session.completedQuestIds.includes("KBA-LQ-001");
    case "/journey/review":
      return session.checkpoint.kind === "first_slice_internal";
    case "/journey/confirm":
    case "/journey/milestone":
    case "/journey/complete":
      return false;
    default:
      return false;
  }
}
