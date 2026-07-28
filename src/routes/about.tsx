import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import spotlightImg from "@/assets/spotlight-workshop.jpg";
import { FACTS } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BVC — Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Bonny Vocational Center's mission, history, leadership and industry partnerships on Bonny Island, Rivers State.",
      },
      { property: "og:title", content: "About BVC — Bonny Vocational Center" },
      {
        property: "og:description",
        content: "Founded in 2004 to train technicians for the industries of the Niger Delta.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2004", body: "BVC opens with two workshops and 60 trainees in welding and carpentry." },
  { year: "2009", body: "Electrical installation and plumbing tracks added; first hostel completed." },
  { year: "2014", body: "Instrumentation and ICT tracks launch with partner employer support." },
  { year: "2019", body: "External industry assessment introduced for all final practical exams." },
  { year: "2026", body: "Nine trade areas and 1,850 trainees; largest graduating cohort to date." },
];

const LEADERSHIP = [
  { name: "Engr. A. Dappa", role: "Director" },
  { name: "Mrs. N. Okoro", role: "Deputy Director, Academics" },
  { name: "Mr. T. Amadi", role: "Head of Workshops" },
  { name: "Ms. B. Eze", role: "Head of Placement & Partnerships" },
];

const PARTNERS = [
  "Delta Energy Services",
  "Harbourline Engineering",
  "Rivers Power Utilities",
  "Finima Marine Works",
  "Bonny Hospitality Group",
  "Coastal Fabricators Ltd.",
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Skilled hands for the Niger Delta"
        intro="Bonny Vocational Center exists for one reason: to make sure the technical work of the region is done by people from the region, trained to a standard employers trust."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <section>
            <h2 className="module-rule pt-3 text-2xl font-bold">Mission</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
              We train technicians who can be handed a task and trusted to finish it safely. That
              means real machines, real materials, real defects to diagnose, and instructors who have
              worked on site. It also means access: no applicant is turned away for lack of prior
              workshop exposure.
            </p>

            <h2 className="mt-12 module-rule pt-3 text-2xl font-bold">History</h2>
            <ol className="mt-6 space-y-5">
              {TIMELINE.map((t) => (
                <li key={t.year} className="flex gap-5 border-b border-border pb-4">
                  <span className="font-display text-lg font-bold text-primary">{t.year}</span>
                  <p className="text-muted-foreground">{t.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <aside className="space-y-10">
            <img
              src={spotlightImg}
              alt="Instructor and trainees at a welding bench"
              loading="lazy"
              width={1600}
              height={1008}
              className="w-full object-cover"
            />
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                At a glance
              </h2>
              <dl className="mt-4 text-sm">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex justify-between border-b border-border py-2.5">
                    <dt className="text-muted-foreground">{f.label}</dt>
                    <dd className="font-display font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Leadership
              </h2>
              <ul className="mt-4 text-sm">
                {LEADERSHIP.map((l) => (
                  <li key={l.name} className="border-b border-border py-2.5">
                    <span className="font-display font-semibold">{l.name}</span>
                    <span className="block text-muted-foreground">{l.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Industry partners
              </h2>
              <ul className="mt-4 text-sm">
                {PARTNERS.map((p) => (
                  <li key={p} className="border-b border-border py-2.5 text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">Placeholder partner names.</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
