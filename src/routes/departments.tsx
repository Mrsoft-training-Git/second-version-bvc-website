import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, UserRound } from "lucide-react";

import { ProgramCard } from "@/components/program-card";
import { DEPARTMENTS } from "@/data/departments";
import { getProgram } from "@/data/programs";
import { programImage } from "@/lib/program-images";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Academic Departments — Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "The seven academic departments of Bonny Vocational Centre, each delivering an NBTE-approved National Diploma in engineering, business, hospitality, computing and building technology.",
      },
      { property: "og:title", content: "Academic Departments — Bonny Vocational Centre" },
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
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <p className="font-display text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
            Academics
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Academic Departments
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80">
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
          {DEPARTMENTS.map((dept, i) => (
            <li
              key={dept.slug}
              id={dept.slug}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
                <div className="p-7 sm:p-9">
                  <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                    Department {String(i + 1).padStart(2, "0")}
                  </span>
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
                    <GraduationCap className="h-4 w-4" />
                    View programme
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <aside className="border-t border-border bg-muted/60 p-7 sm:p-9 lg:border-t-0 lg:border-l">
                  <h3 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">
                    Head of Department
                  </h3>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
                      <UserRound className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-foreground">
                        Appointment held
                      </p>
                      <p className="text-xs tracking-wide text-muted-foreground uppercase">
                        Profile to be updated
                      </p>
                    </div>
                  </div>
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

              {dept.programSlugs.length > 0 && (
                <div className="border-t border-border p-7 sm:p-9">
                  <div className="flex items-end justify-between border-b border-border pb-3">
                    <h3 className="font-display text-base font-bold text-foreground">
                      Programmes in this department
                    </h3>
                    <span className="font-display text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {dept.programSlugs.length + 1} programmes
                    </span>
                  </div>
                  <ul className="news-scroller mt-6 -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2">
                    {[dept.programSlug, ...dept.programSlugs].map((slug, j) => {
                      const p = getProgram(slug);
                      if (!p) return null;
                      return (
                        <li
                          key={slug}
                          className="w-[260px] shrink-0 snap-start sm:w-[300px]"
                        >
                          <ProgramCard
                            to="/programs/$slug"
                            params={{ slug: p.slug }}
                            image={programImage(p.slug, j)}
                            alt={p.name}
                            title={p.name}
                            body={p.body}
                            duration={p.duration}
                            cta="Programme details"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-border bg-muted/60 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-foreground">
            Looking for the full National Diploma details?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Admission requirements, duration and career outcomes for all seven diplomas are listed
            together on the National Diploma page.
          </p>
          <Link
            to="/programs/national-diploma"
            className="mt-6 inline-block border border-gold bg-gold px-6 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
          >
            ND programmes
          </Link>
        </div>
      </div>
    </div>
  );
}
