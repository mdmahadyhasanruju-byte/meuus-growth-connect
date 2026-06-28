import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, HandHeart, ShieldCheck } from "lucide-react";

import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/one-word-start")({
  head: () => ({
    meta: [
      { title: "One Word Start - meUus" },
      {
        name: "description",
        content:
          "A simple, manual starting point for reflection when a person cannot explain everything yet.",
      },
      { property: "og:title", content: "One Word Start - meUus" },
      {
        property: "og:description",
        content:
          "A calm public explanation of beginning with one honest word, without diagnosis, scoring, AI analysis, or automated promises.",
      },
    ],
  }),
  component: OneWordStartPage,
});

const EXAMPLE_WORDS = [
  "confused",
  "tired",
  "family",
  "study",
  "money",
  "faith",
  "work",
  "fear",
  "hope",
  "stuck",
] as const;

const HOW_IT_WORKS = [
  {
    title: "Begin honestly",
    body: "A person may begin with one word, one short sentence, or one unfinished thought.",
  },
  {
    title: "Do not assume",
    body: "The word is treated as a signal, not as a full explanation or final truth.",
  },
  {
    title: "Move carefully",
    body: "The next step is reflection, clarification, and a safe manual path toward the existing meUus contact or Journey surfaces.",
  },
] as const;

const BOUNDARIES = [
  "Not diagnosis.",
  "Not therapy.",
  "Not AI analysis.",
  "Not personality scoring.",
  "Not employment assessment.",
  "Not a promise of help, job, money, or outcome.",
  "Currently a manual public explanation only.",
] as const;

function OneWordStartPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={50} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={760} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            Manual Entry Point
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Start with <span className="italic text-gradient-violet">one word.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            One Word Start is a simple public way to begin when everything feels too complex to
            explain. A single honest word can be enough to pause, notice the signal, and take one
            responsible next step.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Start Journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground transition hover:bg-white/10"
            >
              Visit Status
            </Link>
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground transition hover:bg-white/10"
            >
              Join manually
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Why one word matters
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              The first task is not to judge the person.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              A word can be unclear, emotional, practical, spiritual, relational, or ordinary. It
              may be incomplete. It may need context. It should not be treated as a diagnosis,
              score, or final story.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              The first task is to notice the signal responsibly. That means receiving it with care,
              keeping boundaries clear, and avoiding claims the current public system cannot prove.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
              <HandHeart className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-foreground">How it works now</h3>
            <div className="mt-5 space-y-4">
              {HOW_IT_WORKS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border-hairline bg-background/40 p-4"
                >
                  <h4 className="font-serif text-xl text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Example words"
            title="A beginning can be small"
            subtitle="These words are examples only. They are not categories, labels, scores, or conclusions."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {EXAMPLE_WORDS.map((word) => (
              <span
                key={word}
                className="rounded-full border-hairline bg-card/45 px-5 py-2 text-sm text-foreground/80"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[var(--gold)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
                What it is not
              </p>
            </div>
            <ul className="mt-6 space-y-3">
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
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Current availability
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
              Connected to Knowledge Before Action.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              One Word Start fits the same public principle as the current Knowledge Before Action
              Journey: pause before action, learn before claiming certainty, and keep the next step
              bounded.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              The live Journey is still a bounded prototype. It runs in the browser, and Journey
              progress remains browser-local. Deeper systems are planned, not live.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-8 text-center sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Responsible next step
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Begin with honesty. Continue with boundaries.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/68">
            You can explore the existing Journey prototype, read the current public status, or
            express interest manually. None of these paths promises an automated result; they are
            careful public starting points.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Start Journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              View Status
            </Link>
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Express interest manually
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
