import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export type ProgramPathStep = {
  slug: string;
  name: string;
  body: string;
  image: string;
};

/**
 * Scroll-driven programme walkthrough: a sticky visual panel on the left that
 * cross-fades as the reader moves through the numbered steps on the right.
 */
export function ProgramPath({
  steps,
  eyebrow = "How it works",
  heading = "Your path to a trade",
  intro,
}: {
  steps: ProgramPathStep[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
}) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      // A step becomes active once its top edge rises past ~75% of the viewport
      // (i.e. it has entered from the bottom) and stays active until the next
      // step's top edge crosses the same line - which happens when the current
      // step's content has travelled up to the top of the screen.
      const line = window.innerHeight * 0.75;
      let next = 0;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top <= line) next = i;
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <div className="mx-auto w-full max-w-[1560px] px-4 lg:px-8">
      {/* Section head */}
      <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <div className="w-full lg:w-1/2">
          <h2
            id="programs-heading"
            className="font-display text-3xl font-bold tracking-tight md:text-5xl"
          >
            {heading}
            <span className="text-primary">.</span>
          </h2>
        </div>
        {intro ? (
          <div className="w-full lg:flex lg:w-1/2 lg:justify-end">
            <p className="max-w-[420px] border-l border-primary/30 pl-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              {intro}
            </p>
          </div>
        ) : null}
      </div>

      <div className="relative flex flex-col gap-16 lg:flex-row lg:gap-24">
        {/* Sticky visual */}
        <div className="relative hidden lg:block lg:w-1/2">
          <div className="sticky top-32 h-[600px] w-full overflow-hidden border border-border bg-ink shadow-2xl">
            {steps.map((s, i) => (
              <div
                key={s.slug}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  i === active ? "z-10 scale-100 opacity-100" : "z-0 scale-105 opacity-0"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover opacity-80"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"
                />
                <div
                  className={`absolute bottom-10 left-10 text-ink-foreground transition-all duration-700 delay-300 ${
                    i === active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="flex items-end gap-4">
                    <span className="font-display text-6xl font-extrabold leading-none text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="pb-1 font-display text-3xl font-bold">{s.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="hidden lg:block lg:h-[15vh]" />
          {steps.map((s, i) => (
            <div
              key={s.slug}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-index={i}
              className={`flex min-h-[40vh] flex-col justify-center py-10 transition-all duration-700 ease-in-out lg:min-h-[50vh] lg:py-12 ${
                i === active ? "opacity-100 lg:translate-x-0" : "lg:translate-x-8 lg:opacity-25"
              }`}
            >
              {/* Mobile visual */}
              <div className="relative mb-8 block h-[260px] w-full overflow-hidden shadow-lg lg:hidden">
                <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent"
                />
                <div className="absolute bottom-5 left-5 font-display text-5xl font-extrabold leading-none text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <span className="hidden font-display text-[6rem] font-extrabold leading-none text-muted/70 transition-colors duration-500 lg:mb-3 lg:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`mb-5 font-display text-2xl font-bold transition-colors duration-500 lg:text-4xl ${
                  i === active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.name}
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
                {s.body}
              </p>
              <Link
                to="/programs"
                hash={s.slug}
                className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary link-underline"
              >
                Explore {s.name}
              </Link>
              <div
                className={`mt-8 h-[3px] transition-all duration-500 ${
                  i === active ? "w-24 bg-primary" : "w-16 bg-border"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
