import { Link } from "@tanstack/react-router";
import { PILLARS } from "@/data/pillars";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
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

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground/45">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/75 hover:text-foreground">Home</Link></li>
              <li><Link to="/ecosystem" className="text-foreground/75 hover:text-foreground">Ecosystem</Link></li>
              <li><Link to="/pillars" className="text-foreground/75 hover:text-foreground">Pillars</Link></li>
              <li><Link to="/global" className="text-foreground/75 hover:text-foreground">Global</Link></li>
              <li><Link to="/join" className="text-foreground/75 hover:text-foreground">Join Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground/45">Pillars</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {PILLARS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/pillars/$slug"
                    params={{ slug: p.slug }}
                    className="text-foreground/70 hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} meUus. Founder: Md. Mahady Hasan.</p>
          <p>Final Execution · 21 July 2026 · Alhamdulillah · InShaAllah</p>
        </div>
      </div>
    </footer>
  );
}
