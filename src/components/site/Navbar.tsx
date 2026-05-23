import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Countdown } from "./Countdown";

const LINKS = [
  { to: "/" as const, label: "Home" },
  { to: "/founder" as const, label: "Founder" },
  { to: "/manifesto-full" as const, label: "Manifesto" },
  { to: "/foundation" as const, label: "Foundation" },
  { to: "/ecosystem" as const, label: "Ecosystem" },
  { to: "/pillars" as const, label: "Pillars" },
  { to: "/global" as const, label: "Global" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* platinum hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-serif text-2xl font-medium tracking-tight">
            <span className="text-gradient-violet">me</span>
            <span className="text-foreground/90">Uus</span>
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-foreground/40 sm:inline">
            Connecting Everything
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/65 transition hover:text-foreground"
              activeProps={{ className: "!text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Countdown variant="compact" />
          </div>
          <Link
            to="/join"
            className="hidden whitespace-nowrap rounded-full bg-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-glow-violet transition hover:scale-[1.03] sm:inline-flex md:text-xs"
          >
            <span className="md:hidden">Join</span>
            <span className="hidden md:inline">Join Founding</span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border-hairline bg-glass p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-4 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-3 text-base text-foreground/75 hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "!text-foreground bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow-violet"
            >
              Join Founding
            </Link>
            <div className="mt-3 px-3">
              <Countdown variant="compact" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
