import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { PANEL_LINKS, TOP_RESOURCES } from "@/data/site";

export function SiteFooter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  }

  return (
    <footer className="mt-16 bg-ink text-ink-foreground">
      {/* Subscribe band */}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">Want more about BVC?</p>
          <p className="mt-1 text-sm opacity-80">
            Explore the{" "}
            <Link to="/programs" className="underline underline-offset-4">
              program catalogue
            </Link>
            , or subscribe for intake dates and newsroom updates.
          </p>
        </div>

        {open ? (
          done ? (
            <p className="shrink-0 font-display text-sm font-semibold tracking-wide text-gold">
              Thank you - you're on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full shrink-0 items-center gap-2 sm:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full border border-ink-foreground/40 bg-ink px-3 py-2.5 text-sm text-ink-foreground outline-none placeholder:text-ink-foreground/50 focus:border-gold sm:w-64"
              />
              <button
                type="submit"
                className="shrink-0 bg-gold px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-gold-foreground transition-colors hover:bg-gold/90"
              >
                Join
              </button>
            </form>
          )
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="shrink-0 border border-ink-foreground/60 px-5 py-2.5 text-center font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Subscribe
          </button>
        )}
      </div>

      {/* Resources + contact */}
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
              Top resources for
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
              {TOP_RESOURCES.map((r) => (
                <Link
                  key={r.label}
                  to={r.to}
                  className="group relative flex h-9 items-center overflow-hidden border border-ink-foreground/25 px-3 transition-colors duration-300 hover:border-gold"
                >
                  <span className="relative z-10 text-[11px] font-bold uppercase leading-tight tracking-wider text-ink-foreground transition-colors duration-300 group-hover:text-gold-foreground">
                    {r.label}
                  </span>
                  <div className="absolute inset-0 translate-y-full bg-gold transition-transform duration-300 ease-out group-hover:translate-y-0" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
              Contact
            </p>
            <p className="font-semibold">Bonny Vocational Center</p>
            <div className="mt-2 grid gap-4 text-sm text-ink-foreground/70 sm:grid-cols-2 md:grid-cols-1">
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
          </div>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
              Search
            </p>
            <form role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-search" className="sr-only">
                Search BVC
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-ink-foreground/50" />
                <input
                  id="footer-search"
                  type="search"
                  placeholder="Search BVC"
                  className="w-full border border-ink-foreground/25 bg-transparent py-2 pl-8 pr-2 text-xs text-ink-foreground placeholder:text-ink-foreground/50 focus:border-gold focus:outline-none"
                />
              </div>
            </form>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
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
      </div>

      <div className="border-t border-ink-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs opacity-70">
          © 2026 BVC All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
