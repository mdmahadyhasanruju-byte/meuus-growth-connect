import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, Globe2, ShieldCheck } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/domains")({
  head: () => ({
    meta: [
      { title: "meUus Domains" },
      {
        name: "description",
        content:
          "A truth-bounded guide to the intended roles of meuus.org, meuussoul.com, and meuus.app.",
      },
      { property: "og:title", content: "meUus Domains" },
      {
        property: "og:description",
        content: "Three public directions, one developing ecosystem.",
      },
    ],
  }),
  component: DomainsPage,
});

const DOMAINS = [
  {
    domain: "meuus.org",
    label: "Public foundation",
    status: "Live public gateway",
    summary: "The main public explanation and trust gateway for the developing meUus ecosystem.",
    points: [
      "Hosts the current verified public pages.",
      "Explains project status, founder direction, foundation, ecosystem, Journey, and public trust boundaries.",
      "The safest public place to check what is currently live, bounded, planned, or unavailable.",
    ],
    links: [
      { to: "/status", label: "Status" },
      { to: "/foundation", label: "Foundation" },
      { to: "/ecosystem", label: "Ecosystem" },
      { to: "/journey", label: "Journey" },
    ],
  },
  {
    domain: "meuussoul.com",
    label: "Knowledge and reflection direction",
    status: "In development",
    summary:
      "The intended deeper learning, reflection, writing, book, and knowledge-hub direction.",
    points: [
      "Currently represented safely through the meUus Soul gateway on meuus.org.",
      "Older or archived Soul material requires review before reuse and is not current production truth.",
      "This direction is not a replacement for professional, religious-authority, medical, legal, or emergency support.",
    ],
    links: [
      { to: "/soul", label: "Soul gateway" },
      { to: "/book", label: "Book meUus" },
      { to: "/knowledge-before-action", label: "Knowledge Before Action" },
    ],
  },
  {
    domain: "meuus.app",
    label: "Future app direction",
    status: "Gateway · future direction",
    summary:
      "The intended future product and app surface, currently represented by a bounded public gateway.",
    points: [
      "The current safe public gateway is meuus.org/app.",
      "The current verified Journey is browser-local.",
      "Separate app preview work exists, but a full app, live AI, DLAS runtime, accounts, dashboards, cloud storage, payments, subscriptions, rewards, and automated decisions are not live unless specifically stated on a verified status page.",
    ],
    links: [
      { to: "/app", label: "App gateway" },
      { to: "/journey", label: "Journey" },
      { to: "/privacy", label: "Privacy" },
      { to: "/consent", label: "Consent" },
    ],
  },
] as const;

const STATUS_LABELS = [
  {
    label: "Live",
    meaning:
      "A public route or bounded experience is currently available. It does not imply that every related system is operating.",
  },
  {
    label: "Browser-local",
    meaning:
      "Current progress remains in the visitor’s browser unless the page clearly states otherwise.",
  },
  {
    label: "Gateway",
    meaning:
      "A public explanation and entry point, not proof that the full product or service behind the direction is live.",
  },
  {
    label: "In development",
    meaning:
      "Work is active or intended, but the experience is not complete or confirmed production-ready.",
  },
  {
    label: "Future direction",
    meaning:
      "An intended path for the ecosystem, without a promise of present availability or delivery date.",
  },
  {
    label: "Archive evidence only",
    meaning:
      "Historical material preserved for review. It is not current production truth and should not be imported wholesale.",
  },
] as const;

function DomainsPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[68svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={36} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <Globe2 className="h-3.5 w-3.5 text-[var(--gold)]" />
            Public role map
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            meUus <span className="italic text-gradient-violet">Domains</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Three public directions, one developing ecosystem.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border-hairline bg-card/50 p-7 text-center shadow-glow-gold sm:p-10">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/55 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
              <ShieldCheck className="h-4 w-4" />
              Current boundary
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-foreground/72 sm:text-lg">
              This page explains the intended roles of the public meUus domains. It does not mean
              every feature, app, knowledge hub, AI system, DLAS service, account, dashboard, or
              backend workflow is already live.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Domain roles"
            title="Different surfaces, clearly separated."
            subtitle="Each domain has an intended role. Current availability should always be checked against the public status and trust boundaries."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {DOMAINS.map((domain) => (
              <article
                key={domain.domain}
                className="flex h-full flex-col rounded-3xl border-hairline bg-card/50 p-7"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
                    {domain.label}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl text-foreground">{domain.domain}</h2>
                  <div className="mt-4 inline-flex rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-xs text-foreground/70">
                    {domain.status}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/68">
                    {domain.summary}
                  </p>
                </div>

                <ul className="mt-7 space-y-4">
                  {domain.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/72"
                    >
                      <CircleDot className="mt-0.5 h-4 w-4 flex-none text-[var(--gold)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-foreground/10 pt-7">
                  {domain.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="rounded-full border-hairline bg-glass px-4 py-2 text-xs text-foreground transition-colors hover:text-[var(--gold)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How to read status labels"
            title="Availability words should carry limits."
            subtitle="These labels describe evidence and boundaries. They are not marketing tiers, guarantees, eligibility decisions, or achievement rankings."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STATUS_LABELS.map((item) => (
              <article key={item.label} className="rounded-2xl border-hairline bg-card/45 p-6">
                <p className="text-sm font-semibold text-[var(--gold)]">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/68">{item.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Before using or sharing"
            title="Check the current public boundaries."
            subtitle="Status explains what is live. Privacy, terms, and consent explain safe use. Appreciation records gratitude without implying endorsement or partnership."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              View status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/privacy"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Terms
            </Link>
            <Link
              to="/consent"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Consent
            </Link>
            <Link
              to="/appreciation"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Appreciation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
