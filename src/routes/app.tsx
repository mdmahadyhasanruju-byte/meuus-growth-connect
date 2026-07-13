import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  CircleDot,
  Compass,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "meUus App - meUus" },
      {
        name: "description",
        content:
          "A future Act Layer prototype for meUus. Accounts, AI guidance, DLAS, payments, subscriptions, and certifications are not live.",
      },
      { property: "og:title", content: "meUus App - meUus" },
      {
        property: "og:description",
        content:
          "A future Act Layer prototype for meUus. Accounts, AI guidance, DLAS, payments, subscriptions, and certifications are not live.",
      },
    ],
  }),
  component: AppPage,
});

const AVAILABLE_NOW = [
  {
    label: "Journey",
    body: "The current verified app-like experience: a bounded browser-local reflection prototype.",
    to: "/journey",
  },
  {
    label: "Knowledge Before Action",
    body: "The public principle behind pausing, understanding, and choosing responsibly before action.",
    to: "/knowledge-before-action",
  },
  {
    label: "One Word Start",
    body: "A manual first step for beginning reflection without needing to explain everything yet.",
    to: "/one-word-start",
  },
] as const;

const NOT_LIVE_YET = [
  "meuus.app is a future Act Layer prototype.",
  "No full meUus App is live yet.",
  "No account system, email verification, or dashboard is live.",
  "No AI analysis, AI companion, or automated decision system is live.",
  "No DLAS runtime or complete DLAS assessment system is live.",
  "No cloud storage, database-backed profile, or Supabase auth flow is live.",
  "No payment, reward, subscription, or commercial app product is live.",
  "Accounts, AI guidance, DLAS, payments, subscriptions, and certifications are not live.",
  "Any forms, profiles, journeys, tiers, or dashboards shown are preview/prototype elements unless clearly approved.",
  "Do not submit personal data here unless a verified live privacy and consent flow is announced.",
  "Phase One is focused on governance, correction, and controlled preparation.",
] as const;

const FUTURE_DIRECTIONS = [
  "DLAS Level 0 explanations that may help people understand early concepts without claiming a live assessment runtime.",
  "Guided reflection flows that can remain human-centered and bounded.",
  "Local-first progress patterns before any future account or cloud direction is claimed.",
  "Responsible next-step suggestions framed as support, not automated decisions or guarantees.",
  "Learning paths connected to meUus Soul, Knowledge Before Action, and Book meUus.",
  "Profile and dashboard ideas that remain future concepts until verified and released.",
  "AI-assisted reflection with clear human boundaries, no diagnosis, and no automated authority.",
  "Bangla and English access developed gradually for broader public use.",
  "A future meuus.app domain direction, without claiming that domain is fully rebuilt or live.",
] as const;

const BOUNDARIES = [
  "Not a full app yet.",
  "Not diagnosis.",
  "Not therapy.",
  "Not legal, financial, medical, or employment advice.",
  "Not AI analysis.",
  "Not automated decision-making.",
  "Not a complete DLAS system.",
  "Not an account or cloud-storage system yet.",
  "Not a payment or subscription product yet.",
  "Not a guarantee of help, job, money, opportunity, or outcome.",
] as const;

function AppPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={42} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            meUus App
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            An app gateway <span className="italic text-gradient-violet">in development.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            meuus.app is a future Act Layer prototype for guided reflection, learning, and
            responsible next steps. Accounts, AI guidance, DLAS, payments, subscriptions, and
            certifications are not live. The current verified app-like experience is the bounded
            browser-local Journey on meuus.org.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Open the current Journey <ArrowRight className="h-4 w-4" />
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
            eyebrow="What meUus App is intended to become"
            title="A careful application layer for reflection, learning, and responsible action."
          />
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              meUus App is intended to become the application gateway for guided reflection,
              learning paths, and responsible next-step support inside the wider meUus ecosystem. It
              is being described here as a direction, not as a completed product.
            </p>
            <p>
              The current verified foundation remains meuus.org. The full app, account system,
              dashboard, AI analysis, DLAS runtime, cloud storage, payment system, and automated
              decision system are not live. Do not submit personal data here unless a verified live
              privacy and consent flow is announced.
            </p>
            <p>
              The{" "}
              <Link to="/status" className="text-primary underline">
                /status
              </Link>{" "}
              truth board remains the place to check what is live, what is planned, and what is not
              yet available.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What is available now"
            title="The verified app-like experience is the current Journey."
            subtitle="The public app gateway connects to live pages on meuus.org; it does not claim a full rebuilt app or a live meuus.app product."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {AVAILABLE_NOW.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6 transition hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl text-foreground">What is not live yet</h2>
            <div className="mt-6 grid gap-3">
              {NOT_LIVE_YET.map((item) => (
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
              eyebrow="Current truth"
              title="Claim less than the product roadmap."
              subtitle="The app direction may include deeper systems later, but today the public truth is smaller: the bounded browser-local Journey exists, and the rest remains planned or in development until verified."
            />
            <Link
              to="/status"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Check the truth board <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Compass className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="How the current Journey fits"
              title="Journey is the present bounded prototype, not the full app."
              subtitle="It gives people a browser-local way to pause, reflect, and move through a first public slice. It does not create an account, send private reflection to a cloud database, or run AI or DLAS analysis."
            />
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-foreground/70">
              The current Journey fits as the safest verified bridge between public pages and a
              future application experience. It keeps progress local to the browser and avoids
              presenting reflection as diagnosis, automated scoring, or professional advice.
            </p>
            <Link
              to="/journey"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Try the current Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="How One Word Start and Knowledge Before Action fit"
            title="The future app should begin with humane entry points, not extraction."
            subtitle="One Word Start provides a small manual beginning. Knowledge Before Action gives the discipline for understanding what is known, unknown, felt, assumed, and responsibly possible before acting."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/one-word-start"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">One Word Start</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Begin with one honest word before asking a person to explain a whole situation.
              </p>
            </Link>
            <Link
              to="/knowledge-before-action"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Knowledge Before Action</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Build responsible action from understanding, not urgency or overclaim.
              </p>
            </Link>
            <Link
              to="/soul"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">meUus Soul</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Connect future app learning paths to the developing public knowledge gateway.
              </p>
            </Link>
            <Link
              to="/book"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Book meUus</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Keep writing and reflection connected to evidence-bounded public work.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Future app directions"
            title="Future areas can be named without pretending they are live."
            subtitle="These directions are possible development areas only. They are not released systems, commercial offers, or verified automated capabilities."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {FUTURE_DIRECTIONS.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <Layers3 className="mb-4 h-5 w-5 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Boundaries"
            title="A future app still needs human limits."
            subtitle="The gateway is calm and spiritually respectful, but it is not religious prescription, professional advice, diagnosis, automated authority, or a promise of outcomes."
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
              eyebrow="Current availability"
              title="Use the live foundation while the app gateway develops."
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              The current verified public foundation is still meuus.org. The future app direction,
              including any future meuus.app domain work, remains in development until it is
              separately verified and reflected on the status board.
            </p>
            <p>
              People can begin today through the bounded Journey, Knowledge Before Action, One Word
              Start, meUus Soul, Book meUus, the status board, or the manual join page.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
              >
                Begin current Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
              >
                Express interest manually
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <BrainCircuit className="h-6 w-6" />
          </div>
          <SectionHeading
            align="center"
            eyebrow="Start safely"
            title="The responsible next step is the verified next step."
            subtitle="Check /status for the current truth, use the browser-local Journey if you want the existing prototype, and treat everything beyond that as future work until it is actually live."
          />
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Review current status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/soul"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
            >
              Visit meUus Soul
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
