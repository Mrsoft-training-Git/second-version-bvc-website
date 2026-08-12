import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ProgramCard } from "@/components/program-card";
import { CITY_GUILDS_PROGRAMS, ND_PROGRAMS, PROGRAM_CATEGORIES } from "@/data/programs";
import { programImage } from "@/lib/program-images";
import { ProgramShowcase } from "@/components/program-showcase";


export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "City & Guilds accredited programmes at BVC across engineering, hospitality and culinary arts, ICT, business and education, and short skills proficiency certificates.",
      },
      { property: "og:title", content: "Programs — Bonny Vocational Centre" },
      {
        property: "og:description",
        content:
          "Internationally recognised City & Guilds diplomas, certificates and awards taught in working workshops on Bonny Island.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <ProgramShowcase hero className="border-b border-border" />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Programmes at Bonny Vocational Centre
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          BVC delivers NBTE-approved National Diploma programmes alongside internationally
          recognised City &amp; Guilds qualifications, all taught through intensive practical
          training in our workshops, kitchens and laboratories.
        </p>

        {/* National Diploma promotion */}
        <section className="mt-10 overflow-hidden rounded-2xl bg-ink text-ink-foreground">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="font-display text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                NBTE approved
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
                National Diploma programmes
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/80">
                Seven two-year diplomas across engineering, business, hospitality, computing and
                building technology — four semesters including SIWES industrial attachment.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/programs/national-diploma"
                  className="group inline-flex items-center gap-2 border border-gold bg-gold px-5 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
                >
                  All ND programmes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/departments"
                  className="inline-flex items-center border border-ink-foreground/30 px-5 py-2.5 font-display text-xs font-semibold tracking-[0.12em] uppercase transition-colors hover:border-gold hover:text-gold"
                >
                  Departments
                </Link>
              </div>
            </div>
            <ul className="space-y-2 border-t border-ink-foreground/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              {ND_PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="block text-sm leading-snug text-ink-foreground/85 transition-colors hover:text-gold"
                  >
                    {p.name.replace("National Diploma in ", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {PROGRAM_CATEGORIES.map((category) => {
          const items = CITY_GUILDS_PROGRAMS.filter((p) => p.category === category);

          if (!items.length) return null;
          return (
            <section
              key={category}
              id={category
                .toLowerCase()
                .replace(/&/g, "and")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")}
              className="mt-14 scroll-mt-28"
            >
              <div className="flex items-end justify-between border-b border-border pb-3">
                <h2 className="font-display text-xl font-bold text-foreground">{category}</h2>
                <span className="font-display text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {items.length} {items.length === 1 ? "programme" : "programmes"}
                </span>
              </div>

              <ul className="news-scroller mt-7 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2">
                {items.map((p, i) => (
                  <li
                    key={p.slug}
                    className="w-[280px] shrink-0 snap-start sm:w-[320px] lg:w-[340px]"
                  >
                    <ProgramCard
                      to="/programs/$slug"
                      params={{ slug: p.slug }}
                      image={programImage(p.slug, i)}
                      alt={p.name}
                      title={p.name}
                      body={p.body}
                      duration={p.duration}
                      cta="Programme details"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
