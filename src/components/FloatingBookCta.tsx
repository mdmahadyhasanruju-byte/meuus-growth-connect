import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

function shouldHideFloatingBookCta(pathname: string) {
  return pathname === "/book" || pathname.startsWith("/books/");
}

export function FloatingBookCta() {
  const location = useLocation();

  if (shouldHideFloatingBookCta(location.pathname)) {
    return null;
  }

  return (
    <Link
      aria-label="Read Be — The Starting Point — meUus book preview"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#090814]/90 px-4 py-3 text-sm font-semibold text-foreground shadow-2xl shadow-violet-950/30 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-[#111024]/95 hover:shadow-violet-900/40 sm:bottom-6 sm:right-6 sm:px-4"
      to="/book"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-[var(--gold)]">
        <BookOpen className="h-4 w-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--gold)]">
          Book Preview
        </span>
        <span className="hidden text-xs font-medium text-foreground/65 sm:inline">
          Be — The Starting Point
        </span>
      </span>
      <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-foreground/80">
        Read
      </span>
    </Link>
  );
}
