type Item = { name: string; logo?: string };

function ClientTile({ name, logo, i }: Item & { i: number }) {
  return (
    <div
      className="group/tile relative flex h-28 w-52 shrink-0 flex-col items-center justify-center gap-2 border-b-2 border-transparent bg-white px-4 transition-colors duration-300 hover:border-gold"
      style={{
        animation: `client-float 6s ease-in-out ${(i % 4) * 1.5}s infinite`,
      }}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="max-h-[54%] max-w-[82%] object-contain opacity-90 grayscale transition-all duration-500 group-hover/tile:opacity-100 group-hover/tile:grayscale-0"
        />
      ) : null}
      <span className="line-clamp-2 text-center font-display text-[10px] font-semibold leading-tight tracking-[0.1em] text-muted-foreground uppercase transition-colors duration-300 group-hover/tile:text-primary">
        {name}
      </span>
    </div>
  );
}

export function ClientMarquee({
  items,
  speed = 42,
}: {
  items: Item[];
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
        className="flex w-max items-stretch gap-3 py-4 group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee-left ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <ClientTile key={`${item.name}-${i}`} {...item} i={i} />
        ))}
      </div>
    </div>
  );
}
