type Item = { name: string };

function LogoTile({ name }: Item) {
  return (
    <div className="flex h-20 w-40 shrink-0 items-center justify-center border border-border bg-card px-4">
      <span className="text-center font-display text-xs font-bold tracking-[0.12em] text-muted-foreground uppercase">
        {name}
      </span>
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
        className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} name={item.name} />
        ))}
      </div>
    </div>
  );
}
