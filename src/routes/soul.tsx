import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CircleDot,
  Compass,
  Feather,
  Library,
  ShieldCheck,
} from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/soul")({
  head: () => ({
    meta: [
      { title: "meUus Soul - meUus" },
      {
        name: "description",
        content:
          "The developing learning and reflection layer of meUus, presented carefully as a starting point rather than a completed knowledge library.",
      },
      { property: "og:title", content: "meUus Soul - meUus" },
      {
        property: "og:description",
        content:
          "A calm public starting point for understanding the principles behind meUus before action begins.",
      },
    ],
  }),
  component: SoulPage,
});

const STATUS_LABELS = [
  "Phase Zero",
  "Learning Layer",
  "Reflection Content",
  "Not therapy",
  "Not diagnosis",
  "Not professional advice",
  "Not complete",
] as const;

const ECOSYSTEM_LABELS = [
  "Phase Zero",
  "Connected ecosystem",
  "Not complete",
  "Updating gradually",
  "No false live-service claim",
] as const;

const ECOSYSTEM_DOORS = [
  {
    step: "Understand",
    domain: "meuus.org",
    body: "Public truth, Amanah, Status, foundation.",
    to: "/",
  },
  {
    step: "Learn",
    domain: "meuussoul.com / /soul",
    body: "Knowledge Hub, Be, Listen Before Knowledge, Knowledge Before Action, visual maps.",
    to: "/soul",
  },
  {
    step: "Act",
    domain: "meuus.app",
    body: "Phase Zero reflection prototype, One Word Start, DLAS 21 Reflection Sample.",
    to: "/app",
  },
  {
    step: "Verify",
    domain: "/status and /amanah",
    body: "Claim ≤ Evidence, current reality, boundaries.",
    to: "/status",
  },
] as const;

const SOUL_EXPLAINS = [
  "Be before action",
  "Listen Before Knowledge",
  "Knowledge Before Action",
  "Claim ≤ Evidence",
  "me → U → us",
  "One Responsible Step",
] as const;

const SOUL_IS_NOT = [
  "therapy",
  "diagnosis",
  "fatwa",
  "emergency support",
  "professional legal, medical, or financial advice",
  "a completed course platform",
  "a validated assessment system",
  "a replacement for qualified human support",
] as const;

const ME_U_US = [
  {
    label: "me",
    body: "Self-awareness, honesty, responsibility.",
  },
  {
    label: "U",
    body: "Listening to another person’s reality with care.",
  },
  {
    label: "us",
    body: "Building shared responsibility without reducing the human being.",
  },
] as const;

const REFLECTION_SEQUENCE = [
  {
    label: "Understand",
    question: "Where am I now?",
  },
  {
    label: "Learn",
    question: "What do I know and what do I not know?",
  },
  {
    label: "Reflect",
    question: "What do I feel and what is calling me?",
  },
  {
    label: "Choose 1 Step",
    question: "What is one responsible action I can take next?",
  },
] as const;

const KNOWLEDGE_HUB_TOPICS = [
  {
    title: "Be — The Starting Point",
    meaning: "Before action, the person must return to truth, responsibility, and presence.",
    status: "Working public preview · v0.3. Not final publication.",
    comingSoon: "Reader edition in preparation.",
  },
  {
    title: "Listen Before Knowledge",
    meaning: "Before explaining, judging, or advising, meUus protects the first signal.",
    status: "Core principle.",
    comingSoon: "Examples, diagrams, and reflection prompts.",
  },
  {
    title: "Knowledge Before Action",
    meaning: "Action should follow enough truth, context, and boundary awareness to avoid harm.",
    status: "Core operating principle.",
    comingSoon: "Practical guide and decision flow.",
  },
  {
    title: "Claim ≤ Evidence",
    meaning: "meUus should never claim more than it can currently show.",
    status: "Public truth rule.",
    comingSoon: "Evidence ladder and claim review examples.",
  },
  {
    title: "me → U → us",
    meaning:
      "The path begins with self-awareness, moves toward another person, and grows into shared responsibility.",
    status: "Core identity.",
    comingSoon: "Visual journey map.",
  },
  {
    title: "One Word Start",
    meaning: "A single word can begin reflection without forcing a perfect explanation.",
    status: "Phase Zero app prototype.",
    comingSoon: "Connection with Journey and DLAS sample.",
  },
  {
    title: "One Responsible Step",
    meaning:
      "After reflection, the goal is not to fix everything at once, but to choose one honest next action.",
    status: "Phase Zero reflection principle.",
    comingSoon: "Examples and 7-day practice format.",
  },
  {
    title: "DLAS Concept",
    meaning:
      "DLAS is being explored as a structured reflection framework for understanding life context before action.",
    status: "Concept / reflection sample only.",
    comingSoon: "Research design and validation pathway.",
    boundary: "Not diagnosis. Not therapy. Not validated assessment.",
  },
  {
    title: "Journey",
    meaning: "Journey is the movement from first signal to responsible next step.",
    status: "Early architecture.",
    comingSoon: "Journey map, levels, and reflection flow.",
  },
  {
    title: "Nine Pillars",
    meaning: "The Nine Pillars are long-term directions for human development support.",
    status: "Vision / architecture direction.",
    comingSoon: "Each pillar explained separately.",
    boundary: "Not all services are live.",
  },
  {
    title: "Amanah",
    meaning: "Amanah is the trust responsibility that governs meUus decisions.",
    status: "Public foundation principle.",
    comingSoon: "Governance examples and decision rules.",
  },
  {
    title: "Source of Truth",
    meaning: "The Source of Truth protects memory, decisions, evidence, and correction.",
    status: "Documentation discipline.",
    comingSoon: "Public documentation structure.",
  },
  {
    title: "Governance",
    meaning: "Governance defines how decisions are made, corrected, verified, and inherited.",
    status: "Phase Two design priority.",
    comingSoon: "Governance constitution and 21 Souls exploration.",
  },
  {
    title: "AI / meYoo Future",
    meaning:
      "AI may support reflection and navigation in the future, but must remain bounded by truth and governance.",
    status: "Future concept.",
    comingSoon: "AI safety boundaries and architecture.",
    boundary: "No live AI advisor claim.",
  },
  {
    title: "Research and Validation",
    meaning: "Research must test and refine ideas before they are treated as proven systems.",
    status: "Blueprint direction.",
    comingSoon: "Research methodology, pilot design, and validation stages.",
    boundary: "Blueprint is not proof.",
  },
] as const;

const SAFE_LINKS = [
  {
    label: "Status",
    to: "/status",
    body: "What is live, limited, planned, or not available yet.",
  },
  {
    label: "Amanah",
    to: "/amanah",
    body: "The public trust covenant and boundaries for meUus.",
  },
  {
    label: "Pillars",
    to: "/pillars",
    body: "Intended directions for the wider meUus foundation.",
  },
  {
    label: "App gateway",
    to: "/app",
    body: "The current public app gateway, without claiming a complete product.",
  },
  {
    label: "Home",
    to: "/",
    body: "Return to the public foundation homepage.",
  },
] as const;

function SoulPage() {
  const location = useLocation();

  if (location.pathname !== "/soul" && location.pathname !== "/soul/") {
    return <Outlet />;
  }

  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={44} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            meUus Soul
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            meUus <span className="italic text-gradient-violet">Soul</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-foreground/75">
            The learning and reflection layer of meUus.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            Soul is where meUus explains its ideas slowly, visually, and truthfully. It is not a
            completed knowledge library yet. It is a starting point for understanding the principles
            behind meUus before action begins.
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {STATUS_LABELS.map((label) => (
              <span
                key={label}
                className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/soul/knowledge-before-action"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Begin with understanding <ArrowRight className="h-4 w-4" />
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

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Connected Ecosystem Doors"
            title="Understand → Learn → Act → Verify"
            subtitle="meUus is being built as one connected ecosystem, not separate disconnected websites."
          />
          <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-base leading-relaxed text-foreground/70">
            <p>
              <span className="font-semibold text-foreground">Understand:</span> meuus.org helps
              people see the public truth, current status, Amanah, and institutional foundation.
            </p>
            <p>
              <span className="font-semibold text-foreground">Learn:</span> meuussoul.com and /soul
              carry the knowledge, reflection, visual maps, and learning foundation.
            </p>
            <p>
              <span className="font-semibold text-foreground">Act:</span> meuus.app is the action
              doorway for Phase Zero reflection tools such as One Word Start and DLAS 21 Reflection
              Sample.
            </p>
            <p>
              <span className="font-semibold text-foreground">Verify:</span> Status and Amanah pages
              explain what is live, what is not live, and what remains future.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
            {ECOSYSTEM_LABELS.map((label) => (
              <span
                key={label}
                className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/70"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ECOSYSTEM_DOORS.map((door, index) => (
              <Link
                key={door.step}
                to={door.to}
                className="group rounded-2xl border border-foreground/10 bg-background/70 p-6 transition hover:border-primary/40"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <h2 className="font-serif text-2xl text-foreground">{door.step}</h2>
                <p className="mt-2 text-sm font-semibold text-primary">{door.domain}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">{door.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="What Soul is"
            title="Soul is the knowledge and reflection layer of meUus."
          />
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              Soul helps people understand the foundation before using tools or services. It is a
              public learning layer for careful meaning, not a claim that the wider system is
              complete.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {SOUL_EXPLAINS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.025] p-4"
                >
                  <CircleDot className="h-3.5 w-3.5 flex-none text-[var(--gold)]" />
                  <span className="text-sm font-medium text-foreground/75">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Knowledge Hub Starting Map"
            title="A first map of the ideas Soul will explain gradually."
            subtitle="Soul is the beginning of the meUus Knowledge Hub. It is not complete yet. Each topic starts with basic understanding, then grows through verified writing, diagrams, examples, and public updates."
          />
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-foreground/10 bg-background/70 p-5 text-center text-sm leading-relaxed text-foreground/65">
            Updating gradually: these cards name the starting map, not a finished library, validated
            system, professional service, or complete course platform.
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {KNOWLEDGE_HUB_TOPICS.map((topic) => (
              <article
                key={topic.title}
                className="flex h-full flex-col rounded-2xl border border-foreground/10 bg-background/70 p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Library className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl leading-tight text-foreground">{topic.title}</h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/65">
                  <p>
                    <span className="font-semibold text-foreground/80">Meaning: </span>
                    {topic.meaning}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground/80">Status: </span>
                    {topic.status}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground/80">Coming soon: </span>
                    {topic.comingSoon}
                  </p>
                  {"boundary" in topic ? (
                    <p className="rounded-xl border border-primary/15 bg-primary/5 p-3 text-foreground/70">
                      <span className="font-semibold text-primary">Boundary: </span>
                      {topic.boundary}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What Soul is not"
            title="Public reflection needs clear limits."
            subtitle="Soul is a learning and visualization layer. It is not a professional service, authority, emergency pathway, or completed platform."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SOUL_IS_NOT.map((boundary) => (
              <div
                key={boundary}
                className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <p className="text-sm leading-relaxed text-foreground/70">
                  Soul is not {boundary}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Visual Map 01"
            title="me → U → us"
            subtitle="meUus begins with the self, moves toward the other, and grows into responsible togetherness."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ME_U_US.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-serif text-2xl text-primary">
                  {item.label}
                </div>
                <h2 className="font-serif text-2xl text-foreground">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Visual Map 02"
            title="Understand → Learn → Reflect → Choose 1 Step"
            subtitle="This is not a scoring system. It is a reflection sequence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {REFLECTION_SEQUENCE.map((step, index) => (
              <article
                key={step.label}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <h2 className="font-serif text-2xl text-foreground">{step.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{step.question}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl text-foreground">Knowledge Before Action</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              Before acting, meUus asks for enough truth to avoid harm. Knowledge Before Action does
              not mean waiting forever. It means acting after honest listening, careful
              understanding, and responsible boundaries.
            </p>
            <Link
              to="/knowledge-before-action"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Read the public principle <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Feather className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl text-foreground">Listen Before Knowledge</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              Before knowledge comes listening. A person’s first word, first signal, or first
              confusion should not be rushed into judgment. Soul protects the pause before
              interpretation.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="Book connection"
              title="Be — The Starting Point — meUus"
              subtitle="The current working book preview supports the meUus philosophy and Soul / Knowledge Hub starting layer."
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              Current status: Extended Manuscript Preview v0.3 — Real Book Feel web edition. Working
              public preview. Not final publication. Reader edition in preparation.
            </p>
            <p>
              This page does not include private book content, final reader-edition claims, or
              professional-advice claims.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Visit the public book status page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Library className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl text-foreground">
              DLAS — Deep Life Assessment System
            </h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Concept / architecture direction / reflection sample only
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/70">
              DLAS is being explored as a structured reflection framework for understanding life
              context before action. It is not currently a validated assessment system, diagnostic
              tool, therapy tool, or professional service.
            </p>
          </div>
          <SectionHeading
            eyebrow="Claim ≤ Evidence"
            title="Soul names the direction without pretending the system is finished."
            subtitle="This page keeps DLAS as concept language only. It does not add accounts, databases, payments, dashboards, AI runtime, backend systems, scoring, diagnosis, or professional advice."
          />
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Verified public links"
            title="Continue only through existing public routes."
            subtitle="No new product, dashboard, AI, payment, or service flow is created here."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SAFE_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
              >
                <span className="text-sm font-semibold text-primary">{item.label}</span>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Current availability"
            title="meUus Soul is a starting point, not a finished destination."
            subtitle="The current verified public foundation remains meuus.org. Soul can grow as learning, reflection, visualization, book excerpts, and bilingual material are reviewed and published truthfully."
          />
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/soul/knowledge-before-action"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Open the first Soul learning path <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
            >
              Check current status
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
