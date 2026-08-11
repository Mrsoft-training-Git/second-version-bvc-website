import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import spotlightImg from "@/assets/spotlight-workshop.jpg";
import electricalImg from "@/assets/news-electrical.jpg";
import ictImg from "@/assets/news-ict.jpg";
import graduationImg from "@/assets/news-graduation.jpg";
import campusImg from "@/assets/campus.jpg";
import { DONORS, FACTS, PROGRAMS, SPONSORS, SPOTLIGHTS, STORIES } from "@/data/site";
import { programImage } from "@/lib/program-images";
import { LogoMarquee } from "@/components/logo-marquee";
import { ContentCard } from "@/components/content-card";
import { ProgramShowcase } from "@/components/program-showcase";




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

          {/* Scrim */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/10"
          />

          {/* Overlaid copy */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6 py-8 sm:px-10 lg:px-14">
              <div key={item.slug} className="max-w-2xl animate-fade-in text-ink-foreground">
                <p className="font-display text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                  {item.eyebrow}
                </p>
                <h1
                  id="spotlight-heading"
                  className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  {item.title}
                </h1>
                <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-ink-foreground/85 sm:block sm:text-base">
                  {item.body}
                </p>
                <Link
                  to="/news/$slug"
                  params={{ slug: item.slug }}
                  className="mt-6 inline-flex items-center bg-gold px-5 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
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
                      i === index ? "w-16 bg-gold" : "w-8 bg-ink-foreground/40 hover:bg-ink-foreground/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <figcaption className="pt-2 pb-8 text-xs text-muted-foreground">{item.caption}</figcaption>
      </figure>

    </section>
  );
}

function Home() {


  return (
    <>
      <SpotlightCarousel />

      {/* Programs showcase */}
      <ProgramShowcase />


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

        <ul className="mt-8 grid gap-x-8 gap-y-10 grid-cols-2">
          {STORIES.slice(0, 3).map((s, i) => (
            <li key={s.slug}>
              <ContentCard
                to="/news/$slug"
                params={{ slug: s.slug }}
                image={CARD_IMAGES[i % CARD_IMAGES.length]}
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

      </section>

      {/* Sponsors & donors */}
      <section
        id="sponsors"
        aria-labelledby="sponsors-heading"
        className="scroll-mt-24 border-t border-border bg-surface py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="module-rule pt-3">
            <h2 id="sponsors-heading" className="text-2xl font-bold">
              Sponsors &amp; Donors
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Industry partners and benefactors whose support funds workshops, tools and
              scholarships at Bonny Vocational Center.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <LogoMarquee items={SPONSORS} direction="left" speed={38} />
          <LogoMarquee items={DONORS} direction="right" speed={46} />
        </div>
      </section>




      {/* Campus / contact call */}
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
            <p className="eyebrow">Get in touch</p>
            <h2 id="visit-heading" className="mt-3 text-3xl font-bold">
              The September intake is open
            </h2>
            <p className="mt-4 text-muted-foreground">
              Applications for all nine trade areas close on 15 August. No prior workshop experience
              is required — entry assessments cover literacy, numeracy and practical aptitude.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-gold px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-gold-foreground uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
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
