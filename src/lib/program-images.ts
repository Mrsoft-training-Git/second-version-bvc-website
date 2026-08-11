import workshopImg from "@/assets/spotlight-workshop.jpg";
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

export function programImage(slug: string, index = 0) {
  const category = getProgram(slug)?.category;
  return (category && BY_CATEGORY[category]) || POOL[index % POOL.length];
}
