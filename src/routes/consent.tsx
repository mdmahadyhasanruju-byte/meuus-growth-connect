import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, HandHeart } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/consent")({
  head: () => ({
    meta: [
      { title: "Consent — meUus" },
      {
        name: "description",
        content:
          "Initial public consent boundary for understanding what is live, what is not live, and what to consider before sharing information with meUus.",
      },
      { property: "og:title", content: "Consent — meUus" },
      {
        property: "og:description",
        content:
          "Initial public consent boundary for understanding what is live, what is not live, and what to consider before sharing information with meUus.",
      },
    ],
  }),
  component: ConsentPage,
});

const CONSENT_POINTS = [
  "Consent means understanding what is live, what is not live, and what happens before sharing information.",
  "Current public Journey is browser-local.",
  "Current public forms and interest routes are manual review only.",
  "AI, DLAS, app, account, and cloud features are not fully live unless a page clearly says they are enabled.",
  "Users can pause, leave, or avoid submitting information.",
  "For minors, guardians or parents should be involved before sharing information.",
] as const;

const BEFORE_SHARING = [
  "why the information is needed",
  "how it is used",
  "how long it is kept",
  "how to request removal",
] as const;

const HIGH_STAKES = [
  "emergency",
  "medical",
  "legal",
  "mental-health",
  "safety",
  "family-violence",
  "financial",
  "other high-stakes needs",
] as const;

function ConsentPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[64svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={34} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <HandHeart className="h-3.5 w-3.5 text-[var(--gold)]" />
            Consent boundary
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Consent <span className="italic text-gradient-violet">— meUus</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Consent starts before a form, app, AI system, DLAS flow, or account feature asks for
            information. This page explains the current public boundary.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Current consent truth"
            title="Understand the surface before sharing information."
            subtitle="The current public foundation is intentionally limited. If a future feature needs more information, it should first explain its purpose, use, retention, and removal path."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {CONSENT_POINTS.map((point) => (
              <article key={point} className="rounded-2xl border-hairline bg-card/45 p-6">
                <CircleDot className="h-4 w-4 text-[var(--gold)]" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/72">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Before sensitive data
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Do not share sensitive personal data without a clear explanation.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              A future feature should clearly explain these points before asking for sensitive
              personal information.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <ul className="space-y-4">
              {BEFORE_SHARING.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/72">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border-hairline bg-card/50 p-8 shadow-glow-gold">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
                High-stakes needs
              </p>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
                Seek qualified local help for urgent or high-stakes situations.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                The current public site is not an emergency, professional, or crisis-response
                service.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {HIGH_STAKES.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-foreground/10 bg-background/60 p-4 text-sm text-foreground/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Related pages"
            title="Review the public boundaries together."
            subtitle="Status explains what is live. Privacy explains the current data boundary. Terms explain how to use the public site responsibly."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
