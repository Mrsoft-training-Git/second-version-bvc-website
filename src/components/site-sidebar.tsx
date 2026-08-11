import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PANEL_LINKS, TOP_RESOURCES } from "@/data/site";

export function SiteSidebar() {
  return (
    <aside
      aria-label="Site resources"
      className="relative order-2 border-t border-ink bg-ink text-ink-foreground lg:order-none lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:overflow-y-auto lg:border-t-0"
    >
      <div className="nav-ribbon-v pointer-events-none absolute inset-y-0 right-0 w-px hidden lg:block" />

      <div className="flex min-h-full flex-col px-4 py-6">
        <div>
          <p className="font-display text-xs font-bold leading-snug">Explore programs, people and places</p>
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mt-3 flex items-center gap-2 border border-ink-foreground/20 bg-ink-foreground/5 px-2.5 py-2.5"
          >
            <Search className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            <label htmlFor="panel-search" className="sr-only">
              Search BVC
            </label>
            <input
              id="panel-search"
              type="search"
              placeholder="Search BVC"
              className="w-full bg-transparent text-xs text-ink-foreground outline-none placeholder:text-ink-foreground/50"
            />
          </form>
        </div>

        <div className="mt-6">
          <p className="mb-3 ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
            Top resources for
          </p>
          <div className="flex flex-col gap-2">
            {TOP_RESOURCES.map((r) => (
              <Link
                key={r.label}
                to={r.to}
                className="group relative flex h-9 items-center justify-start overflow-hidden border border-ink-foreground/25 px-3 transition-colors duration-300 hover:border-gold"
              >
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-wider leading-tight text-ink-foreground transition-colors duration-300 group-hover:text-gold-foreground">
                  {r.label}
                </span>
                <div className="absolute inset-0 translate-y-full bg-gold transition-transform duration-300 ease-out group-hover:translate-y-0" />
              </Link>
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <div className="h-px w-6 bg-ink-foreground/25" />
          </div>
        </div>

        <Link
          to="/admissions"
          className="mt-6 block border border-gold px-3 py-3 text-center text-sm font-semibold text-gold underline underline-offset-4 transition-colors hover:bg-gold hover:text-gold-foreground hover:no-underline"
        >
          September intake is now open
        </Link>

        <div className="mt-auto pt-12 text-sm">
          <p className="font-semibold">Bonny Vocational Center</p>
          <p className="mt-1 text-ink-foreground/70">
            Finima Road, Bonny Island, Rivers State, Nigeria
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {PANEL_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
            <li>
              <Link to="/about" className="link-underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-underline">
                Accessibility
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-ink-foreground/50">
            © 2026 BVC. All content shown is placeholder data.
          </p>
        </div>
      </div>
    </aside>
  );
}
