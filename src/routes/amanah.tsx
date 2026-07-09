import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, Feather, HeartHandshake, ShieldCheck } from "lucide-react";

import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/amanah")({
  head: () => ({
    meta: [
      { title: "Amanah — meUus Trust Boundary" },
      {
        name: "description",
        content:
          "The Amanah layer explains meUus truth boundaries, evidence limits, and public responsibility during Phase Zero.",
      },
      { property: "og:title", content: "Amanah — meUus Trust Boundary" },
      {
        property: "og:description",
        content:
          "The Amanah layer explains meUus truth boundaries, evidence limits, and public responsibility during Phase Zero.",
      },
    ],
  }),
  component: AmanahPage,
});

const CORE_PRINCIPLES = [
  "Claim ≤ Evidence",
  "Knowledge before action",
  "Truth before scale",
  "Safety before automation",
  "Reflection before scoring",
  "Human dignity before data",
  "Manual review before automated decisions",
  "Public boundaries before public trust",
  "Preserve before restructuring",
  "Meaning before expansion",
  "Small honest steps before loud promises",
  "Service before status",
  "Humility before leadership",
  "Correction is amanah",
] as const;

const CONSTITUTION_SECTIONS = [
  "Bismillah / Opening",
  "First principle",
  "The pen before the system",
  "Prophetic standard of conduct",
  "Why this constitution exists",
  "Core law: Claim ≤ Evidence",
  "Soul, Trust, Work, Try, Support",
  "Founder inner guard",
  "Corruption guard",
  "Current truth rule",
  "Domain truth rule",
  "AI rule",
  "DLAS rule",
  "Professional boundary rule",
  "Payments, products, and money rule",
  "Roles, rewards, equity, and opportunity rule",
  "Archive and raw-writing rule",
  "Listening rule",
  "Support rule",
  "Correction rule",
  "Founder covenant",
  "Build rule",
  "What meUus must never become",
  "What meUus must try to become",
  "Final principle",
] as const;

const FREE_AGREEMENT = [
  "meUus must not control the soul, choices, faith, work, or future of any person.",
  "meUus must not force trust or demand submission to the project.",
  "meUus must not reduce people into scores, labels, diagnoses, spiritual judgments, or employability judgments.",
  "A person must remain free to enter, pause, leave, question, disagree, refuse, or not share sensitive information.",
  "meUus Soul must remain a learning and reflection path, not therapy, diagnosis, religious authority, or guaranteed transformation.",
  "The founder remains responsible for public claims, correction, and safe sequencing.",
  "The project must earn trust through evidence, not demand trust through emotion.",
] as const;

const AGREEMENT = [
  {
    title: "meUus agrees",
    body: "To remain truthful before becoming powerful, and to keep every public claim smaller than or equal to the evidence that supports it.",
  },
  {
    title: "meUus Soul agrees",
    body: "To protect reflection before guidance, and to stay within learning, knowledge, and responsible next-step boundaries.",
  },
  {
    title: "The founder agrees",
    body: "To protect meUus from ego, haste, false claims, money too early, AI arrogance, and using people's pain irresponsibly.",
  },
  {
    title: "The founder also recognizes",
    body: "In his faith-grounded worldview, the need to seek protection from shaytan, from Iblis, and from the nafs inside himself. This is founder discipline, not a judgment of users.",
  },
] as const;

const CURRENT_NOT_LIVE = [
  "Full app",
  "Backend",
  "Accounts",
  "AI runtime",
  "DLAS runtime",
  "Cloud storage",
  "Payments",
  "Rewards",
  "Subscriptions",
  "Dashboards",
  "Full service systems",
] as const;

function AmanahPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={36} />
        <AnimatedOrb className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" size={760} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
            Public trust covenant
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            meUus <span className="italic text-gradient-violet">Amanah</span> Constitution
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-foreground/75">
            The written trust before the system.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            meUus is an amanah before it is an app, company, platform, or ecosystem. This page makes
            that responsibility public in a human, humble, and bounded way.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-amber-400/25 bg-amber-400/[0.045] p-7 shadow-glow-gold sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <HeartHandshake className="h-6 w-6 flex-none text-amber-300" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/90">Boundary note</p>
              <p className="mt-3 text-base leading-relaxed text-foreground/78">
                This constitution is a founder-governance and project-trust document. It is not a
                religious ruling, legal contract, medical/psychological/financial advice, or service
                guarantee. It does not replace the Terms, Privacy, or Consent pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The first principle"
            title="Amanah before ambition."
            subtitle="The constitution exists so that meUus does not become louder than its evidence, faster than its safety, or more emotional than its responsibility."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-3xl border-hairline bg-card/50 p-7 sm:p-9">
              <Feather className="h-7 w-7 text-[var(--gold)]" aria-hidden="true" />
              <h2 className="mt-5 font-serif text-3xl text-foreground">
                The pen before the system.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/72 sm:text-base">
                Before action, write. Before promise, define. Before building, govern. Before
                guiding, know the boundary. Before serving, understand the burden. Before scaling,
                protect the trust.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-foreground/65">
                meUus does not claim divine authority, issue religious rulings, judge souls, or
                replace professional support. Faith may ground the founder, but it must not be used
                to pressure, manipulate, shame, or spiritually label users.
              </p>
            </article>
            <article className="rounded-3xl border-hairline bg-card/50 p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
                Core operating law
              </p>
              <h2 className="mt-4 font-serif text-3xl text-foreground">Claim ≤ Evidence</h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/72 sm:text-base">
                If evidence is small, the claim must be small. If something is planned, it must be
                called planned. If something is not live, it must not be called live. Truth is not
                weakness. Truth is protection.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {CORE_PRINCIPLES.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-2xl border-hairline bg-background/45 px-4 py-3 text-sm text-foreground/80"
                  >
                    {principle}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="A Free Amanah Agreement"
            title="People remain free before the project."
            subtitle="meUus must earn trust through evidence, not demand trust through emotion."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {FREE_AGREEMENT.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border-hairline bg-card/45 p-5">
                <CircleDot className="mt-0.5 h-4 w-4 flex-none text-[var(--gold)]" />
                <p className="text-sm leading-relaxed text-foreground/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Agreement Between meUus, Soul, and the Founder"
            title="Truthful power, protected reflection, founder discipline."
            subtitle="This agreement is an internal law of conduct, not a public judgment of users."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {AGREEMENT.map((item) => (
              <article key={item.title} className="rounded-3xl border-hairline bg-card/45 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
              Current truth rule
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              The full system must not be claimed before it is verified.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/70 sm:text-base">
              `meuus.org/status` remains the current public truth checkpoint until replaced by a
              newer approved source-of-truth. Domains must not contradict each other. `meuus.app`
              and `meuussoul.com` must be aligned with the same truth before they can represent
              public readiness.
            </p>
          </div>
          <div className="rounded-3xl border-hairline bg-card/50 p-7">
            <h3 className="font-serif text-2xl text-foreground">
              Not claimed as live unless verified
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CURRENT_NOT_LIVE.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border-hairline bg-background/45 px-4 py-3 text-sm text-foreground/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Full constitution"
            title="The internal document has twenty-five governing sections."
            subtitle="The public page gives the human-facing covenant. The source-of-truth document preserves the complete founder-governing constitution for future work, claims, AI, DLAS, payments, roles, archives, support, and correction."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONSTITUTION_SECTIONS.map((section, index) => (
              <div
                key={section}
                className="rounded-2xl border-hairline bg-card/45 px-5 py-4 text-sm text-foreground/78"
              >
                <span className="mr-2 font-serif text-lg italic text-[var(--gold)]/75">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-gradient-to-br from-card/70 via-card/35 to-card/60 p-8 text-center shadow-glow-violet sm:p-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Where this fits · Verify
          </span>
          <blockquote className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
            “I was not avoiding life. I was searching for the right form of responsibility. Now that
            a real door is opening, I will enter it with humility, discipline, and truth.
            InShaAllah.”
          </blockquote>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-foreground/65">
            The founder must not use meUus to escape life. The founder must use real life to make
            meUus truthful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Check current status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/domains"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              See domain boundaries
            </Link>
            <Link
              to="/soul"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Continue to Soul <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
