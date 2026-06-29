import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, HeartHandshake } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/appreciation")({
  head: () => ({
    meta: [
      { title: "Appreciation — meUus" },
      {
        name: "description",
        content:
          "A public record of gratitude for the tools, learning, feedback, and support that have helped the founder-led meUus project.",
      },
      { property: "og:title", content: "Appreciation — meUus" },
      {
        property: "og:description",
        content:
          "Gratitude for support around meUus, with clear boundaries against implied endorsement, partnership, sponsorship, ownership, or responsibility.",
      },
    ],
  }),
  component: AppreciationPage,
});

const TECHNICAL_TOOLS = [
  "ChatGPT",
  "Codex",
  "Claude",
  "DeepSeek",
  "GitHub",
  "Vercel",
  "Cloudflare",
  "Lovable",
] as const;

const HUMAN_SUPPORT = [
  "family",
  "teachers",
  "friends",
  "early reviewers",
  "people who offered feedback, questions, encouragement, criticism, or patience",
] as const;

const LEARNING_SOURCES = [
  "books",
  "lived experience",
  "education",
  "faith-based reflection",
  "legal learning",
  "social work and volunteering experience",
  "public knowledge and research",
] as const;

function AppreciationPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[64svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={34} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <HeartHandshake className="h-3.5 w-3.5 text-[var(--gold)]" />
            Gratitude with clear boundaries
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Appreciation <span className="italic text-gradient-violet">— meUus</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70">
            meUus is a founder-led project built through effort, reflection, learning, and practical
            help from many tools, ideas, and people.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Opening appreciation"
            title="Gratitude without borrowed authority."
            subtitle="meUus has been shaped through long reflection, writing, technical experimentation, testing, correction, and support. This page records gratitude without turning any person, tool, company, platform, or source into an official partner or endorser."
          />
          <div className="mt-12 rounded-3xl border-hairline bg-card/50 p-7 text-center shadow-glow-gold sm:p-10">
            <p className="text-base leading-relaxed text-foreground/72 sm:text-lg">
              Appreciation does not mean official partnership, endorsement, sponsorship, ownership,
              approval, validation, investment, or responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="AI and technical tools"
            title="Tools used during exploration."
            subtitle="Different tools have assisted parts of drafting, coding, review, debugging, research, design, or organization."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECHNICAL_TOOLS.map((tool) => (
              <div
                key={tool}
                className="rounded-2xl border-hairline bg-card/45 p-5 text-center text-sm text-foreground/78"
              >
                {tool}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-foreground/10 bg-background/55 p-6">
            <p className="text-sm leading-relaxed text-foreground/70">
              This appreciation also extends to other development, writing, design, and research
              tools used during exploration. These tools assisted limited parts of the work. They do
              not own, control, approve, sponsor, endorse, validate, invest in, or take
              responsibility for meUus. They did not create or originate the project.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border-hairline bg-card/45 p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Human support and feedback
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              Help can take many forms.
            </h2>
            <ul className="mt-7 space-y-4">
              {HUMAN_SUPPORT.map((source) => (
                <li key={source} className="flex gap-3 text-sm leading-relaxed text-foreground/72">
                  <CircleDot className="mt-0.5 h-4 w-4 flex-none text-[var(--gold)]" />
                  <span>{source}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-foreground/10 pt-6 text-sm leading-relaxed text-foreground/65">
              This page keeps that thanks general. It does not name private individuals or imply
              that anyone listed by category has approved every idea, statement, or direction.
            </p>
          </article>

          <article className="rounded-3xl border-hairline bg-card/45 p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Knowledge and learning sources
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              Learning is wider than one source.
            </h2>
            <ul className="mt-7 space-y-4">
              {LEARNING_SOURCES.map((source) => (
                <li key={source} className="flex gap-3 text-sm leading-relaxed text-foreground/72">
                  <CircleDot className="mt-0.5 h-4 w-4 flex-none text-[var(--gold)]" />
                  <span>{source}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-foreground/10 pt-6 text-sm leading-relaxed text-foreground/65">
              Learning from a source does not mean the source is responsible for meUus or agrees
              with every interpretation presented here.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Founder responsibility
          </p>
          <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
            Responsibility stays with the project.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            The responsibility for meUus remains with its founder and future approved team.
            Mistakes, unfinished areas, and future corrections belong to the project itself.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Status note"
            title="Read appreciation alongside the public boundaries."
            subtitle="These pages explain what meUus currently is, how information should be treated, and the limits of the present public foundation."
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
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Terms
            </Link>
            <Link
              to="/consent"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Consent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
