import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";
import { STORIES } from "@/data/site";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Newsroom — Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Announcements, workshop stories and partnership news from Bonny Vocational Center.",
      },
      { property: "og:title", content: "Newsroom — Bonny Vocational Center" },
      {
        property: "og:description",
        content: "The latest from BVC's workshops, labs and industry partners.",
      },
    ],
  }),
  component: NewsIndex,
});

const IMAGES = [electricalImg, ictImg, graduationImg];

function NewsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Newsroom"
        title="News from the workshops"
        intro="Announcements, program updates and stories from across the center."
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <li key={s.slug}>
              <ContentCard
                to="/news/$slug"
                params={{ slug: s.slug }}
                image={IMAGES[i % IMAGES.length]}
                badge={s.category}
                badgeVariant="neutral"
                title={s.title}
                body={s.dek}
                meta={s.date}
                cta="Read"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
