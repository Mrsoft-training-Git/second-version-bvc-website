import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";
import bvcLogo from "@/assets/bvc-logo.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    "text-[0.6875rem] xl:text-xs font-display font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary aria-[current=page]:text-primary";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        !overHero
          ? "bg-ink py-2.5 shadow-[0_18px_45px_color-mix(in_oklab,var(--color-ink)_38%,transparent)]"
          : "bg-transparent py-4 lg:py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1560px] items-center justify-between gap-4 px-4 lg:px-8">
        {/* Logo + wordmark */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span
            className={`flex items-center justify-center bg-primary-foreground p-1 shadow-inner transition-all duration-300 ${
              overHero ? "h-11 w-11" : "h-9 w-9"
            }`}
          >
            <img
              src={bvcLogo.url}
              alt="Bonny Vocational Centre crest"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden font-display text-lg font-bold uppercase leading-none tracking-tight text-ink-foreground sm:inline">
            BVC
          </span>
        </Link>

        {/* Floating pill nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 rounded-full border border-border bg-background px-6 py-3.5 shadow-sm lg:flex xl:gap-8 xl:px-8"
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
              </button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={navLinkClass}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side: search (mobile) + CTA + mobile toggle */}
        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <div className="flex items-center lg:hidden">
            {searchOpen ? (
              <form
                role="search"
                className="flex items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="header-search" className="sr-only">
                  Search BVC
                </label>
                <div className="relative w-[170px]">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-ink-foreground/50" />
                  <input
                    id="header-search"
                    type="search"
                    autoFocus
                    placeholder="Search BVC"
                    onBlur={(e) => {
                      if (!e.currentTarget.value) setSearchOpen(false);
                    }}
                    className="w-full rounded-full border border-ink-foreground/25 bg-ink/60 py-1.5 pl-8 pr-7 text-xs text-ink-foreground placeholder:text-ink-foreground/50 focus:border-gold focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 text-ink-foreground/60 hover:text-gold"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                aria-expanded={false}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-ink-foreground/85 transition-colors hover:text-gold"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-6 py-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-gold-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[color-mix(in_oklab,var(--color-gold)_88%,black)] active:scale-95 lg:inline-block"
          >
            PORTAL
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 text-ink-foreground/85 transition-colors hover:text-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - floating panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-[1560px] px-4 lg:hidden">
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
                  className="block w-full border-b border-ink-foreground/15 py-3 text-left font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground/90 transition-colors last:border-b-0 hover:text-gold"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={item.to === "/" ? { exact: true } : undefined}
                  className="block border-b border-ink-foreground/15 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground/90 transition-colors last:border-b-0 aria-[current=page]:text-gold hover:text-gold"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-gold px-5 py-3 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-gold-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              PORTAL
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
