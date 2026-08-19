import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { galleryFolder, type GalleryShot } from "@/data/gallery";

export const Route = createFileRoute("/gallery/$folder")({
  loader: ({ params }) => {
    const folder = galleryFolder(params.folder);
    if (!folder) throw notFound();
    return { folder };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Folder not found | Bonny Vocational Centre" }, { name: "robots", content: "noindex" }],
      };
    }
    const { folder } = loaderData;
    const title = `${folder.name} - Gallery | Bonny Vocational Centre`;
    const cover = folder.shots[0]?.src;
    return {
      meta: [
        { title },
        { name: "description", content: folder.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: folder.blurb },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(cover
          ? [
              { property: "og:image", content: cover },
              { name: "twitter:image", content: cover },
            ]
          : []),
      ],
    };
  },
  component: FolderPage,
  notFoundComponent: FolderNotFound,
});

function FolderNotFound() {
  return (
    <PageHeader
      eyebrow="Gallery"
      title="Folder not found"
      intro="That gallery folder does not exist."
      back={{ to: "/gallery", label: "Back to gallery" }}
    />
  );
}

function FolderPage() {
  const { folder } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<GalleryShot | null>(null);

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
        title={folder.name}
        intro={folder.blurb}
        back={{ to: "/gallery", label: "Back to gallery" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        {folder.shots.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Photographs for this department will be published soon.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {folder.shots.map((s) => (
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
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </button>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted-foreground">
              {folder.shots.length} photograph{folder.shots.length === 1 ? "" : "s"} in this folder.
            </p>
          </>
        )}
      </section>

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
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-5xl">
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
