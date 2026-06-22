import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { journeyCopy, firstSliceQuest } from "../content/first-slice";
import type { JourneyEvent, JourneyPath, ReflectionResolution } from "../domain/types";
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
        title="Orientation"
        body="Move slowly. Learn first, then reflect privately or in writing. No written text is required."
        event={{ type: "ORIENTATION_COMPLETED" }}
        next="/journey/quest/KBA-LQ-001"
        actionLabel="Continue to quest"
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
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          className="rounded-2xl border-hairline bg-glass px-4 py-3 text-left text-sm"
          onClick={() =>
            save({
              type: "PREFERENCES_SAVED",
              language: "en",
              storageMode: session.storageMode,
            })
          }
        >
          English
        </button>
        <button
          className="rounded-2xl border-hairline bg-glass px-4 py-3 text-left text-sm"
          onClick={() =>
            save({
              type: "PREFERENCES_SAVED",
              language: "bn",
              storageMode: session.storageMode,
            })
          }
        >
          বাংলা
        </button>
        <button
          className="rounded-2xl border-hairline bg-glass px-4 py-3 text-left text-sm"
          onClick={() =>
            save({
              type: "PREFERENCES_SAVED",
              language: session.language,
              storageMode: "session_only",
            })
          }
        >
          Session only
        </button>
        <button
          className="rounded-2xl border-hairline bg-glass px-4 py-3 text-left text-sm"
          onClick={() =>
            save({
              type: "PREFERENCES_SAVED",
              language: session.language,
              storageMode: "progress_only",
            })
          }
        >
          Progress only
        </button>
        <button
          className="rounded-2xl border-hairline bg-glass px-4 py-3 text-left text-sm sm:col-span-2"
          onClick={() =>
            save({
              type: "PREFERENCES_SAVED",
              language: session.language,
              storageMode: "progress_and_reflection",
            })
          }
        >
          Progress and reflection
        </button>
      </div>
    </Frame>
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
      </div>
    </section>
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
