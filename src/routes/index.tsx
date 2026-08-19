import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import metrologyImg from "@/assets/Picture67.jpg.asset.json";
import refrigerationImg from "@/assets/Picture70.jpg.asset.json";
import weldingImg from "@/assets/Picture69.jpg.asset.json";

import { CLIENTS, DONORS, SPONSORS, SPOTLIGHTS, STORIES } from "@/data/site";
import { programImage } from "@/lib/program-images";
import { newsImage } from "@/lib/news-images";
import { LogoMarquee } from "@/components/logo-marquee";
import { ClientMarquee } from "@/components/client-marquee";
import { ContentCard } from "@/components/content-card";
import { ProgramPath } from "@/components/program-path";

/** Programme areas featured on the home page, one photo per category. */
const PROGRAM_CATEGORY_CARDS = [
  {
    slug: "engineering",
    name: "Engineering",
    imageSlug: "engineering-fabrication-welding-l3",
    body: "Fabrication and welding, electrical and electronic, maintenance and mechanical engineering programmes taught in working workshops.",
  },
  {
    slug: "hospitality-and-culinary",
    name: "Hospitality & Culinary",
    imageSlug: "culinary-arts-supervision-l3",
    body: "Professional cookery, food and beverage service and hospitality supervision training in our production kitchens.",
  },
  {
    slug: "ict",
    name: "ICT",
    imageSlug: "ict-professionals-systems-principles-l4",
    body: "IT systems and principles, networking and end-user computing qualifications for digital and technical careers.",
  },
  {
    slug: "business-and-education",
    name: "Business & Education",
    imageSlug: "principles-business-administration-l3",
    body: "Business administration, leadership and management, and teaching, training and assessing qualifications.",
  },
  {
    slug: "skills-proficiency",
    name: "Skills Proficiency",
    imageSlug: "basic-electrical-installation",
    body: "Short, intensive proficiency certificates that build a single practical trade skill quickly.",
  },
];





export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonny Vocational Center - Skilled trades training on Bonny Island" },
      {
        name: "description",
        content:
          "BVC trains welders, electricians, fitters, technicians and hospitality professionals through hands-on workshop instruction and industry placement.",
      },
      {
        property: "og:title",
        content: "Bonny Vocational Center - Skilled trades training on Bonny Island",
      },
      {
        property: "og:description",
        content: "BVC trains welders, electricians, fitters, technicians and hospitality professionals through hands-on workshop instruction and industry placement.",
      },
    ],
  }),
  component: Home,
});



const SPOTLIGHT_IMAGES: Record<string, string> = {
  metrology: metrologyImg.url,
  refrigeration: refrigerationImg.url,
  welding: weldingImg.url,
};

function SpotlightCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SPOTLIGHTS.length), 60000);
    return () => clearInterval(id);
  }, []);

  const item = SPOTLIGHTS[index];

  return (
    <section
      aria-labelledby="spotlight-heading"
      className="relative h-[100svh] w-full overflow-hidden border-b border-border"
    >
      {SPOTLIGHTS.map((s, i) => (
        <img
          key={s.imageKey}
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
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/5"
      />

      {/* Overlaid copy */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10 lg:px-14">
          <div key={item.slug} className="max-w-2xl animate-fade-in text-ink-foreground">
            <h1
              id="spotlight-heading"
              className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            >
              {item.title}
            </h1>
            <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-ink-foreground/85 sm:block sm:text-base">
              {item.body}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {SPOTLIGHTS.map((s, i) => (
              <button
                key={s.imageKey}
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

      {/* Caption */}
      <figcaption className="absolute bottom-3 right-4 text-xs text-ink-foreground/70">
        {item.caption}
      </figcaption>
    </section>
  );
}

function Home() {


  return (
    <>
      <SpotlightCarousel />

      {/* Programs - scroll-driven path */}
      <section
        id="programs"
        aria-labelledby="programs-heading"
        className="scroll-mt-24 bg-surface py-20 lg:py-28"
      >
        <ProgramPath
          eyebrow="How it works"
          heading="Your path to a trade"
          intro="Pick a programme area, train in a working workshop with industry-standard equipment, and finish with a qualification employers recognise."
          steps={PROGRAM_CATEGORY_CARDS.map((c, i) => ({
            slug: c.slug,
            name: c.name,
            body: c.body,
            image: programImage(c.imageSlug, i),
          }))}
        />
      </section>




      {/* News modules */}
      <section id="news" aria-labelledby="news-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14">
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

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.slice(0, 6).map((s, i) => (
            <ContentCard
              key={s.slug}
              to="/news/$slug"
              params={{ slug: s.slug }}
              image={newsImage(s.slug, i)}
              badge={s.category}
              badgeVariant="neutral"
              title={s.title}
              body={s.dek}
              meta={s.date}
              cta="Read"
            />
          ))}
        </div>

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

      {/* Major clients */}
      <section
        id="clients"
        aria-labelledby="clients-heading"
        className="scroll-mt-24 border-t border-border py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="module-rule pt-3">
            <h2 id="clients-heading" className="text-2xl font-bold">
              Major Clients
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Organisations that engage Bonny Vocational Center for workforce training,
              assessment and technical skills development.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClientMarquee items={CLIENTS} speed={42} />
        </div>
      </section>




    </>
  );
}
