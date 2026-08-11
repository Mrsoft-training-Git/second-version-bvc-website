type Item = { name: string; logo?: string };

function LogoTile({ name, logo }: Item) {
  return (
    <div className="group/tile relative flex h-24 w-44 shrink-0 items-center justify-center overflow-visible border border-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
      {/* subtle professional plate so light, dark and transparent logos all read well */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.035) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.03) 100%)",
        }}
      />
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="relative max-h-[68%] max-w-[80%] object-contain transition-transform duration-300 group-hover/tile:scale-105"
        />
      ) : (
        <span className="relative px-4 text-center font-display text-xs font-bold tracking-[0.12em] text-muted-foreground uppercase">
          {name}
        </span>
      )}
      {/* Name pops out below the tile on hover, logo stays visible */}
      {logo && (
        <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-52 -translate-x-1/2 translate-y-1 whitespace-normal break-words rounded-sm bg-ink px-3 py-2 text-center text-[11px] font-semibold leading-snug tracking-[0.06em] text-ink-foreground uppercase opacity-0 shadow-lg transition-all duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100">
          {name}
        </span>
      )}
    </div>
  );
}

export function LogoMarquee({
  items,
  direction = "left",
  speed = 40,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-4 pb-20 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} name={item.name} logo={item.logo} />
        ))}
      </div>
    </div>
  );
}
