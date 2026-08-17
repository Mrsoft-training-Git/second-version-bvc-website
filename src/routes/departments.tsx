import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { DEPARTMENTS } from "@/data/departments";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Academic Departments - Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "The seven academic departments of Bonny Vocational Centre, each delivering an NBTE-approved National Diploma in engineering, business, hospitality, computing and building technology.",
      },
      { property: "og:title", content: "Academic Departments - Bonny Vocational Centre" },
      {
        property: "og:description",
        content:
          "Meet the seven BVC academic departments and the National Diploma programmes they deliver.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Departments,
});

function Departments() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Academic Departments
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Seven departments deliver BVC&apos;s NBTE-approved National Diploma programmes, each
            pairing the national curriculum with the competency-based workshop training the centre
            is known for.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-display text-sm">
            <div>
              <dd className="text-2xl font-bold text-gold">7</dd>
              <dt className="text-xs tracking-[0.14em] text-ink-foreground/70 uppercase">
                Departments
              </dt>
            </div>
            <div>
              <dd className="text-2xl font-bold text-gold">7</dd>
              <dt className="text-xs tracking-[0.14em] text-ink-foreground/70 uppercase">
                ND programmes
              </dt>
            </div>
            <div>
              <dd className="text-2xl font-bold text-gold">NBTE</dd>
              <dt className="text-xs tracking-[0.14em] text-ink-foreground/70 uppercase">
                Approved
              </dt>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14">
        <ul className="space-y-10">
          {DEPARTMENTS.map((dept) => (
            <li
              key={dept.slug}
              id={dept.slug}
              className="scroll-mt-24 border border-border bg-card"
            >
              <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                      {dept.programSlugs.length + 1} Programmes
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground">
                    {dept.name}
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {dept.overview}
                  </p>

                  <Link
                    to="/programs/$slug"
                    params={{ slug: dept.programSlug }}
                    className="group mt-7 inline-flex items-center gap-2 border border-gold bg-gold px-5 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
                  >
                    View programme
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <aside className="border-t border-border bg-muted/60 p-7 sm:p-9 lg:border-t-0 lg:border-l">
                  <h3 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">
                    Head of Department
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {dept.hodRemit}
                  </p>

                  <h3 className="mt-8 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                    National Diploma
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    {dept.programName}
                  </p>
                </aside>
              </div>



            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
