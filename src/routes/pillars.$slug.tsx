import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { PILLARS, getPillar } from "@/data/pillars";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/pillars/$slug")({
  loader: ({ params }) => {
    const p = getPillar(params.slug);
    if (!p) throw notFound();
    return { pillar: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.pillar.name} — meUus` },
          { name: "description", content: loaderData.pillar.description },
          { property: "og:title", content: `${loaderData.pillar.name} · meUus` },
          { property: "og:description", content: loaderData.pillar.tagline },
        ]
      : [],
  }),
  component: PillarPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-serif text-4xl text-foreground">Pillar not found</h1>
        <Link to="/pillars" className="mt-4 inline-block text-[var(--gold)]">
          ← Back to all pillars
        </Link>
      </div>
    </div>
  ),
});

function PillarPage() {
  const { pillar: p } = Route.useLoaderData();

  const related = PILLARS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative flex min-h-[70svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={40} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color={p.color}
          size={800}
        />

        <div className="relative z-10 animate-fade-up">
          <Link
            to="/pillars"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-foreground/55 hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            All pillars
          </Link>
          <div className="mt-4 font-serif text-7xl" style={{ color: p.color }}>
            {p.symbol}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/55">
            Pillar {p.num}
          </div>
          <h1 className="mt-2 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            {p.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-2xl italic text-foreground/80">
            "{p.tagline}"
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs uppercase tracking-wider"
              style={{ background: `${p.color}22`, color: p.color }}
            >
              In development
            </span>
            {p.leader && <span className="text-xs text-foreground/55">Led by {p.leader}</span>}
          </div>
        </div>
      </section>

      {/* DESCRIPTION + PHILOSOPHY */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl text-foreground">What it is</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">{p.description}</p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/50 p-7">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
              Philosophy
            </div>
            <p className="mt-3 font-serif text-xl italic text-foreground/85">"{p.philosophy}"</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl text-foreground">Proposed services</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.services.map((s: string) => (
              <div
                key={s}
                className="flex items-start gap-3 rounded-xl border-hairline bg-card/40 p-4"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full"
                  style={{ background: `${p.color}33`, color: p.color }}
                >
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/85">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAUNCH */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/50 p-8 text-center shadow-glow-gold">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Planned · Day One public foundation checkpoint
          </div>
          <p className="mt-4 font-serif text-2xl text-foreground sm:text-3xl">{p.launch}</p>
        </div>
      </section>

      {/* CONTRIBUTE CTA */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-serif text-3xl text-foreground">Help build {p.name}</h3>
          <p className="mt-3 text-foreground/65">
            Every pillar needs leaders, contributors, and supporters before the public foundation
            checkpoint.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["co-founder", "execution-partner", "core-team", "advisor", "volunteer"].map(
              (slug) => (
                <Link
                  key={slug}
                  to="/join"
                  search={{ role: slug }}
                  className="rounded-full border-hairline bg-glass px-4 py-2 text-xs uppercase tracking-wider text-foreground/80 hover:text-foreground hover:bg-white/10"
                >
                  Join as {slug.replace("-", " ")}
                </Link>
              ),
            )}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/join"
              search={{}}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              See all founding roles
            </Link>
            <Link
              to="/pillars"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-7 py-3.5 text-sm text-foreground"
            >
              All pillars <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h3 className="font-serif text-2xl text-foreground">Related pillars</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/pillars/$slug"
                params={{ slug: r.slug }}
                className="group rounded-2xl border-hairline bg-card/40 p-5 transition hover:bg-card/70"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-foreground">{r.name}</h4>
                  <span className="font-serif text-2xl" style={{ color: r.color }}>
                    {r.symbol}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/60">{r.short}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--gold)] opacity-0 transition group-hover:opacity-100">
                  Open <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
