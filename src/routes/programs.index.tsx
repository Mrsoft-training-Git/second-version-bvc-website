import { createFileRoute } from "@tanstack/react-router";

import { ProgramCard } from "@/components/program-card";
import { PROGRAMS, PROGRAM_CATEGORIES } from "@/data/programs";
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
          Every BVC programme leads to an internationally recognised City &amp; Guilds
          qualification, delivered through intensive practical training in our workshops, kitchens
          and laboratories.
        </p>

        {PROGRAM_CATEGORIES.map((category) => {
          const items = PROGRAMS.filter((p) => p.category === category);
          if (!items.length) return null;
          return (
            <section key={category} className="mt-14">
              <div className="flex items-end justify-between border-b border-border pb-3">
                <h2 className="font-display text-xl font-bold text-foreground">{category}</h2>
                <span className="font-display text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {items.length} {items.length === 1 ? "programme" : "programmes"}
                </span>
              </div>

              <ul className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
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
            </section>
          );
        })}
      </div>
    </>
  );
}
