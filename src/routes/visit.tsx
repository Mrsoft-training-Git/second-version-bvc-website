import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import gateImg from "@/assets/visit-gate.jpg";
import kitchenImg from "@/assets/visit-kitchen.jpg";
import campusImg from "@/assets/campus.jpg";
import workshopImg from "@/assets/spotlight-workshop.jpg";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit BVC - A guided tour of the campus" },
      {
        name: "description",
        content:
          "Take a stop-by-stop guided tour of Bonny Vocational Center: the gate, fabrication hall, electrical labs, ICT centre, training kitchen, hostels and the quad.",
      },
      { property: "og:title", content: "Visit BVC - A guided tour of the campus" },
      {
        property: "og:description",
        content:
          "Walk the Finima Road campus stop by stop, from the main gate to the workshops, hostels and graduation quad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Visit BVC - A guided tour of the campus" },
      {
        name: "twitter:description",
        content: "A stop-by-stop guided tour of Bonny Vocational Center.",
      },
    ],
  }),
  component: VisitPage,
});

type Stop = {
  id: string;
  name: string;
  time: string;
  image: string;
  alt: string;
  body: string;
  details: string[];
};

const STOPS: Stop[] = [
  {
    id: "gate",
    name: "Main gate",
    time: "Stop 1 · 5 min",
    image: gateImg,
    alt: "The main entrance gate of the BVC campus",
    body:
      "Your tour begins at the Finima Road gate. Visitors sign in at the security post, collect a badge and are paired with a trainee guide from one of the nine trade areas.",
    details: [
      "Open weekdays 8:00–16:00",
      "Photo ID required at sign-in",
      "Guided tours leave every hour",
    ],
  },
  {
    id: "quad",
    name: "The quad",
    time: "Stop 2 · 10 min",
    image: campusImg,
    alt: "The main walkway and quad on the BVC campus",
    body:
      "Past the gate the walkway opens onto the quad - the centre of campus life, where roll call happens each morning and graduation is held every June.",
    details: ["Morning roll call at 7:30", "Notice boards for intake dates", "Shaded seating and refectory"],
  },
  {
    id: "fabrication",
    name: "Fabrication hall",
    time: "Stop 3 · 20 min",
    image: workshopImg,
    alt: "Trainees welding a chassis in the BVC fabrication hall",
    body:
      "The loudest room on campus. Twenty-four welding bays with fume extraction, a plate-rolling shop and the capstone chassis build that every welding trainee completes.",
    details: ["24 welding bays", "Arc, MIG and TIG stations", "PPE provided to visitors"],
  },
  {
    id: "electrical",
    name: "Electrical labs",
    time: "Stop 4 · 15 min",
    image: electricalImg,
    alt: "Rows of wiring benches in the BVC electrical installation lab",
    body:
      "Eighty wiring benches, three control-panel rigs and a motor test room. First-term trainees wire and energise a live circuit here under supervision.",
    details: ["80 wiring benches", "3 control-panel rigs", "Motor test room"],
  },
  {
    id: "ict",
    name: "ICT centre",
    time: "Stop 5 · 15 min",
    image: ictImg,
    alt: "Trainees at workstations in the BVC ICT centre",
    body:
      "Ninety workstations, a small server room and a networking practice rack where trainees terminate, patch and troubleshoot their own runs.",
    details: ["90 workstations", "Networking practice rack", "Server room walkthrough"],
  },
  {
    id: "kitchen",
    name: "Training kitchen",
    time: "Stop 6 · 15 min",
    image: kitchenImg,
    alt: "Catering trainees plating dishes in the BVC training kitchen",
    body:
      "A commercial kitchen and 40-seat practice dining room. Catering trainees run a full service twice a week, and visitors on the afternoon tour usually get to taste it.",
    details: ["Commercial kitchen line", "40-seat practice dining room", "Food safety demonstrations"],
  },
  {
    id: "graduation",
    name: "Certification & placement",
    time: "Stop 7 · 10 min",
    image: graduationImg,
    alt: "BVC graduates holding their certificates at graduation",
    body:
      "The tour ends in the placement office, where assessors explain how competencies are signed off and how 78% of graduates move into work or apprenticeships within six months.",
    details: ["Competency sign-off explained", "Employer partner list", "Admissions Q&A"],
  },
];

function VisitPage() {
  const [index, setIndex] = useState(0);
  const stop = STOPS[index];
  const progress = ((index + 1) / STOPS.length) * 100;

  return (
    <>
      <PageHeader
        eyebrow="Visit"
        title="Take the guided tour"
        intro="Seven stops, about 90 minutes on foot. Step through the campus below, or book a place on a live tour and let a trainee guide walk you round."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <nav aria-label="Tour stops" className="lg:sticky lg:top-[100px]">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Tour route
            </p>
            <ol className="border-l border-border">
              {STOPS.map((s, i) => {
                const active = i === index;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-current={active ? "step" : undefined}
                      className={`relative -ml-px flex w-full items-baseline gap-3 border-l-2 py-2.5 pl-4 text-left transition-all duration-300 ${
                        active
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                      }`}
                    >
                      <span className="font-display text-[11px] font-bold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-sm leading-snug transition-transform duration-300 ${
                          active ? "font-bold translate-x-0.5" : "font-semibold"
                        }`}
                      >
                        {s.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <section aria-live="polite" aria-labelledby="stop-heading">
            <div className="h-px w-full bg-border">
              <div
                className="h-px bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div key={stop.id} className="animate-in fade-in duration-700">
              <div className="mt-6 overflow-hidden bg-surface">
                <img
                  src={stop.image}
                  alt={stop.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  width={1600}
                  height={900}
                  className="aspect-video w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                />
              </div>

              <p className="mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {stop.time}
              </p>
              <h2 id="stop-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
                {stop.name}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{stop.body}</p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {stop.details.map((d) => (
                  <li key={d} className="border-t border-border pt-3 text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <button
                type="button"
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="group inline-flex items-center gap-2 border border-border px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
                Previous stop
              </button>

              {index < STOPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.min(STOPS.length - 1, i + 1))}
                  className="group relative inline-flex items-center gap-2 overflow-hidden border border-primary px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-primary transition-colors duration-300 hover:text-primary-foreground"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Next stop
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                  <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0" />
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden border border-primary px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-primary transition-colors duration-300 hover:text-primary-foreground"
                >
                  <span className="relative z-10">Apply to BVC</span>
                  <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0" />
                </Link>
              )}

              <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                {index + 1} / {STOPS.length}
              </span>
            </div>
          </section>
        </div>

        <section aria-labelledby="plan-heading" className="mt-16">
          <h2 id="plan-heading" className="module-rule pt-3 text-2xl font-bold">
            Plan your visit
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div className="border-t border-border pt-4">
              <h3 className="font-display text-base font-bold">Where we are</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Finima Road, Bonny Island, Rivers State, Nigeria. Boats from Port Harcourt arrive at
                Bonny jetty, 15 minutes from campus.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <h3 className="font-display text-base font-bold">Tour times</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Weekdays, hourly from 9:00 to 15:00. Groups of more than eight should book at least
                three days ahead.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <h3 className="font-display text-base font-bold">Book a tour</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Send us your preferred date and group size and the front desk will confirm.
              </p>
              <Link to="/contact" className="link-underline mt-2 inline-block text-sm font-semibold">
                Contact the front desk
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
