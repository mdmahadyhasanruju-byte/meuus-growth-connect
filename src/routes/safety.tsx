import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldAlert, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety — meUus" },
      {
        name: "description",
        content:
          "Public safety and scope boundaries for the current meUus website and browser-local Journey prototype.",
      },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/safety" }],
  }),
  component: SafetyPage,
});

const BOUNDARIES = [
  "The public site and Journey prototype are not emergency, crisis, medical, therapeutic, legal, financial, or diagnostic services.",
  "Do not rely on a public page for urgent help. If there is immediate danger, seek local emergency help or contact a trusted nearby person or service.",
  "Journey is browser-local and does not create a verified account, cloud profile, or managed case record.",
  "The site does not currently verify an AI runtime, DLAS runtime, payments, rewards, subscriptions, or automated decisions.",
] as const;

function SafetyPage() {
  return (
    <div className="px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Safety first"
          title="Clear boundaries are part of care."
          subtitle="meUus public pages should make their limits visible, especially when a person may need more support than a website can provide."
        />

        <section className="mt-12 grid gap-7 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border-hairline bg-card/45 p-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
              <h2 className="font-serif text-3xl text-foreground">
                What to do when urgency is real
              </h2>
            </div>
            <p className="mt-5 leading-relaxed text-foreground/70">
              A website cannot assess immediate risk or replace local emergency response. If you or
              someone nearby may be in immediate danger, use local emergency support or reach a
              trusted person who can be physically present.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              Do not wait for a response from this site before seeking urgent help.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-8">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
              <h2 className="font-serif text-3xl text-foreground">What is available now</h2>
            </div>
            <p className="mt-5 leading-relaxed text-foreground/70">
              Current public routes offer information, reflection prompts, and a bounded Journey
              prototype. They are designed to support careful learning and a responsible next step,
              not to make a diagnosis or guarantee a result.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border-hairline bg-card/45 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[var(--gold)]" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Current public boundary
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            {BOUNDARIES.map((boundary) => (
              <li key={boundary} className="flex gap-3 leading-relaxed text-foreground/72">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
                <span>{boundary}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/journey/safety"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
          >
            Journey safety boundary <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground"
          >
            Read privacy
          </Link>
          <Link
            to="/status"
            className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground"
          >
            View current status
          </Link>
        </div>
      </div>
    </div>
  );
}
