import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Evidence — meUus" },
      {
        name: "description",
        content:
          "A public guide to how meUus distinguishes current evidence, prototypes, future direction, and private information.",
      },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/evidence" }],
  }),
  component: EvidencePage,
});

const EVIDENCE_LEVELS = [
  {
    title: "Current public information",
    body: "The public status, privacy, terms, and route pages describe what can be checked on the public site today.",
  },
  {
    title: "Browser-local prototype",
    body: "Journey Mode is a bounded prototype. Its optional progress and reflection behavior stays in the current browser according to the selected local setting.",
  },
  {
    title: "Future direction",
    body: "Architecture, ideas, and intended pillars show direction. They do not prove that an operating service, partner, program, or outcome exists.",
  },
] as const;

function EvidencePage() {
  return (
    <div className="px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Claim ≤ Evidence"
          title="A public guide to project evidence"
          subtitle="This page explains how to read meUus public information without turning plans, prototypes, or private records into larger claims."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {EVIDENCE_LEVELS.map((level) => (
            <article key={level.title} className="rounded-3xl border-hairline bg-card/45 p-7">
              <FileCheck2 className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
              <h2 className="mt-5 font-serif text-3xl text-foreground">{level.title}</h2>
              <p className="mt-4 leading-relaxed text-foreground/70">{level.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 grid gap-8 rounded-3xl border-hairline bg-card/45 p-8 lg:grid-cols-[0.9fr_1.1fr] sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Public boundary
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground">Evidence is not a promise.</h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              A public page can describe the present state and a careful next step. It cannot make a
              planned system live, establish an external result, or disclose private founder,
              participant, reflection, or contact information.
            </p>
          </div>
          <div className="rounded-2xl border-hairline bg-background/40 p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[var(--gold)]" aria-hidden="true" />
              <h3 className="font-serif text-2xl text-foreground">
                What this public guide does not do
              </h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/70">
              <li>It does not publish private records or personal data.</li>
              <li>It does not establish a backend, account, payment, AI, or assessment service.</li>
              <li>It does not replace the current status page or formal review process.</li>
            </ul>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/status"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
          >
            View current status <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground"
          >
            Read privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
