import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { STORIES } from "@/data/site";
import spotlightImg from "@/assets/spotlight-workshop.jpg";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const story = STORIES.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story unavailable — BVC" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.title} — BVC News` },
        { name: "description", content: story.dek },
        { property: "og:title", content: story.title },
        { property: "og:description", content: story.dek },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="eyebrow">{story.category}</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{story.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{story.date} · BVC Communications</p>

      <img
        src={spotlightImg}
        alt=""
        loading="lazy"
        width={1600}
        height={1008}
        className="mt-8 w-full object-cover"
      />

      <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed">
        <p className="font-sans text-xl font-semibold">{story.dek}</p>
        <p>
          This is placeholder copy for layout review. Real article text, quotes and photography will
          replace it once the center supplies its assets. The paragraph rhythm here is intentional:
          long-form institutional stories at BVC open with a short scene, then explain what changed
          and who it affects.
        </p>
        <p>
          Instructors describe the change as practical rather than ceremonial. Trainees who complete
          the module leave with a signed task list, a portfolio of finished work and a placement
          report from a partner employer — the three documents that matter most when they walk onto a
          site for the first time.
        </p>
        <p>
          Further detail, figures and named quotes will be added when the final copy is provided.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <Link
          to="/news"
          className="font-display text-xs font-semibold tracking-wide text-primary uppercase link-underline"
        >
          Back to newsroom
        </Link>
      </div>
    </article>
  );
}
