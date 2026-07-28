import { createFileRoute, Link } from "@tanstack/react-router";
import spotlightImg from "@/assets/spotlight-workshop.jpg";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";
import campusImg from "@/assets/campus.jpg";
import { FACTS, PROGRAMS, QUICK_LINKS, SPOTLIGHT, STORIES } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonny Vocational Center — Skilled trades training on Bonny Island" },
      {
        name: "description",
        content:
          "BVC trains welders, electricians, fitters, technicians and hospitality professionals through hands-on workshop instruction and industry placement.",
      },
      {
        property: "og:title",
        content: "Bonny Vocational Center — Skilled trades training on Bonny Island",
      },
      {
        property: "og:description",
        content: "Nine trade areas, 1,850 trainees, 78% placed within six months of graduating.",
      },
    ],
  }),
  component: Home,
});

const CARD_IMAGES = [electricalImg, ictImg, graduationImg];

function Home() {
  const [lead, ...rest] = STORIES;

  return (
    <>
      {/* Spotlight */}
      <section aria-labelledby="spotlight-heading" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-0 px-4 py-10 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
          <figure>
            <img
              src={spotlightImg}
              alt="Trainees welding a chassis in the BVC fabrication hall"
              width={1600}
              height={1008}
              className="w-full object-cover"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Second-year welding trainees in the fabrication hall. Photo: BVC
            </figcaption>
          </figure>
          <div className="mt-8 lg:mt-0">
            <p className="eyebrow">{SPOTLIGHT.eyebrow}</p>
            <h1 id="spotlight-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              {SPOTLIGHT.title}
            </h1>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
              {SPOTLIGHT.body}
            </p>
            <Link
              to="/news/$slug"
              params={{ slug: STORIES[0].slug }}
              className="mt-5 inline-block font-display text-sm font-semibold tracking-wide text-primary uppercase link-underline"
            >
              {SPOTLIGHT.linkLabel}
            </Link>

          </div>
        </div>
      </section>

      {/* News modules */}
      <section aria-labelledby="news-heading" className="mx-auto max-w-6xl px-4 py-14">
        <div className="module-rule flex items-end justify-between pt-3">
          <h2 id="news-heading" className="text-2xl font-bold">
            News
          </h2>
          <Link
            to="/news"
            className="font-display text-xs font-semibold tracking-wide text-primary uppercase link-underline"
          >
            All news
          </Link>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-1">
            <Link to="/news/$slug" params={{ slug: lead.slug }} className="group block">
              <img
                src={CARD_IMAGES[0]}
                alt=""
                loading="lazy"
                width={900}
                height={600}
                className="w-full object-cover"
              />
              <p className="eyebrow mt-3">{lead.category}</p>
              <h3 className="mt-1 text-xl font-bold group-hover:text-primary">{lead.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{lead.dek}</p>
              <p className="mt-2 text-xs text-muted-foreground">{lead.date}</p>
            </Link>
          </article>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            {rest.slice(0, 4).map((s, i) => (
              <article key={s.slug}>
                <Link to="/news/$slug" params={{ slug: s.slug }} className="group block">
                  {i < 2 && (
                    <img
                      src={CARD_IMAGES[(i + 1) % CARD_IMAGES.length]}
                      alt=""
                      loading="lazy"
                      width={900}
                      height={600}
                      className="mb-3 w-full object-cover"
                    />
                  )}
                  <p className="eyebrow">{s.category}</p>
                  <h3 className="mt-1 font-display text-base font-bold group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.dek}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{s.date}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facts band */}
      <section aria-labelledby="facts-heading" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="facts-heading" className="sr-only">
            BVC at a glance
          </h2>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dd className="font-display text-4xl font-bold">{f.value}</dd>
                <dt className="mt-1 text-xs tracking-[0.12em] uppercase opacity-70">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Programs */}
      <section aria-labelledby="programs-heading" className="mx-auto max-w-6xl px-4 py-14">
        <div className="module-rule flex items-end justify-between pt-3">
          <h2 id="programs-heading" className="text-2xl font-bold">
            Programs
          </h2>
          <Link
            to="/programs"
            className="font-display text-xs font-semibold tracking-wide text-primary uppercase link-underline"
          >
            All programs
          </Link>
        </div>
        <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.slice(0, 6).map((p) => (
            <li key={p.slug} className="border-t border-border pt-4">
              <Link to="/programs" className="group block">
                <h3 className="font-display text-base font-bold group-hover:text-primary">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {p.duration}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Campus / admissions call */}
      <section aria-labelledby="visit-heading" className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
          <img
            src={campusImg}
            alt="Walkway between workshop buildings on the BVC campus"
            loading="lazy"
            width={1600}
            height={912}
            className="w-full object-cover"
          />
          <div>
            <p className="eyebrow">Admissions</p>
            <h2 id="visit-heading" className="mt-3 text-3xl font-bold">
              The September intake is open
            </h2>
            <p className="mt-4 text-muted-foreground">
              Applications for all nine trade areas close on 15 August. No prior workshop experience
              is required — entry assessments cover literacy, numeracy and practical aptitude.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="bg-primary px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-primary-foreground uppercase hover:opacity-90"
              >
                How to apply
              </Link>
              <Link
                to="/contact"
                className="border border-input px-5 py-2.5 font-display text-sm font-semibold tracking-wide uppercase hover:border-primary hover:text-primary"
              >
                Talk to admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
