import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import campusImg from "@/assets/campus.jpg";
import graduationImg from "@/assets/news-graduation.jpg";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life - Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Hostels, clubs, sport, chaplaincy and student support at Bonny Vocational Center's Finima Road campus.",
      },
      { property: "og:title", content: "Campus Life - Bonny Vocational Center" },
      {
        property: "og:description",
        content: "Nine workshops, two hostels and a student body drawn from across the Niger Delta.",
      },
    ],
  }),
  component: CampusLife,
});

const FACILITIES = [
  { name: "Fabrication hall", body: "Twenty-four welding bays with fume extraction and a plate-rolling shop." },
  { name: "Electrical labs", body: "Eighty wiring benches, three control-panel rigs and a motor test room." },
  { name: "ICT centre", body: "Ninety workstations, a small server room and a networking practice rack." },
  { name: "Hostels", body: "Two residences with 480 beds, study rooms and a shared refectory." },
  { name: "Training kitchen", body: "A commercial kitchen and 40-seat practice dining room." },
  { name: "Sports ground", body: "Football pitch, volleyball court and an outdoor fitness area." },
];

const CLUBS = [
  "Welders' Guild",
  "Robotics & Automation Club",
  "Women in Trades Network",
  "BVC Football Club",
  "Debate & Public Speaking",
  "Community Repair Saturdays",
];

function CampusLife() {
  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="A working campus"
        intro="BVC runs on a shop-floor rhythm: early roll call, workshop blocks, and afternoons for clubs, sport and community repair projects."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <img
          src={campusImg}
          alt="The main walkway on the BVC campus"
          loading="lazy"
          width={1600}
          height={912}
          className="w-full object-cover"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <section aria-labelledby="facilities-heading">
            <h2 id="facilities-heading" className="module-rule pt-3 text-2xl font-bold">
              Facilities
            </h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {FACILITIES.map((f) => (
                <li key={f.name} className="border-t border-border pt-4">
                  <h3 className="font-display text-base font-bold">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <aside>
            <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
              Clubs & societies
            </h2>
            <ul className="mt-4 text-sm">
              {CLUBS.map((c) => (
                <li key={c} className="border-b border-border py-2.5">
                  {c}
                </li>
              ))}
            </ul>
            <img
              src={graduationImg}
              alt="BVC graduates holding their certificates"
              loading="lazy"
              width={900}
              height={600}
              className="mt-8 w-full object-cover"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Graduation is held each June on the main quad.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}
