import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import ictImg from "@/assets/news-ict.jpg";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Bonny Vocational Center" },
      {
        name: "description",
        content:
          "How BVC teaches: competency-based instruction, 70% workshop time, industry-assessed practical exams and supervised placement.",
      },
      { property: "og:title", content: "Education — Bonny Vocational Center" },
      {
        property: "og:description",
        content: "Competency-based trade instruction with 70% of contact hours in the workshop.",
      },
    ],
  }),
  component: Education,
});

const PILLARS = [
  {
    title: "Workshop first",
    body: "Seventy percent of contact hours happen at a bench, a machine or a live installation. Theory is taught to explain what the hands are already doing.",
  },
  {
    title: "Competency-based progression",
    body: "Each module has a task list. A trainee signs off a module when an instructor and an industry assessor both observe the task performed to standard.",
  },
  {
    title: "Assessed by industry",
    body: "Final practical exams are graded by external assessors drawn from partner employers, so a BVC certificate means the same thing on every site.",
  },
  {
    title: "Placement built in",
    body: "Every long-track program ends in a twelve-week supervised placement with a partner employer, with a written performance report.",
  },
];

const TERMS = [
  { term: "Term 1", focus: "Safety, tools, measurement, workshop discipline" },
  { term: "Term 2", focus: "Core trade tasks and blueprint reading" },
  { term: "Term 3", focus: "Advanced tasks, fault-finding, capstone build" },
  { term: "Term 4", focus: "Supervised industry placement and portfolio review" },
];

function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Taught the way the work is done"
        intro="BVC instruction is organised around tasks a technician performs on the job, assessed by the people who will hire them."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <ul className="space-y-8">
              {PILLARS.map((p) => (
                <li key={p.title} className="border-t border-border pt-4">
                  <h2 className="font-display text-lg font-bold">{p.title}</h2>
                  <p className="mt-2 text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={ictImg}
              alt="Instructor supporting trainees in the BVC ICT lab"
              loading="lazy"
              width={900}
              height={600}
              className="w-full object-cover"
            />
            <div className="mt-8 module-rule pt-4">
              <h2 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
                A typical long track
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                {TERMS.map((t) => (
                  <div key={t.term} className="border-b border-border pb-3">
                    <dt className="font-display font-bold">{t.term}</dt>
                    <dd className="text-muted-foreground">{t.focus}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
