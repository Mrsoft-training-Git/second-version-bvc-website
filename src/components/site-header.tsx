import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <div className="flex items-center gap-6 px-5 py-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center bg-primary-foreground font-display text-lg font-bold text-primary">
            B
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight">BVC</span>
            <span className="block text-[0.6875rem] tracking-wide uppercase opacity-75">
              Bonny Vocational Center
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 flex-wrap items-center justify-center gap-6 lg:flex"
        >
          {NAV.map((item) =>
            "hash" in item && item.hash ? (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSponsors()}
                className="font-display text-sm font-semibold tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-sm font-semibold tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4"
                activeProps={{ className: "underline" }}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>


      {open && (
        <nav aria-label="Primary mobile" className="border-t border-rule/30 lg:hidden">
          <div className="px-5 py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-rule/20 py-3 font-display text-sm font-semibold tracking-wide uppercase last:border-b-0"
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
