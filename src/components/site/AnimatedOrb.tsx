interface AnimatedOrbProps {
  className?: string;
  color?: string;
  size?: number;
}

export function AnimatedOrb({
  className = "",
  color = "oklch(0.72 0.22 295)",
  size = 600,
}: AnimatedOrbProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl animate-pulse-glow ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
        opacity: 0.45,
      }}
    />
  );
}
