import { createFileRoute, Link } from "@tanstack/react-router";
import { Accessibility, ArrowRight, Keyboard, TimerOff } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — meUus" },
      {
        name: "description",
        content:
          "The current meUus accessibility commitment and the limits of the public site and Journey prototype.",
      },
    ],
    links: [{ rel: "canonical", href: "https://meuus.org/accessibility" }],
  }),
  component: AccessibilityPage,
});

const CURRENT_PRACTICES = [
  {
    title: "Keyboard use",
    body: "The current public interface is designed around semantic links, buttons, and visible keyboard focus. The site also provides a skip link to main content.",
    icon: Keyboard,
  },
  {
    title: "No time limit in Journey",
    body: "The current Journey prototype does not impose a timed task. It is browser-local and can be cleared and restarted from its own controls.",
    icon: TimerOff,
  },
  {
    title: "Ongoing review",
    body: "Accessibility is a continuing practice. This statement describes the current interface intention; it is not a claim of complete compliance or universal usability.",
    icon: Accessibility,
  },
] as const;

function AccessibilityPage() {
  return (
    <div className="px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Accessibility"
          title="A calmer, more usable public path."
          subtitle="The current meUus interface aims to make the available public paths understandable and operable without claiming that every access need has already been solved."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CURRENT_PRACTICES.map((practice) => {
            const Icon = practice.icon;
            return (
              <article key={practice.title} className="rounded-3xl border-hairline bg-card/45 p-7">
                <Icon className="h-6 w-6 text-[var(--gold)]" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-3xl text-foreground">{practice.title}</h2>
                <p className="mt-4 leading-relaxed text-foreground/70">{practice.body}</p>
              </article>
            );
          })}
        </div>

        <section className="mt-12 rounded-3xl border-hairline bg-card/45 p-8 sm:p-10">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Known limits stay visible.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-foreground/70">
            The existing public site is still being developed in bounded stages. If a route,
            control, device, language choice, or assistive technology does not work as expected,
            that is a limitation to review—not a reason to make an unsupported accessibility claim.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/journey/accessibility"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              Journey accessibility note <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/safety"
              className="inline-flex min-h-11 items-center rounded-full border-hairline bg-glass px-5 py-3 text-sm font-medium text-foreground"
            >
              Read safety boundaries
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
