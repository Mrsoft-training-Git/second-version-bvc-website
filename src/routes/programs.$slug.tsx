import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award, BadgeCheck, Briefcase, CalendarDays, ClipboardList } from "lucide-react";

import { getProgram, type Program } from "@/data/programs";
import { programImage } from "@/lib/program-images";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Programme not found — Bonny Vocational Centre" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { program } = loaderData;
    const title = `${program.name} — Bonny Vocational Centre`;
    const description = program.body.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProgramNotFound,
  component: ProgramDetail,
});

function ProgramNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Programme not found</h1>
      <p className="mt-4 text-muted-foreground">
        That programme is not in the current BVC catalogue.
      </p>
      <Link
        to="/programs"
        className="mt-8 inline-block border border-gold bg-gold px-5 py-2 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
      >
        All programmes
      </Link>
    </div>
  );
}

function ProgramDetail() {
  const { program } = Route.useLoaderData() as { program: Program };
  const image = programImage(program.slug);

  return (
    <article>
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.14em] text-gold uppercase transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All programmes
          </Link>
          <p className="mt-6 font-display text-[11px] font-semibold tracking-[0.14em] text-ink-foreground/70 uppercase">
            {program.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {program.name}
          </h1>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" />
              <dt className="sr-only">Duration</dt>
              <dd>{program.days} training days</dd>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-gold" />
              <dt className="sr-only">Awarding body</dt>
              <dd>City &amp; Guilds accredited</dd>
            </div>
          </dl>
          <Link
            to="/contact"
            className="mt-9 inline-block border border-gold bg-gold px-6 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
          >
            Apply for this programme
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              About the programme
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{program.body}</p>

            <h2 className="mt-12 flex items-center gap-2 font-display text-xl font-bold text-foreground">
              <Briefcase className="h-5 w-5 text-primary" />
              Career opportunities
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {program.careers.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs font-medium text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                <ClipboardList className="h-4 w-4 text-primary" />
                Entry requirements
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {program.entry.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {e}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                <Award className="h-4 w-4 text-primary" />
                Certification awarded
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {program.certification}
              </p>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">
                Duration
              </h2>
              <p className="mt-3 font-display text-3xl font-bold text-foreground">
                {program.days}
              </p>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">training days</p>
            </section>
          </aside>
        </div>
      </div>
    </article>
  );
}
