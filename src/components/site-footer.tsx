import { Link } from "@tanstack/react-router";
import { NAV } from "@/data/site";

const RESOURCES = [
  { label: "Program catalogue", to: "/programs" },
  { label: "Admissions & fees", to: "/admissions" },
  { label: "Student handbook", to: "/campus-life" },
  { label: "Newsroom", to: "/news" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold">BVC</p>
            <p className="mt-2 text-sm opacity-70">
              Bonny Vocational Center
              <br />
              Finima Road, Bonny Island
              <br />
              Rivers State, Nigeria
            </p>
            <p className="mt-3 text-sm opacity-70">+234 800 000 0000</p>
          </div>

          <nav aria-label="Sections">
            <p className="font-display text-xs font-semibold tracking-[0.14em] uppercase opacity-60">
              Sections
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="opacity-80 hover:opacity-100 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <p className="font-display text-xs font-semibold tracking-[0.14em] uppercase opacity-60">
              Resources
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="opacity-80 hover:opacity-100 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-semibold tracking-[0.14em] uppercase opacity-60">
              Visit
            </p>
            <p className="mt-4 text-sm opacity-80">
              Workshops are open to prospective trainees and partners on the first Friday of every
              month.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block bg-primary px-4 py-2 font-display text-xs font-semibold tracking-wide text-primary-foreground uppercase"
            >
              Plan a visit
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-rule/40 pt-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <p>© 2026 Bonny Vocational Center. All content shown is placeholder data.</p>
          <p>Accessibility · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
