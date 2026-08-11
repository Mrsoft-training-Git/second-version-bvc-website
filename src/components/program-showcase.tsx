import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROGRAMS } from "@/data/site";
import { programImage } from "@/lib/program-images";
import { cn } from "@/lib/utils";

/**
 * Dark "product showcase" carousel: one large centred visual with the two
 * neighbouring slides peeking in behind it, arrow controls on either side, and
 * the title/description sitting underneath with dot indicators.
 */
export function ProgramShowcase({ className }: { className?: string }) {
  const items = PROGRAMS;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 8000);
    return () => clearInterval(id);
  }, [go]);

  const active = items[index];

  return (
    <section
      aria-labelledby="program-showcase-heading"
      className={cn("relative overflow-hidden bg-ink text-ink-foreground", className)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px nav-ribbon" />

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-14">
        <div className="flex items-end justify-between">
          <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
            Programs
          </p>
          <Link
            to="/programs"
            className="font-display text-[11px] font-semibold tracking-[0.14em] text-ink-foreground/70 uppercase transition-colors hover:text-gold"
          >
            All programs
          </Link>
        </div>

        {/* Stage */}
        <div className="relative mt-8 h-[240px] sm:h-[340px] lg:h-[420px]">
          {items.map((p, i) => {
            const offset = ((i - index + items.length) % items.length);
            const rel = offset > items.length / 2 ? offset - items.length : offset;
            const isActive = rel === 0;
            const visible = Math.abs(rel) <= 1;
            return (
              <figure
                key={p.slug}
                aria-hidden={!isActive}
                className={cn(
                  "absolute top-0 left-1/2 h-full w-[78%] -translate-x-1/2 overflow-hidden rounded-xl border border-ink-foreground/15 bg-ink shadow-2xl transition-all duration-700 ease-out sm:w-[68%]",
                  isActive ? "z-20 opacity-100" : "z-10",
                  !isActive && visible ? "opacity-35" : "",
                  !visible ? "opacity-0" : "",
                )}
                style={{
                  transform: `translateX(calc(-50% + ${rel * 62}%)) scale(${isActive ? 1 : 0.86})`,
                }}
              >
                <img
                  src={programImage(p.slug, i)}
                  alt={p.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
                {!isActive && <span className="absolute inset-0 bg-ink/50" />}
              </figure>
            );
          })}

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous program"
            className="absolute top-1/2 left-0 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/25 bg-ink/80 backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next program"
            className="absolute top-1/2 right-0 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/25 bg-ink/80 backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Caption */}
        <div key={active.slug} className="mx-auto mt-10 max-w-2xl animate-fade-in text-center">
          <h2
            id="program-showcase-heading"
            className="font-display text-2xl font-bold text-gold sm:text-3xl"
          >
            {active.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            {active.body}
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.14em] text-ink-foreground/50 uppercase">
            {active.duration}
          </p>
          <Link
            to="/admissions"
            className="mt-6 inline-block border border-gold px-5 py-2 font-display text-xs font-semibold tracking-[0.12em] text-gold uppercase transition-all duration-300 hover:bg-gold hover:text-gold-foreground"
          >
            Entry requirements
          </Link>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {items.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Show ${p.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index
                  ? "w-8 bg-gold"
                  : "w-1.5 bg-ink-foreground/30 hover:bg-ink-foreground/60",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
