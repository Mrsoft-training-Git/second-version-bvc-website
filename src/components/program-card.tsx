import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  to: any;
  params?: any;
  hash?: string;
  image: string;
  alt?: string;
  title: string;
  body: string;
  duration?: string;
  cta?: string;
  className?: string;
};

/**
 * Course card: a plain bordered card at rest. On hover the program photo fades
 * in behind a dark ink scrim while all the information stays legible on top.
 */
export function ProgramCard({
  to,
  params,
  hash,
  image,
  alt = "",
  title,
  body,
  cta = "View curriculum",
  className,
}: ProgramCardProps) {
  return (
    <Link
      to={to}
      params={params}
      hash={hash}
      className={cn(
        "group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-transparent hover:shadow-2xl",
        className,
      )}
    >
      {/* Hover-revealed photo + ink scrim */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary transition-colors duration-300",
          "group-hover:bg-gold group-hover:text-gold-foreground",
        )}
      >
        <BarChart3 className="h-5 w-5" />
      </span>

      <h3 className="mt-7 font-display text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-ink-foreground">
        {title}
      </h3>

      <p className="mt-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-ink-foreground/80">
        {body}
      </p>

      <div className="mt-6" />



      <div className="mt-auto flex items-center justify-between border-t border-border pt-5 transition-colors duration-300 group-hover:border-ink-foreground/20">
        <span className="text-xs font-bold uppercase tracking-wider text-foreground transition-colors duration-300 group-hover:text-ink-foreground">
          {cta}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-gold group-hover:text-gold-foreground">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
