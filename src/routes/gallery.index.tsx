import { createFileRoute, Link } from "@tanstack/react-router";
import { Images } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { GALLERY_FOLDERS } from "@/data/gallery";

export const Route = createFileRoute("/gallery/")({
  head: () => ({
    meta: [
      { title: "Gallery - Department Photo Folders | Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "Browse BVC photographs by department: welding and fabrication, electrical and electronics, mechanical engineering, building technology and hospitality.",
      },
      {
        property: "og:title",
        content: "Gallery - Department Photo Folders | Bonny Vocational Centre",
      },
      {
        property: "og:description",
        content:
          "Open a department folder to see practical training at BVC - workshops, laboratories, site work and instruction sessions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryIndex,
});

function GalleryIndex() {
  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Photo folders by department"
        intro="Every folder holds photographs from that department's workshops, laboratories and site practicals. Open a folder to view its images."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_FOLDERS.map((folder) => {
            const cover = folder.shots[0];
            return (
              <Link
                key={folder.slug}
                to="/gallery/$folder"
                params={{ folder: folder.slug }}
                className="group flex flex-col border border-border bg-card transition-colors hover:border-gold"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
                  {cover ? (
                    <img
                      src={cover.src}
                      alt={cover.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-ink-foreground/50">
                      <Images className="h-10 w-10" />
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-ink/85 px-3 py-1 font-display text-[10px] font-semibold tracking-[0.14em] text-ink-foreground uppercase">
                    {folder.shots.length} photo{folder.shots.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold leading-tight">
                    {folder.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{folder.blurb}</p>
                  <span className="mt-4 font-display text-[11px] font-semibold tracking-[0.14em] text-primary uppercase group-hover:text-gold">
                    Open folder
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
