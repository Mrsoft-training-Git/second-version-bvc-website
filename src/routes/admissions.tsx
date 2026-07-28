import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Apply to BVC: entry requirements, assessment dates, fees, scholarships and the September intake timeline.",
      },
      { property: "og:title", content: "Admissions — Bonny Vocational Center" },
      {
        property: "og:description",
        content: "The September intake is open across all nine trade areas. Applications close 15 August.",
      },
    ],
  }),
  component: Admissions,
});

const STEPS = [
  {
    n: "01",
    title: "Submit an application",
    body: "Complete the paper form at the BVC gate office or the online form during an open intake window.",
  },
  {
    n: "02",
    title: "Sit the entry assessment",
    body: "A two-hour assessment covering literacy, numeracy and practical aptitude. No prior workshop experience required.",
  },
  {
    n: "03",
    title: "Interview and trade fit",
    body: "A short conversation with instructors to match you to a trade area and confirm placement capacity.",
  },
  {
    n: "04",
    title: "Register and collect kit",
    body: "Pay or confirm your sponsorship, then collect coveralls, boots and safety gear before orientation week.",
  },
];

const DATES = [
  { label: "Applications open", value: "2 June 2026" },
  { label: "Applications close", value: "15 August 2026" },
  { label: "Entry assessments", value: "22–24 August 2026" },
  { label: "Orientation week", value: "7 September 2026" },
  { label: "Classes begin", value: "14 September 2026" },
];

const FEES = [
  { label: "Short tracks (9 months)", value: "₦180,000 / year" },
  { label: "Standard tracks (12 months)", value: "₦240,000 / year" },
  { label: "Long tracks (18 months)", value: "₦260,000 / year" },
  { label: "Kit and safety gear", value: "₦35,000 one-off" },
];

function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="How to become a BVC trainee"
        intro="Entry is open to anyone who has completed secondary school or can demonstrate equivalent aptitude. Sponsorship and scholarship places are available in every trade area."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="module-rule pt-3 text-2xl font-bold">
              Four steps
            </h2>
            <ol className="mt-8 space-y-8">
              {STEPS.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl font-bold text-primary">{s.n}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 border border-border bg-surface p-6">
              <p className="eyebrow">Scholarships</p>
              <h3 className="mt-2 font-display text-xl font-bold">Women in Trades</h3>
              <p className="mt-2 text-muted-foreground">
                Sixty full-tuition awards for women entering welding, electrical, mechanical and
                instrumentation tracks, including kit and transport support.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block font-display text-xs font-semibold tracking-wide text-primary uppercase link-underline"
              >
                Request the scholarship pack
              </Link>
            </div>
          </section>

          <aside className="space-y-10">
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Key dates
              </h2>
              <dl className="mt-4 text-sm">
                {DATES.map((d) => (
                  <div key={d.label} className="flex justify-between border-b border-border py-2.5">
                    <dt className="text-muted-foreground">{d.label}</dt>
                    <dd className="font-display font-semibold">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Fees
              </h2>
              <dl className="mt-4 text-sm">
                {FEES.map((d) => (
                  <div key={d.label} className="flex justify-between border-b border-border py-2.5">
                    <dt className="text-muted-foreground">{d.label}</dt>
                    <dd className="font-display font-semibold">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">
                Placeholder figures for layout purposes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
