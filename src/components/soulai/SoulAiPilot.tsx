import { useCallback, useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  CircleDot,
  Copy,
  Loader2,
  LogOut,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "@n8n/chat/style.css";
import "./soulai-n8n-chat.css";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  buildSoulAiChatOptions,
  isOfficialChatFailureText,
  type SoulAiChatApplication,
  type SoulAiChatFactory,
} from "@/soulai/client";
import { getSoulAiWebhookConfig, type SoulAiWebhookConfig } from "@/soulai/config";
import { publicSoulAiIdentifiersAreApproved } from "@/soulai/public-identity";
import {
  SOULAI_ACTIVE_CONSENT_BANGLA,
  SOULAI_ACTIVE_CONSENT_ENGLISH,
  SOULAI_ADULT_CONFIRMATION_BANGLA,
  SOULAI_ADULT_CONFIRMATION_ENGLISH,
  SOULAI_ADULT_NOTICE_BANGLA,
  SOULAI_ADULT_NOTICE_ENGLISH,
  SOULAI_AUTONOMY_BANGLA,
  SOULAI_CLOSING_BANGLA,
  SOULAI_CONSENT_PARAGRAPHS_BANGLA,
  SOULAI_CONSENT_PARAGRAPHS_ENGLISH,
  SOULAI_DELETION_CHANNEL_OPERATIONAL,
  SOULAI_EMERGENCY_LIMITATION_BANGLA,
  SOULAI_EMERGENCY_LIMITATION_ENGLISH,
  SOULAI_MESSAGE_LIMIT_BANGLA,
  SOULAI_MESSAGE_LIMIT_ENGLISH,
  SOULAI_NEXT_STEP_BANGLA,
  SOULAI_PRIVACY_WARNING_BANGLA,
  SOULAI_PRIVACY_WARNING_ENGLISH,
  SOULAI_PROPOSED_DELETION_CHANNEL,
  SOULAI_SESSION_REFERENCE_HELP,
  SOULAI_SESSION_REFERENCE_LABEL,
} from "@/soulai/public-policy";
import {
  canSendSoulAiMessage,
  createSoulAiBrowserSession,
  readSoulAiBrowserSession,
  registerSoulAiUserMessage,
  replaceSoulAiBrowserSession,
  SOULAI_AUTONOMY_MESSAGE,
  SOULAI_LIMIT_MESSAGE,
  SOULAI_MAX_USER_MESSAGES,
  SOULAI_ONE_POSSIBLE_NEXT_STEP,
  type SoulAiBrowserSession,
  writeSoulAiBrowserSession,
} from "@/soulai/session";

const SAFE_UNAVAILABLE_COPY = "Reflection is resting right now. Please try again shortly.";
const REQUEST_TIMEOUT_MS = 30_000;

type ConnectionState =
  | "idle"
  | "loading"
  | "connecting"
  | "ready"
  | "waiting"
  | "timeout"
  | "error"
  | "limit";

type ReferenceCopyStatus = "idle" | "copied" | "failed";

interface SoulAiPilotProps {
  webhookConfig?: SoulAiWebhookConfig;
  chatFactory?: SoulAiChatFactory;
}

export function SafeMessage({ text }: { text: string }) {
  return <p className="whitespace-pre-wrap break-words text-sm leading-7">{text}</p>;
}

export function SoulAiPilot({ chatFactory, webhookConfig }: SoulAiPilotProps) {
  const consentId = useId();
  const adultId = useId();
  const chatHeadingRef = useRef<HTMLHeadingElement>(null);
  const chatTargetRef = useRef<HTMLDivElement>(null);
  const chatApplicationRef = useRef<SoulAiChatApplication | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const sessionRef = useRef<SoulAiBrowserSession>(createSoulAiBrowserSession());
  const pendingMessageRef = useRef<string | null>(null);
  const lastFailedMessageRef = useRef<string | null>(null);
  const retryArmedRef = useRef(false);

  const configuration = useMemo(() => webhookConfig ?? getSoulAiWebhookConfig(), [webhookConfig]);
  const [adultConfirmed, setAdultConfirmed] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [active, setActive] = useState(false);
  const [session, setSession] = useState<SoulAiBrowserSession>(() => sessionRef.current);
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle");
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [hasSubmittedInView, setHasSubmittedInView] = useState(false);
  const [limitResponseReceived, setLimitResponseReceived] = useState(false);
  const [retryUsed, setRetryUsed] = useState(false);
  const [retryPrepared, setRetryPrepared] = useState(false);
  const [chatGeneration, setChatGeneration] = useState(0);
  const [exitReference, setExitReference] = useState<string | null>(null);
  const [referenceCopyStatus, setReferenceCopyStatus] = useState<ReferenceCopyStatus>("idle");

  useEffect(() => {
    try {
      const restored = readSoulAiBrowserSession(window.sessionStorage);
      sessionRef.current = restored;
      setSession(restored);
    } catch {
      const replacement = createSoulAiBrowserSession();
      sessionRef.current = replacement;
      setSession(replacement);
    }
  }, []);

  const publicIdentifiersApproved = publicSoulAiIdentifiersAreApproved();
  const isLocalMock =
    configuration.status === "ready" && configuration.endpointKind === "local-mock";
  const configurationReady =
    configuration.status === "ready" && (isLocalMock || publicIdentifiersApproved);
  const consentComplete = adultConfirmed && consentGiven;
  const limitReached = !canSendSoulAiMessage(session.userMessageCount);
  const beginDisabled = !consentComplete || !configurationReady || limitReached;

  const clearRequestTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const beforeMessageSent = useCallback(
    (rawMessage: string) => {
      const message = rawMessage.trim();
      if (!message) return;

      const isPreparedRetry = retryArmedRef.current && lastFailedMessageRef.current === message;

      if (isPreparedRetry) {
        retryArmedRef.current = false;
        setRetryPrepared(false);
      } else {
        retryArmedRef.current = false;
        setRetryPrepared(false);
        const nextSession = registerSoulAiUserMessage(sessionRef.current);
        if (!nextSession) {
          throw new Error("The browser-session message limit has been reached.");
        }

        sessionRef.current = nextSession;
        setSession(nextSession);
        setHasSubmittedInView(true);

        try {
          writeSoulAiBrowserSession(window.sessionStorage, nextSession);
        } catch {
          // The transparent limit still works in memory if sessionStorage is unavailable.
        }
      }

      pendingMessageRef.current = message;
      lastFailedMessageRef.current = null;
      setConnectionError(null);
      setConnectionState("waiting");
      clearRequestTimer();
      timeoutRef.current = window.setTimeout(() => {
        lastFailedMessageRef.current = pendingMessageRef.current;
        setConnectionError(
          "The response has taken more than 30 seconds. The original request may still complete.",
        );
        setConnectionState("timeout");
      }, REQUEST_TIMEOUT_MS);
    },
    [clearRequestTimer],
  );

  const afterMessageSent = useCallback(() => {
    clearRequestTimer();
    pendingMessageRef.current = null;
    lastFailedMessageRef.current = null;
    setConnectionError(null);

    if (sessionRef.current.userMessageCount >= SOULAI_MAX_USER_MESSAGES) {
      setLimitResponseReceived(true);
      setConnectionState("limit");
    } else {
      setConnectionState("ready");
    }
  }, [clearRequestTimer]);

  useEffect(() => {
    if (!active || !configurationReady || configuration.status !== "ready") return;
    const target = chatTargetRef.current;
    if (!target) return;
    const chatTarget: HTMLDivElement = target;
    const webhookUrl = configuration.url;

    let cancelled = false;
    let observer: MutationObserver | null = null;

    async function initializeOfficialChat() {
      setConnectionState("loading");
      const factory = chatFactory ?? (await import("@n8n/chat")).createChat;
      if (cancelled) return;

      setConnectionState("connecting");
      const application = factory(
        buildSoulAiChatOptions({
          target: chatTarget,
          webhookUrl,
          sessionId: sessionRef.current.sessionId,
          beforeMessageSent,
          afterMessageSent,
        }),
      );
      chatApplicationRef.current = application;

      observer = new MutationObserver(() => {
        const botMessages = chatTarget.querySelectorAll<HTMLElement>(".chat-message-from-bot");
        for (const botMessage of botMessages) {
          if (!isOfficialChatFailureText(botMessage.textContent ?? "")) continue;
          botMessage.textContent = SAFE_UNAVAILABLE_COPY;
          botMessage.setAttribute("role", "alert");
          clearRequestTimer();
          lastFailedMessageRef.current = pendingMessageRef.current;
          setConnectionError(SAFE_UNAVAILABLE_COPY);
          setConnectionState("error");
        }
      });
      observer.observe(chatTarget, { childList: true, subtree: true, characterData: true });

      const textarea = chatTarget.querySelector<HTMLTextAreaElement>("textarea");
      textarea?.setAttribute("aria-label", "Your guided-reflection message");
      textarea?.focus();
      setConnectionState("ready");
    }

    void initializeOfficialChat().catch(() => {
      if (cancelled) return;
      setConnectionError(SAFE_UNAVAILABLE_COPY);
      setConnectionState("error");
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      chatApplicationRef.current?.unmount();
      chatApplicationRef.current = null;
      clearRequestTimer();
      chatTarget.replaceChildren();
    };
  }, [
    active,
    afterMessageSent,
    beforeMessageSent,
    chatFactory,
    chatGeneration,
    clearRequestTimer,
    configuration,
    configurationReady,
  ]);

  useEffect(
    () => () => {
      clearRequestTimer();
    },
    [clearRequestTimer],
  );

  function handleBegin() {
    if (beginDisabled) return;
    setExitReference(null);
    setReferenceCopyStatus("idle");
    setConnectionError(null);
    setConnectionState("idle");
    setActive(true);
    window.requestAnimationFrame(() => chatHeadingRef.current?.focus());
  }

  function handleExitAndReset() {
    const closedSessionReference = sessionRef.current.sessionId;
    clearRequestTimer();
    let replacement = createSoulAiBrowserSession();
    try {
      replacement = replaceSoulAiBrowserSession(window.sessionStorage, window.localStorage);
    } catch {
      // A new in-memory identifier still prevents reuse in this open page.
    }

    sessionRef.current = replacement;
    setSession(replacement);
    pendingMessageRef.current = null;
    lastFailedMessageRef.current = null;
    retryArmedRef.current = false;
    setRetryUsed(false);
    setRetryPrepared(false);
    setLimitResponseReceived(false);
    setHasSubmittedInView(false);
    setConnectionError(null);
    setConnectionState("idle");
    setActive(false);
    setExitReference(closedSessionReference);
    setReferenceCopyStatus("idle");
    setAdultConfirmed(false);
    setConsentGiven(false);
    setChatGeneration((value) => value + 1);
  }

  async function handleCopySessionReference(reference: string) {
    let clipboardTimeoutId: number | null = null;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      const clipboardTimeout = new Promise<never>((_, reject) => {
        clipboardTimeoutId = window.setTimeout(
          () => reject(new Error("Clipboard timed out")),
          2_000,
        );
      });
      await Promise.race([navigator.clipboard.writeText(reference), clipboardTimeout]);
      setReferenceCopyStatus("copied");
    } catch {
      setReferenceCopyStatus("failed");
    } finally {
      if (clipboardTimeoutId !== null) window.clearTimeout(clipboardTimeoutId);
    }
  }

  function handlePrepareRetry() {
    if (retryUsed || !lastFailedMessageRef.current) return;
    retryArmedRef.current = true;
    setRetryUsed(true);
    setRetryPrepared(true);
    setConnectionError(null);
    setConnectionState("idle");
    setChatGeneration((value) => value + 1);
  }

  const chatLocked = limitReached || connectionState === "limit";

  return (
    <div className="relative isolate overflow-hidden">
      <section className="relative px-4 pb-14 pt-32 sm:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl text-center motion-reduce:animate-none animate-fade-up">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-100">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Experimental · Free Pilot · 18+ · Maximum 5 Messages
          </div>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
            Feel meUus
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            meUusSoulAI —{" "}
            <span className="italic text-gradient-violet">Guided Reflection Pilot</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-foreground/60">
            A limited experimental preview of future meYoo Reflection Mode.
          </p>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border-hairline bg-card/50 p-7 text-left sm:p-9">
            <p className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Before anything else, let me ask you one real question: How are you—really?
            </p>
            <p className="mt-5 text-lg leading-8 text-foreground/75">
              You do not need to explain your entire life. Begin with one honest sentence.
            </p>
            <div lang="bn" className="mt-7 border-t border-foreground/10 pt-7">
              <p className="font-serif text-2xl leading-relaxed text-foreground">
                সবকিছুর আগে একটি সত্য প্রশ্ন: আপনি আসলে কেমন আছেন?
              </p>
              <p className="mt-3 text-base leading-8 text-foreground/72">
                আপনাকে পুরো জীবন একবারে বলতে হবে না। একটি সত্য বাক্য দিয়ে শুরু করুন।
              </p>
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-foreground/72">
            This experimental reflection pilot listens, asks a few structured questions and may help
            you identify one possible next step.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <BoundaryCard title="What this pilot does" positive />
          <BoundaryCard title="What this pilot does not do" />
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-4">
          <Notice tone="warning" title="Privacy warning">
            <p>{SOULAI_PRIVACY_WARNING_ENGLISH}</p>
            <p lang="bn" className="mt-3">
              {SOULAI_PRIVACY_WARNING_BANGLA}
            </p>
          </Notice>
          <Notice tone="danger" title="Emergency limitation">
            <p>{SOULAI_EMERGENCY_LIMITATION_ENGLISH}</p>
            <p lang="bn" className="mt-3">
              {SOULAI_EMERGENCY_LIMITATION_BANGLA}
            </p>
          </Notice>
          <Notice tone="neutral" title="Adult pilot">
            <p>{SOULAI_ADULT_NOTICE_ENGLISH}</p>
            <p lang="bn" className="mt-3">
              {SOULAI_ADULT_NOTICE_BANGLA}
            </p>
          </Notice>
        </div>
      </section>

      <section id="pilot" className="scroll-mt-24 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border-hairline bg-card/55 p-6 shadow-glow-violet sm:p-9">
          {exitReference ? (
            <ExitSummary
              copyStatus={referenceCopyStatus}
              onCopy={() => void handleCopySessionReference(exitReference)}
              onContinue={() => {
                setExitReference(null);
                setReferenceCopyStatus("idle");
              }}
              reference={exitReference}
            />
          ) : !active ? (
            <ConsentGate
              adultConfirmed={adultConfirmed}
              adultId={adultId}
              configuration={configuration}
              configurationReady={configurationReady}
              consentComplete={consentComplete}
              consentGiven={consentGiven}
              consentId={consentId}
              isLocalMock={isLocalMock}
              limitReached={limitReached}
              onAdultChange={setAdultConfirmed}
              onBegin={handleBegin}
              onConsentChange={setConsentGiven}
            />
          ) : (
            <div aria-labelledby="soulai-chat-heading">
              <div className="flex flex-col gap-4 border-b border-foreground/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                    Feel meUus · active conversation
                  </p>
                  <h2
                    id="soulai-chat-heading"
                    ref={chatHeadingRef}
                    tabIndex={-1}
                    className="mt-2 font-serif text-3xl text-foreground outline-none sm:text-4xl"
                  >
                    Guided reflection
                  </h2>
                  <p className="mt-2 text-sm text-foreground/60">
                    Browser-side UI limit: {session.userMessageCount} of {SOULAI_MAX_USER_MESSAGES}{" "}
                    user messages used. This is not secure server-side rate limiting.
                  </p>
                </div>
                <Button type="button" variant="outline" onClick={handleExitAndReset}>
                  <LogOut aria-hidden="true" /> Exit / reset
                </Button>
              </div>

              <SessionReferenceCard
                className="mt-6"
                copyStatus={referenceCopyStatus}
                onCopy={() => void handleCopySessionReference(session.sessionId)}
                reference={session.sessionId}
              />

              <div className="mt-6" aria-live="polite">
                {connectionState === "loading" || connectionState === "connecting" ? (
                  <ConnectionNotice text="Preparing the private reflection space…" />
                ) : null}
                {connectionState === "waiting" ? (
                  <ConnectionNotice text="Waiting for the guided-reflection response…" />
                ) : null}
                {connectionState === "timeout" || connectionState === "error" ? (
                  <div
                    className="mb-4 rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4"
                    role="alert"
                  >
                    <p className="font-semibold text-amber-50">{SAFE_UNAVAILABLE_COPY}</p>
                    {connectionError && connectionError !== SAFE_UNAVAILABLE_COPY ? (
                      <p className="mt-2 text-sm leading-6 text-amber-50/75">{connectionError}</p>
                    ) : null}
                    <p className="mt-2 text-sm leading-6 text-amber-50/75">
                      A retry may create a duplicate record if the first request reached the service
                      but its response was lost. Nothing will be resent automatically.
                    </p>
                    {!retryUsed && lastFailedMessageRef.current ? (
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-3"
                        onClick={handlePrepareRetry}
                      >
                        <RefreshCcw aria-hidden="true" /> Prepare one manual retry
                      </Button>
                    ) : null}
                  </div>
                ) : null}
                {retryPrepared ? (
                  <div
                    className="mb-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4"
                    role="status"
                  >
                    <p className="text-sm leading-6 text-cyan-50">
                      One retry is ready. Re-enter the same message once; it will not use another
                      browser-side UI message. A different message will count as new.
                    </p>
                  </div>
                ) : null}
              </div>

              <div
                className={`soulai-official-chat ${chatLocked ? "soulai-chat-locked" : ""}`}
                aria-label="meUusSoulAI guided-reflection conversation"
                aria-busy={connectionState === "waiting"}
                aria-disabled={chatLocked}
              >
                <div ref={chatTargetRef} className="min-h-[31rem]" />
              </div>

              {limitReached && limitResponseReceived ? (
                <div
                  className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5"
                  role="status"
                >
                  <p className="text-sm leading-7 text-emerald-50">{SOULAI_LIMIT_MESSAGE}</p>
                  <p lang="bn" className="mt-3 text-sm leading-7 text-emerald-50">
                    {SOULAI_CLOSING_BANGLA}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-emerald-50">
                    {SOULAI_ONE_POSSIBLE_NEXT_STEP}
                  </p>
                  <p lang="bn" className="mt-3 text-sm leading-7 text-emerald-50">
                    {SOULAI_NEXT_STEP_BANGLA}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-emerald-50">
                    {SOULAI_AUTONOMY_MESSAGE}
                  </p>
                  <p lang="bn" className="mt-3 text-sm font-semibold leading-7 text-emerald-50">
                    {SOULAI_AUTONOMY_BANGLA}
                  </p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>

      {hasSubmittedInView ? <LocalFeedback /> : null}
    </div>
  );
}

interface SessionReferenceCardProps {
  className?: string;
  copyStatus: ReferenceCopyStatus;
  onCopy: () => void;
  reference: string;
}

function SessionReferenceCard({
  className = "",
  copyStatus,
  onCopy,
  reference,
}: SessionReferenceCardProps) {
  return (
    <aside
      className={`rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5 ${className}`}
      aria-label={SOULAI_SESSION_REFERENCE_LABEL}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
        {SOULAI_SESSION_REFERENCE_LABEL}
      </p>
      <p className="mt-2 text-sm leading-6 text-cyan-50/80">{SOULAI_SESSION_REFERENCE_HELP}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <code className="min-w-0 flex-1 overflow-x-auto rounded-xl border border-cyan-100/15 bg-background/55 px-4 py-3 text-xs text-cyan-50">
          {reference}
        </code>
        <Button type="button" variant="outline" onClick={onCopy}>
          {copyStatus === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copyStatus === "copied" ? "Reference copied" : "Copy Session Reference"}
        </Button>
      </div>
      <div className="mt-3 text-xs leading-5 text-cyan-50/65" aria-live="polite">
        {copyStatus === "failed" ? (
          <p>Copy was unavailable. Select and copy the reference manually.</p>
        ) : null}
        {copyStatus === "copied" ? <p>The pseudonymous reference was copied.</p> : null}
      </div>
      <p className="mt-3 text-xs leading-5 text-cyan-50/65">
        Keep it with the approximate submission date and time. A request reason is optional.
      </p>
      {!SOULAI_DELETION_CHANNEL_OPERATIONAL ? (
        <p className="mt-3 text-xs leading-5 text-amber-100/80">
          The conditionally approved channel {SOULAI_PROPOSED_DELETION_CHANNEL} is not operational
          yet. Do not treat it as available until mailbox, access-control, send/receive, and public
          verification pass.
        </p>
      ) : null}
    </aside>
  );
}

interface ExitSummaryProps {
  copyStatus: ReferenceCopyStatus;
  onContinue: () => void;
  onCopy: () => void;
  reference: string;
}

function ExitSummary({ copyStatus, onContinue, onCopy, reference }: ExitSummaryProps) {
  return (
    <div aria-labelledby="soulai-exit-heading">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
        Reflection closed
      </p>
      <h2 id="soulai-exit-heading" className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
        Your previous conversation is no longer visible in this page.
      </h2>
      <p className="mt-4 text-sm leading-7 text-foreground/70">
        A new pseudonymous session has been prepared, but the chat will remain closed until you
        return to the consent gate and actively confirm both choices again.
      </p>
      <SessionReferenceCard
        className="mt-6"
        copyStatus={copyStatus}
        onCopy={onCopy}
        reference={reference}
      />
      <Button type="button" className="mt-6" onClick={onContinue}>
        Return to the consent gate
      </Button>
    </div>
  );
}

function BoundaryCard({ positive, title }: { positive?: boolean; title: string }) {
  const items = positive
    ? [
        "Offers a short, consent-based reflection conversation.",
        "Listens to text you voluntarily submit after consent.",
        "Asks a few structured questions and may identify one possible next step.",
        "Keeps you as the final authority over any suggestion.",
      ]
    : [
        "It is not diagnosis, therapy, medical advice, legal advice, or emergency support.",
        "It is not crisis monitoring and does not guarantee human review.",
        "It is not a validated DLAS assessment.",
        "It is not the completed meYoo or meUus platform.",
      ];
  const Icon = positive ? CheckCircle2 : CircleDot;

  return (
    <article className="rounded-3xl border-hairline bg-card/45 p-7">
      <h2 className="font-serif text-3xl text-foreground">{title}</h2>
      <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/72">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Icon
              className={`mt-1 h-4 w-4 shrink-0 ${positive ? "text-emerald-300" : "text-[var(--gold)]"}`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

interface ConsentGateProps {
  adultConfirmed: boolean;
  adultId: string;
  configuration: SoulAiWebhookConfig;
  configurationReady: boolean;
  consentComplete: boolean;
  consentGiven: boolean;
  consentId: string;
  isLocalMock: boolean;
  limitReached: boolean;
  onAdultChange: (checked: boolean) => void;
  onBegin: () => void;
  onConsentChange: (checked: boolean) => void;
}

function ConsentGate({
  adultConfirmed,
  adultId,
  configuration,
  configurationReady,
  consentComplete,
  consentGiven,
  consentId,
  isLocalMock,
  limitReached,
  onAdultChange,
  onBegin,
  onConsentChange,
}: ConsentGateProps) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-violet-200" aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
            Consent required
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            The reflection stays closed until both choices are active.
          </h2>
        </div>
      </div>

      <div className="mt-7 rounded-2xl border border-foreground/10 bg-background/45 p-5 text-sm leading-7 text-foreground/72">
        <div>
          {SOULAI_CONSENT_PARAGRAPHS_ENGLISH.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
              {paragraph}
            </p>
          ))}
        </div>
        <div lang="bn" className="mt-6 border-t border-foreground/10 pt-6">
          {SOULAI_CONSENT_PARAGRAPHS_BANGLA.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <label
          htmlFor={adultId}
          className="flex cursor-pointer items-start gap-3 rounded-2xl border border-foreground/10 p-4"
        >
          <Checkbox
            id={adultId}
            checked={adultConfirmed}
            onCheckedChange={(checked) => onAdultChange(checked === true)}
            className="mt-0.5"
          />
          <span className="text-sm leading-6 text-foreground/78">
            <span className="block">{SOULAI_ADULT_CONFIRMATION_ENGLISH}</span>
            <span lang="bn" className="mt-2 block text-foreground/65">
              {SOULAI_ADULT_CONFIRMATION_BANGLA}
            </span>
          </span>
        </label>
        <label
          htmlFor={consentId}
          className="flex cursor-pointer items-start gap-3 rounded-2xl border border-foreground/10 p-4"
        >
          <Checkbox
            id={consentId}
            checked={consentGiven}
            onCheckedChange={(checked) => onConsentChange(checked === true)}
            className="mt-0.5"
          />
          <span className="text-sm leading-6 text-foreground/78">
            <span className="block">{SOULAI_ACTIVE_CONSENT_ENGLISH}</span>
            <span lang="bn" className="mt-2 block text-foreground/65">
              {SOULAI_ACTIVE_CONSENT_BANGLA}
            </span>
          </span>
        </label>
      </div>

      {!configurationReady ? (
        <div
          className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4"
          role="alert"
        >
          <p className="font-semibold text-amber-50">{SAFE_UNAVAILABLE_COPY}</p>
          <p className="mt-1 text-sm leading-6 text-amber-50/75">
            No connection has been attempted. The public webhook, approved version identifiers, and
            publication gate must all be ready before public use.
          </p>
          {configuration.status === "invalid" ? (
            <p className="mt-1 text-sm leading-6 text-amber-50/75">
              The local configuration is invalid; internal endpoint details are intentionally
              hidden.
            </p>
          ) : null}
        </div>
      ) : null}

      {isLocalMock ? (
        <div
          className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4"
          role="status"
        >
          <p className="text-sm leading-6 text-cyan-50">
            Harmless local mock mode is configured. This is test evidence, not proof of the public
            production endpoint.
          </p>
        </div>
      ) : null}

      {limitReached ? (
        <div
          className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4"
          role="status"
        >
          <p className="text-sm leading-7 text-emerald-50">{SOULAI_LIMIT_MESSAGE}</p>
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs leading-5 text-foreground/55">
          <p>{SOULAI_MESSAGE_LIMIT_ENGLISH}</p>
          <p lang="bn" className="mt-2">
            {SOULAI_MESSAGE_LIMIT_BANGLA}
          </p>
        </div>
        <Button
          type="button"
          size="lg"
          disabled={!consentComplete || !configurationReady || limitReached}
          onClick={onBegin}
        >
          <Sparkles aria-hidden="true" /> Begin the Guided Reflection
        </Button>
      </div>
    </div>
  );
}

function ConnectionNotice({ text }: { text: string }) {
  return (
    <div
      className="mb-4 flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/45 p-4 text-sm text-foreground/65"
      role="status"
    >
      <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
      {text}
    </div>
  );
}

function Notice({
  children,
  title,
  tone,
}: {
  children: React.ReactNode;
  title: string;
  tone: "warning" | "danger" | "neutral";
}) {
  const toneClasses = {
    warning: "border-amber-300/25 bg-amber-300/[0.06] text-amber-50",
    danger: "border-rose-300/25 bg-rose-300/[0.06] text-rose-50",
    neutral: "border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-50",
  }[tone];

  return (
    <div
      className={`rounded-2xl border p-5 ${toneClasses}`}
      role={tone === "danger" ? "alert" : "note"}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-1 text-sm leading-7 opacity-80">{children}</p>
        </div>
      </div>
    </div>
  );
}

function LocalFeedback() {
  const [helpful, setHelpful] = useState("");
  const [respectful, setRespectful] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="px-4 py-16 sm:px-6" aria-labelledby="pilot-feedback-heading">
      <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/45 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
          Optional local feedback
        </p>
        <h2 id="pilot-feedback-heading" className="mt-2 font-serif text-3xl text-foreground">
          Help evaluate the experience
        </h2>
        <p className="mt-3 text-sm leading-7 text-foreground/65">
          No feedback backend is verified. This local placeholder is not transmitted or saved and
          will be lost when you leave or reload.
        </p>
        {submitted ? (
          <div
            className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4"
            role="status"
          >
            <p className="text-sm leading-7 text-emerald-50">
              Thank you. This feedback remained only in the open page.
            </p>
          </div>
        ) : (
          <form className="mt-7 space-y-7" onSubmit={handleSubmit}>
            <FeedbackRadioGroup
              legend="Was this pilot helpful?"
              name="helpful"
              options={["Yes", "Somewhat", "No"]}
              value={helpful}
              onChange={setHelpful}
            />
            <FeedbackRadioGroup
              legend="Did the experience feel respectful?"
              name="respectful"
              options={["Yes", "No"]}
              value={respectful}
              onChange={setRespectful}
            />
            <div>
              <label
                htmlFor="soulai-feedback-comment"
                className="text-sm font-semibold text-foreground/85"
              >
                One optional short comment
              </label>
              <Textarea
                id="soulai-feedback-comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                maxLength={500}
                className="mt-2 min-h-24 bg-background/55"
                placeholder="Do not include names or identifying information."
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              disabled={!helpful && !respectful && !comment.trim()}
            >
              Keep feedback locally
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function FeedbackRadioGroup({
  legend,
  name,
  onChange,
  options,
  value,
}: {
  legend: string;
  name: string;
  onChange: (value: string) => void;
  options: readonly string[];
  value: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-foreground/85">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            key={option}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground/72"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(event) => onChange(event.target.value)}
              className="h-4 w-4 accent-violet-400"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
