import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CircleDot,
  Compass,
  HelpCircle,
  Pause,
  ShieldCheck,
} from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/soul/knowledge-before-action")({
  head: () => ({
    meta: [
      { title: "Knowledge Before Action - meUus Soul" },
      {
        name: "description",
        content:
          "A meUus Soul learning path for slowing down, understanding first, and acting more responsibly.",
      },
      { property: "og:title", content: "Knowledge Before Action - meUus Soul" },
      {
        property: "og:description",
        content:
          "A calm public learning and reflection path for slowing down, understanding first, and acting more responsibly.",
      },
    ],
  }),
  component: SoulKnowledgeBeforeActionPage,
});

const PATTERN_STEPS = [
  {
    label: "Notice",
    body: "Name what is happening before turning it into a conclusion. Notice facts, feelings, assumptions, pressure, and the people or systems involved.",
  },
  {
    label: "Pause",
    body: "Create enough space to avoid reacting only from fear, excitement, pressure, or habit. A pause can be short and still be useful.",
  },
  {
    label: "Learn",
    body: "Look for the smallest useful knowledge: purpose, risk, context, limits, source, cost, and what remains unknown.",
  },
  {
    label: "Compare",
    body: "Compare options, timing, possible effects, and what a responsible person would need to know before moving.",
  },
  {
    label: "Act small",
    body: "Choose one proportionate next step instead of pretending the whole answer is already clear.",
  },
] as const;

const REFLECTION_PROMPTS = [
  "What am I about to do?",
  "Why am I doing it?",
  "What do I know?",
  "What do I not know yet?",
  "Who or what may be affected?",
  "What is one small responsible next step?",
] as const;

const QUESTIONS = [
  {
    question: "Is this about overthinking?",
    answer:
      "No. The aim is not to trap a person in endless analysis. It is to notice enough to act with more care.",
  },
  {
    question: "Is this against taking action?",
    answer:
      "No. meUus is action-oriented, but action is stronger when it is matched to knowledge, context, and responsibility.",
  },
  {
    question: "What if action is urgent?",
    answer:
      "Urgent situations may require immediate local help or emergency support. This page should not delay safety, care, or professional help when those are needed.",
  },
  {
    question: "Can knowledge still be incomplete?",
    answer:
      "Yes. Knowledge Before Action does not require perfect certainty. It asks for enough honest understanding to choose a responsible next step.",
  },
  {
    question: "How does this connect to meUus?",
    answer:
      "It supports the wider meUus habit of separating vision from live reality, learning from advice, and intention from evidence before acting.",
  },
] as const;

const GLOSSARY = [
  {
    term: "Knowledge",
    definition:
      "What can be understood, checked, learned, or responsibly held with uncertainty before action.",
  },
  {
    term: "Action",
    definition:
      "A step taken in the world, including a decision, purchase, reply, promise, or plan.",
  },
  {
    term: "Reflection",
    definition:
      "A careful pause to notice meaning, motive, evidence, uncertainty, and possible effects.",
  },
  {
    term: "Responsible next step",
    definition:
      "A small action that fits the available knowledge without pretending more certainty than exists.",
  },
  {
    term: "Uncertainty",
    definition:
      "The honest space where something is not yet known, not verified, or still needs context.",
  },
  {
    term: "Claim boundary",
    definition:
      "The limit that keeps a statement smaller than or equal to the evidence and review behind it.",
  },
] as const;

const RELATED_PATHS = [
  { label: "Public KBA principle", to: "/knowledge-before-action" },
  { label: "meUus Soul gateway", to: "/soul" },
  { label: "Book meUus", to: "/book" },
  { label: "Current status", to: "/status" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Consent", to: "/consent" },
] as const;

function SoulKnowledgeBeforeActionPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={44} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            Soul learning path — first public slice
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Knowledge Before <span className="italic text-gradient-violet">Action</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/72">
            A meUus Soul learning path for slowing down, understanding first, and acting more
            responsibly.
          </p>
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-primary/25 bg-primary/10 p-5 text-sm leading-relaxed text-foreground/76">
            This page is a public learning and reflection path. It is not medical, legal,
            psychological, religious-authority, financial, employment, emergency, or professional
            advice. It is not a diagnosis, assessment, guarantee, or automated decision.
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#simple-pattern"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              See the five steps <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground transition hover:bg-white/10"
            >
              Check current status
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why knowledge should come before action"
            title="Speed is not always wisdom."
          />
          <div className="space-y-5 text-base leading-relaxed text-foreground/72">
            <p>
              Action without understanding can create harm. A quick decision can feel powerful, but
              if it is built on missing context, pressure, or a wrong assumption, the result may
              create confusion, overreaction, or misplaced effort.
            </p>
            <p>
              Learning first can reduce the chance of acting from noise instead of reality. It can
              help a person ask what is known, what is unknown, what is urgent, and who may be
              affected before taking the next step.
            </p>
            <p>
              Knowledge does not mean perfection. It means enough understanding to act responsibly,
              while still admitting uncertainty where uncertainty remains.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
              <Pause className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-3xl text-foreground">
              What this principle does not mean
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/72">
              {[
                "It does not mean endless delay.",
                "It does not mean fear of action.",
                "It does not mean waiting until everything is certain.",
                "It does not mean one person knows everything.",
                "It does not replace urgent or emergency help when needed.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-3xl text-foreground">Boundary in plain words</h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/72">
              This learning path can support thoughtful public reflection, but it does not decide
              what a person must do. It does not evaluate a reader, collect answers, score
              readiness, provide professional judgment, or replace local help.
            </p>
          </div>
        </div>
      </section>

      <section id="simple-pattern" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="The simple meUus pattern"
            title="Notice. Pause. Learn. Compare. Act small."
            subtitle="A calm five-step pattern for moving from pressure toward a responsible next step."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {PATTERN_STEPS.map((step, index) => (
              <article
                key={step.label}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <span className="font-serif text-2xl text-[var(--gold)]">0{index + 1}</span>
                <h2 className="mt-4 font-serif text-2xl text-foreground">{step.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/66">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Compass className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="Example"
              title="A low-risk everyday decision can still deserve a pause."
            />
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7 text-sm leading-relaxed text-foreground/72">
            <p>
              Someone wants to start a project, buy a tool, join a platform, or make an online
              decision. The fast path is to act immediately because the idea feels exciting or the
              page creates urgency.
            </p>
            <p className="mt-4">
              A Knowledge Before Action path would pause first: What is the purpose? What risk or
              cost exists? What does the platform actually do? Are there alternatives? What is one
              small step that tests the direction without pretending the whole answer is already
              known?
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-3xl text-foreground">Reflection exercise</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/68">
              Read these privately. This page does not ask you to submit answers.
            </p>
            <ul className="mt-6 space-y-3">
              {REFLECTION_PROMPTS.map((prompt) => (
                <li
                  key={prompt}
                  className="rounded-2xl border border-foreground/10 bg-background/60 p-4 text-sm text-foreground/72"
                >
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-3xl text-foreground">Q&A</h2>
            <div className="mt-6 space-y-4">
              {QUESTIONS.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-foreground/10 bg-background/60 p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/66">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Glossary"
            title="Six words used carefully in this learning path."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GLOSSARY.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <h2 className="font-serif text-2xl text-foreground">{item.term}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/66">{item.definition}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Related paths"
            title="Continue through verified public pages and trust boundaries."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED_PATHS.map((path) => (
              <Link
                key={path.to}
                to={path.to}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                {path.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-8 text-center sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Current status note
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            An early public Soul learning path.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/70">
            This is an early public Soul learning path. Deeper examples, Bangla versions, exercises,
            glossary expansion, and reviewed learning modules may be added later after claim,
            translation, and review checks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/soul"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Return to meUus Soul <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/consent"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Review consent boundary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
