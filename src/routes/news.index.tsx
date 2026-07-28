import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
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
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <li key={s.slug}>
              <Link to="/news/$slug" params={{ slug: s.slug }} className="group block">
                <img
                  src={IMAGES[i % IMAGES.length]}
                  alt=""
                  loading="lazy"
                  width={900}
                  height={600}
                  className="w-full object-cover"
                />
                <p className="eyebrow mt-3">{s.category}</p>
                <h2 className="mt-1 font-display text-lg font-bold group-hover:text-primary">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.dek}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
