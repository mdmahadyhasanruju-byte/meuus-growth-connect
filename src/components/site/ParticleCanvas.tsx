import { useEffect, useRef } from "react";

interface ParticleCanvasProps {
  density?: number;
  className?: string;
}

export function ParticleCanvas({ density = 60, className }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let width = (canvas.width = canvas.offsetWidth * pixelRatio);
    let height = (canvas.height = canvas.offsetHeight * pixelRatio);

    const particles = Array.from({ length: density }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
    }));

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 * pixelRatio) {
            ctx.strokeStyle = `rgba(167,139,250,${0.12 * (1 - dist / (140 * pixelRatio))})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(220,210,255,0.55)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r * pixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const animate = () => {
      drawFrame();
      raf = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const syncAnimation = () => {
      stopAnimation();
      drawFrame();
      if (!document.hidden && !motionQuery.matches) {
        raf = requestAnimationFrame(animate);
      }
    };

    const onResize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = canvas.offsetWidth * pixelRatio;
      height = canvas.height = canvas.offsetHeight * pixelRatio;
      if (document.hidden || motionQuery.matches) {
        drawFrame();
      }
    };

    syncAnimation();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", syncAnimation);
    motionQuery.addEventListener("change", syncAnimation);

    return () => {
      stopAnimation();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", syncAnimation);
      motionQuery.removeEventListener("change", syncAnimation);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute inset-0 h-full w-full opacity-60"}
      aria-hidden
    />
  );
}
