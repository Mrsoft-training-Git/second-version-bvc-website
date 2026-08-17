import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ContentCardProps = {
  to: string;
  params?: Record<string, string>;
  hash?: string;
  image: string;
  alt?: string;
  badge: string;
  badgeVariant?: "primary" | "neutral";
  title: string;
  body: string;
  meta?: string;
  cta: string;
  className?: string;
};

/**
 * Clean elevated content card - bordered surface, soft shadow, hover lift,
 * image zoom, a small uppercase badge, and a divider footer with an arrow CTA.
 * Shared by Programs and News across the homepage, /programs and /news.
 */
export function ContentCard({
  to,
  params,
  hash,
  image,
  alt = "",
  badge,
  badgeVariant = "primary",
  title,
  body,
  meta,
  cta,
  className,
}: ContentCardProps) {
  return (
    <Link
      to={to}
      params={params}
      hash={hash}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span
          className={cn(
            "inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
            badgeVariant === "primary"
              ? "bg-primary text-primary-foreground"
              : "bg-ink text-ink-foreground",
          )}
        >
          {badge}
        </span>

        <h3 className="mt-3 font-display text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-2 mb-5 text-sm leading-relaxed text-muted-foreground">{body}</p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          {meta ? (
            <span className="text-xs font-medium text-muted-foreground">{meta}</span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
