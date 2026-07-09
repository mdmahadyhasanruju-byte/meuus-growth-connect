import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PILLARS } from "@/data/pillars";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "meUus Ecosystem — Nine pillars, one platform" },
      {
        name: "description",
        content:
          "The meUus Ecosystem: nine intended pillars and a planned platform vision, with current operating status separated from future work.",
      },
      { property: "og:title", content: "meUus Ecosystem" },
      {
        property: "og:description",
        content: "Nine intended pillars, one planned platform, one mission.",
      },
    ],
  }),
  component: EcosystemPage,
});

const MODULES = [
  {
    name: "Jobs & Opportunities",
    body: "Planned job, freelance, internship, and scholarship paths.",
  },
  { name: "Learn & Certification", body: "Planned courses, skill tracks, and career pathways." },
  { name: "AI Growth Assistant", body: "Planned CV, interview, career, and income guidance." },
  {
    name: "Assessments",
    body: "Planned career-fit, skills, personality, and growth-readiness tools.",
  },
  { name: "Community & Chat", body: "Planned mentorship, groups, and peer support." },
  {
    name: "Business Tools",
    body: "Planned hiring, talent discovery, and service marketplace tools.",
  },
  { name: "Wallet & Payments", body: "Planned subscriptions, services, payments, and rewards." },
];

const REVENUE = [
  {
    t: "Consumer",
    body: "Planned premium subscriptions, course sales, coaching, and future AI-supported services. Not yet available.",
  },
  {
    t: "Business",
    body: "Planned employer plans, sponsored listings, and recruitment services. Not yet available.",
  },
  {
    t: "Platform",
    body: "Planned transaction fees, marketplace commissions, and partnerships. Payment and revenue systems are not implemented in this repository.",
  },
];

const PHASES = [
  {
    t: "Now — Current Public Foundation",
    body: "Foundation building, founding team recruitment, partnerships, content.",
  },
  {
    t: "21 July 2026 — Day One public foundation checkpoint",
    body: "Day One continuation: truthful public status, prototype clarity, and manually verified next steps.",
  },
  { t: "Year 1 — Product–Market Fit", body: "Retention, referral growth, revenue optimization." },
  {
    t: "Year 2+ — Regional Expansion",
    body: "Gulf, India corridor, diaspora-led international expansion.",
  },
];

function EcosystemPage() {
  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative flex min-h-[70svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={50} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={700} />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            The Body
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl md:text-8xl">
            meUus <span className="text-gradient-violet italic">Ecosystem</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Nine intended pillars and one platform vision. The current repository documents the
            direction, not a fully operating ecosystem.
          </p>
        </div>
      </section>

      {/* WHY IT IS AN ECOSYSTEM */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why an ecosystem"
            title={
              <>
                The problems are <em className="italic text-gradient-violet">connected</em>. So is
                the answer.
              </>
            }
            subtitle="Emotional pain affects work. Work affects money. Money affects stress. Stress affects behavior. We refuse to treat them in isolation."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              [
                "Whole-human view",
                "We do not categorize a person by their loudest problem. We map past, present, and future together.",
              ],
              [
                "Connected pillars",
                "Legal, business, mental, family, and work may later share learning signals, intake patterns, and follow-up structures after review.",
              ],
              [
                "One platform spine",
                "Jobs, learn, AI, assessments, community, and wallet are planned platform modules, not currently available systems.",
              ],
              [
                "Long-term accountability",
                "Proposed future pilot structure: weekly tasks, daily micro-actions, and documented progress after review.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl border-hairline bg-card/50 p-6">
                <h3 className="font-serif text-xl text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-foreground/65">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NINE PILLARS QUICK GRID */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nine pillars"
            title={
              <>
                One ecosystem, <em className="italic">nine doors</em>
              </>
            }
            subtitle="Each pillar is an intended service direction. Operating status requires separate evidence."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <Link
                key={p.slug}
                to="/pillars/$slug"
                params={{ slug: p.slug }}
                className="group rounded-xl border-hairline bg-card/40 p-5 transition hover:bg-card/70"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-foreground">{p.name}</h3>
                  <span className="font-serif text-2xl" style={{ color: p.color }}>
                    {p.symbol}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/60">{p.short}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--gold)] opacity-0 transition group-hover:opacity-100">
                  Open <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM MODULES */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The platform"
            title={
              <>
                Planned platform, <em className="italic text-gradient-gold">not yet available</em>
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.name} className="rounded-xl border-hairline bg-card/40 p-5">
                <h3 className="font-serif text-lg text-foreground">{m.name}</h3>
                <p className="mt-2 text-sm text-foreground/60">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNED SUSTAINABILITY */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Planned sustainability model"
            title={
              <>
                How meUus <em className="italic">could sustain itself</em>
              </>
            }
            subtitle="These are planned revenue streams, not active subscriptions, payments, rewards, or AI services."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {REVENUE.map((r) => (
              <div key={r.t} className="rounded-2xl border-hairline bg-card/50 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
                  Planned revenue stream
                </p>
                <h3 className="mt-2 font-serif text-2xl text-foreground">{r.t}</h3>
                <p className="mt-2 text-sm text-foreground/65">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Timeline" title="From here to Day One and beyond" />
          <ol className="mt-12 space-y-5">
            {PHASES.map((p, i) => (
              <li key={p.t} className="flex gap-5 rounded-2xl border-hairline bg-card/40 p-6">
                <span className="font-serif text-3xl text-[var(--gold)]/85">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{p.t}</h3>
                  <p className="mt-1 text-sm text-foreground/65">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-hairline bg-card/50 p-10 text-center shadow-glow-violet">
          <h3 className="font-serif text-3xl text-foreground sm:text-4xl">Help us build it.</h3>
          <p className="mt-3 text-foreground/65">
            Until 21 July 2026, every meaningful role is open.
          </p>
          <Link
            to="/join"
            search={{}}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            See open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
