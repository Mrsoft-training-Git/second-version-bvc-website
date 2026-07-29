import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import spotlightImg from "@/assets/spotlight-workshop.jpg";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";
import campusImg from "@/assets/campus.jpg";
import { FACTS, PROGRAMS, SPOTLIGHTS, STORIES } from "@/data/site";
import { programImage } from "@/lib/program-images";


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
        content: "BVC trains welders, electricians, fitters, technicians and hospitality professionals through hands-on workshop instruction and industry placement.",
      },
    ],
  }),
  component: Home,
});

const CARD_IMAGES = [electricalImg, ictImg, graduationImg];

const SPOTLIGHT_IMAGES: Record<string, string> = {
  workshop: spotlightImg,
  electrical: electricalImg,
  graduation: graduationImg,
};

function SpotlightCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SPOTLIGHTS.length), 7000);
    return () => clearInterval(id);
  }, []);

  const item = SPOTLIGHTS[index];

  return (
    <section aria-labelledby="spotlight-heading" className="border-b border-border">
      <figure className="mx-auto max-w-6xl px-4 pt-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
          {SPOTLIGHTS.map((s, i) => (
            <img
              key={s.slug}
              src={SPOTLIGHT_IMAGES[s.imageKey]}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-out ${
                i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">{item.caption}</figcaption>
      </figure>


      <div className="mx-auto max-w-6xl px-4 pt-6 pb-10">
        <div key={item.slug} className="animate-fade-in">
          <p className="eyebrow">{item.eyebrow}</p>
          <h1 id="spotlight-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-3xl font-serif text-lg leading-relaxed text-muted-foreground">
            {item.body}
          </p>
          <Link
            to="/news/$slug"
            params={{ slug: item.slug }}
            className="link-underline mt-5 inline-block font-display text-sm font-semibold tracking-wide text-primary uppercase"
          >
            {item.linkLabel}
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {SPOTLIGHTS.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              aria-label={`Show spotlight: ${s.title}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === index ? "w-16 bg-primary" : "w-8 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {


  return (
    <>
      <SpotlightCarousel />

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
        <ul className="mt-8 grid gap-x-10 gap-y-10 grid-cols-2">
          {PROGRAMS.slice(0, 6).map((p, i) => (
            <li key={p.slug}>
              <Link to="/programs" className="group block">
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <img
                    src={programImage(p.slug, i)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 font-display text-base font-bold group-hover:text-primary">
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

        <ul className="mt-8 grid gap-10 grid-cols-2">
          {STORIES.slice(0, 3).map((s, i) => (
            <li key={s.slug}>
              <Link to="/news/$slug" params={{ slug: s.slug }} className="group block">
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <img
                    src={CARD_IMAGES[i % CARD_IMAGES.length]}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-3">{s.category}</p>
                <h3 className="mt-1 font-display text-lg font-bold group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.dek}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s.date}</p>
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
