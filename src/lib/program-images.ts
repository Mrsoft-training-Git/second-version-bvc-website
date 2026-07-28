import workshopImg from "@/assets/spotlight-workshop.jpg";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";
import campusImg from "@/assets/campus.jpg";

const POOL = [workshopImg, electricalImg, ictImg, graduationImg, campusImg];

export const PROGRAM_IMAGES: Record<string, string> = {
  welding: workshopImg,
  electrical: electricalImg,
  mechanical: workshopImg,
  ict: ictImg,
  instrumentation: electricalImg,
  catering: campusImg,
  tailoring: graduationImg,
  plumbing: campusImg,
  carpentry: workshopImg,
};

export function programImage(slug: string, index = 0) {
  return PROGRAM_IMAGES[slug] ?? POOL[index % POOL.length];
}
