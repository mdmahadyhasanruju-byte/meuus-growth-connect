import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, FileText } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — meUus" },
      {
        name: "description",
        content:
          "Initial public terms boundary for using the early meUus public information site and prototypes.",
      },
      { property: "og:title", content: "Terms — meUus" },
      {
        property: "og:description",
        content:
          "Initial public terms boundary for using the early meUus public information site and prototypes.",
      },
    ],
  }),
  component: TermsPage,
});

const TERM_BOUNDARIES = [
  "Using the public site means using early public information and prototypes.",
  "meUus is in development.",
  "Content is educational and reflection-oriented, not medical, legal, financial, religious-authority, psychological, employment, eligibility, or emergency advice.",
  "Journey, DLAS, app, and game concepts are not diagnosis, official assessment, ranking, guarantee, or automated decision.",
  "Joining or expressing interest does not guarantee role, payment, employment, opportunity, funding, access, partnership, or outcome.",
  "Future terms may change as app, backend, account, or other services are introduced.",
] as const;

const MISUSE_RULES = [
  "Do not scrape, attack, overload, or attempt to break the site.",
  "Do not impersonate another person or submit harmful, abusive, or misleading content.",
  "Do not use public forms for emergency help or high-stakes urgent support.",
  "Do not treat prototype labels, XP, Journey steps, or future concepts as official status, eligibility, ranking, or entitlement.",
] as const;

function TermsPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[64svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={34} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <FileText className="h-3.5 w-3.5 text-[var(--gold)]" />
            Early public terms
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Terms <span className="italic text-gradient-violet">— meUus</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            These are initial public boundaries for using the current meUus site. They are not final
            lawyer-reviewed terms and do not claim formal legal compliance.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Use boundary"
            title="This is an early public foundation, not a full operating platform."
            subtitle="The public pages describe a developing project, bounded prototypes, and future directions. They should not be treated as professional advice or guaranteed access to services."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {TERM_BOUNDARIES.map((boundary) => (
              <article key={boundary} className="rounded-2xl border-hairline bg-card/45 p-6">
                <CircleDot className="h-4 w-4 text-[var(--gold)]" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/72">{boundary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Responsible use
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Do not misuse a public prototype surface.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              The current site is informational and experimental in limited places. It is not an
              emergency service, official application system, or automated decision system.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <ul className="space-y-4">
              {MISUSE_RULES.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-relaxed text-foreground/72">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/50 p-8 text-center shadow-glow-gold">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Before relying on anything
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Check the current status and privacy boundaries.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">
            The status page separates what is live, prototype, planned, or not yet available. The
            privacy and consent pages explain what should happen before information is shared.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              View status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Read privacy boundary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
