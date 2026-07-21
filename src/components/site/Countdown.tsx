interface CountdownProps {
  variant?: "hero" | "compact";
}

export function Countdown({ variant = "hero" }: CountdownProps) {
  if (variant === "compact") {
    return (
      <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border-hairline bg-glass px-4 py-2 text-center text-xs font-medium tracking-wide text-foreground/90">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-glow-gold"
        />
        <span className="text-[var(--gold)]">Phase One</span>
        <span aria-hidden="true" className="text-foreground/40">
          —
        </span>
        <span>meUus Starting Point</span>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-foreground/25" />
        <span className="text-[0.6rem] uppercase tracking-[0.32em] text-foreground/45 sm:text-[0.65rem]">
          Public checkpoint
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-foreground/25" />
      </div>
      <p className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        <span className="text-[var(--gold)]">Phase One</span>
        <span className="text-foreground/45"> — </span>
        meUus Starting Point
      </p>
      <p className="text-sm text-foreground/60">
        Current verified status is maintained at{" "}
        <span className="font-medium text-[var(--gold)]">/status</span>.
      </p>
    </div>
  );
}
