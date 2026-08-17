import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/data/site";
import bvcLogo from "@/assets/bvc-logo.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setOpen(false);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    if (window.location.pathname !== "/") {
      navigate({ to: "/" }).then(() => setTimeout(scroll, 300));
    } else {
      scroll();
    }
  };

  const navLinkClass =
    "group/nav relative font-display text-sm font-medium tracking-wide text-primary-foreground/85 transition-colors duration-300 hover:text-gold aria-[current=page]:text-gold aria-[current=page]:[&>span]:w-full";

  return (
    <header className="sticky top-0 z-40">
      <div className="relative flex h-16 w-full items-center justify-between gap-4 overflow-hidden bg-ink px-4 py-3 shadow-[0_20px_50px_color-mix(in_oklab,var(--color-ink)_35%,transparent)] transition-shadow duration-300 hover:shadow-[0_24px_60px_color-mix(in_oklab,var(--color-ink)_45%,transparent)] lg:h-20 lg:px-8">
        {/* Subtle gold radial mesh */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_top_right,var(--color-gold)_0%,transparent_55%)]" />
        {/* Flowing 3-color accent ribbon */}
        <div className="nav-ribbon pointer-events-none absolute inset-x-0 bottom-0 h-1" />

        {/* Logo + wordmark */}
        <Link to="/" className="relative z-10 flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground p-1 shadow-inner">
            <img
              src={bvcLogo.url}
              alt="Bonny Vocational Centre crest"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden leading-none sm:flex sm:flex-col">
            <span className="font-display text-lg font-bold uppercase tracking-tight text-primary-foreground">
              BVC
            </span>
          </span>
        </Link>

        {/* Centered nav */}
        <nav
          aria-label="Primary"
          className="relative z-10 hidden flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:flex"
        >
          {NAV.map((item) =>
            "hash" in item && item.hash ? (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.hash)}
                className={navLinkClass}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover/nav:w-full" />
              </button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={navLinkClass}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover/nav:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Right side: CTA + mobile toggle */}
        <div className="relative z-10 flex shrink-0 items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-lg bg-gold px-5 py-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-gold-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[color-mix(in_oklab,var(--color-gold)_88%,black)] active:scale-95 lg:inline-block"
          >
            PORTAL
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground/80 transition-colors hover:text-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - floating panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-1 lg:hidden">
          <nav
            aria-label="Primary mobile"
            className="relative overflow-hidden rounded-2xl bg-ink px-4 py-2 shadow-[0_20px_50px_color-mix(in_oklab,var(--color-ink)_35%,transparent)]"
          >
            <div className="nav-ribbon pointer-events-none absolute inset-x-0 bottom-0 h-1" />
            {NAV.map((item) =>
              "hash" in item && item.hash ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.hash)}
                  className="block w-full border-b border-primary-foreground/15 py-3 text-left font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground/90 transition-colors last:border-b-0 hover:text-gold"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={item.to === "/" ? { exact: true } : undefined}
                  className="block border-b border-primary-foreground/15 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground/90 transition-colors last:border-b-0 aria-[current=page]:text-gold hover:text-gold"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-lg bg-gold px-5 py-3 text-center text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-gold-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              PORTAL
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
