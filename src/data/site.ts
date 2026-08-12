// Mock content for the BVC site. Replace with real copy/assets later.
import nlngLogo from "@/assets/logos/nlng.png.asset.json";
import hyundaiLogo from "@/assets/logos/hyundai.png.asset.json";
import abbLogo from "@/assets/logos/abb.png.asset.json";
import schneiderLogo from "@/assets/logos/schneider.png.asset.json";
import samsungLogo from "@/assets/logos/samsung.png.asset.json";
import ncdmbLogo from "@/assets/logos/ncdmb.jpg.asset.json";
import amanyanaboLogo from "@/assets/logos/amanyanabo.png.asset.json";
import tcaLogo from "@/assets/logos/tca.png.asset.json";
import arcoLogo from "@/assets/clients/arco_maintenance_and_engineering_limited.png.asset.json";
import arewaLogo from "@/assets/clients/arewa_innovative_solutions_limited.png.asset.json";
import bucLogo from "@/assets/clients/bonny_utility_company_limited.png.asset.json";
import cfsLogo from "@/assets/clients/catering_facilities_solutions_limited.png.asset.json";
import courdeauLogo from "@/assets/clients/courdeau_catering_nigeria_limited.png.asset.json";
import dbnLogo from "@/assets/clients/delattre_bezons_nigeria_limited.jpg.asset.json";
import dexterousLogo from "@/assets/clients/dexterous_applied_training_institute.png.asset.json";
import ensLogo from "@/assets/clients/ens_catering_suppermarket_limited.jpg.asset.json";
import fmxLogo from "@/assets/clients/fmx_integrated_services_limited.png.asset.json";
import hyundaiClientLogo from "@/assets/clients/hyundai_heavy_industries_company_limited.png.asset.json";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Departments", to: "/departments" },
  { label: "News", to: "/", hash: "news" },
  { label: "About", to: "/about" },
  { label: "Sponsors & Donors", to: "/", hash: "sponsors" },
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
    "In the BVC fabrication hall, second-year trainees rebuild a light-duty chassis from salvaged parts - cutting, welding and aligning every joint themselves. Every certificate at Bonny Vocational Center is earned on the shop floor.",
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
  imageKey: "metrology" | "refrigeration" | "welding";
  alt: string;
};

export const SPOTLIGHTS: Spotlight[] = [
  {
    eyebrow: "Precision engineering",
    title: "Measured to the tenth of a millimetre",
    body:
      "In the metrology bay, a mechanical trainee sets a dial indicator against a machined block, checking flatness and parallelism before the part leaves the bench. Accuracy is taught with gauges in hand, not on a whiteboard.",
    linkLabel: "Full story",
    slug: "learning-by-making",
    caption: "Dimensional inspection in the BVC metrology bay. Photo: BVC",
    imageKey: "metrology",
    alt: "Trainee in coveralls using a dial indicator on a machined block at BVC",
  },
  {
    eyebrow: "Refrigeration & air conditioning",
    title: "Stripping a compressor down to the last valve plate",
    body:
      "Two trainees open up an industrial reciprocating compressor - logging every bolt, gasket and valve plate - then rebuild it to spec. Overhaul work runs on real plant equipment from day one.",
    linkLabel: "Read more",
    slug: "electrical-lab-expansion",
    caption: "Compressor overhaul practical in the RAC workshop. Photo: BVC",
    imageKey: "refrigeration",
    alt: "Two BVC trainees dismantling an industrial compressor on a workbench",
  },
  {
    eyebrow: "Welding & fabrication",
    title: "Every weld laid down under supervision",
    body:
      "Behind the darkened lens, a fabrication trainee runs a bead on a steel section - controlling arc length, travel speed and heat input until the joint passes visual inspection. Coded welding is taught bench by bench, in full PPE, on live equipment.",
    linkLabel: "See the story",
    slug: "learning-by-making",
    caption: "Arc welding practical in the BVC fabrication hall. Photo: BVC",
    imageKey: "welding",
    alt: "BVC trainee in a welding helmet and leather apron striking an arc on a steel section",
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

// Real programme catalogue lives in ./programs
export {
  PROGRAMS,
  PROGRAM_CATEGORIES,
  ND_PROGRAMS,
  CITY_GUILDS_PROGRAMS,
  getProgram,
} from "./programs";
export type { Program, ProgramCategory } from "./programs";



export const FACTS = [
  { value: "9", label: "Trade areas" },
  { value: "1,850", label: "Trainees enrolled" },
  { value: "78%", label: "Placed within six months" },
  { value: "2004", label: "Founded" },
];

export const SPONSORS = [
  { name: "Nigerian Content Development and Monitoring Board", logo: ncdmbLogo.url },
  { name: "Nigeria LNG Limited", logo: nlngLogo.url },
  { name: "Hyundai Heavy Industries Company Limited", logo: hyundaiLogo.url },
  { name: "ABB Nigeria Limited", logo: abbLogo.url },
  { name: "Samsung Heavy Industries Company Limited", logo: samsungLogo.url },
  { name: "Schneider Electric", logo: schneiderLogo.url },
];

export const DONORS = [
  { name: "Amanyanabo in Council", logo: amanyanaboLogo.url },
  { name: "Titled Citizens' Assembly of Grand Bonny Kingdom", logo: tcaLogo.url },
  { name: "Nigerian Content Development and Monitoring Board", logo: ncdmbLogo.url },
  { name: "Nigeria LNG Limited", logo: nlngLogo.url },
  { name: "Schneider Electric", logo: schneiderLogo.url },
  { name: "ABB Nigeria Limited", logo: abbLogo.url },
];

export const CLIENTS = [
  { name: "ARCO Maintenance and Engineering Limited", logo: arcoLogo.url },
  { name: "Arewa Innovative Solutions Limited", logo: arewaLogo.url },
  { name: "Bonny Utility Company Limited", logo: bucLogo.url },
  { name: "Catering & Facilities Solutions Limited", logo: cfsLogo.url },
  { name: "Courdeau Catering Nigeria Limited", logo: courdeauLogo.url },
  { name: "Delattre Bezons Nigeria Limited", logo: dbnLogo.url },
  { name: "Dexterous Applied Training Institute", logo: dexterousLogo.url },
  { name: "ENS Catering & Supermarket Limited", logo: ensLogo.url },
  { name: "FMX Integrated Services Limited", logo: fmxLogo.url },
  { name: "Hyundai Heavy Industries Company Limited", logo: hyundaiClientLogo.url },
  { name: "NLNG Ship Management Limited", logo: nsmlLogo.url },
  { name: "NNPC Exploration & Production Limited", logo: nnpcLogo.url },
  { name: "Pan Nigeria Limited", logo: panLogo.url },
  { name: "Pivot GIS Limited", logo: pivotLogo.url },
  { name: "Ponticelli Nigeria Limited", logo: ponticelliLogo.url },
  { name: "Rivers State Sustainable Development Agency", logo: rssdaLogo.url },
  { name: "S.J. Abed General Enterprises Limited", logo: sjabedLogo.url },
  { name: "Samsung Heavy Industries Company Limited", logo: samsungClientLogo.url },
  { name: "Shell Petroleum Development Company of Nigeria Limited", logo: shellLogo.url },
  { name: "Thompson Grace Investment Limited", logo: thompsonGraceLogo.url },
];


export const QUICK_LINKS = [
  { label: "Contact BVC", to: "/contact" },
  { label: "Program catalogue", to: "/programs" },
  
  { label: "Academic departments", to: "/departments" },
];


// Left-panel resources, mirroring an institutional site's "Top resources for" block.
export const TOP_RESOURCES = [
  { label: "programs", to: "/programs" },
  { label: "departments", to: "/departments" },
  { label: "events", to: "/campus-life" },
];

export const PANEL_LINKS = [
  { label: "People", to: "/about" },
  { label: "Contact", to: "/contact" },
];


