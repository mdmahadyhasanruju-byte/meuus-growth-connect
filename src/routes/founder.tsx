import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Quote, ArrowRight, Pen } from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "A Letter from the Founder — Md. Mahady Hasan | meUus" },
      { name: "description", content: "The personal letter from Md. Mahady Hasan, founder of meUus, on why this ecosystem exists, what it stands for, and what it demands of everyone who joins." },
      { property: "og:title", content: "A Letter from the Founder — Md. Mahady Hasan" },
      { property: "og:description", content: "Why meUus exists. What it stands for. And what it demands of every soul who joins." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://meuus-growth-connect.lovable.app/founder" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://meuus-growth-connect.lovable.app/founder" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "A Letter from the Founder — Md. Mahady Hasan",
          author: { "@type": "Person", name: "Md. Mahady Hasan" },
          publisher: { "@type": "Organization", name: "meUus" },
          datePublished: "2026-07-21",
          description: "The personal letter from Md. Mahady Hasan, founder of meUus, on why this ecosystem exists, what it stands for, and what it demands of everyone who joins.",
        }),
      },
    ],
  }),
  component: FounderPage,
});

const LETTER_PARAGRAPHS = [
  "I did not build meUus because the world needed another app. I built it because I watched too many people — brilliant, honest, hardworking people — drift through life without a map. Without someone to tell them where they are strong. Without a system that sees them as whole human beings, not productivity units.",
  "meUus is not a startup. It is a commitment. A commitment to every soul that has ever been told they were not enough, that their circumstances define them, that their dreams are too big for their reality. We reject that. Completely.",
  "This ecosystem began in the quiet spaces — between a legal chamber and a classroom, between a grocery delivery route and a greenhouse in the early morning. It began with the belief that truth, when structured with care, becomes power. That power, when shared, becomes justice.",
  "We are building three things simultaneously, but in order: cashflow to survive, pilots to prove, and a digital system to scale. This discipline is not caution. It is respect — respect for the people who depend on us, the families whose property seeds this mission, and the communities who will carry it forward.",
  "The Deep Life Assessment System — DLAS — is the soul of this work. It is not a test. It is a mirror. Five levels of structured truth across your past, your present, and your future. It tells you where you are, not to judge you, but to guide you. And it will only work if you enter it with radical honesty.",
  "Nine pillars stand behind the platform. Legal truth. Business growth. Mental clarity. Work with dignity. Family harmony. Green livelihood. Ideas made real. Recovery for those who have been broken. And aLive Bangladesh — the media voice that tells our own stories, in our own words, to our own people.",
  "I am asking for something from everyone who joins: not your money first, but your truth. Your willingness to be assessed, to be guided, to be held accountable, and to hold others accountable in return. meUus is a mutual contract between souls. It only works if we all show up.",
  "To the founding members reading this: you are not early adopters. You are co-authors. The legal chambers, the greenhouses, the classrooms, the delivery routes, the assessment sheets — these are your inheritance. Build them with the same care you would build for your own family. Because in the end, that is exactly what we are.",
  "We launch on 21 July 2026. Not because the work will be finished by then, but because the work must begin. There will never be a perfect moment. There is only this moment, and our decision to meet it with courage.",
  "I will leave you with the only promise I can make: meUus will never be sold. The portion of my family's property dedicated to this mission will remain dedicated. The mission will outlive any individual, including me. We are building a cathedral, not a company. And cathedrals take generations.",
];

const SIGNATURE_LINES = [
  "With unwavering commitment,",
  "Md. Mahady Hasan",
  "Founder, meUus",
  "July 2026",
];

export default function FounderPage() {
  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative flex min-h-[60svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={40} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" color="oklch(0.78 0.14 280)" size={700} />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <Pen className="h-3 w-3 text-[var(--gold)]" />
            From the Founder
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            A <span className="italic text-gradient-violet">letter</span> on why we exist
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Written by Md. Mahady Hasan for every soul who will build, guide, and grow inside meUus.
          </p>
        </div>
      </section>

      {/* LETTER BODY */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Opening Pull Quote */}
          <blockquote className="relative mb-16 border-l-2 border-[var(--gold)]/40 pl-6 sm:pl-8">
            <Quote className="absolute -left-3 -top-3 h-6 w-6 text-[var(--gold)]/60" />
            <p className="font-serif text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
              I did not build meUus because the world needed another app. I built it because I watched too many people — brilliant, honest, hardworking people — drift through life without a map.
            </p>
          </blockquote>

          {/* Body Paragraphs */}
          <div className="space-y-8">
            {LETTER_PARAGRAPHS.slice(1).map((p, i) => (
              <p key={i} className="text-lg leading-[1.8] text-foreground/80 sm:text-xl">
                {p}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div className="mt-16 space-y-1 border-t border-hairline pt-10">
            {SIGNATURE_LINES.map((line, i) => (
              <p
                key={i}
                className={`${
                  i === 1
                    ? "font-serif text-2xl font-medium text-foreground"
                    : i === 0
                    ? "text-sm uppercase tracking-[0.2em] text-foreground/55"
                    : "text-sm text-foreground/65"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-hairline bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-10 text-center">
          <SectionHeading
            eyebrow="Now, your turn"
            title={
              <>
                Read it again. <br className="hidden sm:block" />
                Then <span className="italic text-gradient-violet">join</span> the work.
              </>
            }
            subtitle="The letter is the invitation. The action is the answer."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Join the founding loop <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/foundation"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              See the foundation map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
