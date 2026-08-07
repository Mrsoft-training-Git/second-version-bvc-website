// Mock content for the BVC site. Replace with real copy/assets later.

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Education", to: "/education" },
  { label: "Programs", to: "/programs" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "News", to: "/news" },
  { label: "About", to: "/about" },
] as const;


export type Story = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
};

export const SPOTLIGHT = {
  eyebrow: "Spotlight",
  title: "Learning by making",
  body:
    "In the BVC fabrication hall, second-year trainees rebuild a light-duty chassis from salvaged parts — cutting, welding and aligning every joint themselves. Every certificate at Bonny Vocational Center is earned on the shop floor.",
  linkLabel: "Full story",
  linkTo: "/news/learning-by-making",
};

export type Spotlight = {
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
  slug: string;
  caption: string;
  imageKey: "workshop" | "electrical" | "graduation";
  alt: string;
};

export const SPOTLIGHTS: Spotlight[] = [
  {
    eyebrow: "Spotlight",
    title: "Learning by making",
    body:
      "In the BVC fabrication hall, second-year trainees rebuild a light-duty chassis from salvaged parts — cutting, welding and aligning every joint themselves. Every certificate at Bonny Vocational Center is earned on the shop floor.",
    linkLabel: "Full story",
    slug: "learning-by-making",
    caption: "Second-year welding trainees in the fabrication hall. Photo: BVC",
    imageKey: "workshop",
    alt: "Trainees welding a chassis in the BVC fabrication hall",
  },
  {
    eyebrow: "Facilities",
    title: "Forty new benches, one bigger lab",
    body:
      "The expanded electrical installation lab doubles bench capacity ahead of the September intake, adding three control-panel rigs so every trainee wires a live circuit in their first term.",
    linkLabel: "Read more",
    slug: "electrical-lab-expansion",
    caption: "The expanded electrical installation lab. Photo: BVC",
    imageKey: "electrical",
    alt: "Rows of wiring benches in the BVC electrical installation lab",
  },
  {
    eyebrow: "Community",
    title: "412 graduates, nine trades",
    body:
      "The class of 2026 is the largest cohort in the center's history, with 78% of graduates placed in work or apprenticeships within six months of leaving the workshop floor.",
    linkLabel: "See the story",
    slug: "class-of-2026",
    caption: "Graduation day on the BVC campus. Photo: BVC",
    imageKey: "graduation",
    alt: "BVC graduates celebrating at the 2026 graduation ceremony",
  },
];


export const STORIES: Story[] = [
  {
    slug: "learning-by-making",
    title: "Learning by making: inside the fabrication hall",
    dek: "Trainees rebuild a light-duty chassis from salvaged parts as part of the welding and fabrication capstone.",
    category: "Skills",
    date: "July 14, 2026",
  },
  {
    slug: "electrical-lab-expansion",
    title: "New electrical installation lab doubles bench capacity",
    dek: "Forty additional wiring benches and three control-panel rigs open ahead of the September intake.",
    category: "Campus",
    date: "July 8, 2026",
  },
  {
    slug: "ict-industry-partnership",
    title: "ICT track adds a paid industry placement term",
    dek: "Twelve regional employers will host BVC trainees for a supervised twelve-week placement.",
    category: "Partnerships",
    date: "June 29, 2026",
  },
  {
    slug: "class-of-2026",
    title: "Class of 2026: 412 graduates, 78% placed within six months",
    dek: "Graduation marks the largest cohort in the center's history across nine trade areas.",
    category: "Community",
    date: "June 21, 2026",
  },
  {
    slug: "women-in-trades",
    title: "Women in Trades scholarship opens for a third cycle",
    dek: "Sixty full-tuition awards for women entering welding, electrical and mechanical tracks.",
    category: "Access",
    date: "June 10, 2026",
  },
  {
    slug: "safety-certification",
    title: "BVC workshops pass independent safety certification",
    dek: "All nine workshops cleared the annual audit with zero critical findings.",
    category: "Operations",
    date: "May 30, 2026",
  },
];

export const PROGRAMS = [
  {
    slug: "welding",
    name: "Welding & Fabrication",
    duration: "12 months",
    body: "Arc, MIG and TIG welding, plate and pipe work, blueprint reading, and structural fabrication.",
  },
  {
    slug: "electrical",
    name: "Electrical Installation",
    duration: "12 months",
    body: "Domestic and industrial wiring, control panels, motor circuits, and inspection standards.",
  },
  {
    slug: "mechanical",
    name: "Mechanical Fitting",
    duration: "18 months",
    body: "Bearings, pumps, alignment, hydraulics and pneumatics, with planned-maintenance practice.",
  },
  {
    slug: "ict",
    name: "ICT & Digital Skills",
    duration: "9 months",
    body: "Hardware support, networking fundamentals, office productivity and introductory programming.",
  },
  {
    slug: "instrumentation",
    name: "Instrumentation & Control",
    duration: "18 months",
    body: "Sensors, loop calibration, PLC basics and process-control troubleshooting.",
  },
  {
    slug: "catering",
    name: "Catering & Hospitality",
    duration: "9 months",
    body: "Commercial kitchen practice, food safety, costing and front-of-house service.",
  },
  {
    slug: "tailoring",
    name: "Garment Making",
    duration: "9 months",
    body: "Pattern drafting, industrial machine operation, finishing and small-business basics.",
  },
  {
    slug: "plumbing",
    name: "Plumbing & Pipefitting",
    duration: "12 months",
    body: "Pipe layout, threading and jointing, sanitary systems, and pressure testing.",
  },
  {
    slug: "carpentry",
    name: "Carpentry & Joinery",
    duration: "12 months",
    body: "Hand and machine woodwork, joinery, roofing carpentry and site setting-out.",
  },
];

export const FACTS = [
  { value: "9", label: "Trade areas" },
  { value: "1,850", label: "Trainees enrolled" },
  { value: "78%", label: "Placed within six months" },
  { value: "2004", label: "Founded" },
];

export const QUICK_LINKS = [
  { label: "Apply to BVC", to: "/admissions" },
  { label: "Program catalogue", to: "/programs" },
  { label: "Visit the center", to: "/visit" },
  { label: "Industry partnerships", to: "/about" },
];

// Left-panel resources, mirroring an institutional site's "Top resources for" block.
export const TOP_RESOURCES = [
  { label: "programs", to: "/programs" },
  { label: "prospective trainees", to: "/admissions" },
  { label: "all resources", to: "/education" },
  { label: "events", to: "/campus-life" },
];

export const PANEL_LINKS = [
  { label: "Visit", to: "/visit" },
  { label: "People", to: "/about" },
  { label: "Jobs", to: "/about" },
  { label: "Contact", to: "/contact" },
];


