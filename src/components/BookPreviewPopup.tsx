import { Link, useLocation } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "meuus-book-preview-popup-dismissed-v1";

function shouldSkipPopup(pathname: string) {
  return pathname === "/book" || pathname.startsWith("/books/");
}

export function BookPreviewPopup() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldSkipPopup(location.pathname)) {
      setIsVisible(false);
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (window.localStorage.getItem(STORAGE_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!isVisible || typeof window === "undefined") {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissPopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  const dismissPopup = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/50 px-4 pb-5 backdrop-blur-sm sm:items-center sm:pb-0"
      role="presentation"
    >
      <section
        aria-describedby="book-preview-popup-description"
        aria-labelledby="book-preview-popup-title"
        aria-modal="true"
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#090814]/95 p-6 shadow-2xl shadow-violet-950/40 sm:p-7"
        role="dialog"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_38%)]" />
        <div className="relative">
          <button
            aria-label="Close book preview popup"
            className="absolute right-0 top-0 rounded-full border border-white/10 bg-white/[0.06] p-2 text-foreground/70 transition hover:bg-white/10 hover:text-foreground"
            onClick={dismissPopup}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>

          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">
            Book Preview
          </p>
          <h2
            className="mt-4 max-w-sm font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl"
            id="book-preview-popup-title"
          >
            Be — The Starting Point — meUus
          </h2>
          <p
            className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base"
            id="book-preview-popup-description"
          >
            A working public preview of the meUus starting philosophy: Be before action, Listen
            Before Knowledge, Knowledge Before Action, and one responsible next step.
          </p>
          <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-xs font-medium text-foreground/70">
            Extended Manuscript Preview v0.3 · Not final publication
          </p>
          <p className="mt-3 text-xs leading-5 text-foreground/50">
            Shared for early reading, reflection, and project transparency. Reader edition in
            preparation.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.01]"
              onClick={dismissPopup}
              to="/book"
            >
              Read the book preview
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-foreground/75 transition hover:bg-white/10 hover:text-foreground"
              onClick={dismissPopup}
              type="button"
            >
              Not now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
