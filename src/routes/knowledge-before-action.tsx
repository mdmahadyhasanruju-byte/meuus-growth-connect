import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, Eye, Pause, ShieldCheck, Split } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/knowledge-before-action")({
  head: () => ({
    meta: [
      { title: "Knowledge Before Action - meUus" },
      {
        name: "description",
        content:
          "A public meUus principle for understanding what is known, unknown, felt, assumed, and responsibly possible before taking action.",
      },
      { property: "og:title", content: "Knowledge Before Action - meUus" },
      {
        property: "og:description",
        content:
          "A calm public principle for pausing, separating facts from assumptions, and choosing one responsible next step.",
      },
    ],
  }),
  component: KnowledgeBeforeActionPage,
});

const FIRST_NOTICES = [
  {
    label: "Facts",
    body: "What can be observed, checked, or stated without adding interpretation?",
  },
  {
    label: "Feelings",
    body: "What is being felt, and how might that feeling shape the situation?",
  },
  {
    label: "Assumptions",
    body: "What has been inferred but not yet confirmed?",
  },
  {
    label: "Urgency",
    body: "What truly needs attention now, and what can safely wait for more understanding?",
  },
] as const;

const BOUNDARIES = [
  "Not diagnosis.",
  "Not therapy.",
  "Not legal, financial, medical, or employment advice.",
  "Not AI analysis.",
  "Not automated decision-making.",
  "Not a promise of outcome.",
  "Not a complete DLAS system.",
  "Currently a public principle and early Journey foundation.",
] as const;

function KnowledgeBeforeActionPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={46} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            Public meUus Principle
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Understand before <span className="italic text-gradient-violet">you act.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Knowledge Before Action means making room to understand before instruction, judgment,
            scoring, or action. The aim is not perfect certainty. It is a more honest view of what
            is known, unknown, felt, assumed, and responsibly possible now.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/one-word-start"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Start with one word <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground transition hover:bg-white/10"
            >
              Explore Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Why this matters
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Speed can look like clarity when it is only pressure.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              People are often pushed toward an answer before their situation is understood.
              Knowledge Before Action creates a deliberate pause: notice the signal, name the gaps,
              and resist turning incomplete information into a conclusion.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              This does not mean avoiding action. It means choosing an action proportionate to the
              evidence, the person, and the real level of urgency.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-glass text-[var(--gold)]">
              <Pause className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-foreground">A responsible sequence</h3>
            <ol className="mt-5 space-y-4">
              {[
                "Pause before reacting.",
                "Notice what is known and unknown.",
                "Separate facts, feelings, assumptions, and urgency.",
                "Avoid rushing a person into a decision.",
                "Take one small responsible next step.",
              ].map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border-hairline bg-background/40 p-4 text-sm leading-relaxed text-foreground/72"
                >
                  <span className="font-serif text-lg text-[var(--gold)]">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What to notice first"
            title="Four different kinds of signal"
            subtitle="Keeping these signals distinct can reduce false certainty without dismissing what a person is experiencing."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FIRST_NOTICES.map((item) => (
              <article key={item.label} className="rounded-2xl border-hairline bg-card/45 p-6">
                <Eye className="h-5 w-5 text-[var(--gold)]" />
                <h2 className="mt-5 font-serif text-2xl text-foreground">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex items-center gap-3">
              <Split className="h-5 w-5 text-[var(--gold)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
                What not to assume
              </p>
            </div>
            <h2 className="mt-5 font-serif text-3xl text-foreground">
              A first signal is not a final explanation.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              A word, feeling, or urgent request may be meaningful without telling the whole story.
              It should not automatically become a label, motive, diagnosis, score, or instruction.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              The responsible response is to stay curious, state uncertainty plainly, and avoid
              claiming authority the current public system does not have.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/45 p-7">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[var(--gold)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
                Public boundaries
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
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border-hairline bg-card/45 p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              How One Word Start fits
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">
              Begin before everything is explainable.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              One Word Start is a simple manual entry point for someone who cannot explain
              everything yet. One honest word can open a careful reflection without turning that
              word into a conclusion.
            </p>
            <Link
              to="/one-word-start"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] transition hover:text-foreground"
            >
              Visit One Word Start <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <article className="rounded-3xl border-hairline bg-card/45 p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              How the current Journey fits
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">
              A bounded first slice, not a complete system.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/70">
              The current Journey is an intentionally limited first-slice prototype. It offers a
              small reflection path in the browser, and Journey progress remains browser-local. It
              does not provide automated analysis or decisions.
            </p>
            <Link
              to="/journey"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] transition hover:text-foreground"
            >
              Explore the Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Current availability
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            A public principle and an early Journey foundation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/70">
            Knowledge Before Action is available today as this public explanation and as a guiding
            principle within the bounded Journey prototype. A complete DLAS system and deeper
            platform capabilities are not live.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-8 text-center sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Responsible next step
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Choose the smallest honest next step.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/68">
            Begin with one word, explore the current Journey, review what is actually live, or
            express interest manually. These are starting points, not promises of a particular
            outcome.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/one-word-start"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              One Word Start <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              View Journey
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
