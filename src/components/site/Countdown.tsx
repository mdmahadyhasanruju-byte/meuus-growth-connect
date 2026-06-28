import { useEffect, useState } from "react";

const LAUNCH = new Date("2026-07-21T00:00:00+06:00").getTime();

function diff() {
  const now = Date.now();
  const ms = Math.max(0, LAUNCH - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const INITIAL_TIME = { days: 0, hours: 0, minutes: 0, seconds: 0 };

interface CountdownProps {
  variant?: "hero" | "compact";
}

export function Countdown({ variant = "hero" }: CountdownProps) {
  const [t, setT] = useState(INITIAL_TIME);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", v: t.days },
    { label: "Hours", v: t.hours },
    { label: "Minutes", v: t.minutes },
    { label: "Seconds", v: t.seconds },
  ];

  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-2 text-xs font-medium tracking-wide text-foreground/90">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-glow-gold" />
        <span>{t.days}d</span>
        <span className="text-foreground/40">·</span>
        <span>
          {String(t.hours).padStart(2, "0")}h {String(t.minutes).padStart(2, "0")}m
        </span>
        <span className="text-foreground/40">·</span>
        <span className="text-[var(--gold)]">21 July 2026</span>
      </div>
    );
  }

  const accents = [
    "text-[oklch(0.85_0.13_180)]", // teal — Days
    "text-foreground/95", // Hours
    "text-foreground/95", // Minutes
    "text-[oklch(0.78_0.14_280)]", // indigo — Seconds
  ];

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-foreground/25" />
        <span className="text-[0.6rem] uppercase tracking-[0.32em] text-foreground/45 sm:text-[0.65rem]">
          Final Execution Begins · 21 July 2026
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-foreground/25" />
      </div>
      <div className="grid w-full grid-cols-4">
        {units.map((u, i) => (
          <div
            key={u.label}
            className={`flex flex-col items-center px-2 sm:px-4 ${
              i > 0 ? "border-l border-white/10" : ""
            }`}
          >
            <span
              className={`font-serif text-5xl font-light leading-none tabular-nums sm:text-6xl md:text-7xl ${accents[i]} ${
                i === 0 ? "italic" : ""
              }`}
            >
              {String(u.v).padStart(2, "0")}
            </span>
            <span
              className={`mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.65rem] ${
                i === 0 ? "text-[oklch(0.85_0.13_180)]" : "text-foreground/40"
              }`}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
