import workshopImg from "@/assets/spotlight-workshop.jpg";
import weldingAsset from "@/assets/Picture68.jpg.asset.json";
import maintenanceAsset from "@/assets/Picture63.jpg.asset.json";
import electricalAsset from "@/assets/Picture73.jpg.asset.json";
import commissioningAsset from "@/assets/Picture61.jpg.asset.json";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";
import campusImg from "@/assets/campus.jpg";
import { getProgram } from "@/data/programs";

const POOL = [workshopImg, electricalImg, ictImg, graduationImg, campusImg];

// Placeholder imagery per programme family until real photography is supplied.
const BY_CATEGORY: Record<string, string> = {
  Engineering: workshopImg,
  "Hospitality & Culinary": campusImg,
  ICT: ictImg,
  "Business & Education": graduationImg,
  "Skills Proficiency": electricalImg,
};

const BY_SLUG: Record<string, string> = {
  "engineering-fabrication-welding-l3": weldingAsset.url,
  "engineering-maintenance-technology-l2": maintenanceAsset.url,
  "engineering-electrical-electronic-l3": electricalAsset.url,
  "engineering-maintenance-installation-commissioning-l3": commissioningAsset.url,
};

export function programImage(slug: string, index = 0) {
  if (BY_SLUG[slug]) return BY_SLUG[slug];
  const category = getProgram(slug)?.category;
  return (category && BY_CATEGORY[category]) || POOL[index % POOL.length];
}
