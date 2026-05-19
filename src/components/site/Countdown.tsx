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

interface CountdownProps {
  variant?: "hero" | "compact";
}

export function Countdown({ variant = "hero" }: CountdownProps) {
  const [t, setT] = useState(diff());

  useEffect(() => {
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
        <span>{String(t.hours).padStart(2, "0")}h {String(t.minutes).padStart(2, "0")}m</span>
        <span className="text-foreground/40">·</span>
        <span className="text-[var(--gold)]">21 July 2026</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
        <span className="h-px w-8 bg-foreground/30" />
        Final Execution begins · 21 July 2026
        <span className="h-px w-8 bg-foreground/30" />
      </div>
      <div className="grid grid-cols-4 gap-3 sm:gap-5">
        {units.map((u) => (
          <div
            key={u.label}
            className="flex w-20 flex-col items-center rounded-xl border-hairline bg-glass px-3 py-4 sm:w-28 sm:py-5"
          >
            <span className="font-serif text-4xl font-medium tabular-nums text-gradient-violet sm:text-6xl">
              {String(u.v).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/55 sm:text-xs">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
