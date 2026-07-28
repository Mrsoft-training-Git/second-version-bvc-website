import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { PROGRAMS } from "@/data/site";
import { programImage } from "@/lib/program-images";

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
      <div className="mx-auto max-w-6xl px-4 py-14">
        <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <li key={p.slug}>
              <div className="aspect-[3/2] w-full overflow-hidden">
                <img
                  src={programImage(p.slug, i)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-lg font-bold">{p.name}</h2>
                <span className="text-xs tracking-wide text-muted-foreground uppercase">
                  {p.duration}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <p className="mt-3 text-sm">
                <Link to="/admissions" className="link-underline">
                  Entry requirements
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
