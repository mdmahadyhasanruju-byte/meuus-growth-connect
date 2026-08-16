import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Layers3, Scale } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — meUus" },
      {
        name: "description",
        content:
          "A concise public introduction to meUus, its current public foundation, and its evidence-first operating principle.",
      },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/about" }],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    title: "me → U → us",
    body: "The ecosystem begins with understanding the person, then connection with others, then careful shared work.",
    icon: Compass,
  },
  {
    title: "Understand → Learn → Reflect → Act",
    body: "This is the current movement behind the public foundation, learning directions, Journey prototype, and future architecture.",
    icon: Layers3,
  },
  {
    title: "Claim ≤ Evidence",
    body: "A planned system, public page, prototype, or idea is not described as a completed operating capability without direct support.",
    icon: Scale,
  },
] as const;

function AboutPage() {
  return (
    <div className="px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About meUus"
          title="A public foundation for careful human development."
          subtitle="meUus is being built as an evidence-first ecosystem. The public foundation explains what exists now while keeping future systems separate from present claims."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className="rounded-3xl border-hairline bg-card/45 p-7">
                <Icon className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-3xl text-foreground">{principle.title}</h2>
                <p className="mt-4 leading-relaxed text-foreground/70">{principle.body}</p>
              </article>
            );
          })}
        </div>

        <section className="mt-12 grid gap-7 rounded-3xl border-hairline bg-card/45 p-8 lg:grid-cols-[1fr_1fr] sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Current public position
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground">
              A foundation, not a completed ecosystem.
            </h2>
          </div>
          <p className="leading-relaxed text-foreground/70">
            Current public routes describe the foundation, a browser-local Journey prototype,
            learning direction, and the Nine Pillars as intended directions. They do not establish
            operating services, professional programs, accounts, cloud storage, AI runtime, DLAS
            runtime, payments, or automated decisions.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/foundation"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
          >
            Explore the foundation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/domains"
            className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground"
          >
            View domain roles
          </Link>
          <Link
            to="/evidence"
            className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground"
          >
            Read the evidence guide
          </Link>
        </div>
      </div>
    </div>
  );
}
