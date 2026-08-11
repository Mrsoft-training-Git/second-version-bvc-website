import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, CalendarDays } from "lucide-react";

import { ProgramCard } from "@/components/program-card";
import { ND_PROGRAMS } from "@/data/programs";
import { programImage } from "@/lib/program-images";

export const Route = createFileRoute("/programs/national-diploma")({
  head: () => ({
    meta: [
      { title: "National Diploma Programmes — Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "BVC's seven NBTE-approved National Diploma programmes: mechanical, welding and fabrication, electrical and electronics, business administration, hospitality, computer science and building technology.",
      },
      {
        property: "og:title",
        content: "National Diploma Programmes — Bonny Vocational Centre",
      },
      {
        property: "og:description",
        content:
          "Two-year, four-semester National Diplomas including SIWES, delivered in BVC's workshops, laboratories and kitchens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NationalDiploma,
});

function NationalDiploma() {
  return (
    <div>
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.14em] text-gold uppercase transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All programmes
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            BVC Approved National Diploma Programmes
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80">
            Seven National Diplomas approved by the National Board for Technical Education, each
            running for two academic years across four semesters and including the Students&apos;
            Industrial Work Experience Scheme (SIWES).
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" />
              <dt className="sr-only">Duration</dt>
              <dd>2 academic years · 4 semesters incl. SIWES</dd>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-gold" />
              <dt className="sr-only">Accreditation</dt>
              <dd>NBTE approved</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between border-b border-border pb-3">
          <h2 className="font-display text-xl font-bold text-foreground">
            Diplomas on offer
          </h2>
          <span className="font-display text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {ND_PROGRAMS.length} programmes
          </span>
        </div>

        <ul className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ND_PROGRAMS.map((p, i) => (
            <li key={p.slug}>
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

        <div className="mt-14 rounded-2xl border border-border bg-muted/60 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-foreground">
            Each diploma is delivered by its own department
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Read how the seven academic departments are structured, what they teach and who leads
            them.
          </p>
          <Link
            to="/departments"
            className="mt-6 inline-block border border-gold bg-gold px-6 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
          >
            Academic departments
          </Link>
        </div>
      </div>
    </div>
  );
}
