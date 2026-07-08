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
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/55 px-4 pb-5 backdrop-blur-md sm:items-center sm:pb-0"
      role="presentation"
    >
      <section
        aria-describedby="book-preview-popup-description"
        aria-labelledby="book-preview-popup-title"
        aria-modal="true"
        className="relative w-full max-w-[820px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080713]/95 p-6 text-center shadow-2xl shadow-violet-950/45 sm:p-10"
        role="dialog"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_36%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.14),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
        <div className="relative mx-auto max-w-2xl">
          <button
            aria-label="Close book preview popup"
            className="absolute right-0 top-0 rounded-full border border-white/10 bg-white/[0.06] p-2 text-foreground/70 transition hover:bg-white/10 hover:text-foreground"
            onClick={dismissPopup}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>

          <p className="text-center text-xs font-semibold uppercase tracking-[0.36em] text-[var(--gold)]">
            BOOK PREVIEW
          </p>
          <h2 className="mt-6 text-center font-serif text-foreground" id="book-preview-popup-title">
            <span className="block text-[clamp(4.5rem,14vw,8rem)] font-medium leading-[0.8] tracking-tight text-gradient-violet">
              Be
            </span>
            <span className="mt-5 block text-2xl font-medium leading-tight sm:text-4xl">
              The Starting Point — meUus
            </span>
          </h2>
          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
          <p
            className="mx-auto mt-6 max-w-xl text-center text-sm leading-7 text-foreground/72 sm:text-base"
            id="book-preview-popup-description"
          >
            A working public preview of the meUus starting philosophy: Be before action, Listen
            Before Knowledge, Knowledge Before Action, and one responsible next step.
          </p>
          <p className="mx-auto mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-center text-xs font-medium text-foreground/72">
            Extended Manuscript Preview v0.3 · Not final publication
          </p>
          <p className="mx-auto mt-4 max-w-md text-center text-xs leading-5 text-foreground/52">
            Shared for early reading, reflection, and project transparency. Reader edition in
            preparation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.01]"
              onClick={dismissPopup}
              to="/book"
            >
              Read the book preview
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-foreground/75 transition hover:bg-white/10 hover:text-foreground"
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
