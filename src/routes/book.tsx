import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CircleDot,
  Feather,
  Globe2,
  Library,
  ShieldCheck,
} from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Be — The Starting Point — meUus" },
      {
        name: "description",
        content:
          "Public Excerpt v0.1 for Be — The Starting Point — meUus, a controlled starting selection connected to meUus Soul.",
      },
      { property: "og:title", content: "Be — The Starting Point — meUus" },
      {
        property: "og:description",
        content:
          "A controlled public excerpt introducing Be, Listen Before Knowledge, Knowledge Before Action, and one responsible next step.",
      },
    ],
  }),
  component: BookPage,
});

const EXCERPT_SECTIONS = [
  "Opening — The Truthful Beginning",
  "Chapter 1 — Before Action, Be",
  "Chapter 11 — Knowledge Before Action",
  "Chapter 12 — Listen Before Knowledge",
] as const;

const AVAILABLE_NOW = [
  {
    label: "meUus Soul",
    body: "The developing public knowledge and reflection gateway for the wider meUus ecosystem.",
    to: "/soul",
  },
  {
    label: "Knowledge Before Action",
    body: "A public principle for understanding what is known, unknown, felt, and assumed before acting.",
    to: "/knowledge-before-action",
  },
  {
    label: "One Word Start",
    body: "A simple manual beginning when a person cannot explain everything yet.",
    to: "/one-word-start",
  },
] as const;

const BEING_ORGANIZED = [
  "Founder reflections grounded in lived experience and clearly stated limits.",
  "Human development notes for careful public reading and revision.",
  "Knowledge Before Action as a recurring principle, not a claim of certainty.",
  "One Word Start as a humane entry point for reflection.",
  "meUus Soul learning paths that may grow gradually from verified public pages.",
  "DLAS explanations that describe developing ideas without claiming a live runtime.",
  "The Bangladesh-first ecosystem journey, documented without overstating progress.",
  "Bangla and English writing developed and reviewed over time.",
] as const;

const BOUNDARIES = [
  "Not a finished or publicly released book yet.",
  "Not therapy.",
  "Not diagnosis.",
  "Not religious authority.",
  "Not legal, financial, medical, or employment advice.",
  "Not AI analysis.",
  "Not automated decision-making.",
  "Not a complete DLAS system.",
  "Not an academic claim.",
  "Not a commercial sale or subscription product yet.",
  "Not a guarantee of help, job, money, or outcome.",
] as const;

function BookPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={42} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            Book meUus
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Be — The Starting Point — <span className="italic text-gradient-violet">meUus</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Public Excerpt v0.1 is a controlled starting selection connected to meUus Soul and the
            Knowledge Hub starting layer. The full manuscript remains in preparation and this is not
            a final publication.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/soul"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Visit meUus Soul <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
            >
              View current status
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="What Book meUus is"
            title="Public Excerpt v0.1 introduces the starting philosophy behind meUus."
          />
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              Be — The Starting Point — meUus introduces the starting philosophy behind meUus: Be,
              Listen Before Knowledge, Knowledge Before Action, and one responsible next step.
            </p>
            <p>
              The public excerpt is prepared for publication review. The full manuscript is still in
              preparation, and this page does not publish the full book text.
            </p>
            <p>
              The current verified foundation remains meuus.org. The{" "}
              <Link to="/status" className="text-primary underline">
                /status
              </Link>{" "}
              truth board remains the place to check what is live, what is planned, and what is not
              yet available.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Public excerpt status"
            title="Be — The Starting Point — meUus · Public Excerpt v0.1"
            subtitle="Public excerpt prepared. Full manuscript in preparation. Not final publication."
          />
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-foreground/10 bg-background/70 p-5 text-center text-sm leading-relaxed text-foreground/65">
            Download the public excerpt PDF. Full manuscript in preparation. Not final publication.
            This is the controlled public excerpt only.
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/books/be-the-starting-point-meuus-public-excerpt-v0-1.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Download the public excerpt PDF <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {EXCERPT_SECTIONS.map((section) => (
              <article
                key={section}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <p className="text-sm font-semibold text-primary">Selected excerpt section</p>
                <h2 className="mt-2 font-serif text-2xl text-foreground">{section}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What is available now"
            title="Begin with the verified public pages already live."
            subtitle="These pages provide current context for the developing book project; they are not chapters from a finalized manuscript."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {AVAILABLE_NOW.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6 transition hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Feather className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl text-foreground">What is being organized</h2>
            <div className="mt-6 grid gap-3">
              {BEING_ORGANIZED.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.025] p-4"
                >
                  <CircleDot className="mt-1 h-3.5 w-3.5 flex-none text-[var(--gold)]" />
                  <p className="text-sm leading-relaxed text-foreground/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Developing areas"
              title="Possible subjects are named as future work."
              subtitle="Founder reflections, human development notes, learning paths, DLAS explanations, the Bangladesh-first ecosystem journey, and Bangla and English writing may be developed gradually. They are not being presented as finalized, validated, or released book content."
            />
            <Link
              to="/knowledge-before-action"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Read Knowledge Before Action <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What it is not"
            title="A reflective project still needs firm public boundaries."
            subtitle="The writing may be spiritually respectful and human-centered without becoming religious prescription, professional advice, analysis, or a promise of outcomes."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {BOUNDARIES.map((boundary) => (
              <div
                key={boundary}
                className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <p className="text-sm leading-relaxed text-foreground/70">{boundary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Library className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="How it connects to meUus Soul"
              title="The book belongs within a wider learning and reflection direction."
              subtitle="This controlled excerpt supports the Soul / Knowledge Hub starting layer. It is a selected public beginning, not the full manuscript or a completed knowledge library."
            />
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-foreground/70">
              The current relationship is simple: the controlled excerpt supports public learning,
              reflection, and visual understanding on meuus.org. The status board should still be
              used to distinguish current availability from future intention.
            </p>
            <Link
              to="/soul"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Explore the meUus Soul gateway <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Globe2 className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="How to begin today"
              title="Use the live foundation before the future manuscript."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/one-word-start"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">One Word Start</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Begin manually with one honest word when everything is not yet explainable.
              </p>
            </Link>
            <Link
              to="/knowledge-before-action"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Knowledge Before Action</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Separate evidence, feeling, assumption, and urgency before acting.
              </p>
            </Link>
            <Link
              to="/journey"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Journey</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Explore the bounded browser-local reflection prototype already available.
              </p>
            </Link>
            <Link
              to="/status"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Status</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Check what is live, planned, in development, or not yet available.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Current availability"
            title="Book meUus is a gateway to developing work, not a released book."
            subtitle="The project is being organized and public pages are being recovered gradually. The verified public foundation remains meuus.org, with /status as the current truth board."
          />
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Review current status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
            >
              Express interest manually
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
