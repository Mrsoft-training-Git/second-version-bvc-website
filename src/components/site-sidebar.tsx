import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PANEL_LINKS, TOP_RESOURCES } from "@/data/site";

export function SiteSidebar() {
  return (
    <aside
      aria-label="Site resources"
      className="order-2 border-t border-border bg-surface lg:order-none lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:overflow-y-auto lg:border-t-0 lg:border-r"
    >

      <div className="flex min-h-full flex-col px-5 py-8">
        <div>
          <p className="font-display text-sm font-bold">Explore programs, people and places</p>
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mt-3 flex items-center gap-3 border border-input bg-background px-3 py-3"
          >
            <Search className="h-5 w-5 text-primary" aria-hidden />
            <label htmlFor="panel-search" className="sr-only">
              Search BVC
            </label>
            <input
              id="panel-search"
              type="search"
              placeholder="What are you looking for?"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </form>
        </div>

        <div className="mt-8">
          <p className="mb-4 ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Top resources for
          </p>
          <div className="grid grid-cols-2 gap-2">
            {TOP_RESOURCES.map((r) => (
              <Link
                key={r.label}
                to={r.to}
                className="group relative flex h-10 items-center justify-center overflow-hidden border border-border px-3 text-center transition-colors duration-300 hover:border-primary"
              >
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-wider leading-tight text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                  {r.label}
                </span>
                <div className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0" />
              </Link>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-8 bg-border" />
          </div>
        </div>

        <Link
          to="/admissions"
          className="mt-8 block border border-primary px-4 py-4 text-center font-semibold text-primary underline underline-offset-4 hover:bg-primary hover:text-primary-foreground hover:no-underline"
        >
          September intake is now open
        </Link>

        <div className="mt-auto pt-12 text-sm">
          <p className="font-semibold">Bonny Vocational Center</p>
          <p className="mt-1 text-muted-foreground">
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
          <p className="mt-4 text-xs text-muted-foreground">
            © 2026 BVC. All content shown is placeholder data.
          </p>
        </div>
      </div>
    </aside>
  );
}
