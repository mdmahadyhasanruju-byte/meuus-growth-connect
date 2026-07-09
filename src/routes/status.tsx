import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, CheckCircle2, CircleDot, Clock3, PauseCircle } from "lucide-react";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Current Status - meUus" },
      {
        name: "description",
        content:
          "A public status page explaining what meUus is now, what is prototype, what is in development, what is planned, and what is not yet available.",
      },
      { property: "og:title", content: "Current Status - meUus" },
      {
        property: "og:description",
        content:
          "A truthful Day One status update for the meUus website, Journey prototype, DLAS concept, nine pillars, and future platform systems.",
      },
    ],
  }),
  component: StatusPage,
});

const STATUS_ITEMS = [
  {
    label: "Live",
    icon: CheckCircle2,
    title: "Public website source",
    body: "The public /status, /join, and /journey routes are live. /join uses bounded wording, and /journey presents the available first-slice prototype.",
  },
  {
    label: "Browser-local prototype",
    icon: CircleDot,
    title: "Journey Mode first slice",
    body: "Journey Mode is available as a local-first, non-diagnostic first-slice prototype. It includes Knowledge Before Action, one quest, optional written reflection, and an internal checkpoint. Explicit preference confirmation and the local browser clear/restart control are completed and live verified. Journey data remains in the current browser.",
  },
  {
    label: "Planned",
    icon: Clock3,
    title: "DLAS",
    body: "The Deep Life Assessment System is a future assessment and guidance concept. This repository does not yet contain a DLAS engine, schema, scoring model, validation method, consent model, or Journey integration contract.",
  },
  {
    label: "In development",
    icon: CircleDot,
    title: "Nine Pillars",
    body: "The website describes nine intended pillars as an ecosystem direction and content model. The repository does not prove operating services, partners, pilots, professionals, customers, revenue, or public impact.",
  },
  {
    label: "Not verified or live",
    icon: PauseCircle,
    title: "Platform systems",
    body: "No backend, AI runtime, DLAS runtime, accounts, cloud storage, payments, rewards, or subscriptions are verified or live.",
  },
] as const;

const BOUNDARIES = [
  "21 July 2026 is a Day One continuation target, not proof that the full ecosystem is complete.",
  "The public /status, /join, and /journey routes are live. This does not verify a backend, operating program, or future platform services.",
  "Journey remains a bounded first-slice prototype even though preference confirmation and the local browser clear/restart control are completed and live verified.",
  "Internal source-of-truth and archive inventory documents exist. They preserve evidence and do not make old materials production truth.",
  "DLAS must stay non-operational in public wording until it has a governed specification, evidence standard, consent model, and implementation.",
  "Founding-role and intake language should be treated as proposed or manually handled unless a reliable intake workflow is verified.",
] as const;

function StatusPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[68svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={45} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={760} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            Public status
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Current <span className="italic text-gradient-violet">Status</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            meUus has begun as a documented vision, a public website codebase, and a bounded Journey
            Mode prototype. This page separates what exists now from what is prototype, in
            development, planned, or not yet available.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Truth labels"
            title="What can be said today"
            subtitle="These labels are evidence boundaries for public copy. They are not a claim that every service is operating."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {STATUS_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border-hairline bg-card/45 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
                    {item.label}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-foreground">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">Day One</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              21 July 2026 marks a beginning.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              Day One should be understood as truthful continuation: a public informational website,
              a clearly labeled Journey prototype, a reliable contact path, and careful
              evidence-building. It is not a complete ecosystem launch.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <h3 className="font-serif text-2xl text-foreground">Public boundaries</h3>
            <ul className="mt-5 space-y-4">
              {BOUNDARIES.map((boundary) => (
                <li
                  key={boundary}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/72"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
                  <span>{boundary}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/50 p-8 text-center shadow-glow-gold">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Not yet available
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            No backend, AI runtime, DLAS runtime, accounts, cloud storage, payments, rewards, or
            subscriptions are verified or live.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">
            Those systems remain future work. Public claims should stay calm, specific, and tied to
            evidence until implementation, validation, legal review, and operational ownership
            exist.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              View Journey prototype <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Contact manually <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
