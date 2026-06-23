interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto text-center" : "text-left"
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/85 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-[var(--gold)]/40" />
          {eyebrow}
          <span className="h-px w-6 bg-[var(--gold)]/40" />
        </div>
      )}
      <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
