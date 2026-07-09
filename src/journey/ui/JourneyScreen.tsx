import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

import { journeyCopy, firstSliceQuest } from "../content/first-slice";
import type {
  JourneyEvent,
  JourneyLanguage,
  JourneyPath,
  JourneyStorageMode,
  ReflectionResolution,
} from "../domain/types";
import { useJourney } from "../provider";
import { canEnterJourneyRoute, getNextJourneyPath } from "../routing/guards";

type ScreenKind =
  | "home"
  | "start"
  | "preferences"
  | "orientation"
  | "quest"
  | "reflection"
  | "review"
  | "locked"
  | "info";

type JourneyScreenProps = {
  kind: ScreenKind;
  path: JourneyPath;
};

export function JourneyScreen({ kind, path }: JourneyScreenProps) {
  const { session, dispatch } = useJourney();
  const language = session.language;
  const allowed = canEnterJourneyRoute(path, session);

  if (!allowed && kind !== "home" && kind !== "info" && kind !== "locked") {
    return (
      <Frame title="Step locked" eyebrow="Journey Mode">
        <p className="text-foreground/70">
          This page opens only after the earlier responsible step is complete.
        </p>
        <LinkButton to={getNextJourneyPath(session)}>Return to current step</LinkButton>
      </Frame>
    );
  }

  if (kind === "home") {
    return (
      <Frame title={journeyCopy.title[language]} eyebrow="Public prototype">
        <p className="text-foreground/70">{journeyCopy.boundary[language]}</p>
        <LinkButton to={getNextJourneyPath(session)}>Begin first slice</LinkButton>
        <div className="border-t border-white/10 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/45">
            Where this fits · Journey
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground/60">
            This browser-local prototype follows the public truth, Amanah, learning, and reading
            layers. No account or backend system is created here.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="text-[var(--gold)] hover:text-foreground" href="/status">
              Verify status
            </a>
            <a className="text-[var(--gold)] hover:text-foreground" href="/soul">
              Visit Soul
            </a>
            <a className="text-[var(--gold)] hover:text-foreground" href="/book">
              Read the working book preview
            </a>
          </div>
        </div>
      </Frame>
    );
  }

  if (kind === "start") {
    return (
      <ActionFrame
        title="Prototype boundary"
        body="This is local-first, private, and non-diagnostic. Continue only if you understand this is a learning prototype."
        event={{ type: "BOUNDARY_ACCEPTED" }}
        next="/journey/preferences"
        actionLabel="I understand"
      />
    );
  }

  if (kind === "preferences") {
    return <PreferencesScreen />;
  }

  if (kind === "orientation") {
    return (
      <ActionFrame
        title={journeyCopy.orientationTitle[language]}
        body={journeyCopy.orientationBody[language]}
        event={{ type: "ORIENTATION_COMPLETED" }}
        next="/journey/quest/KBA-LQ-001"
        actionLabel={journeyCopy.orientationCta[language]}
      />
    );
  }

  if (kind === "quest") {
    return (
      <ActionFrame
        title={firstSliceQuest.title[language]}
        body={firstSliceQuest.prompt[language]}
        event={{ type: "QUEST_COMPLETED", questId: "KBA-LQ-001" }}
        next="/journey/reflection"
        actionLabel="I have considered this"
      />
    );
  }

  if (kind === "reflection") {
    return <ReflectionScreen />;
  }

  if (kind === "review") {
    return (
      <Frame title="Internal checkpoint" eyebrow="First slice complete">
        <p className="text-foreground/70">{journeyCopy.checkpoint[language]}</p>
        <p className="text-sm text-foreground/55">
          No milestone has been created. Responsibility review, final confirmation, milestone, and
          completion remain locked.
        </p>
      </Frame>
    );
  }

  if (kind === "info") {
    return (
      <Frame title={infoTitle(path)} eyebrow="Journey Mode">
        <p className="text-foreground/70">{infoBody(path)}</p>
      </Frame>
    );
  }

  return (
    <Frame title="Locked for this checkpoint" eyebrow="Journey Mode">
      <p className="text-foreground/70">
        This route exists as part of the contract, but functionality is intentionally not
        implemented in Phase 1.
      </p>
      <LinkButton to={getNextJourneyPath(session)}>Return to current step</LinkButton>
    </Frame>
  );
}

function PreferencesScreen() {
  const { session, dispatch } = useJourney();
  const navigate = useJourneyNavigate();
  const [draftLanguage, setDraftLanguage] = useState<JourneyLanguage>(session.language);
  const [draftStorageMode, setDraftStorageMode] = useState<JourneyStorageMode>(session.storageMode);

  const save = (event: JourneyEvent) => {
    dispatch(event);
    navigate("/journey/orientation");
  };

  return (
    <Frame title="Preferences" eyebrow="Private local settings">
      <p className="text-foreground/70">
        Choose the language and storage mode for this prototype. Progress-only storage never keeps
        private reflection text.
      </p>
      <div className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Journey language">
          <PreferenceOption
            selected={draftLanguage === "en"}
            title="English"
            description="Use English for the first-slice Journey screens."
            onSelect={() => setDraftLanguage("en")}
          />
          <PreferenceOption
            selected={draftLanguage === "bn"}
            title="বাংলা"
            description="প্রথম স্লাইসের যাত্রা স্ক্রিনে বাংলা ব্যবহার করুন।"
            onSelect={() => setDraftLanguage("bn")}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Journey storage mode">
          <PreferenceOption
            selected={draftStorageMode === "session_only"}
            title="Session only"
            description="Do not keep Journey progress after this browser session."
            onSelect={() => setDraftStorageMode("session_only")}
          />
          <PreferenceOption
            selected={draftStorageMode === "progress_only"}
            title="Progress only"
            description="Keep progress in this browser, but never private reflection text."
            onSelect={() => setDraftStorageMode("progress_only")}
          />
          <PreferenceOption
            selected={draftStorageMode === "progress_and_reflection"}
            title="Progress and reflection"
            description="Keep progress and optional reflection text in this browser."
            onSelect={() => setDraftStorageMode("progress_and_reflection")}
          />
        </div>
      </div>
      <p className="rounded-2xl border-hairline bg-background/50 px-4 py-3 text-sm text-foreground/65">
        Persistent modes use this browser's local storage. On a shared device, another person using
        the same browser profile may see saved Journey progress, and reflection text is kept only if
        you choose progress and reflection.
      </p>
      <button
        className="inline-flex w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        onClick={() =>
          save({
            type: "PREFERENCES_SAVED",
            language: draftLanguage,
            storageMode: draftStorageMode,
          })
        }
      >
        Continue
      </button>
    </Frame>
  );
}

function PreferenceOption({
  selected,
  title,
  description,
  onSelect,
}: {
  selected: boolean;
  title: string;
  description: string;
  onSelect: () => void;
}) {
  return (
    <button
      aria-pressed={selected}
      className={cn(
        "rounded-2xl border-hairline bg-glass px-4 py-3 text-left text-sm transition",
        selected &&
          "border-[var(--gold)] bg-primary/10 text-foreground shadow-[0_0_0_1px_var(--gold)]",
      )}
      onClick={onSelect}
      type="button"
    >
      <span className="flex items-center justify-between gap-3 font-semibold">
        {title}
        {selected ? <span className="text-xs uppercase text-[var(--gold)]">Selected</span> : null}
      </span>
      <span className="mt-2 block text-foreground/65">{description}</span>
    </button>
  );
}

function ReflectionScreen() {
  const { dispatch } = useJourney();
  const navigate = useJourneyNavigate();
  const [text, setText] = useState("");

  const resolve = (resolution: ReflectionResolution) => {
    dispatch({ type: "REFLECTION_RESOLVED", resolution, text });
    navigate("/journey/review");
  };

  return (
    <Frame title="Private reflection resolution" eyebrow="Explicit choice required">
      <p className="text-foreground/70">
        Written text is optional. Completion comes from one explicit resolution, not from text
        length or truthiness.
      </p>
      <textarea
        aria-label="Optional private reflection"
        className="min-h-32 w-full rounded-2xl border-hairline bg-background/60 p-4 text-sm text-foreground"
        placeholder="Optional private note. It is not required."
        id="journey-reflection-text"
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <div className="grid gap-3 sm:grid-cols-3">
        <button
          className="rounded-full bg-primary px-4 py-3 text-sm font-semibold"
          onClick={() => resolve("written")}
        >
          Written
        </button>
        <button
          className="rounded-full border-hairline bg-glass px-4 py-3 text-sm"
          onClick={() => resolve("considered_privately")}
        >
          Considered privately
        </button>
        <button
          className="rounded-full border-hairline bg-glass px-4 py-3 text-sm"
          onClick={() => resolve("not_provided")}
        >
          Not provided
        </button>
      </div>
    </Frame>
  );
}

function ActionFrame({
  title,
  body,
  event,
  next,
  actionLabel,
}: {
  title: string;
  body: string;
  event: JourneyEvent;
  next: JourneyPath;
  actionLabel: string;
}) {
  const { dispatch } = useJourney();
  const navigate = useJourneyNavigate();

  return (
    <Frame title={title} eyebrow="Knowledge Before Action">
      <p className="text-foreground/70">{body}</p>
      <button
        className="inline-flex w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        onClick={() => {
          dispatch(event);
          navigate(next);
        }}
      >
        {actionLabel}
      </button>
    </Frame>
  );
}

function useJourneyNavigate() {
  const navigate = useNavigate();

  return (to: JourneyPath) => {
    if (to === "/journey/quest/KBA-LQ-001") {
      void navigate({
        to: "/journey/quest/$questId",
        params: { questId: "KBA-LQ-001" },
      });
      return;
    }

    void navigate({ to });
  };
}

function Frame({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto flex min-h-[60svh] max-w-3xl flex-col justify-center gap-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">{eyebrow}</p>
        <h1 className="font-serif text-4xl text-foreground sm:text-6xl">{title}</h1>
        {children}
        <JourneyClearControl />
      </div>
    </section>
  );
}

function JourneyClearControl() {
  const { clearJourney } = useJourney();
  const navigate = useJourneyNavigate();

  return (
    <div className="border-t border-border/50 pt-5">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="text-left text-sm font-medium text-foreground/55 underline-offset-4 transition hover:text-foreground hover:underline"
            type="button"
          >
            Clear Journey data
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear local Journey data?</AlertDialogTitle>
            <AlertDialogDescription>
              This clears Journey progress from this browser profile. It may also clear optional
              reflection text if you chose to save reflection locally. There is no Journey cloud
              data to delete because Journey currently does not save to cloud.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Journey data</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                clearJourney();
                navigate("/journey/start");
              }}
            >
              Clear and restart
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function LinkButton({ to, children }: { to: JourneyPath; children: React.ReactNode }) {
  return (
    <a
      href={to}
      className="inline-flex w-fit rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
    >
      {children}
    </a>
  );
}

function infoTitle(path: JourneyPath): string {
  if (path === "/journey/privacy") return "Privacy";
  if (path === "/journey/accessibility") return "Accessibility";
  return "Safety";
}

function infoBody(path: JourneyPath): string {
  if (path === "/journey/privacy") {
    return "Journey Mode stores progress locally only. Private reflection text is not persisted in progress-only mode.";
  }
  if (path === "/journey/accessibility") {
    return "The prototype supports keyboard navigation, visible focus, semantic structure, and no time limits.";
  }
  return "This prototype is educational, not diagnostic or emergency support.";
}
