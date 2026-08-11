import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import judeImg from "@/assets/people/Mr._Jude.png.asset.json";
import daggoImg from "@/assets/people/Se-Alabo.png.asset.json";
import tonyeImg from "@/assets/people/Dr._Tonye.png.asset.json";
import lucyImg from "@/assets/people/Dame_Lucy.png.asset.json";
import morganImg from "@/assets/people/Mr._Morgan.png.asset.json";
import opeyemiImg from "@/assets/people/Dr._Opeyemi.jpg.asset.json";
import francescaImg from "@/assets/people/Francesca.png.asset.json";
import kingsleyImg from "@/assets/people/Kingsley.png.asset.json";
import estherImg from "@/assets/people/Esther.png.asset.json";
import ibieneboImg from "@/assets/people/Ibinebo.png.asset.json";
import emeraldImg from "@/assets/people/Emerald.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BVC — Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "Bonny Vocational Centre: established in 2004 by Nigeria LNG Limited with Bonny Kingdom. Our vision, mission, core values, management team and Board of Trustees.",
      },
      { property: "og:title", content: "About BVC — Bonny Vocational Centre" },
      {
        property: "og:description",
        content:
          "An accredited TVET institution on Bonny Island offering nationally and internationally recognised vocational qualifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const ACCREDITORS = [
  "Rivers State Government",
  "National Board for Technical Education (NBTE)",
  "National Business and Technical Examinations Board (NABTEB)",
  "City & Guilds of London Institute (C&G)",
  "Institute of Leadership and Management (ILM), London",
];

const SECTORS = [
  "Building Services",
  "Business Skills",
  "Construction & the Built Environment",
  "Engineering",
  "Hospitality & Catering",
  "Learning",
  "Logistics",
  "Oil & Gas",
  "Transport Maintenance",
  "Utilities",
];

const VALUES = [
  { name: "Commitment", body: "Dedicated to duty, responsibility, and service." },
  { name: "Integrity", body: "True in words, actions, and deeds." },
  { name: "Excellence", body: "Strive for best-in-class service delivery and professionalism." },
  {
    name: "Diversity",
    body: "Maintain respectful interactions that promote free speech and engender academic freedom.",
  },
  {
    name: "Innovation",
    body: "Creative and dynamic in adopting best practices and emerging technologies.",
  },
  {
    name: "Collaboration",
    body: "Work to establish productive partnerships with colleagues, corporate and non-profit organisations, and communities.",
  },
];

const GOALS = [
  "Ensure curricula and competencies reflect real-time labour market demands.",
  "Elevate training delivery, infrastructure, and faculty competence in line with global benchmarks.",
  "Expand enrollment capacity while ensuring equal opportunities for marginalized and underrepresented groups.",
  "Integrate modern technology and eco-friendly practices into institutional operations and training.",
  "Build a resilient, financially autonomous, and transparent management framework.",
];

const MANAGEMENT = [
  {
    name: "Dr. Micah Dappa Ibiama",
    role: "Technical Director",
    bio: [
      "Dr. Micah Dappa Ibiama is the Technical Director at Bonny Vocational Centre, with 25 years of experience in technical education, quality assurance, and educational management.",
      "He holds a Master of Education in Educational Management, a Master of Science in Technical Education (Building Technology), and a Doctor of Philosophy in Administration of Higher Education. He also holds professional certifications including the CIPD Level 7 Diploma in Human Resource Development, Certified ISO 21001 Lead Implementer, and Certified Educational Management Professional.",
      "He has demonstrated proficiency in designing industry-aligned curricula, leading institutional accreditation initiatives, and managing the delivery of international qualifications. He is a member of the Nigerian Institute of Building (NIOB), the Nigerian Institute of Training and Development (NITAD), the CIPD, and the International Vocational Education and Training Association (IVETA).",
    ],
  },
  {
    name: "Mr. Filla Enoch Bobo",
    role: "Head, Academics",
    bio: [
      "Mr. Filla Enoch Bobo is the Head, Academics at Bonny Vocational Centre and an experienced education professional with over twenty years of experience in teaching, academic leadership, and curriculum development.",
      "He holds a Postgraduate Diploma in Technical and Science Education and a B.Sc. in Computer Science/Mathematics. He is a Project Management Professional (PMP), a Project Monitoring and Evaluation Professional, and holds an Advanced Diploma in Teaching, Training and Assessing Competences.",
      "He is a member of the Nigerian Computer Society (NCS) and is committed to advancing quality technical and vocational education through innovation, professionalism, and continuous improvement.",
    ],
  },
  {
    name: "Mr. Christian Halliday",
    role: "Head, Corporate & Consultancy",
    bio: [
      "Mr. Christian Halliday is a seasoned accountant and administrative professional with nineteen years of working experience in the education sector, having served in both lecturing and administrative roles across finance, accounting, administration, contracts and procurement, and strategic management.",
      "He holds a B.Sc. in Accounting, an M.Sc. in Business Administration, an MBA in Management, an M.Sc. in Accounting, and a Ph.D. in Accounting (in view).",
      "He specialises in driving institutional growth and fiscal sustainability, transforming traditional academic financial operations into modern systems through strategic investment initiatives, cost optimisation frameworks, and Enterprise Resource Planning (ERP) integrations. He is a member of the Nigerian Institute of Management (NIM), the Chartered Institute of Administrators (CIA), and the Chartered Institute of Purchasing and Supply (CIPS), United Kingdom.",
    ],
  },
];

type Person = { name: string; role: string; img?: string };

const TRUSTEES: Person[] = [
  { name: "Se-Alabo Daggo B. Adda-Allison", role: "Chairman", img: daggoImg.url },
  { name: "Dr. Tonye Willie-Pepple", role: "Member", img: tonyeImg.url },
  { name: "Dame Lucy Jamaica", role: "Member", img: lucyImg.url },
  { name: "Mr. Jude Ieekaa", role: "Member", img: judeImg.url },
  { name: "Mr. Morgan Brown", role: "Member", img: morganImg.url },
  { name: "Dr. Opeyemi M. Adeyemi", role: "Member", img: opeyemiImg.url },
];

const CONSULTANCY: Person[] = [
  { name: "Francesca Blessing-Hart", role: "Client Relations Officer", img: francescaImg.url },
  { name: "Kingsley Jumbo", role: "Business Development Advisor", img: kingsleyImg.url },
  { name: "Esther Boma-Okara", role: "Snr Client Relations", img: estherImg.url },
  { name: "Ibienebo Banigo", role: "Liaison Officer", img: ibieneboImg.url },
  { name: "Emerald Attoni", role: "Receptionist", img: emeraldImg.url },
];

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Dame|Se-Alabo)\s+/i, "")
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function PersonCard({ person }: { person: Person }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/5] overflow-hidden bg-surface">
        {person.img ? (
          <img
            src={person.img}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink text-ink-foreground">
            <span className="font-display text-3xl font-bold tracking-wide text-accent">
              {initials(person.name)}
            </span>
          </div>
        )}
      </div>
      <figcaption className="border-t border-border px-4 py-3">
        <p className="font-display text-sm font-semibold leading-snug">{person.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{person.role}</p>
      </figcaption>
    </figure>
  );
}

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An excellent example of a TVET institution"
        intro="Bonny Vocational Centre offers vocational and occupational skills training programmes that are nationally and internationally accredited, delivered with industry-aligned curricula and assured with duly recognised certificates."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <section>
            <h2 className="module-rule pt-3 text-2xl font-bold">History &amp; background</h2>
            <div className="mt-4 space-y-4 font-serif text-lg leading-relaxed text-muted-foreground">
              <p>
                In furtherance of its policy for sustainable economic development within its host
                communities, Nigeria LNG Limited established the Bonny Vocational Centre (BVC) in
                partnership with the Bonny Kingdom in 2004.
              </p>
              <p>
                BVC is an incorporated trustee governed by a Board of Trustees composed of
                representatives from the community, government, industry, and technical experts who
                provide policy direction for the institution. The management team is made up of
                qualified and experienced professionals in educational management, TVET practice, and
                business administration.
              </p>
              <p>
                The Centre offers a range of qualifications across ten sectors, each externally
                quality assured by its respective awarding body.
              </p>
            </div>

            <h2 className="mt-12 module-rule pt-3 text-2xl font-bold">Vision</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
              To become a leading TVET institution in the region, supplying the manpower requirements
              of relevant industries within and beyond Bonny Island.
            </p>

            <h2 className="mt-12 module-rule pt-3 text-2xl font-bold">Mission</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
              To provide market-responsive, competency-based technical and vocational education
              through strong industry partnerships, cutting-edge technology, and practical training
              that empowers youths across Bonny Kingdom, NLNG&rsquo;s Gas Transmission Systems (GTS)
              Communities, and Nigeria for high-demand careers and entrepreneurial success.
            </p>

            <h2 className="mt-12 module-rule pt-3 text-2xl font-bold">Core values</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div
                  key={v.name}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="font-display text-sm font-semibold tracking-[0.08em] uppercase text-primary">
                    {v.name}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 module-rule pt-3 text-2xl font-bold">Strategic goals</h2>
            <ol className="mt-6 space-y-4">
              {GOALS.map((g, i) => (
                <li key={g} className="flex gap-5 border-b border-border pb-4">
                  <span className="font-display text-lg font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted-foreground">{g}</p>
                </li>
              ))}
            </ol>
          </section>

          <aside className="space-y-10">
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Accreditation &amp; recognition
              </h2>
              <ul className="mt-4 text-sm">
                {ACCREDITORS.map((a) => (
                  <li key={a} className="border-b border-border py-2.5 text-muted-foreground">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Sectors covered
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SECTORS.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-surface-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="module-rule pt-3 text-2xl font-bold">Management team</h2>
          <div className="mt-6 space-y-6">
            {MANAGEMENT.map((m) => (
              <article
                key={m.name}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="eyebrow text-accent">{m.role}</p>
                <h3 className="mt-1.5 font-display text-xl font-bold">{m.name}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {m.bio.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="module-rule pt-3 text-2xl font-bold">Board of Trustees</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {TRUSTEES.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="module-rule pt-3 text-2xl font-bold">Consultancy team</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {CONSULTANCY.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
