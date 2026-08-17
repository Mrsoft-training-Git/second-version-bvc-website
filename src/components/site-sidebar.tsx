import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { PANEL_LINKS, TOP_RESOURCES } from "@/data/site";

export function SiteSidebar() {
  return (
    <aside
      aria-label="Site resources"
      className="relative order-2 border-t border-ink bg-ink text-ink-foreground lg:order-none lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto lg:border-t-0"
    >
      <div className="nav-ribbon-v pointer-events-none absolute inset-y-0 right-0 w-px hidden lg:block" />

      <div className="flex min-h-full flex-col px-4 py-6">
        <div className="hidden lg:block">
          <p className="font-display text-xs font-bold leading-snug">Explore programs, people and places</p>
          <form
            role="search"
            className="mt-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="sidebar-search" className="sr-only">
              Search BVC
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-ink-foreground/50" />
              <input
                id="sidebar-search"
                type="search"
                placeholder="Search BVC"
                className="w-full border border-ink-foreground/25 bg-transparent py-1.5 pl-8 pr-2 text-[11px] text-ink-foreground placeholder:text-ink-foreground/50 focus:border-gold focus:outline-none"
              />
            </div>
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

        <div className="mt-auto pt-12 text-sm">
          <p className="font-semibold">Bonny Vocational Center</p>
          <div className="mt-1 grid grid-cols-2 gap-3 text-ink-foreground/70">
            <address className="not-italic leading-snug">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-gold">
                Head Office
              </span>
              Akiama-Oguede Road<br />
              Bonny Island 503101<br />
              Rivers State, Nigeria
            </address>
            <address className="not-italic leading-snug">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-gold">
                Port Harcourt Office
              </span>
              16 Mbonu Street, D-line<br />
              Port Harcourt 500101<br />
              Rivers State, Nigeria
            </address>
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {PANEL_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
