import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/manifesto-full")({
  head: () => ({
    meta: [
      { title: "Archive moved — meUus" },
      {
        name: "description",
        content:
          "This historical identity route has moved out of the operating meUus surface and continues on rujbel.org.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://rujbel.org/" }],
  }),
  component: ArchiveRedirect,
});

function ArchiveRedirect() {
  useEffect(() => {
    window.location.replace("https://rujbel.org/");
  }, []);

  return (
    <div className="flex min-h-[70svh] items-center justify-center px-4 pt-28 text-center">
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85">
          Historical route preserved
        </p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Continuing on rujbel.org</h1>
        <p className="mt-5 leading-relaxed text-foreground/70">
          This identity and archive material is no longer published as a standalone page on the
          operating UNDERSTAND surface.
        </p>
        <a
          href="https://rujbel.org/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet"
        >
          Open rujbel.org <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
