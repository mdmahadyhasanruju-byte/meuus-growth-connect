import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CircleDot, Globe2, Library, ShieldCheck } from "lucide-react";

import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { SectionHeading } from "@/components/site/SectionHeading";

const PREVIEW_PDF_PATH =
  "/books/be-the-starting-point-meuus-extended-manuscript-preview-v0-3-real-book-feel-web.pdf";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Be - The Starting Point - meUus" },
      {
        name: "description",
        content:
          "Extended Manuscript Preview v0.3 Real Book Feel web edition for Be - The Starting Point - meUus. A working public preview, not final publication.",
      },
      { property: "og:title", content: "Be - The Starting Point - meUus" },
      {
        property: "og:description",
        content:
          "A working public preview from the developing meUus book manuscript, shared for early reading, reflection, and project transparency.",
      },
    ],
  }),
  component: BookPage,
});

const STATUS_LABELS = [
  "Extended Manuscript Preview v0.3",
  "Working public preview",
  "Not final publication",
  "Reader edition in preparation",
] as const;

const READING_PATH = [
  {
    label: "Be",
    body: "Return to truth before action.",
  },
  {
    label: "Listen",
    body: "Protect the first signal.",
  },
  {
    label: "Know",
    body: "Understand enough before moving.",
  },
  {
    label: "Act",
    body: "Choose one responsible next step.",
  },
] as const;

const AVAILABLE_NOW = [
  {
    label: "meUus Soul",
    body: "The developing public knowledge and reflection gateway for the wider meUus ecosystem.",
    to: "/soul",
  },
  {
    label: "Knowledge Before Action",
    body: "A public principle for understanding what is known, unknown, felt, and assumed before acting.",
    to: "/knowledge-before-action",
  },
  {
    label: "One Word Start",
    body: "A simple manual beginning when a person cannot explain everything yet.",
    to: "/one-word-start",
  },
] as const;

const BOUNDARIES = [
  "Not the final book publication.",
  "Not the final reader edition.",
  "Not therapy.",
  "Not diagnosis.",
  "Not religious authority.",
  "Not legal, financial, medical, or employment advice.",
  "Not AI analysis.",
  "Not automated decision-making.",
  "Not a complete DLAS system.",
  "Not an academic claim.",
  "Not a commercial sale or subscription product yet.",
  "Not a guarantee of help, job, money, or outcome.",
] as const;

function BookPage() {
  return (
    <div className="relative isolate">
      <section className="relative px-4 pt-32 pb-20 sm:px-6">
        <ParticleCanvas density={42} />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <CircleDot className="h-3 w-3 text-[var(--gold)]" />
              Book meUus
            </div>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
              Be - The Starting Point - <span className="italic text-gradient-violet">meUus</span>
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-foreground/75">
              Connecting Everything.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 lg:mx-0">
              A working public preview from the developing meUus book manuscript. This preview is
              shared for early reading, reflection, and project transparency. It is not the final
              publication, not the final reader edition, and may include source-manuscript sections
              that will be edited, reduced, reordered, or redesigned later.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {STATUS_LABELS.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={PREVIEW_PDF_PATH}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
              >
                Read the extended manuscript preview PDF <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/soul"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
              >
                Explore Soul / Knowledge Hub
              </Link>
            </div>
            <p className="mt-3 text-center text-xs text-foreground/55 lg:text-left">
              Web-optimized PDF for public reading.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-foreground/10 bg-background/70 p-5 shadow-glow-violet backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-7">
              <div className="absolute inset-y-8 left-5 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
              <div className="min-h-[26rem] pl-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]/85">
                  Extended Manuscript Preview v0.3 — Real Book Feel web edition
                </p>
                <h2 className="mt-12 font-serif text-6xl leading-none text-foreground">Be</h2>
                <p className="mt-5 font-serif text-2xl leading-tight text-foreground/90">
                  The Starting Point - meUus
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-foreground/55">
                  Connecting Everything.
                </p>
                <div className="mt-16 h-px w-24 bg-[var(--gold)]/50" />
                <p className="mt-6 text-sm leading-relaxed text-foreground/60">
                  A working public preview for early reading, reflection, and project transparency.
                </p>
              </div>
              <p className="mt-8 pl-5 text-xs uppercase tracking-[0.24em] text-foreground/45">
                Not final publication
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="What Book meUus is"
            title="A developing manuscript preview connected to the public meUus foundation."
          />
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              Be - The Starting Point - meUus introduces the starting philosophy behind meUus: Be,
              Listen Before Knowledge, Knowledge Before Action, and one responsible next step.
            </p>
            <p>
              This PDF is not the final book publication. It is an extended working preview from the
              developing manuscript. The final reader edition, designed edition, and controlled
              public excerpt may be prepared separately later.
            </p>
            <p>
              The current verified foundation remains meuus.org. The{" "}
              <Link to="/status" className="text-primary underline">
                /status
              </Link>{" "}
              truth board remains the place to check what is live, what is planned, and what is not
              yet available.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Reading path"
            title="Be -> Listen -> Know -> Act"
            subtitle="The preview is a careful working publication step, not a complete system or final publication."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {READING_PATH.map((step, index) => (
              <article
                key={step.label}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </div>
                <h2 className="font-serif text-2xl text-foreground">{step.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What this contains"
            title="A developing manuscript preview, not a final reader edition."
            subtitle="Public scope, order, editing, and design may change before final publication."
          />
          <div className="mt-12 rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-foreground/70">
              This preview may include the opening, table of contents, early chapters, and
              additional developing manuscript sections. Content order, editing, design, and public
              scope may change before final publication.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={PREVIEW_PDF_PATH}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
              >
                Download the extended manuscript preview PDF <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-foreground/55">
              Web-optimized PDF for public reading.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What it is not"
            title="A reflective project still needs firm public boundaries."
            subtitle="The writing may be spiritually respectful and human-centered without becoming religious prescription, professional advice, analysis, or a promise of outcomes."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {BOUNDARIES.map((boundary) => (
              <div
                key={boundary}
                className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-background/70 p-5"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <p className="text-sm leading-relaxed text-foreground/70">{boundary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-foreground/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Library className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="How it connects to meUus Soul"
              title="The book belongs within a wider learning and reflection direction."
              subtitle="This working preview supports the Soul / Knowledge Hub starting layer. It is not the final reader edition or a completed knowledge library."
            />
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-background/70 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-foreground/70">
              The current relationship is simple: the working preview supports public learning,
              reflection, and visual understanding on meuus.org. The status board should still be
              used to distinguish current availability from future intention.
            </p>
            <Link
              to="/soul"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Explore the meUus Soul gateway <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="What is available now"
            title="Begin with the verified public pages already live."
            subtitle="These pages provide current context for the preview; they are not proof of a finalized manuscript, course, or platform."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {AVAILABLE_NOW.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-2xl border border-foreground/10 bg-background/70 p-6 transition hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Globe2 className="h-6 w-6" />
            </div>
            <SectionHeading
              eyebrow="How to begin today"
              title="Use the live foundation before the future manuscript."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/one-word-start"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">One Word Start</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Begin manually with one honest word when everything is not yet explainable.
              </p>
            </Link>
            <Link
              to="/knowledge-before-action"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Knowledge Before Action</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Separate evidence, feeling, assumption, and urgency before acting.
              </p>
            </Link>
            <Link
              to="/journey"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Journey</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Explore the bounded browser-local reflection prototype already available.
              </p>
            </Link>
            <Link
              to="/status"
              className="rounded-2xl border border-foreground/10 bg-background/70 p-5 transition hover:border-primary/40"
            >
              <span className="text-sm font-semibold text-primary">Status</span>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Check what is live, planned, in development, or not yet available.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Current availability"
            title="Book meUus is a gateway to developing work, not a final released book."
            subtitle="The project is being organized and public pages are being recovered gradually. The verified public foundation remains meuus.org, with /status as the current truth board."
          />
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/status"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Review current status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-primary/50 hover:text-primary"
            >
              Express interest manually
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
