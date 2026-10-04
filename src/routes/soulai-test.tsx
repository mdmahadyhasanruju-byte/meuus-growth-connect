import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/soulai-test")({
  head: () => ({
    meta: [
      { title: "SoulAI Preview Status | meUus" },
      {
        name: "description",
        content:
          "An unlisted SoulAI chat preview is deployed with adult confirmation and consent. The first owner-led end-to-end check is pending.",
      },
      { property: "og:title", content: "SoulAI Preview Status | meUus" },
      {
        property: "og:description",
        content:
          "SoulAI is an unlisted, consent-gated chat preview. It is not an AI analysis or advice service.",
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
          SoulAI · Unlisted Preview
        </p>
        <h1 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
          A limited SoulAI chat preview is deployed.
        </h1>
        <p className="mt-6 text-base leading-8 text-foreground/75">
          The preview requires an adult confirmation and active consent before a message can be
          submitted. The first owner-led end-to-end inference check is still pending.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-background/45 p-5 sm:p-6">
          <p className="font-medium text-foreground">
            This status page does not submit messages. The preview is unlisted and is not linked
            from public navigation.
          </p>
          <p className="mt-3 text-sm leading-7 text-foreground/65">
            Chat text stays only in the page session and is sent to Cloudflare Workers AI for a
            response. meUus does not keep chat history. SoulAI is not DLAS, diagnosis, professional
            advice, or an automated decision system.
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
