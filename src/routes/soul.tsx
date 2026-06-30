import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CircleDot, Feather, Globe2, ShieldCheck } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/soul")({
  head: () => ({
    meta: [
      { title: "meUus Soul - meUus" },
      {
        name: "description",
        content:
          "A developing public knowledge and reflection gateway for meUus, with deeper learning paths being organized gradually.",
      },
      { property: "og:title", content: "meUus Soul - meUus" },
      {
        property: "og:description",
        content:
          "A calm gateway for the future meUus knowledge and reflection hub, grounded in what is available now.",
      },
    ],
  }),
  component: SoulPage,
});

const AVAILABLE_NOW = [
  {
    label: "Knowledge Before Action",
    body: "The first public Soul learning path for pausing, noticing what is known and unknown, and choosing one responsible next step.",
  },
  {
    label: "One Word Start",
    body: "A simple manual starting point for someone who cannot explain everything yet.",
  },
  {
    label: "Journey prototype",
    body: "A bounded browser-local first slice for reflection, not a complete platform or automated system.",
  },
] as const;

const BEING_ORGANIZED = [
  "Book meUus concepts and public reading paths.",
  "A reflection library for careful self-understanding.",
  "Learning paths that can grow from simple public pages.",
  "DLAS explanations that describe ideas without claiming a live runtime.",
  "Pillar knowledge that can be reviewed, edited, and published gradually.",
  "Bangla and English content for a broader public audience.",
  "Founder notes and public essays with clear evidence boundaries.",
] as const;

const BOUNDARIES = [
  "Not a completed library yet.",
  "Not therapy.",
  "Not diagnosis.",
  "Not religious authority.",
  "Not legal, financial, medical, or employment advice.",
  "Not AI analysis.",
  "Not automated decision-making.",
  "Not a complete DLAS system.",
  "Not a payment or subscription product yet.",
  "Not a guarantee of help, job, money, or outcome.",
] as const;

function SoulPage() {
  const location = useLocation();

  if (location.pathname !== "/soul" && location.pathname !== "/soul/") {
    return <Outlet />;
  }

  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={44} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            meUus Soul Gateway
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            A knowledge home <span className="italic text-gradient-violet">in development.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            meUus Soul is the future public knowledge and reflection hub of the meUus ecosystem. Its
            deeper learning paths are being organized gradually, while the verified public
            foundation remains on meuus.org.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/soul/knowledge-before-action"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Begin with understanding <ArrowRight className="h-4 w-4" />
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
            eyebrow="What meUus Soul is"
            title="A future public home for reflection, learning, and careful meaning."
          />
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              meUus Soul is intended to gather the human, spiritual, educational, and reflective
              side of meUus into public pages that can be read, reviewed, and improved over time.
            </p>
            <p>
              The work is not being presented as complete. Foundational ideas are being organized,
              public pages are being recovered gradually, and every claim should remain smaller than
              the evidence available today.
            </p>
            <p>
              The current truth board is still{" "}
              <Link to="/status" className="text-primary underline">
                /status
              </Link>
              . It is the place to check what is live, what is planned, and what is not yet
              available.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Available now"
            title="The gateway connects to the public foundation already live."
            subtitle="These pages are starting points, not a finished meUus Soul library."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {AVAILABLE_NOW.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </article>
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
              eyebrow="Careful recovery"
              title="Future areas are named as future work."
              subtitle="Book meUus, reflection materials, DLAS explanations, pillar knowledge, Bangla and English writing, founder notes, and public essays can become clearer over time, but they are not being claimed as complete products today."
            />
            <Link
              to="/one-word-start"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Start with one honest word <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What it is not"
            title="A spiritual tone still needs public boundaries."
            subtitle="meUus Soul can be spiritually respectful without becoming religious authority, diagnosis, therapy, advice, or a promise of outcomes."
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
              <Globe2 className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="How to begin today"
              title="Use the live pages first, then follow the status board."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/soul/knowledge-before-action"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">
                Knowledge Before Action — first public learning path
              </span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Understand what is known, unknown, felt, assumed, and responsibly possible.
              </p>
            </Link>
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
              to="/journey"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Journey</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Explore the bounded browser-local first slice already available on meuus.org.
              </p>
            </Link>
            <Link
              to="/status"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Status</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Check what is live, planned, still in development, or not yet available.
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
            title="meUus Soul is a gateway, not a finished destination."
            subtitle="The current verified public foundation remains meuus.org. Deeper learning paths, Book meUus materials, reflection libraries, DLAS explanations, and bilingual content are being organized gradually."
          />
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/knowledge-before-action"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Learn the principle <ArrowRight className="h-4 w-4" />
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
