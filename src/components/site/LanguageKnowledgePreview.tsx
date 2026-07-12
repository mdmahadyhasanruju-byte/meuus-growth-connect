import { Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, ShieldCheck } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

type RelatedPage = { label: string; to: string };
type ContentSection = { title: string; paragraphs?: string[]; bullets?: string[] };

export type LanguageKnowledgePreviewPage = {
  eyebrow: string;
  title: string;
  subtitle: string;
  shortPurpose: string;
  whatThisIs: string[];
  whatThisIsNot: string[];
  sections: ContentSection[];
  claimReminder: string;
  oneSmallAction: string;
  relatedPages: RelatedPage[];
  nextInternalStep: string;
};

export const SHARED_STATUS = [
  ["Status", "Draft Public Preview Candidate v0.2"],
  ["Level", "Level 00 Public Preview"],
  ["Review", "Requires review before public use"],
  ["Source/Provenance", "Based on internal source and review materials; not canonical"],
  ["Publication", "Not published"],
  ["Production", "Not production-ready"],
  ["Canonical", "Not canonical"],
  ["Runtime", "Not live"],
  ["Implementation", "Not approved for website deployment"],
] as const;

export const SHARED_DISCLAIMER =
  "This page is an internal draft public-preview candidate for learning support only. It is not final curriculum, not professional advice, not diagnosis, not legal advice, not religious ruling, not financial advice, not therapy, not emergency support, and not proof that advanced meUus systems are live.";

export const SHARED_ADVANCED_BOUNDARY =
  "This page does not approve or activate AI runtime, DLAS runtime, accounts, dashboards, payments, subscriptions, certification, cloud storage, automated scoring, or automated decisions.";

export const SHARED_VERSION_NOTE =
  "Version v0.2 is an internal corrected draft revision created after the first public draft review. It is not approved for publication, deployment, canonical use, or production.";

export function LanguageKnowledgePreview({ page }: { page: LanguageKnowledgePreviewPage }) {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[64svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={34} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
            {page.eyebrow}
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">{page.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">{page.subtitle}</p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {SHARED_STATUS.map(([label, value]) => (
            <div key={label} className="rounded-2xl border-hairline bg-card/45 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]/85">{label}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/72">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">Short purpose</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">What this page is for</h2>
            <p className="mt-5 leading-relaxed text-foreground/70">{page.shortPurpose}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <BoundaryList title="What this page is" items={page.whatThisIs} />
            <BoundaryList title="What this page is not" items={page.whatThisIsNot} />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border-hairline bg-card/45 p-7">
              <h2 className="font-serif text-3xl text-foreground">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-foreground/70">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/72">
                      <CircleDot className="mt-0.5 h-4 w-4 flex-none text-[var(--gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Review boundary" title="Claim must stay smaller than or equal to evidence." subtitle={page.claimReminder} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <InfoPanel title="One small action" body={page.oneSmallAction} />
            <InfoPanel title="Disclaimer block" body={SHARED_DISCLAIMER} />
            <InfoPanel title="Advanced-system boundary" body={SHARED_ADVANCED_BOUNDARY} />
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">Related pages</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">Stay inside the draft set.</h2>
            <p className="mt-5 leading-relaxed text-foreground/70">These links point only to bounded draft public-preview pages. They do not indicate publication approval.</p>
          </div>
          <div className="flex flex-wrap gap-3 self-center">
            {page.relatedPages.map((related) => (
              <Link key={related.to} to={related.to} className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-5 py-3 text-sm text-foreground transition hover:text-[var(--gold)]">
                {related.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/50 p-8 text-center shadow-glow-gold">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">Version note</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">Internal corrected draft revision.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">{SHARED_VERSION_NOTE}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">Next internal step: {page.nextInternalStep}</p>
        </div>
      </section>
    </div>
  );
}

function BoundaryList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl border-hairline bg-card/50 p-6">
      <h3 className="font-serif text-2xl text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/72">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function InfoPanel({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border-hairline bg-card/45 p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]/85">{title}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/72">{body}</p>
    </article>
  );
}
