import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  back,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  back?: { to: string; label: string; params?: Record<string, string> };
}) {
  return (
    <section className="relative overflow-hidden bg-primary px-6 pt-12 pb-20 text-primary-foreground sm:px-12">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-10">
        <div className="grid h-full grid-cols-4 gap-2">
          <div className="h-full bg-primary-foreground/25" />
          <div className="h-full translate-y-12 bg-primary-foreground/25" />
          <div className="h-full bg-primary-foreground/25" />
          <div className="h-full translate-y-24 bg-primary-foreground/25" />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        {back && (
          <Link
            to={back.to}
            params={back.params}
            className="mb-6 inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.14em] text-primary-foreground/70 uppercase transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {back.label}
          </Link>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl leading-[0.95] font-extrabold sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
