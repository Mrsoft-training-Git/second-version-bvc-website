import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      {/* Utility strip */}
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-end gap-5 px-4 text-[0.6875rem] font-medium tracking-wide uppercase">
          <Link to="/admissions" className="opacity-80 hover:opacity-100">
            Apply
          </Link>
          <Link to="/news" className="opacity-80 hover:opacity-100">
            Newsroom
          </Link>
          <Link to="/contact" className="opacity-80 hover:opacity-100">
            Contact
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-primary font-display text-lg font-bold text-primary-foreground">
            B
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold tracking-tight">BVC</span>
            <span className="block text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
              Bonny Vocational Center
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 border border-input px-3 py-1.5 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
          <label htmlFor="site-search" className="sr-only">
            Search BVC
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search BVC"
            className="w-44 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Primary nav */}
      <nav aria-label="Primary" className="hidden border-t border-border md:block">
        <div className="mx-auto flex max-w-6xl gap-7 px-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="-mb-px border-b-[3px] border-transparent py-3 font-display text-[0.8125rem] font-semibold tracking-wide uppercase hover:border-primary hover:text-primary"
              activeProps={{ className: "border-primary text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <nav aria-label="Primary mobile" className="border-t border-border md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 font-display text-sm font-semibold tracking-wide uppercase last:border-b-0"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
