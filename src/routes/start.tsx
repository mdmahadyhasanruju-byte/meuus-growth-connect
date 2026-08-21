import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, Compass, ShieldCheck } from "lucide-react";

import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start — meUus" },
      {
        name: "description",
        content:
          "A calm route into the existing meUus public starting points, with current boundaries kept clear.",
      },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/start" }],
  }),
  component: StartPage,
});

const STARTING_POINTS = [
  {
    title: "Start with one honest word",
    body: "Use the existing public One Word Start explanation when a small, manual beginning is enough.",
    to: "/one-word-start",
    label: "Open One Word Start",
  },
  {
    title: "Explore the Journey prototype",
    body: "The current Journey is a bounded, browser-local learning prototype. It does not create an account or cloud profile.",
    to: "/journey",
    label: "Open Journey",
  },
  {
    title: "Check current status first",
    body: "Read what is public, prototype, planned, and not yet available before relying on any future direction.",
    to: "/status",
    label: "View current status",
  },
] as const;

function StartPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[68svh] flex-col items-center justify-center px-4 pb-16 pt-32 text-center sm:px-6">
        <ParticleCanvas density={42} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={720} />
        <div className="relative z-10 max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" aria-hidden="true" />
            Start here
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Begin with what is <span className="italic text-gradient-violet">real now.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            meUus is growing in careful stages. This page points to the existing public paths; it
            does not create a new profile, service, assessment, or promise.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {STARTING_POINTS.map((point, index) => (
            <article
              key={point.to}
              className="flex flex-col rounded-3xl border-hairline bg-card/45 p-7"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
                0{index + 1}
              </span>
              <h2 className="mt-5 font-serif text-3xl text-foreground">{point.title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-foreground/70">{point.body}</p>
              <Link
                to={point.to}
                className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--gold)] transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {point.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/45 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[var(--gold)]" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Current boundary
            </p>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Begin carefully, not with a claim of certainty.
          </h2>
          <p className="mt-5 leading-relaxed text-foreground/70">
            Public information and the browser-local Journey are available. Accounts, cloud storage,
            AI runtime, DLAS runtime, payments, rewards, subscriptions, and automated decisions are
            not verified or live.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/safety"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
            >
              Read safety boundaries <Compass className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/privacy"
              className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
            >
              Read privacy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
