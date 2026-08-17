export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero px-6 pt-12 pb-20 text-hero-foreground sm:px-12">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-10">
        <div className="grid h-full grid-cols-4 gap-2">
          <div className="h-full bg-hero-foreground/25" />
          <div className="h-full translate-y-12 bg-hero-foreground/25" />
          <div className="h-full bg-hero-foreground/25" />
          <div className="h-full translate-y-24 bg-hero-foreground/25" />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="mt-3 max-w-3xl text-4xl leading-[0.95] font-extrabold sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-hero-foreground/80">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
