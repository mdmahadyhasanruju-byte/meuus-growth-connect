import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PILLARS } from "@/data/pillars";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pillars")({
  head: () => ({
    meta: [
      { title: "The Nine Pillars — meUus" },
      {
        name: "description",
        content:
          "The nine pillars of meUus — Legal, Business, Unemployment, Mind, Drug, Family, Green, Idea Lab, aLive Bangladesh.",
      },
      { property: "og:title", content: "The Nine Pillars of meUus" },
      { property: "og:description", content: "Nine integrated pillars of human development." },
    ],
  }),
  component: PillarsIndex,
});

function PillarsIndex() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[60svh] flex-col items-center justify-center px-4 pt-32 pb-12 text-center sm:px-6">
        <ParticleCanvas density={40} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={600} />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            The Nine Pillars
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Nine doors. <span className="italic text-gradient-violet">One mission.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70">
            Each pillar is a full service. Click any one to see its philosophy, services, leader,
            and what launches on 21 July 2026.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Link
              key={p.slug}
              to="/pillars/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-3xl border-hairline bg-card/40 p-8 transition hover:border-white/15 hover:bg-card/70 animate-scale-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition group-hover:opacity-70"
                style={{ background: p.color }}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-foreground/45">
                      Pillar {p.num}
                    </div>
                    <h3 className="mt-2 font-serif text-3xl text-foreground">{p.name}</h3>
                  </div>
                  <span className="font-serif text-4xl" style={{ color: p.color }}>
                    {p.symbol}
                  </span>
                </div>
                <p className="mt-3 italic text-foreground/70">{p.tagline}</p>
                <p className="mt-4 text-sm text-foreground/60">{p.description.slice(0, 130)}…</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs"
                    style={{ background: `${p.color}22`, color: p.color }}
                  >
                    {p.status}
                  </span>
                  <span className="inline-flex items-center gap-1 text-foreground/65 transition group-hover:text-foreground">
                    Read full <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
