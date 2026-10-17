import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book meUus — LEARN gateway" },
      {
        name: "description",
        content: "Compatibility gateway to the current Book meUus learning resources on meUusSoul.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://meuussoul.com/books" }],
  }),
  component: BookGateway,
});

function BookGateway() {
  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[68svh] flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6">
        <ParticleCanvas density={30} />
        <div className="relative z-10 max-w-4xl animate-fade-up">
          <BookOpen className="mx-auto h-8 w-8 text-[var(--gold)]" />
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
            Book meUus · LEARN
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            The current book and learning resources live on{" "}
            <span className="italic text-gradient-violet">meUusSoul.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            This older UNDERSTAND route remains only as a compatibility bridge so historical links
            do not disappear.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="https://meuussoul.com/books"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              Open Book meUus on LEARN <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/soul"
              className="inline-flex items-center rounded-full border-hairline bg-glass px-6 py-3 text-sm font-medium text-foreground"
            >
              LEARN gateway
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
