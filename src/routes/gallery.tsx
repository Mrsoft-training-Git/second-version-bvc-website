import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { PageHeader } from "@/components/page-header";

import p31 from "@/assets/Picture31.jpg.asset.json";
import p32 from "@/assets/Picture32.jpg.asset.json";
import p33 from "@/assets/Picture33.jpg.asset.json";
import p34 from "@/assets/Picture34.jpg.asset.json";
import p35 from "@/assets/Picture35.jpg.asset.json";
import p36 from "@/assets/Picture36.jpg.asset.json";
import p37 from "@/assets/Picture37.jpg.asset.json";
import p68 from "@/assets/Picture68.jpg.asset.json";
import p69 from "@/assets/Picture69.jpg.asset.json";
import p67 from "@/assets/Picture67.jpg.asset.json";
import p70 from "@/assets/Picture70.jpg.asset.json";
import p73 from "@/assets/Picture73.jpg.asset.json";

type Shot = { src: string; alt: string; category: string };

const CATEGORIES = ["All", "Welding & Fabrication", "Instruction", "Workshops"] as const;

const SHOTS: Shot[] = [
  { src: p68.url, alt: "Trainee arc welding a steel frame in the fabrication workshop", category: "Welding & Fabrication" },
  { src: p69.url, alt: "Trainee running a weld bead while wearing full protective gear", category: "Welding & Fabrication" },
  { src: p31.url, alt: "Instructor supervising a trainee welding inside a booth", category: "Instruction" },
  { src: p32.url, alt: "Instructor guiding a seated trainee through a welding exercise", category: "Instruction" },
  { src: p33.url, alt: "Instructor demonstrating gas cutting to a group of trainees", category: "Instruction" },
  { src: p34.url, alt: "Instructor and trainee working at the bench vice", category: "Instruction" },
  { src: p35.url, alt: "Trainee finishing a workpiece under instructor supervision", category: "Instruction" },
  { src: p36.url, alt: "Trainees assembling fabricated cones on the workshop floor", category: "Welding & Fabrication" },
  { src: p37.url, alt: "Group practical session on sheet-metal development", category: "Welding & Fabrication" },
  { src: p67.url, alt: "Metrology and measurement practical in the engineering workshop", category: "Workshops" },
  { src: p70.url, alt: "Refrigeration and air-conditioning training rig", category: "Workshops" },
  { src: p73.url, alt: "Trainees at work in a Bonny Vocational Centre workshop", category: "Workshops" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Workshops & Practical Training | Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "Photographs from BVC workshops: welding and fabrication practicals, instructor-led sessions, metrology, refrigeration rigs and student project work.",
      },
      {
        property: "og:title",
        content: "Gallery - Workshops & Practical Training | Bonny Vocational Centre",
      },
      {
        property: "og:description",
        content:
          "See BVC training as it happens - welding booths, fabrication bays, instruction sessions and equipped technical workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: p69.url },
      { name: "twitter:image", content: p69.url },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<Shot | null>(null);

  const shots = filter === "All" ? SHOTS : SHOTS.filter((s) => s.category === filter);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Inside our workshops"
        intro="Practical training is the centre of everything at BVC. These photographs are from our welding booths, fabrication bays and technical workshops."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Filters */}
        <div className="module-rule flex flex-wrap items-center gap-2 pb-6">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`border px-4 py-2 font-display text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                filter === c
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setLightbox(s)}
              className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink text-left"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
              />
              <span className="absolute bottom-4 left-4 right-4 font-display text-xs font-semibold tracking-[0.12em] text-ink-foreground uppercase">
                {s.category}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {shots.length} photograph{shots.length === 1 ? "" : "s"} shown.
        </p>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 border border-ink-foreground/30 p-2 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-5xl"
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ink-foreground/80">
              {lightbox.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
