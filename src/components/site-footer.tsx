import { Link } from "@tanstack/react-router";

export function SiteFooter() {
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
        <Link
          to="/contact"
          className="shrink-0 border border-ink-foreground/60 px-5 py-2.5 text-center font-display text-sm font-semibold tracking-wide uppercase hover:bg-ink-foreground hover:text-ink"
        >
          Subscribe
        </Link>
      </div>
    </footer>
  );
}
