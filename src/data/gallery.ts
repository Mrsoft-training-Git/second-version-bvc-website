// Gallery folders. Each folder maps to a BVC academic department.
// More photographs will be added per folder as they are supplied.

import p11 from "@/assets/Picture11.jpg.asset.json";
import p12 from "@/assets/Picture12.jpg.asset.json";
import p13 from "@/assets/Picture13.jpg.asset.json";
import p18 from "@/assets/Picture18.jpg.asset.json";
import p20 from "@/assets/Picture20.jpg.asset.json";
import p21 from "@/assets/Picture21.jpg.asset.json";
import p22 from "@/assets/Picture22.jpg.asset.json";
import p24 from "@/assets/Picture24.jpg.asset.json";
import p25 from "@/assets/Picture25.jpg.asset.json";
import p27 from "@/assets/Picture27.jpg.asset.json";
import p29 from "@/assets/Picture29.jpg.asset.json";
import p30 from "@/assets/Picture30.jpg.asset.json";
import p31 from "@/assets/Picture31.jpg.asset.json";
import p32 from "@/assets/Picture32.jpg.asset.json";
import p33 from "@/assets/Picture33.jpg.asset.json";
import p34 from "@/assets/Picture34.jpg.asset.json";
import p35 from "@/assets/Picture35.jpg.asset.json";
import p36 from "@/assets/Picture36.jpg.asset.json";
import p37 from "@/assets/Picture37.jpg.asset.json";
import p54 from "@/assets/Picture54.jpg.asset.json";
import p55 from "@/assets/Picture55.jpg.asset.json";
import p56 from "@/assets/Picture56.jpg.asset.json";
import p67 from "@/assets/Picture67.jpg.asset.json";
import p68 from "@/assets/Picture68.jpg.asset.json";
import p69 from "@/assets/Picture69.jpg.asset.json";
import p70 from "@/assets/Picture70.jpg.asset.json";
import p71 from "@/assets/Picture71.jpg.asset.json";
import p73 from "@/assets/Picture73.jpg.asset.json";

export type GalleryShot = { src: string; alt: string };

export type GalleryFolder = {
  slug: string;
  /** Department name used as the folder name. */
  name: string;
  blurb: string;
  shots: GalleryShot[];
};

export const GALLERY_FOLDERS: GalleryFolder[] = [
  {
    slug: "welding-and-fabrication-technology",
    name: "Welding and Fabrication Technology",
    blurb: "Welding booths, fabrication bays and structural steelwork practicals.",
    shots: [
      { src: p68.url, alt: "Trainee arc welding a steel frame in the fabrication workshop" },
      { src: p69.url, alt: "Trainee running a weld bead while wearing full protective gear" },
      { src: p31.url, alt: "Instructor supervising a trainee welding inside a booth" },
      { src: p32.url, alt: "Instructor guiding a seated trainee through a welding exercise" },
      { src: p33.url, alt: "Instructor demonstrating gas cutting to a group of trainees" },
      { src: p36.url, alt: "Trainees assembling fabricated cones on the workshop floor" },
      { src: p37.url, alt: "Group practical session on sheet-metal development" },
    ],
  },
  {
    slug: "electrical-and-electronics-engineering-technology",
    name: "Electrical and Electronics Engineering Technology",
    blurb: "Electrical installation, control panels, motors and refrigeration rigs.",
    shots: [
      { src: p21.url, alt: "Trainees working inside a low-voltage switchgear panel with an instructor" },
      { src: p24.url, alt: "Trainees wiring a distribution board under instructor supervision" },
      { src: p25.url, alt: "Trainees building a control circuit on a training board" },
      { src: p27.url, alt: "Instructor showing trainees how to take readings with a multimeter" },
      { src: p29.url, alt: "Electrical installation class working through bench exercises" },
      { src: p30.url, alt: "Trainees testing an electric motor with an instructor" },
      { src: p22.url, alt: "Trainee installing a ceiling luminaire during a practical assessment" },
      { src: p11.url, alt: "Trainees stripping down air-conditioning units at the workshop bench" },
      { src: p12.url, alt: "Instructor guiding trainees through a compressor teardown" },
      { src: p13.url, alt: "Instructor and trainees dismantling a compressor unit" },
      { src: p71.url, alt: "Trainees brazing refrigerant pipework on a split-unit condenser" },
      { src: p18.url, alt: "Practical session charging an air-conditioning system with refrigerant" },
      { src: p20.url, alt: "Instructor and trainee inspecting air-conditioning components" },
      { src: p70.url, alt: "Trainees servicing a large industrial chiller compressor" },
    ],
  },
  {
    slug: "mechanical-engineering-technology",
    name: "Mechanical Engineering Technology",
    blurb: "Bench work, metrology, machine operations and maintenance practicals.",
    shots: [
      { src: p34.url, alt: "Instructor and trainee working at the bench vice" },
      { src: p35.url, alt: "Trainee finishing a workpiece under instructor supervision" },
      { src: p67.url, alt: "Metrology and measurement practical in the engineering workshop" },
      { src: p73.url, alt: "Trainees at work in a Bonny Vocational Centre workshop" },
    ],
  },
  {
    slug: "building-technology",
    name: "Building Technology",
    blurb: "Site surveying, levelling exercises and construction practicals.",
    shots: [
      { src: p54.url, alt: "Surveying practical with a levelling instrument on site" },
      { src: p55.url, alt: "Trainees recording level readings during a site survey exercise" },
      { src: p56.url, alt: "Surveying team taking staff readings through a level" },
    ],
  },
  {
    slug: "hospitality-management-technology",
    name: "Hospitality Management Technology",
    blurb: "Kitchen, patisserie, food and beverage service training.",
    shots: [],
  },
];

export function galleryFolder(slug: string) {
  return GALLERY_FOLDERS.find((f) => f.slug === slug);
}
