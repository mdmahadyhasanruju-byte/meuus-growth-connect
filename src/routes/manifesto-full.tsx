import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";

export const Route = createFileRoute("/manifesto-full")({
  head: () => ({
    meta: [
      { title: "Founder Manifesto — Why meUus Had to Begin" },
      {
        name: "description",
        content:
          "A public founder manifesto about why meUus began and the truth, safety, dignity, and responsibility that must guide its development.",
      },
      { property: "og:title", content: "Founder Manifesto — Why meUus Had to Begin" },
      {
        property: "og:description",
        content:
          "A truthful beginning grounded in safety before automation, evidence before claims, and human dignity before systems.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://meuus.org/manifesto-full" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/manifesto-full" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Founder Manifesto — Why meUus Had to Begin",
          author: { "@type": "Person", name: "Md. Mahady Hasan" },
          publisher: { "@type": "Organization", name: "meUus" },
          dateModified: "2026-07-01",
          description:
            "A public founder manifesto about why meUus began and the responsibility that must guide its development.",
        }),
      },
    ],
  }),
  component: ManifestoFullPage,
});

const PRINCIPLES = [
  "Truth before scale",
  "Safety before automation",
  "Reflection before scoring",
  "Evidence before claims",
  "Small honest steps before loud promises",
];

const NEVER_BECOME = [
  "A system that reduces a person to a score, profile, data point, or performance measure.",
  "A fake authority that speaks with certainty it has not earned.",
  "A replacement for qualified professionals, qualified religious scholars, trusted family, emergency support, or real human care.",
  "A platform that asks for trust or sensitive data before earning that trust and establishing appropriate safeguards.",
];

const PUBLIC_BOUNDARIES = [
  "medical advice",
  "legal advice",
  "a religious ruling",
  "psychological advice",
  "financial advice",
  "employment or eligibility guidance",
  "emergency support",
  "a diagnosis",
  "an assessment",
  "a guarantee",
  "an automated decision",
];

const FOUNDATION_LINKS = [
  { to: "/status", label: "Current Status", note: "What is live, limited, and still planned." },
  {
    to: "/knowledge-before-action",
    label: "Knowledge Before Action",
    note: "Pause, learn, reflect, and choose one responsible step.",
  },
  {
    to: "/soul/knowledge-before-action",
    label: "Soul learning path",
    note: "The first bounded knowledge and reflection path.",
  },
  { to: "/privacy", label: "Privacy", note: "The current public privacy boundary." },
  { to: "/terms", label: "Terms", note: "Conditions of this early public foundation." },
  { to: "/consent", label: "Consent", note: "How choice and consent must be respected." },
  { to: "/domains", label: "Domains", note: "The public role of each meUus domain." },
] as const;

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-14 sm:py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">{title}</h2>
      <div className="mt-7 space-y-5 text-base leading-8 text-foreground/80 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

export default function ManifestoFullPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32 text-center sm:px-6">
        <ParticleCanvas density={45} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color="oklch(0.78 0.14 280)"
          size={760}
        />
        <div className="relative z-10 mx-auto max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-2 text-xs uppercase tracking-[0.24em] text-foreground/70">
            <BookOpen className="h-4 w-4 text-[var(--gold)]" />
            Public founder manifesto — refined from earlier private source writing
          </div>
          <h1 className="mt-7 font-serif text-5xl font-medium leading-[1.04] sm:text-7xl">
            Founder Manifesto
            <span className="mt-2 block italic text-gradient-violet">Why meUus Had to Begin</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            “I am not presenting meUus as a finished answer. I am presenting it as a truthful
            beginning.”
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/65 sm:text-lg">
            Md. Mahady Hasan · Founder, meUus · July 2026
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <Section eyebrow="01" title="Why this began">
          <p>
            meUus began from the experience of being unheard, misunderstood, and still searching for
            truth. That experience taught me how easily pain, assumptions, and urgency can outrun
            knowledge.
          </p>
          <p>
            I began to imagine clearer ways for people to slow down, learn what is known and
            unknown, reflect without immediate judgment, and choose one responsible next step. I do
            not claim that meUus has solved this challenge. The current public foundation is a place
            to begin carefully and build evidence over time.
          </p>
          <p>
            I am not perfect, complete, or a professional authority across the areas that meUus may
            one day explore. I am a founder responsible for separating vision from reality,
            listening to qualified people, correcting mistakes, and keeping claims within the
            evidence.
          </p>
        </Section>

        <Section eyebrow="02" title="What I had to learn first">
          <p>
            A human-centred project cannot protect people through good intention alone. It needs
            boundaries, evidence, consent, qualified review, and the humility to say “not yet.”
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 rounded-2xl border-hairline bg-glass px-5 py-4"
              >
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--gold)]" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
          <p>
            Knowledge should come before action. Reflection should come before judgment. Human
            dignity must come before scoring, data, automation, or performance. meUus must protect
            people before it tries to impress people.
          </p>
        </Section>

        <Section eyebrow="03" title="What meUus must never become">
          <ul className="space-y-4">
            {NEVER_BECOME.map((boundary) => (
              <li key={boundary} className="flex gap-3">
                <span aria-hidden="true" className="text-[var(--gold)]">
                  —
                </span>
                <span>{boundary}</span>
              </li>
            ))}
          </ul>
          <p>
            The wider meUus ecosystem remains in development. Public descriptions of future legal,
            financial, wellbeing, relational, spiritual, employment, and other directions describe
            intentions—not operating services or proven outcomes.
          </p>
        </Section>

        <Section eyebrow="04" title="Faith, tools, and responsibility">
          <p>
            My faith is part of my personal grounding. It calls me toward humility, accountability,
            learning, and care. I do not present this manifesto or meUus as religious authority.
            Questions requiring religious guidance belong with qualified scholars who can understand
            the person and context.
          </p>
          <p>
            AI and other tools may support drafting, coding, review, research organization, and
            administration. They do not own, endorse, validate, sponsor, or take responsibility for
            meUus. Tool output requires human review.
          </p>
          <p>
            The responsibility for meUus remains with its founder and future approved team.
            Mistakes, unfinished areas, and future corrections belong to the project itself.
          </p>
        </Section>

        <Section eyebrow="05" title="Public boundaries">
          <p>
            This manifesto, the founder letter, and the current public meUus foundation are
            educational and informational. They are not:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PUBLIC_BOUNDARIES.map((boundary) => (
              <li key={boundary} className="rounded-xl border border-white/10 px-4 py-3">
                {boundary}
              </li>
            ))}
          </ul>
          <p>
            If someone may be in danger, needs urgent help, or faces a high-stakes decision, they
            should contact appropriate local emergency services or a qualified professional. A
            public meUus page is not a substitute for that support.
          </p>
        </Section>

        <Section eyebrow="06" title="A careful beginning">
          <p>
            The most responsible way to understand meUus today is to check the evidence, read the
            boundaries, and use only what is actually available.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {FOUNDATION_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group rounded-2xl border-hairline bg-glass p-5 transition-colors hover:border-[var(--gold)]/40"
              >
                <span className="flex items-center justify-between gap-4 font-medium text-foreground">
                  {link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm leading-6 text-foreground/60">{link.note}</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="Source note" title="Preserving meaning without exposing private pain">
          <p>
            Some early founder writings remain private or archival because they were written in a
            raw personal voice. Public meUus pages should preserve the meaning without exposing
            private pain carelessly.
          </p>
          <p>
            Those original private founder source writings are part of the project’s history, not
            final public doctrine. This public manifesto carries forward their central
            responsibility: seek truth, protect dignity, admit limits, and take the next honest
            step.
          </p>
        </Section>

        <div className="rounded-3xl border border-[var(--gold)]/25 bg-glass p-8 text-center sm:p-12">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
            Claim must remain less than or equal to evidence.
          </p>
          <p className="mt-5 text-foreground/65">
            This is the discipline required for a truthful beginning.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-black"
            >
              Read the founder letter <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full border-hairline px-6 py-3 text-sm font-medium"
            >
              Check current status
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
