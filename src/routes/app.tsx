import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleDot, LayoutDashboard, Map, ShieldCheck, UserRound } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "meUus App — Reflect + Act" },
      {
        name: "description",
        content:
          "The current meUus App is a bounded authenticated pilot for sign-in, Dashboard, Profile, Growth Paths, and responsible next-step work. The wider envisioned platform remains in development.",
      },
      { property: "og:title", content: "meUus App — Reflect + Act" },
      {
        property: "og:description",
        content: "A live bounded authenticated pilot inside the developing meUus ecosystem.",
      },
    ],
  }),
  component: AppPage,
});

const AVAILABLE_NOW = [
  {
    title: "Sign in and return",
    body: "The accepted pilot evidence supports authentication, session restoration after reopen, and sign-out/session clearance.",
    icon: ShieldCheck,
  },
  {
    title: "Dashboard and Profile",
    body: "The bounded authenticated surface includes Dashboard and Profile flows rather than only a public placeholder.",
    icon: UserRound,
  },
  {
    title: "Growth Paths",
    body: "Growth Path navigation is part of the current bounded app experience and remains separate from claims about the whole future platform.",
    icon: Map,
  },
] as const;

const STILL_BOUNDED = [
  "The whole envisioned meUus platform is not being declared complete.",
  "No automated diagnosis, human-worth scoring, or professional judgment authority.",
  "No claim that the full DLAS runtime is publicly validated or operating as an assessment service.",
  "No claim that broad autonomous AI agents, marketplace automation, payments, rewards, subscriptions, or certifications are fully live.",
  "Production, database, and future migration changes remain evidence-gated.",
] as const;

function AppPage() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[72svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={42} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <CircleDot className="h-3 w-3 text-[var(--gold)]" />
            Reflect + Act · Live bounded pilot
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            meUus App{" "}
            <span className="italic text-gradient-violet">is available as a bounded pilot.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70">
            The current app supports an authenticated starting point, Dashboard, Profile, session
            restoration, and Growth Paths. That evidence is real, while the wider Intelligence OS,
            automation, marketplace, payments, and future DLAS directions remain separate from the
            present claim.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.meuus.app/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Open meUus App <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/status"
              className="inline-flex items-center rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
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
            eyebrow="What is supported now"
            title="A real authenticated slice, not a claim that everything is finished."
            subtitle="Claim ≤ Evidence remains the boundary."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {AVAILABLE_NOW.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border-hairline bg-card/45 p-6">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                  <h2 className="mt-5 font-serif text-2xl text-foreground">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/68">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Current boundary"
            title="Live bounded pilot does not mean the full future platform is live."
            subtitle="The app can be useful now while deeper systems remain under controlled integration."
          />
          <div className="space-y-3">
            {STILL_BOUNDED.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-foreground/10 bg-background/60 p-4"
              >
                <CircleDot className="mt-1 h-3.5 w-3.5 flex-none text-[var(--gold)]" />
                <p className="text-sm leading-relaxed text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-hairline bg-card/50 p-8 text-center">
          <LayoutDashboard className="mx-auto h-7 w-7 text-[var(--gold)]" />
          <h2 className="mt-5 font-serif text-4xl text-foreground">
            Continue from the actual app.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/68">
            UNDERSTAND explains the ecosystem. LEARN lives on meUusSoul. REFLECT + ACT continues
            through the bounded authenticated app.
          </p>
          <a
            href="https://www.meuus.app/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
          >
            Go to meuus.app <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
