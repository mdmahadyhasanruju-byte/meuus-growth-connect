export type JourneyLanguage = "en" | "bn";

export type JourneyStorageMode = "session_only" | "progress_only" | "progress_and_reflection";

export type JourneyStage =
  | "idle"
  | "boundary"
  | "preferences"
  | "orientation"
  | "quest"
  | "reflection"
  | "responsibility_review"
  | "final_confirmation"
  | "milestone"
  | "completed";

export type ReflectionResolution =
  | "written"
  | "considered_privately"
  | "skipped_optional"
  | "not_provided";

export type QuestId = "KBA-LQ-001";

export type JourneyCheckpoint = {
  kind: "not_reached" | "first_slice_internal";
  reachedAt?: string;
};

export type JourneySession = {
  version: 1;
  stage: JourneyStage;
  language: JourneyLanguage;
  storageMode: JourneyStorageMode;
  boundaryAccepted: boolean;
  orientationCompleted: boolean;
  activeQuestId?: QuestId;
  completedQuestIds: QuestId[];
  reflection: {
    required: true;
    resolution?: ReflectionResolution;
    text?: string;
  };
  checkpoint: JourneyCheckpoint;
  milestone?: never;
};

export type JourneyEvent =
  | { type: "BOUNDARY_ACCEPTED" }
  | {
      type: "PREFERENCES_SAVED";
      language: JourneyLanguage;
      storageMode: JourneyStorageMode;
    }
  | { type: "ORIENTATION_COMPLETED" }
  | { type: "QUEST_COMPLETED"; questId: QuestId }
  | {
      type: "REFLECTION_RESOLVED";
      resolution: ReflectionResolution;
      text?: string;
    };

export type JourneyPath =
  | "/journey"
  | "/journey/start"
  | "/journey/preferences"
  | "/journey/orientation"
  | "/journey/quest/KBA-LQ-001"
  | "/journey/reflection"
  | "/journey/review"
  | "/journey/confirm"
  | "/journey/milestone"
  | "/journey/complete"
  | "/journey/privacy"
  | "/journey/accessibility"
  | "/journey/safety";
