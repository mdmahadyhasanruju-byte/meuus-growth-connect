import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ROLES, type Role } from "@/data/roles";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Countdown } from "@/components/site/Countdown";

const searchSchema = z.object({
  role: z.string().optional(),
});

export const Route = createFileRoute("/join")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Join meUus — Founding Roles Open Until 21 July 2026" },
      {
        name: "description",
        content:
          "Co-founder, Execution Partner, Investor, Founding Member, Core Team, Campus Ambassador, Advisor, Volunteer — all roles open.",
      },
      { property: "og:title", content: "Join the meUus Founding Journey" },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  const { role: initialRole } = Route.useSearch();
  const [openSlug, setOpenSlug] = useState<string | null>(initialRole || null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (initialRole && refs.current[initialRole]) {
      setTimeout(() => {
        refs.current[initialRole]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
      setOpenSlug(initialRole);
    }
  }, [initialRole]);

  return (
    <div className="relative isolate">
      <section className="relative flex min-h-[60svh] flex-col items-center justify-center px-4 pt-32 pb-12 text-center sm:px-6">
        <ParticleCanvas density={50} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color="oklch(0.82 0.13 80)"
          size={700}
        />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            Founding Phase · Open Until 21 July 2026
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            Join the <span className="italic text-gradient-violet">founding</span> journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70">
            Before founding, we are choosing the founders. Every meaningful role is open — choose
            where you fit.
          </p>
          <div className="mt-8">
            <Countdown variant="compact" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-4">
          {ROLES.map((r) => (
            <div
              key={r.slug}
              ref={(el) => {
                refs.current[r.slug] = el;
              }}
              className={`overflow-hidden rounded-3xl border-hairline bg-card/40 transition ${
                openSlug === r.slug ? "ring-1 ring-white/15 bg-card/60" : ""
              }`}
            >
              <button
                onClick={() => setOpenSlug(openSlug === r.slug ? null : r.slug)}
                className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8"
              >
                <span className="font-serif text-4xl" style={{ color: r.color }}>
                  {r.symbol}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-2xl text-foreground sm:text-3xl">{r.title}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[0.6rem] uppercase tracking-wider ${
                        r.urgency === "Most Urgent"
                          ? "bg-rose-500/20 text-rose-300"
                          : r.urgency === "Urgent"
                            ? "bg-amber-500/20 text-amber-300"
                            : "bg-white/10 text-foreground/65"
                      }`}
                    >
                      {r.urgency}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/65">{r.short}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-foreground/55 transition ${openSlug === r.slug ? "rotate-180" : ""}`}
                />
              </button>

              {openSlug === r.slug && <RoleDetails role={r} />}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-hairline bg-card/40 p-8 text-center">
          <h3 className="font-serif text-2xl text-foreground">Not sure where you fit?</h3>
          <p className="mt-2 text-foreground/65">
            Write to us anyway. If the intention is real, there is a seat.
          </p>
          <Link to="/" className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--gold)]">
            Back home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function RoleDetails({ role }: { role: Role }) {
  return (
    <div className="border-t border-white/5 px-6 pb-8 pt-6 sm:px-8 animate-fade-up">
      <p className="text-foreground/75">{role.description}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">
            Responsibilities
          </h4>
          <ul className="mt-3 space-y-2">
            {role.responsibilities.map((x) => (
              <li key={x} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-[var(--gold)]" />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]/85">Ideal fit</h4>
          <ul className="mt-3 space-y-2">
            {role.ideal.map((x) => (
              <li key={x} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-[var(--gold)]" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-xs text-foreground/65">
        <span className="rounded-full border-hairline bg-glass px-3 py-1">
          ⌛ {role.commitment}
        </span>
        <span className="rounded-full border-hairline bg-glass px-3 py-1">★ {role.reward}</span>
      </div>

      <ApplyForm role={role} />
    </div>
  );
}

function ApplyForm({ role }: { role: Role }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // No backend is wired yet — hand off via the user's mail client so the
    // application actually reaches the operator instead of sitting in browser
    // localStorage where it could be exfiltrated by any future XSS.
    const subject = encodeURIComponent(`Founding application — ${role.title}`);
    const body = encodeURIComponent(
      `Role: ${role.title}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    window.location.href = `mailto:hello@meuus.org?subject=${subject}&body=${body}`;

    setSubmitted(true);
    toast.success(`Opening your email app to send your ${role.title} application`, {
      description: "Please hit send in your mail client to complete the application.",
    });
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border-hairline bg-card/60 p-6 text-center shadow-glow-violet animate-scale-in">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
          <Check className="h-6 w-6" />
        </div>
        <h4 className="mt-4 font-serif text-2xl text-foreground">Application received</h4>
        <p className="mt-2 text-sm text-foreground/65">
          Thank you for stepping forward as <strong>{role.title}</strong>. We will reach out soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-3 rounded-2xl border-hairline bg-background/30 p-5 sm:grid-cols-2"
    >
      <input
        required
        name="name"
        placeholder="Your name"
        className="rounded-xl border-hairline bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/50"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-xl border-hairline bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/50"
      />
      <input
        name="phone"
        placeholder="Phone (optional)"
        className="rounded-xl border-hairline bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/50 sm:col-span-2"
      />
      <textarea
        required
        name="message"
        rows={4}
        placeholder={`Why ${role.title}? Tell us briefly.`}
        className="rounded-xl border-hairline bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/50 sm:col-span-2"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02] sm:col-span-2"
      >
        Apply for {role.title}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
