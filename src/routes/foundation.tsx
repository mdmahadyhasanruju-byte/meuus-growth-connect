import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Countdown } from "@/components/site/Countdown";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Sprout,
  ShoppingBag,
  GraduationCap,
  Layers,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/foundation")({
  head: () => ({
    meta: [
      { title: "Before Founding — The meUus Foundation Map" },
      {
        name: "description",
        content:
          "A founder execution map for proposed entry points, execution layers, and disciplined Day One work before public operating claims are verified.",
      },
      { property: "og:title", content: "Before Founding — The meUus Foundation Map" },
      {
        property: "og:description",
        content:
          "Proposed entry points, three execution layers, and one controlled loop at a time.",
      },
    ],
  }),
  component: FoundationPage,
});

const ENTRY_POINTS = [
  {
    tag: "A · Institutional",
    title: "Legal & Taxation Chamber",
    icon: Scale,
    status: "Unverified offline claim",
    points: [
      "Professional network requires external evidence",
      "Authority involvement requires named confirmation",
      "Trust and credibility must be documented before public claim",
    ],
    role: "First institutional partner system",
    accent: "oklch(0.78 0.14 280)",
  },
  {
    tag: "B · Livelihood",
    title: "Green House Project",
    icon: Sprout,
    status: "Planned pilot evidence needed",
    points: [
      "Employment model needs evidence",
      "Sustainability and food-security angle",
      "Replication requires tested pilot records",
    ],
    role: "Pilot livelihood pillar",
    accent: "oklch(0.78 0.16 150)",
  },
  {
    tag: "C · Cashflow",
    title: "Grocery + Home Delivery (Mirpur)",
    icon: ShoppingBag,
    status: "Manual/offline evidence needed",
    points: [
      "Customer model requires dated records",
      "Daily operations must be verified outside this repository",
      "Possible service prototype for later platform work",
    ],
    role: "Cashflow + service prototype",
    accent: "oklch(0.82 0.13 80)",
  },
  {
    tag: "D · Intelligence",
    title: "School + Student Assessment + Profile",
    icon: GraduationCap,
    status: "Conceptual DLAS alignment",
    points: [
      "Structured student profiles require consent and governance",
      "DLAS connection is conceptual, not implemented",
      "Long-term data use requires a reviewed privacy model",
    ],
    role: "Core long-term intelligence layer",
    accent: "oklch(0.85 0.13 180)",
  },
] as const;

const LAYERS = [
  {
    num: "Layer 1",
    title: "Cashflow — Survival & Stability",
    body: "Grocery / home service shop and the taxation–legal service integration.",
    goal: "Money, trust, and daily operations.",
    icon: ShoppingBag,
  },
  {
    num: "Layer 2",
    title: "Real-World Pilots",
    body: "The greenhouse project and the school assessment system.",
    goal: "Proof of social-impact systems on the ground.",
    icon: Sprout,
  },
  {
    num: "Layer 3",
    title: "meUus Digital System",
    body: "Website, onboarding, future assessment concepts, and profile ideas.",
    goal: "Scale offline learning digitally only after evidence, consent, and governance exist.",
    icon: Layers,
  },
] as const;

const NEXT_SEVEN = [
  {
    step: "Step 1",
    title: "Finish domain setup",
    body: "Verify domain ownership, DNS, TLS, redirects, and canonical URL before any live claim.",
  },
  {
    step: "Step 2",
    title: "Deploy the homepage",
    body: "Publish only after truthful status labels, validation, and deployment evidence exist.",
  },
  {
    step: "Step 3",
    title: "One form only",
    body: "Use one verified contact path; the current mail-client flow does not confirm receipt.",
  },
  {
    step: "Step 4",
    title: "Pick ONE pilot",
    body: "Either grocery / home service OR the taxation chamber site. Not both. Not yet.",
  },
] as const;

export default function FoundationPage() {
  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative flex min-h-[70svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={50} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color="oklch(0.82 0.13 80)"
          size={760}
        />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <Compass className="h-3 w-3 text-[var(--gold)]" />
            Before Founding · Execution Map
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            The work <span className="italic text-gradient-violet">before</span> the founding
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Proposed entry points, three execution layers, and one controlled loop at a time until
            Day One on 21 July 2026. Offline operations require evidence outside this repository.
          </p>
          <div className="mt-10">
            <Countdown variant="compact" />
          </div>
        </div>
      </section>

      {/* WHAT WE ALREADY HAVE */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="01 · What needs evidence"
            title="Four proposed entry points"
            subtitle="This repository can describe the map. It cannot prove offline operations, customers, professionals, pilots, or revenue."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ENTRY_POINTS.map((e) => (
              <div
                key={e.title}
                className="group relative overflow-hidden rounded-3xl border-hairline bg-card/40 p-7 transition hover:bg-card/60"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition group-hover:opacity-50"
                  style={{ background: e.accent }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/55">
                      {e.tag}
                    </span>
                    <e.icon className="h-5 w-5" style={{ color: e.accent }} />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-foreground sm:text-3xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/45">
                    {e.status}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--gold)]/80" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border-hairline bg-background/40 px-4 py-3 text-sm">
                    <span className="text-foreground/55">Intended role · </span>
                    <span className="text-foreground">{e.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE KEY ISSUE */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/40 p-8 sm:p-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            02 · The honest issue
          </span>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            We are trying to build <span className="italic text-gradient-violet">everything</span>{" "}
            at once.
          </h2>
          <p className="mt-5 text-foreground/75">
            Institutions, businesses, social systems, infrastructure, AI concepts, and ownership
            structure are too broad to claim at once. The result can become mental overload,
            execution confusion, and slow progress in every track.
          </p>
          <p className="mt-4 text-foreground/75">
            The fix is not more ideas. The fix is{" "}
            <strong className="text-foreground">controlled execution loops</strong> — one system
            fully working, then the next.
          </p>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="03 · The correct structure"
            title="Three layers, in order"
            subtitle="Each layer must breathe on its own before the next one starts pulling resources."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {LAYERS.map((l, i) => (
              <div
                key={l.num}
                className="relative flex flex-col rounded-3xl border-hairline bg-card/40 p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl italic text-foreground/15">0{i + 1}</span>
                  <l.icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <span className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gold)]/85">
                  {l.num}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-foreground">{l.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{l.body}</p>
                <div className="mt-auto pt-5">
                  <div className="rounded-2xl border-hairline bg-background/40 px-4 py-3 text-sm">
                    <span className="text-foreground/55">Goal · </span>
                    <span className="text-foreground">{l.goal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERSHIP CORRECTION */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-500/20 bg-amber-500/[0.04] p-8 sm:p-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-amber-300" />
            <span className="text-xs uppercase tracking-[0.3em] text-amber-300/90">
              04 · Ownership correction
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Permanent in mission. Flexible in law.
          </h2>
          <p className="mt-5 text-foreground/75">
            The instinct to say{" "}
            <em>
              “The portion of The Founder's family property will be used forever for meUus, never
              sold”
            </em>{" "}
            is beautiful — and risky if locked informally too early.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Keep ownership legally clean",
              "Use assets through agreements or trusts later",
              "Do not lock anything informally at this stage",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border-hairline bg-background/40 p-4 text-sm text-foreground/85"
              >
                {x}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/65">
            The mission stays permanent. The legal structure stays flexible. Early-stage systems
            need flexibility, legal clarity, and risk protection — not informal forever-locks.
          </p>
        </div>
      </section>

      {/* NEXT 7 DAYS */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="05 · The next 7 days"
            title="Forget everything big for a moment"
            subtitle="Four steps. Nothing more. Finish them before adding a single new idea."
          />
          <ol className="mt-12 space-y-4">
            {NEXT_SEVEN.map((s, i) => (
              <li
                key={s.step}
                className="flex items-start gap-5 rounded-3xl border-hairline bg-card/40 p-6 sm:p-7"
              >
                <span className="font-serif text-4xl italic text-gradient-violet sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gold)]/85">
                    {s.step}
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-foreground sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* THE REAL TRUTH */}
      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-hairline bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            06 · The real truth
          </span>
          <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            We don’t need more ideas. <br className="hidden sm:block" />
            We need <span className="italic text-gradient-violet">controlled execution loops.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/70">
            One system working fully. Then the next. Not parallel expansion — yet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Join the founding loop <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              See the ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
