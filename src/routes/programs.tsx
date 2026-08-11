import { createFileRoute } from "@tanstack/react-router";

import { ContentCard } from "@/components/content-card";
import { PROGRAMS } from "@/data/site";
import { programImage } from "@/lib/program-images";
import { ProgramShowcase } from "@/components/program-showcase";


export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Nine certificate programs at BVC: welding, electrical installation, mechanical fitting, ICT, instrumentation, catering, garment making, plumbing and carpentry.",
      },
      { property: "og:title", content: "Programs — Bonny Vocational Center" },
      {
        property: "og:description",
        content: "Certificate programs from nine to eighteen months, taught in working workshops.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <ProgramShowcase hero className="border-b border-border" />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="sr-only">Programs at Bonny Vocational Center</h1>


        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <li key={p.slug}>
              <ProgramCard
                to="/admissions"
                image={programImage(p.slug, i)}
                alt={p.name}
                title={p.name}
                body={p.body}
                duration={p.duration}
                cta="View curriculum"
              />
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
