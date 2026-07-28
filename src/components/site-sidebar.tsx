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
          <p className="font-display text-sm font-bold">Top resources for</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {TOP_RESOURCES.map((r) => (
              <li key={r.label}>
                <Link to={r.to} className="hover:text-primary hover:underline">
                  <span className="mr-1 text-primary">—</span>
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
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
