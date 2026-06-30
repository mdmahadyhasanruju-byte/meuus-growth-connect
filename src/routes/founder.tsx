import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Pen, Quote, ShieldCheck } from "lucide-react";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "A Letter from the Founder — Md. Mahady Hasan | meUus" },
      {
        name: "description",
        content:
          "A public letter from the founder of meUus about beginning carefully, protecting human dignity, and taking responsibility for what remains unfinished.",
      },
      { property: "og:title", content: "A Letter from the Founder — Md. Mahady Hasan" },
      {
        property: "og:description",
        content:
          "Why meUus began, what guides its public foundation, and where founder responsibility remains.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://meuus.org/founder" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/founder" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "A Letter from the Founder — Md. Mahady Hasan",
          author: { "@type": "Person", name: "Md. Mahady Hasan" },
          publisher: { "@type": "Organization", name: "meUus" },
          dateModified: "2026-07-01",
          description:
            "A public letter about why meUus began and the responsibility required to develop it carefully.",
        }),
      },
    ],
  }),
  component: FounderPage,
});

const LETTER_PARAGRAPHS = [
  "meUus began because I know what it is like to feel unheard, misunderstood, and uncertain about the next responsible step. I also know that personal experience does not make someone an authority over another person's life. It creates a duty to listen, learn, and build carefully.",
  "I am not presenting myself as a finished expert, and I am not presenting meUus as a finished answer. The current site is a public foundation with limited, clearly labelled experiences. The wider ecosystem, professional partnerships, governance, and technical systems remain in development.",
  "The principle I want this work to keep is simple: claim must remain less than or equal to evidence. Small honest steps matter more than loud promises. Knowledge should come before action, reflection before judgment, and human dignity before scoring, data, automation, or performance.",
  "That means meUus must protect people before trying to impress people. It must not ask for sensitive truth before earning trust. It must not pretend to diagnose, assess, guarantee, or decide for anyone. It must not replace qualified professionals, qualified religious scholars, trusted human relationships, or emergency support.",
  "My faith is part of my personal grounding and responsibility. It is not a claim that I or meUus hold religious authority. Where guidance is required, the project must learn from qualified people, respect context, and remain honest about its limits.",
  "AI and other tools may help with drafting, coding, review, research organization, and administration. They do not own, endorse, validate, sponsor, or take responsibility for meUus. The responsibility remains with me as founder and, in time, with a clearly approved and accountable team.",
  "There will be mistakes and unfinished areas. They should be named, corrected, and documented—not hidden behind ambition. Trust must be earned through evidence, consent, safety, responsible governance, and work that proves its value over time.",
  "If meUus grows, I hope it grows without losing this discipline: see the person before the system, protect dignity before collecting data, and choose the next honest step before promising the whole journey.",
];

const BOUNDARY_SUMMARY =
  "This letter and the current public foundation are not medical, legal, religious, psychological, financial, employment, eligibility, or emergency guidance. They do not provide diagnosis, assessment, guarantees, or automated decisions.";

export default function FounderPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[64svh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-32 text-center sm:px-6">
        <ParticleCanvas density={40} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color="oklch(0.78 0.14 280)"
          size={700}
        />
        <div className="relative z-10 mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <Pen className="h-3 w-3 text-[var(--gold)]" />
            From the Founder
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            A <span className="italic text-gradient-violet">letter</span> on beginning carefully
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
            Written by Md. Mahady Hasan about why meUus began, what remains unfinished, and where
            responsibility belongs.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <blockquote className="relative mb-14 border-l-2 border-[var(--gold)]/40 pl-6 sm:pl-8">
          <Quote className="absolute -left-3 -top-3 h-6 w-6 text-[var(--gold)]/60" />
          <p className="font-serif text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
            I am not presenting meUus as a finished answer. I am presenting it as a truthful
            beginning.
          </p>
        </blockquote>

        <article className="space-y-7">
          {LETTER_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-[1.05rem] leading-8 text-foreground/80 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </article>

        <aside className="mt-14 rounded-2xl border border-[var(--gold)]/25 bg-glass p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[var(--gold)]" />
            <div>
              <h2 className="font-serif text-2xl">A public boundary</h2>
              <p className="mt-3 leading-7 text-foreground/70">{BOUNDARY_SUMMARY}</p>
            </div>
          </div>
        </aside>

        <div className="mt-14 space-y-1 border-t border-white/10 pt-8 text-foreground/75">
          <p>With humility and responsibility,</p>
          <p className="pt-4 font-serif text-2xl text-foreground">Md. Mahady Hasan</p>
          <p>Founder, meUus</p>
          <p>July 2026</p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/manifesto-full"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-black"
          >
            Read the founder manifesto <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/status"
            className="inline-flex items-center gap-2 rounded-full border-hairline px-6 py-3 text-sm font-medium"
          >
            Check current status
          </Link>
        </div>
      </main>
    </div>
  );
}
