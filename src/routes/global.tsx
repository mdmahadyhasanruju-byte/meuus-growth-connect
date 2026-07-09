import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/global")({
  head: () => ({
    meta: [
      { title: "Global — meUus Public Foundation" },
      {
        name: "description",
        content:
          "A global-facing view of the meUus public foundation, current learning layers, and future human-development architecture.",
      },
      { property: "og:title", content: "Global — meUus Public Foundation" },
      {
        property: "og:description",
        content:
          "A global-facing view of the meUus public foundation, current learning layers, and future human-development architecture.",
      },
    ],
  }),
  component: GlobalPage,
});

const MARKETS = [
  {
    phase: "Phase 1",
    flag: "🇧🇩",
    name: "Bangladesh",
    body: "Home. Where the pillar ideas are tested and evidence is built gradually.",
    stat: "170M+ people",
  },
  {
    phase: "Phase 2",
    flag: "🌐",
    name: "Gulf Diaspora",
    body: "Bangladeshi workers and families across UAE, KSA, Qatar, Oman, Kuwait — remittance, hiring, mental support.",
    stat: "3M+ diaspora",
  },
  {
    phase: "Phase 3",
    flag: "🇮🇳 🇵🇰 🇳🇵",
    name: "South Asia Corridor",
    body: "India, Pakistan, Nepal — shared labour markets, shared language, shared challenges.",
    stat: "1.8B+ region",
  },
  {
    phase: "Phase 4",
    flag: "🌏",
    name: "Emerging Markets",
    body: "Southeast Asia and Africa — where the meUus model of integrated human development scales further.",
    stat: "Billions",
  },
  {
    phase: "Phase 5",
    flag: "✺",
    name: "Every soul, everywhere",
    body: "Borderless ecosystem. Every person, every opportunity, every step toward a life worth living.",
    stat: "Infinite",
  },
];

const FEATURES = [
  ["Multilingual", "Bangla, English, Arabic, Hindi, Urdu, Nepali — and growing."],
  [
    "Cross-border hiring",
    "Future concept: employer verification and transparent placement would require separate legal, operational, and evidence review.",
  ],
  ["Remittance bridge", "Future integration for safer, cheaper, faster transfers."],
  [
    "DLAS in every language",
    "A future DLAS concept would require cultural, linguistic, consent, validation, and governance review before use.",
  ],
  [
    "Low-bandwidth first",
    "Built to work for the worker with a $40 phone, not the executive with fibre.",
  ],
  [
    "Diaspora networks",
    "Future concept: connect families to reviewed information, learning, and support pathways without claiming live counselling, work placement, or cross-border services.",
  ],
  [
    "District-aware",
    "Future concept: local content, local leaders, and local trust would require evidence before being surfaced through any platform.",
  ],
  ["Faith-respectful", "Designed with respect for belief, never against it."],
];

const BELIEFS = [
  "Geography should not decide opportunity.",
  "A worker in Sylhet deserves the same dignity as one in Dubai.",
  "Language is a bridge, not a barrier.",
  "Local first. Global by consequence.",
  "Every soul deserves a real next step.",
];

function GlobalPage() {
  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative flex min-h-[70svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={60} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color="oklch(0.78 0.15 200)"
          size={800}
        />
        <AnimatedOrb className="-right-32 top-0" color="oklch(0.82 0.13 80)" size={500} />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            The Reach
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl md:text-8xl">
            meUus <span className="italic text-gradient-gold">Global</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            From Bangladesh — to every soul, across every border.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-center text-sm">
            {[
              ["170M+", "Home market"],
              ["5", "Expansion phases"],
              ["3M+", "Diaspora"],
              ["∞", "Vision"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl border-hairline bg-glass px-5 py-3">
                <div className="font-serif text-2xl text-gradient-violet">{v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Expansion"
            title={
              <>
                Five phases. <em className="italic">One destination.</em>
              </>
            }
            subtitle="Local first. Global by consequence. Never by force."
          />
          <div className="mt-16 space-y-5">
            {MARKETS.map((m, i) => (
              <div
                key={m.name}
                className="grid items-center gap-6 rounded-3xl border-hairline bg-card/40 p-7 md:grid-cols-[auto_1fr_auto]"
              >
                <div className="text-5xl">{m.flag}</div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
                    {m.phase}
                  </div>
                  <h3 className="mt-1 font-serif text-3xl text-foreground">{m.name}</h3>
                  <p className="mt-2 text-foreground/65">{m.body}</p>
                </div>
                <div className="text-right">
                  <div className="font-serif text-xl text-gradient-violet">{m.stat}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-foreground/45">
                    {i === MARKETS.length - 1 ? "Vision" : "Target"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Built for the world"
            title={
              <>
                The future vision <em className="italic">stays evidence-bound</em>
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(([t, b]) => (
              <div key={t} className="rounded-xl border-hairline bg-card/40 p-5">
                <h3 className="font-serif text-lg text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-foreground/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What we believe"
            title="Five beliefs that guide the global path"
          />
          <ol className="mt-12 space-y-5">
            {BELIEFS.map((b, i) => (
              <li key={b} className="flex gap-5 rounded-2xl border-hairline bg-card/40 p-6">
                <span className="font-serif text-2xl text-[var(--gold)]">0{i + 1}</span>
                <p className="font-serif text-lg italic text-foreground/85">"{b}"</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-3xl italic text-foreground/85 sm:text-4xl">
            "Bringing meUus alive — one soul, one opportunity, one country at a time."
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/join"
              search={{}}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              Join the journey
            </Link>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-7 py-3.5 text-sm text-foreground"
            >
              See the ecosystem <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
