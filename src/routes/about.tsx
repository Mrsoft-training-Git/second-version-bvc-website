import { createFileRoute } from "@tanstack/react-router";
import judeImg from "@/assets/people/Mr._Jude.png.asset.json";
import micahImg from "@/assets/people/Micah_Ibiama.png.asset.json";
import fillaImg from "@/assets/people/Enoch_Fila.png.asset.json";
import christianImg from "@/assets/people/Christian_Halliday.png.asset.json";
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
import nbteImg from "@/assets/accreditors/National_Board_for_Technical_Education.png.asset.json";
import nabtebImg from "@/assets/accreditors/National_Business_and_Technical_Examination.png.asset.json";
import cityGuildsImg from "@/assets/accreditors/City_Guilds_of_London_Institute.png.asset.json";
import ilmImg from "@/assets/accreditors/Institute_of_Leadership_and_Management_London.png.asset.json";
import gcdcImg from "@/assets/partners/Government_Crafts_Development_Centre_Port_Harcourt.png.asset.json";
import juliusBergerImg from "@/assets/partners/Julius_Berger_Plc.png.asset.json";
import mandilasImg from "@/assets/partners/Mandilas_Enterprises_Limited.png.asset.json";

const PARTNERS: { name: string; logo: string }[] = [
  { name: "Government Crafts Development Centre, Port Harcourt", logo: gcdcImg.url },
  { name: "Julius Berger Plc", logo: juliusBergerImg.url },
  { name: "Mandilas Enterprises Limited", logo: mandilasImg.url },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BVC - Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "Bonny Vocational Centre: established in 2004 by Nigeria LNG Limited with Bonny Kingdom. Our vision, mission, core values, management team and Board of Trustees.",
      },
      { property: "og:title", content: "About BVC - Bonny Vocational Centre" },
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

const ACCREDITORS: { name: string; short: string; logo?: string }[] = [
  {
    name: "National Board for Technical Education",
    short: "NBTE",
    logo: nbteImg.url,
  },
  {
    name: "National Business and Technical Examinations Board",
    short: "NABTEB",
    logo: nabtebImg.url,
  },
  {
    name: "City & Guilds of London Institute",
    short: "City & Guilds",
    logo: cityGuildsImg.url,
  },
  {
    name: "Institute of Leadership and Management, London",
    short: "ILM",
    logo: ilmImg.url,
  },
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

function About() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary px-6 pt-12 pb-20 text-primary-foreground sm:px-12">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-10">
          <div className="grid h-full grid-cols-4 gap-2">
            <div className="h-full bg-primary-foreground/25" />
            <div className="h-full translate-y-12 bg-primary-foreground/25" />
            <div className="h-full bg-primary-foreground/25" />
            <div className="h-full translate-y-24 bg-primary-foreground/25" />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl">
          <span className="mb-4 inline-block bg-gold px-3 py-1 font-display text-xs font-bold tracking-[0.18em] uppercase text-gold-foreground">
            Established 2004
          </span>
          <h1 className="max-w-3xl font-display text-4xl leading-[0.95] font-extrabold sm:text-5xl md:text-6xl">
            An excellent example
            <br />
            <span className="text-gold">of a TVET institution.</span>
          </h1>
        </div>
      </section>

      {/* MISSION / VISION OVERLAY */}
      <section className="relative z-20 -mt-10 px-6 sm:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 shadow-xl md:grid-cols-2">
          <div className="bg-ink p-10 text-ink-foreground">
            <h2 className="mb-4 font-display text-xs font-bold tracking-[0.18em] uppercase text-gold">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed font-light">
              To provide market-responsive, competency-based technical and vocational education
              through strong industry partnerships, cutting-edge technology, and practical training
              that empowers youths across Bonny Kingdom, NLNG&rsquo;s GTS Communities, and Nigeria.
            </p>
          </div>
          <div className="bg-surface p-10 text-surface-foreground">
            <h2 className="mb-4 font-display text-xs font-bold tracking-[0.18em] uppercase text-primary">
              Our Vision
            </h2>
            <p className="text-xl leading-relaxed font-medium text-ink">
              To become a leading TVET institution in the region, supplying the manpower
              requirements of relevant industries within and beyond Bonny Island.
            </p>
            <div className="mt-6 h-1 w-16 bg-gold" />
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-5xl grid-cols-12 gap-10 px-6 py-24 sm:px-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-display text-4xl leading-tight font-extrabold">
            A foundation built on purpose
          </h2>
          <div className="mt-6 h-1 w-20 bg-gold" />
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="space-y-6 font-serif text-xl leading-relaxed">
            <p>
              <span className="float-left mt-2 mr-4 font-display text-6xl leading-none font-bold text-primary">
                I
              </span>
              n furtherance of its policy for sustainable economic development within its host
              communities, Nigeria LNG Limited established the Bonny Vocational Centre (BVC) in
              partnership with the Bonny Kingdom in 2004.
            </p>
            <p className="text-muted-foreground">
              BVC is an incorporated trustee governed by a Board of Trustees composed of
              representatives from the community, government, industry, and technical experts who
              provide policy direction for the institution. The management team is made up of
              qualified and experienced professionals in educational management, TVET practice, and
              business administration.
            </p>
            <p className="text-muted-foreground">
              The Centre offers a range of qualifications across ten sectors, each externally quality
              assured by its respective awarding body.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES + GOALS */}
      <section className="bg-surface px-6 py-24 sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-10 border-b border-primary pb-4 font-display text-2xl font-bold uppercase tracking-tight">
              Core values
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <div key={v.name}>
                  <div className="mb-2 font-display text-sm font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-wide text-primary">
                    {v.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-10 border-b border-primary pb-4 font-display text-2xl font-bold uppercase tracking-tight">
              Strategic goals
            </h2>
            <ul className="space-y-6">
              {GOALS.map((g, i) => (
                <li key={g} className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[10px] font-bold text-ink-foreground">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <p className="leading-snug font-medium">{g}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-12">
        <h2 className="mb-16 text-center font-display text-4xl font-extrabold">Leadership</h2>
        <div className="space-y-24">
          {MANAGEMENT.map((m, i) => (
            <article
              key={m.name}
              className={`flex flex-col items-center gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full shrink-0 md:w-1/3">
                <div className="flex aspect-3/4 w-full items-center justify-center bg-ink shadow-xl">
                  <span className="font-display text-5xl font-bold tracking-wide text-gold/70">
                    {initials(m.name)}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="mb-1 font-display text-3xl font-bold">{m.name}</h3>
                <p className="mb-6 font-display text-xs font-bold tracking-[0.18em] uppercase text-gold">
                  {m.role}
                </p>
                <div className="space-y-4 font-serif text-lg leading-relaxed text-muted-foreground">
                  {m.bio.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PEOPLE GRIDS */}
      <section className="bg-ink px-6 py-24 text-ink-foreground sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="mb-10 border-l-4 border-gold pl-6 font-display text-3xl font-bold">
              Board of Trustees
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
              {TRUSTEES.map((p) => (
                <figure key={p.name} className="group">
                  <div className="mb-3 aspect-square overflow-hidden bg-ink-foreground/10">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-gold/70">
                        {initials(p.name)}
                      </div>
                    )}
                  </div>
                  <figcaption>
                    <h3 className="font-display text-xs font-bold uppercase leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-[10px] tracking-[0.14em] uppercase text-ink-foreground/55">
                      {p.role}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-10 border-l-4 border-primary pl-6 font-display text-3xl font-bold">
              Consultancy team
            </h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
              {CONSULTANCY.map((p) => (
                <figure key={p.name} className="group text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-gold/30 bg-ink-foreground/10">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-display text-lg font-bold text-gold/70">
                        {initials(p.name)}
                      </div>
                    )}
                  </div>
                  <figcaption>
                    <h3 className="font-display text-sm font-bold">{p.name}</h3>
                    <p className="text-[9px] uppercase tracking-[0.12em] text-gold">{p.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-12">
        <h2 className="mb-8 font-display text-xl font-bold uppercase tracking-[0.16em]">
          Sectors covered
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {SECTORS.map((s) => (
            <div
              key={s}
              className="bg-surface p-4 font-display text-[11px] font-bold uppercase text-primary transition-colors hover:bg-brand-tint"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* ACCREDITATION BODIES */}
      <section className="bg-surface px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 inline-block bg-gold px-3 py-1 font-display text-[10px] font-bold tracking-[0.18em] uppercase text-gold-foreground">
                Quality assured
              </span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                Accreditation & Awarding bodies
              </h2>
              <div className="mt-5 h-1 w-20 bg-gold" />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Every qualification delivered at BVC is externally quality assured by a recognised
              national or international awarding body.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {ACCREDITORS.map((a) => (
              <article
                key={a.name}
                className="group flex flex-col gap-5 bg-background p-8 transition-colors hover:bg-brand-tint"
              >
                <div className="flex h-20 items-center">
                  {a.logo ? (
                    <img
                      src={a.logo}
                      alt={`${a.short} logo`}
                      loading="lazy"
                      className="max-h-20 max-w-[70%] object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  ) : (
                    <span className="flex h-16 w-16 items-center justify-center bg-ink font-display text-sm font-bold text-gold">
                      {a.short}
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <p className="mb-1 font-display text-[10px] font-bold tracking-[0.18em] uppercase text-gold">
                    {a.short}
                  </p>
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {a.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-12">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block bg-ink px-3 py-1 font-display text-[10px] font-bold tracking-[0.18em] uppercase text-gold">
              Working together
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Partners
            </h2>
            <div className="mt-5 h-1 w-20 bg-primary" />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Institutions and industry partners we collaborate with on training delivery, industrial
            attachment, and workforce development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-3">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col gap-5 bg-surface p-8 transition-colors hover:bg-brand-tint"
            >
              <div className="flex h-20 items-center">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="max-h-20 max-w-[70%] object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-auto font-display text-base font-bold leading-snug text-ink">
                {p.name}
              </h3>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
