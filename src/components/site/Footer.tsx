import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EXPLORER_NAVIGATION_GROUPS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/5 pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <div className="font-serif text-3xl">
              <span className="text-gradient-violet">me</span>
              <span className="text-foreground">Uus</span>
            </div>
            <p className="mt-4 max-w-md font-serif text-xl leading-snug text-foreground/80">
              Connecting Everything. Every soul. Every opportunity. Every step toward a better life.
            </p>
            <p className="mt-6 text-sm text-foreground/55">
              بسم الله الرحمن الرحيم — built with intention, accountability, and care.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground/40">
              From Bangladesh — to the world
            </p>
          </div>

          <nav
            aria-label="Footer sitemap"
            className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4"
          >
            {EXPLORER_NAVIGATION_GROUPS.map((group) => (
              <section key={group.id} aria-labelledby={`footer-${group.id}`}>
                <h2
                  id={`footer-${group.id}`}
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-foreground/40"
                >
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((item) => {
                    const isStatus = item.to === "/status";

                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          search={"search" in item ? item.search : undefined}
                          activeOptions={{ exact: item.to === "/" }}
                          className={`group flex items-start justify-between gap-2 text-sm transition ${
                            isStatus
                              ? "font-medium text-[var(--gold)]"
                              : "text-foreground/70 hover:text-foreground"
                          }`}
                        >
                          <span className="min-w-0">
                            <span className="block">{item.label}</span>
                            {"status" in item && (
                              <span
                                className={`mt-0.5 block text-[0.7rem] leading-relaxed ${
                                  isStatus ? "text-[var(--gold)]/65" : "text-foreground/40"
                                }`}
                              >
                                {item.status}
                              </span>
                            )}
                          </span>
                          <ArrowUpRight
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/25 transition group-hover:text-[var(--gold)]"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} meUus. Founder: Md. Mahady Hasan.</p>
          <p>meUus Starting Point · Phase One · Alhamdulillah · InShaAllah</p>
        </div>
      </div>
    </footer>
  );
}
