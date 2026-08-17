import { useState } from "react";
import { Link } from "@tanstack/react-router";

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
      <div className="flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
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
                className="shrink-0 bg-gold px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-gold-foreground uppercase transition-colors hover:bg-gold/90"
              >
                Join
              </button>
            </form>
          )
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="shrink-0 border border-ink-foreground/60 px-5 py-2.5 text-center font-display text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Subscribe
          </button>
        )}
      </div>

      {open && !done && (
        <div className="px-5 pb-2 text-xs opacity-70 sm:flex sm:justify-end">
          <span>Newsroom updates - one line, no spam.</span>
        </div>
      )}

      <div className="border-t border-ink-foreground/15 px-5 py-3">
        <p className="text-xs opacity-70">
          © 2026 BVC All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
