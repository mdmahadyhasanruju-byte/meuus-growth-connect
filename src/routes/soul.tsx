import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CircleDot } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/soul")({
  head: () => ({
    meta: [
      { title: "Learn — meUusSoul" },
      {
        name: "description",
        content: "Compatibility gateway from meUus UNDERSTAND to the current meUusSoul LEARN home.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://meuussoul.com/" }],
  }),
  component: SoulGateway,
});

function SoulGateway() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[68svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={34} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <BookOpen className="h-3.5 w-3.5 text-[var(--gold)]" />
            Learn · meUusSoul
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Learning continues on{" "}
            <span className="italic text-gradient-violet">meuussoul.com.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            This older UNDERSTAND route is preserved as a compatibility gateway. The current LEARN
            home, bilingual learning paths, topics, review status, DLAS learning boundary, Quran and
            Seerah journeys, and book resources continue on meUusSoul.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="https://meuussoul.com/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              Open meUusSoul <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/status"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm font-medium text-foreground"
            >
              Check current status
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            align="center"
            eyebrow="Preserved compatibility"
            title="No second competing LEARN truth."
            subtitle="The old route remains traceable, while the current learning surface has one clear home."
          />
          <div className="mx-auto mt-8 flex max-w-2xl gap-3 rounded-2xl border-hairline bg-card/45 p-6">
            <CircleDot className="mt-1 h-4 w-4 flex-none text-[var(--gold)]" />
            <p className="text-sm leading-relaxed text-foreground/68">
              Historical source is preserved in version control. Current learning traffic should use
              meuussoul.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
