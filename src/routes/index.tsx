import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  Compass,
  ExternalLink,
  Fingerprint,
  LayoutDashboard,
  LockKeyhole,
  Map,
  MessageCircleMore,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "meUus — Start with clarity" },
      {
        name: "description",
        content:
          "Start with understanding, learn what matters, reflect privately, and choose one responsible next step with meUus.",
      },
      { property: "og:title", content: "meUus — Start with clarity" },
      {
        property: "og:description",
        content:
          "A bounded public foundation and authenticated app pilot for learning, reflection, and responsible next steps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const PROOF_POINTS = [
  "Live public foundation",
  "Verified app sign-in",
  "Session restoration",
  "Claim ≤ Evidence",
] as const;

const STARTING_PATHS = [
  {
    eyebrow: "Live bounded pilot",
    title: "meUus App",
    description:
      "Sign in, return to your Dashboard and Profile, and continue through Growth Paths with session restoration.",
    href: "https://www.meuus.app/",
    external: true,
    icon: LayoutDashboard,
    accent: "bg-[#7157ff]",
    panel: "bg-[#efeaff]",
  },
  {
    eyebrow: "Learning layer",
    title: "meUus Soul",
    description:
      "Begin with source-labelled learning, Knowledge Before Action, and a private moment of reflection.",
    href: "/soul",
    external: false,
    icon: BookOpen,
    accent: "bg-[#ff6f4d]",
    panel: "bg-[#fff0e9]",
  },
  {
    eyebrow: "Browser-local prototype",
    title: "Journey",
    description:
      "Understand what is present, record an optional reflection locally, and choose one responsible next step.",
    href: "/journey",
    external: false,
    icon: RouteIcon,
    accent: "bg-[#19a974]",
    panel: "bg-[#e8f8f1]",
  },
] as const;

const STEPS = [
  [
    "01",
    "Understand",
    "Name what is present without turning a feeling, question, or difficulty into a diagnosis.",
    Compass,
  ],
  [
    "02",
    "Learn",
    "Use bounded, source-labelled material to understand the situation before choosing action.",
    BookOpen,
  ],
  [
    "03",
    "Reflect",
    "Pause privately, separate facts from assumptions, and notice what matters most right now.",
    MessageCircleMore,
  ],
  [
    "04",
    "Choose one step",
    "Move forward responsibly, including manual support or referral where that is more appropriate.",
    ArrowRight,
  ],
] as const;

const BOUNDARIES = [
  "No public AI analysis",
  "No live DLAS scoring runtime",
  "No automated decisions",
  "No payments, rewards, or subscriptions",
  "No diagnosis or professional advice",
  "No claim of validated outcomes",
] as const;

function ProductPreview() {
  const previewNavigation = [
    [LayoutDashboard, "Dashboard", true],
    [CircleUserRound, "Profile", false],
    [Map, "Growth Paths", false],
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-[42rem] lg:mx-0">
      <div className="absolute -left-10 top-16 h-36 w-36 rounded-full bg-[#ffc94a]/55 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-44 w-44 rounded-full bg-[#8f7bff]/40 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-950/10 bg-white shadow-[0_32px_90px_rgba(30,24,65,0.18)]">
        <div className="flex items-center justify-between border-b border-slate-950/8 px-4 py-3 sm:px-5">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f4d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffc94a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#19a974]" />
          </div>
          <span className="rounded-full bg-slate-950/[0.04] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Illustrative interface
          </span>
        </div>

        <div className="grid min-h-[26rem] grid-cols-[4.8rem_1fr] sm:grid-cols-[10.5rem_1fr]">
          <aside className="border-r border-slate-950/8 bg-[#faf9f6] p-3 sm:p-4">
            <div className="flex items-center gap-2 px-1 py-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                U
              </span>
              <span className="hidden text-sm font-bold text-slate-900 sm:inline">meUus</span>
            </div>
            <div className="mt-5 space-y-2">
              {previewNavigation.map(([Icon, label, active]) => (
                <div
                  key={label}
                  className={`flex min-h-11 items-center gap-2 rounded-xl px-2.5 text-xs font-semibold sm:px-3 ${
                    active ? "bg-[#7157ff] text-white" : "text-slate-500"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden sm:inline">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-24 hidden rounded-2xl border border-slate-950/8 bg-white p-3 sm:block">
              <div className="flex items-center gap-2 text-[0.68rem] font-semibold text-slate-700">
                <LockKeyhole className="h-3.5 w-3.5 text-[#19a974]" /> Session restored
              </div>
              <p className="mt-1.5 text-[0.62rem] leading-4 text-slate-500">
                Return to your authenticated space.
              </p>
            </div>
          </aside>

          <div className="bg-white p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#7157ff]">
                  Your starting point
                </p>
                <h2 className="mt-2 font-sans text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                  Welcome back.
                </h2>
                <p className="mt-1 text-xs text-slate-500">Continue with clarity.</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efeaff] text-[#7157ff]">
                <CircleUserRound className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Current path
                  </p>
                  <p className="mt-2 text-base font-semibold">Knowledge Before Action</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-2/5 rounded-full bg-[#8f7bff]" />
              </div>
              <p className="mt-2 text-[0.65rem] text-white/55">A bounded learning path</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-950/8 bg-[#fff8df] p-4">
                <Fingerprint className="h-5 w-5 text-[#b27b00]" />
                <p className="mt-8 text-sm font-bold text-slate-900">Profile</p>
                <p className="mt-1 text-[0.68rem] leading-4 text-slate-500">
                  Your authenticated record.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-950/8 bg-[#e8f8f1] p-4">
                <Map className="h-5 w-5 text-[#13825a]" />
                <p className="mt-8 text-sm font-bold text-slate-900">Growth Paths</p>
                <p className="mt-1 text-[0.68rem] leading-4 text-slate-500">
                  Continue one path at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-950/10 bg-white px-4 py-3 shadow-xl sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f8f1] text-[#13825a]">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-bold text-slate-900">Bounded pilot</span>
          <span className="block text-[0.65rem] text-slate-500">Verified authenticated flow</span>
        </span>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#f7f6f2] text-slate-950">
      <section className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:pb-20 lg:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 opacity-55 [background-image:radial-gradient(rgba(15,23,42,0.13)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className="absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-[#ffd55a]/40 blur-3xl" />
        <div className="absolute right-[-10rem] top-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#a996ff]/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/80 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#19a974]" /> Public foundation + bounded app
              pilot
            </div>
            <h1 className="mt-6 max-w-3xl font-sans text-[clamp(3rem,5.6vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.06em] text-slate-950">
              Start with clarity.<span className="mt-2 block text-[#7157ff]">Move with care.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              meUus connects learning, private reflection, and one responsible next step—without
              pretending that every part of the wider vision is already live.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.meuus.app/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:bg-[#7157ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7157ff] focus-visible:ring-offset-2"
              >
                Open meUus App{" "}
                <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-950/15 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7157ff] focus-visible:ring-offset-2"
              >
                See how it works <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#13825a]" /> Claim ≤ Evidence
              </span>
              <span className="inline-flex items-center gap-1.5">
                <LockKeyhole className="h-4 w-4 text-[#13825a]" /> Privacy-conscious boundaries
              </span>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section
        aria-label="Verified current state"
        className="border-y border-slate-950/10 bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-950/8 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0">
          {PROOF_POINTS.map((point) => (
            <div
              key={point}
              className="flex min-h-24 items-center gap-2 px-4 py-5 text-sm font-bold text-slate-700 md:justify-center"
            >
              <Check className="h-4 w-4 shrink-0 text-[#19a974]" /> {point}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7157ff]">
                One vision. Clear starting points.
              </p>
              <h2 className="mt-5 max-w-3xl font-sans text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl">
                Begin where you are.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              The public foundation, app pilot, learning layer, and Journey have different evidence
              levels. Each path below tells you what it is before you enter.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {STARTING_PATHS.map((path) => {
              const Icon = path.icon;
              const content = (
                <>
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${path.panel}`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${path.accent}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-10 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-3 font-sans text-2xl font-bold tracking-[-0.035em] text-slate-950">
                    {path.title}
                  </h3>
                  <p className="mt-4 min-h-24 text-sm leading-6 text-slate-600">
                    {path.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                    Enter{" "}
                    {path.external ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </span>
                </>
              );
              const classes =
                "group rounded-[1.75rem] border border-slate-950/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-8";
              return path.external ? (
                <a
                  key={path.title}
                  href={path.href}
                  target="_blank"
                  rel="noreferrer"
                  className={classes}
                >
                  {content}
                </a>
              ) : (
                <Link key={path.title} to={path.href} className={classes}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a996ff]">
                Understand → Learn → Reflect → Act
              </p>
              <h2 className="mt-5 font-sans text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                One careful loop.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/60 lg:justify-self-end">
              meUus does not begin by scoring a person. It begins by helping someone slow down,
              understand the situation, and choose responsibly.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map(([number, title, body, Icon]) => (
              <article key={number} className="bg-slate-950 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-white/35">{number}</span>
                  <Icon className="h-5 w-5 text-[#a996ff]" />
                </div>
                <h3 className="mt-16 font-sans text-2xl font-bold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/55">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="max-w-3xl text-sm leading-6 text-white/65">
              The current Journey is browser-local. The authenticated app pilot and the Journey are
              separate evidenced surfaces; neither proves a complete ecosystem.
            </p>
            <Link
              to="/status"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
            >
              Verify status <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff6f4d]">
              Truth is a product feature
            </p>
            <h2 className="mt-5 font-sans text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl">
              Clear about what is not live.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600">
              A polished interface should make capability boundaries easier to understand—not hide
              them. These limits remain visible while the wider architecture is developed.
            </p>
            <Link
              to="/evidence"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#fff0e9] px-5 py-3 text-sm font-bold text-[#9b3e24] transition hover:bg-[#ffe5db]"
            >
              See how evidence is labelled <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-5 max-w-xl rounded-2xl border border-slate-950/10 bg-[#f7f6f2] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Feel meUus · meUusSoulAI
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                New SoulAI messages are temporarily paused while privacy and governance review
                continues.
              </p>
              <Link
                to="/soulai-test"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
              >
                View Paused Status <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-950/10 bg-[#f7f6f2] p-5 sm:p-8">
            <div className="flex items-center gap-3 border-b border-slate-950/10 pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-950">Current public boundaries</p>
                <p className="mt-1 text-xs text-slate-500">Updated against verified evidence</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {BOUNDARIES.map((boundary) => (
                <div
                  key={boundary}
                  className="flex min-h-16 items-center gap-3 rounded-xl border border-slate-950/8 bg-white px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0e9] text-[#bf4d31]">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                  <span className="text-xs font-semibold leading-5 text-slate-700">{boundary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#141124] text-white shadow-[0_30px_100px_rgba(20,17,36,0.22)]">
          <div className="grid lg:grid-cols-[1.03fr_0.97fr]">
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ffc94a]">
                Future architecture · clearly labelled
              </p>
              <h2 className="mt-5 font-sans text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
                Development Lens and Assessment System.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                DLAS is a proposed future framework for structured understanding and guidance. No
                public engine, scoring model, automated assessment, or validated runtime is live.
              </p>
              <a
                href="https://meuussoul.com/dlas"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Read the bounded concept <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="relative min-h-[28rem] overflow-hidden">
              <img
                src="/assets/meuus-mountain-hero.png"
                alt="A person looking toward a mountain horizon, representing the meUus starting-point journey"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141124] via-[#141124]/25 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#141124]/30" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffc94a]">
                  me → U → us
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Start with me. Grow with U. Build us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 pt-10 sm:px-6 lg:pb-36">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#efeaff] text-[#7157ff]">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="mx-auto mt-7 max-w-4xl font-sans text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-6xl">
            You do not need the whole answer to choose one honest next step.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Begin with the authenticated app pilot, explore the public learning foundation, or
            verify the exact current state before continuing.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://www.meuus.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7157ff] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(113,87,255,0.28)] transition hover:-translate-y-0.5"
            >
              Open meUus App <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              to="/status"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-950/15 bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
            >
              Verify current status <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
