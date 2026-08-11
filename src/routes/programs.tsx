import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
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
      <PageHeader
        eyebrow="Programs"
        title="Nine trades, one standard"
        intro="Every BVC program is competency-based: trainees advance when they can demonstrate the task, not when the calendar says so."
      />
      <ProgramShowcase />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <li key={p.slug}>

              <ContentCard
                to="/admissions"
                image={programImage(p.slug, i)}
                badge="Program"
                title={p.name}
                body={p.body}
                meta={p.duration}
                cta="Entry requirements"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
