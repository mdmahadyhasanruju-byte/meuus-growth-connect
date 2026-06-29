import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, ShieldCheck } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — meUus" },
      {
        name: "description",
        content:
          "Initial public privacy boundary for the current pre-launch meUus public foundation and bounded prototypes.",
      },
      { property: "og:title", content: "Privacy — meUus" },
      {
        property: "og:description",
        content:
          "Initial public privacy boundary for the current pre-launch meUus public foundation and bounded prototypes.",
      },
    ],
  }),
  component: PrivacyPage,
});

const PRIVACY_POINTS = [
  "meUus is currently a pre-launch public foundation and bounded prototype.",
  "Current Journey progress is browser-local unless a page clearly says otherwise.",
  "The public site does not currently provide live AI analysis, full DLAS services, accounts, dashboards, payments, subscriptions, rewards, or cloud profile storage.",
  "Expression-of-interest forms, if used, are manual and should not include sensitive personal information unless specifically requested and explained.",
  "Visitors should avoid entering medical, legal, financial, emergency, identity-sensitive, or highly personal information into public forms.",
  "Future app, DLAS, AI, and account features will require clearer consent, privacy, retention, and deletion rules before use.",
  "Contact or interest information may be reviewed manually for project communication only.",
] as const;

const AVOID_SHARING = [
  "medical or emergency details",
  "legal case facts or financial account details",
  "identity documents, passwords, or private codes",
  "highly personal family, safety, or mental-health information",
] as const;

function PrivacyPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[64svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={36} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
            Initial boundary
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Privacy <span className="italic text-gradient-violet">— meUus</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            This page explains the current privacy boundary for the public meUus foundation. It is
            an initial public boundary, not final legal advice or a lawyer-reviewed policy.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Current truth"
            title="Use the public site as a careful pre-launch surface."
            subtitle="The current public foundation should collect less, claim less, and explain limits clearly before deeper app, AI, DLAS, or account features exist."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PRIVACY_POINTS.map((point) => (
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
              Please avoid sharing
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Sensitive information does not belong in public forms.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              If a future feature needs sensitive information, it should first explain why it is
              needed, how it is used, how long it is kept, and how removal can be requested.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <ul className="space-y-4">
              {AVOID_SHARING.map((item) => (
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
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/50 p-8 text-center shadow-glow-gold">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Related boundaries
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Check what is live before sharing information.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">
            The status and consent pages explain what is currently available, what is not live, and
            how to pause before sharing personal information.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              View status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/consent"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Read consent boundary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
