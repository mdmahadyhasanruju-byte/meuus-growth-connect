import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { Countdown } from "@/components/site/Countdown";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PILLARS } from "@/data/pillars";
import { ROLES } from "@/data/roles";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "meUus — Live Public Foundation and Journey Prototype" },
      {
        name: "description",
        content:
          "meuus.org is live with a public status page, a manual expression-of-interest path, and a browser-local Knowledge Before Action Journey prototype.",
      },
      { property: "og:title", content: "meUus — Connecting Everything" },
      {
        property: "og:description",
        content:
          "A live public foundation with a bounded Journey prototype and a larger human-development vision still in development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "meUus",
          description:
            "A founding-phase human-development project with a live public website, bounded Journey prototype, and planned nine-pillar ecosystem direction.",
          founder: { "@type": "Person", name: "Md. Mahady Hasan" },
          areaServed: "Bangladesh",
          slogan: "Connecting Everything",
        }),
      },
    ],
  }),
  component: HomePage,
});

const JOURNEY = [
  {
    num: "01",
    title: "Foundation",
    body: "Live now: public pages, a current status record, and clear evidence boundaries on meuus.org.",
    href: "/status",
    linkLabel: "Visit Status",
  },
  {
    num: "02",
    title: "Knowledge Before Action",
    body: "Live prototype: pause, learn, reflect, and choose responsibly in one bounded first slice.",
    href: "/journey",
    linkLabel: "Start Journey",
  },
  {
    num: "03",
    title: "Ecosystem",
    body: "In development: nine intended pillars describe the vision, not a fully operating ecosystem.",
    href: "/ecosystem",
    linkLabel: "Learn the vision",
  },
  {
    num: "04",
    title: "Platform",
    body: "Future roadmap: backend, accounts, cloud storage, AI runtime, payments, rewards, and subscriptions are not live.",
    href: "/status",
    linkLabel: "See boundaries",
  },
  {
    num: "05",
    title: "Global",
    body: "Future vision: begin in Bangladesh and consider wider reach only after evidence and responsible delivery.",
    href: "/global",
    linkLabel: "Future vision",
  },
] as const;

const HUBS = [
  {
    label: "meUus",
    title: "The Soul",
    body: "Human-first principles: truth, dignity, privacy, responsible action, and learning before claims.",
    href: "/" as const,
    accent: "from-violet-500/30 via-violet-500/5 to-transparent",
  },
  {
    label: "meUus Ecosystem",
    title: "The Body",
    body: "Nine intended pillars and a future platform plan. The full operating ecosystem is not yet live.",
    href: "/ecosystem" as const,
    accent: "from-cyan-500/30 via-cyan-500/5 to-transparent",
  },
  {
    label: "meUus Global",
    title: "The Reach",
    body: "A planned path from Bangladesh toward wider reach, subject to evidence, partnerships, and responsible delivery.",
    href: "/global" as const,
    accent: "from-amber-400/30 via-amber-400/5 to-transparent",
  },
];

function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* ───────── HERO ───────── */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center sm:px-6">
        <ParticleCanvas density={80} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={900} />
        <AnimatedOrb
          className="bottom-0 right-0 translate-x-1/3 translate-y-1/3"
          color="oklch(0.78 0.15 200)"
          size={500}
        />
        <AnimatedOrb
          className="top-10 left-0 -translate-x-1/3"
          color="oklch(0.82 0.13 80)"
          size={400}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <Sparkles className="h-3 w-3 text-[var(--gold)]" />
            Live Public Foundation · Founding Phase
          </div>

          <h1 className="font-serif text-[clamp(3.5rem,12vw,11rem)] font-medium leading-[0.95] tracking-tight">
            <span className="text-gradient-violet">me</span>
            <span className="text-foreground">Uus</span>
          </h1>

          <p className="font-serif text-2xl italic text-foreground/85 sm:text-3xl md:text-4xl">
            Connecting Everything.
          </p>

          <p className="max-w-2xl text-base text-foreground/65 sm:text-lg">
            meuus.org is live with public status, manual expressions of interest, and Knowledge
            Before Action as its first bounded working experience. Journey preferences and local
            clear/restart are available, and Journey data stays in this browser.
          </p>

          <Countdown />

          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/journey"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.03] sm:w-auto"
            >
              Start Journey
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/status"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-hairline bg-glass px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/10 sm:w-auto"
            >
              Visit Status
            </Link>
            <Link
              to="/ecosystem"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-hairline bg-glass px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/10 sm:w-auto"
            >
              Learn the Vision
            </Link>
          </div>

          <p className="mt-10 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-foreground/30">
            Bismillah · Built for Humanity
          </p>
        </div>

        {/* fade to next */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* ───────── JOURNEY MAP ───────── */}
      <section className="relative px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Journey"
            title={
              <>
                From <em className="italic text-gradient-violet">intention</em> to{" "}
                <em className="italic text-gradient-gold">every soul</em>
              </>
            }
            subtitle="From a live public foundation and one bounded experience toward a larger vision that remains in development."
          />

          <div className="relative mt-20">
            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent md:left-1/2" />
            <ol className="space-y-12 md:space-y-24">
              {JOURNEY.map((s, i) => (
                <li
                  key={s.num}
                  className={`relative grid grid-cols-[2.5rem_1fr] gap-6 md:grid-cols-2 md:gap-12 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`flex items-center ${i % 2 === 1 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"}`}
                  >
                    {/* dot */}
                    <span className="absolute left-4 -translate-x-1/2 md:left-1/2">
                      <span className="block h-3 w-3 rounded-full bg-[var(--gold)] shadow-glow-gold" />
                    </span>
                    <div
                      className={`hidden font-serif text-[7rem] font-medium leading-none text-foreground/10 md:block`}
                    >
                      {s.num}
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85 md:hidden">
                      Chapter {s.num}
                    </div>
                    <h3 className="mt-1 font-serif text-3xl text-foreground sm:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md text-foreground/65">{s.body}</p>
                    <Link
                      to={s.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--gold)] hover:text-foreground"
                    >
                      {s.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── THREE VISION HUBS ───────── */}
      <section className="relative px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Three Hubs"
            title={
              <>
                One vision, <em className="italic">three doors</em>
              </>
            }
            subtitle="Each door separates what is available now from what remains intended or planned."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {HUBS.map((h) => (
              <Link
                key={h.label}
                to={h.href}
                className="group relative overflow-hidden rounded-3xl border-hairline bg-card/40 p-8 transition hover:border-white/15 hover:bg-card/60"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${h.accent} opacity-60 transition group-hover:opacity-100`}
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">{h.label}</p>
                  <h3 className="mt-4 font-serif text-4xl">{h.title}</h3>
                  <p className="mt-3 text-foreground/70">{h.body}</p>
                  <div className="mt-8 inline-flex items-center gap-1 text-sm text-foreground/85">
                    Enter{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PILLARS CONSTELLATION ───────── */}
      <section className="relative px-4 py-32 sm:px-6">
        <AnimatedOrb className="-right-32 top-0" color="oklch(0.72 0.22 295)" size={500} />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Nine Pillars"
            title={
              <>
                A constellation, <em className="italic text-gradient-gold">not a list</em>
              </>
            }
            subtitle="Each pillar is an intended direction. Together they describe a future ecosystem, not current operating services."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Link
                key={p.slug}
                to="/pillars/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-2xl border-hairline bg-card/40 p-7 transition hover:border-white/15 hover:bg-card/70 animate-scale-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
                  style={{ background: p.color }}
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-foreground/45">
                      {p.num}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-foreground">{p.name}</h3>
                  </div>
                  <span className="font-serif text-3xl" style={{ color: p.color }}>
                    {p.symbol}
                  </span>
                </div>
                <p className="mt-3 text-sm italic text-foreground/65">{p.tagline}</p>
                <p className="mt-3 text-sm text-foreground/55">{p.short}</p>
                <div className="mt-6 flex items-center justify-between text-xs">
                  <span
                    className="rounded-full px-2.5 py-0.5"
                    style={{
                      background: `${p.color}22`,
                      color: p.color,
                    }}
                  >
                    In development
                  </span>
                  <span className="inline-flex items-center gap-1 text-foreground/55 transition group-hover:text-foreground">
                    Open <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/pillars"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground hover:bg-white/10"
            >
              View all pillar details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── DLAS ───────── */}
      <section className="relative px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Future Roadmap · DLAS"
            title={
              <>
                Deep Life <em className="italic">Assessment System concept</em>
              </>
            }
            subtitle="A proposed future assessment and guidance framework. No DLAS runtime, scoring model, consent workflow, or validated system is live."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border-hairline bg-card/40 p-8">
              <h3 className="font-serif text-2xl text-foreground">Proposed five-level outline</h3>
              <ol className="mt-6 space-y-4">
                {[
                  ["01", "Surface Entry", "What is bothering you most right now?"],
                  ["02", "Present Structure", "Where do you feel stuck, day to day?"],
                  ["03", "Past Extraction", "When did this begin, and who was there?"],
                  ["04", "Emotional Core", "What truth was never spoken?"],
                  ["05", "Future Mapping", "What must change? What is the next real step?"],
                ].map(([n, t, q]) => (
                  <li key={n} className="flex gap-4">
                    <span className="font-serif text-2xl text-[var(--gold)]">{n}</span>
                    <div>
                      <p className="font-serif text-lg text-foreground">{t}</p>
                      <p className="text-sm italic text-foreground/60">"{q}"</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border-hairline bg-card/40 p-8">
                <h3 className="font-serif text-2xl text-foreground">Proposed dimensions</h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    ["Facts", "What objectively happened."],
                    ["Feelings", "What the person experienced."],
                    ["Meaning", "What they believe it means."],
                    ["Impact", "How it shapes life now."],
                  ].map(([t, b]) => (
                    <div key={t} className="rounded-2xl border-hairline bg-background/40 p-4">
                      <p className="font-serif text-lg text-gradient-violet">{t}</p>
                      <p className="mt-1 text-xs text-foreground/65">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border-hairline bg-card/40 p-8">
                <h3 className="font-serif text-xl text-foreground">Required future boundaries</h3>
                <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                  <li>
                    <span className="text-[var(--gold)]">·</span> Truth over performance
                  </li>
                  <li>
                    <span className="text-[var(--gold)]">·</span> Privacy and consent always
                  </li>
                  <li>
                    <span className="text-[var(--gold)]">·</span> Respect, never manipulation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PRE-FOUNDING ROLES ───────── */}
      <section className="relative px-4 py-32 sm:px-6">
        <AnimatedOrb className="left-0 top-1/4" color="oklch(0.82 0.13 80)" size={500} />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Expression of Interest"
            title={
              <>
                Help shape the <em className="italic text-gradient-gold">founding phase</em>
              </>
            }
            subtitle="These are areas for manual expressions of interest, not guaranteed positions, compensation, equity, salaries, or perks."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r, i) => (
              <Link
                key={r.slug}
                to="/join"
                search={{ role: r.slug }}
                className="group relative overflow-hidden rounded-2xl border-hairline bg-card/40 p-7 transition hover:border-white/15 hover:bg-card/70 animate-scale-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-3xl" style={{ color: r.color }}>
                    {r.symbol}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[0.6rem] uppercase tracking-wider ${
                      r.urgency === "Most Urgent"
                        ? "bg-rose-500/20 text-rose-300"
                        : r.urgency === "Urgent"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-white/10 text-foreground/65"
                    }`}
                  >
                    Manual review
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{r.short}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-foreground/55">
                  <span>{r.commitment}</span>
                  <span className="inline-flex items-center gap-1 transition group-hover:text-foreground">
                    View details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-violet hover:scale-[1.03]"
            >
              Express interest manually
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── MANIFESTO ───────── */}
      <section className="relative px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-sm uppercase tracking-[0.4em] text-[var(--gold)]/85">
            بسم الله الرحمن الرحيم
          </p>
          <p className="mt-8 font-serif text-3xl italic leading-tight text-foreground/90 sm:text-5xl">
            "Understand the whole human.
            <br />
            Not only the visible problem."
          </p>
          <p className="mt-8 text-foreground/60">
            meUus is a human-development vision beginning with a live public foundation and one
            bounded Journey prototype. The wider ecosystem remains future work.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/45">
            Alhamdulillah · InShaAllah
          </p>
        </div>
      </section>
    </div>
  );
}
