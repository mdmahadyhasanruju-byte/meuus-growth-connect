import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/soulai-test")({
  head: () => ({
    meta: [
      { title: "SoulAI Pilot Paused | meUus" },
      {
        name: "description",
        content:
          "The public SoulAI pilot is temporarily paused while meUus verifies its privacy, retention, deletion, and provider boundaries.",
      },
      { property: "og:title", content: "SoulAI Pilot Paused | meUus" },
      {
        property: "og:description",
        content:
          "The public SoulAI pilot is temporarily paused for privacy and data-handling review.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: SoulAiTestPage,
});

function SoulAiTestPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />
      <section className="relative mx-auto max-w-3xl rounded-3xl border border-violet-300/20 bg-card/70 p-7 shadow-glow-violet sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]/85">
          SoulAI · Privacy Review
        </p>
        <h1 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
          The public SoulAI pilot is temporarily paused.
        </h1>
        <p className="mt-6 text-base leading-8 text-foreground/75">
          meUus is verifying the pilot&apos;s privacy, retention, deletion, and provider boundaries
          before any further public use.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-background/45 p-5 sm:p-6">
          <p className="font-medium text-foreground">
            No SoulAI message can be submitted from this page while the review is in progress.
          </p>
          <p className="mt-3 text-sm leading-7 text-foreground/65">
            The pilot&apos;s source, history, and evidence are being preserved. This pause does not
            claim that existing records have been deleted, and no restart date is being promised.
          </p>
        </div>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-white/30 hover:text-foreground"
        >
          Return to meUus
        </Link>
      </section>
    </main>
  );
}
