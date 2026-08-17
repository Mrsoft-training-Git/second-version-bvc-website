import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Contact BVC on Bonny Island and in Port Harcourt. Office hours, phone lines, email and social links for Bonny Vocational Center.",
      },
      { property: "og:title", content: "Contact - Bonny Vocational Center" },
      {
        property: "og:description",
        content:
          "Reach BVC by phone, email or in person at our Bonny Island head office or Port Harcourt office.",
      },
    ],
  }),
  component: Contact,
});

type Office = {
  name: string;
  tag: string;
  lines: string[];
  postal: string;
  mapQuery: string;
};

const OFFICES: Office[] = [
  {
    name: "Head Office",
    tag: "Bonny Island",
    lines: ["Akiama-Oguede Road", "Bonny Island 503101", "Rivers State, Nigeria"],
    postal: "",
    mapQuery: "Bonny Vocational Centre, Akiama-Oguede Road, Bonny Island 503101, Rivers State, Nigeria",
  },
  {
    name: "Port Harcourt Office",
    tag: "D-line, Port Harcourt",
    lines: ["16 Mbonu Street, D-line", "Port Harcourt 500101", "Rivers State, Nigeria"],
    postal: "",
    mapQuery: "16 Mbonu Street, D-line, Port Harcourt 500101, Rivers State, Nigeria",
  },
];


const PHONE_LINES = [
  { number: "+234 813 970 0651", label: "Official line (Esther)" },
  { number: "+234 703 220 1495", label: "Official line (Francesca)" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/BVCBonny",
    handle: "facebook.com/BVCBonny",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);
  const office = OFFICES[activeOffice];


  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with BVC"
        intro="Reach our Bonny Island head office or our Port Harcourt office by phone, email or in person. We are open Monday to Friday, 7:30 AM - 4:30 PM."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="module-rule pt-3 text-2xl font-bold">
              Send a message
            </h2>
            {sent ? (
              <p className="mt-6 border border-border bg-surface p-6 text-sm">
                Thank you - your message has been noted. This demo form doesn't submit anywhere yet;
                it will be wired to the BVC inbox once the live address is confirmed.
              </p>
            ) : (
              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-semibold">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="mt-1.5 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  >
                    <option>Admissions</option>
                    <option>Program information</option>
                    <option>Industry partnership</option>
                    <option>Campus visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-gold-foreground uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Send message
                </button>
              </form>
            )}
          </section>

          <aside className="space-y-10">
            {/* Offices */}
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Our offices
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {OFFICES.map((office) => (
                  <div key={office.name} className="border border-border bg-surface p-5">

                    <p className="font-display text-base font-bold">{office.name}</p>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gold">
                      {office.tag}
                    </p>
                    <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
                      {office.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Phone lines
              </h2>
              <ul className="mt-4 text-sm">
                {PHONE_LINES.map((line) => (
                  <li
                    key={line.number}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                  >
                    <a
                      href={`tel:${line.number.replace(/\s/g, "")}`}
                      className="font-display font-semibold hover:text-primary"
                    >
                      {line.number}
                    </a>
                    <span className="text-right text-xs text-muted-foreground">{line.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email + Social */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                  Email
                </h2>
                <p className="mt-4 text-sm">
                  <a
                    href="mailto:info@bvcbonny.edu.ng"
                    className="font-display font-semibold transition-colors hover:text-primary"
                  >
                    info@bvcbonny.edu.ng
                  </a>
                </p>
              </div>
              <div>
                <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                  Social
                </h2>
                <ul className="mt-4 text-sm">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${s.label} - ${s.handle}`}
                        className="inline-flex items-center gap-3 font-display font-semibold transition-colors hover:text-primary"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gold text-gold-foreground transition-transform duration-300 hover:scale-110">
                          <Facebook className="h-4 w-4" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-gold">{s.label}</span>
                          <span className="text-xs text-muted-foreground">{s.handle}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </aside>
        </div>

        {/* Map card */}
        <section aria-labelledby="map-heading" className="mt-16">
          <h2
            id="map-heading"
            className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase"
          >
            Find us
          </h2>

          <div className="mt-5 overflow-hidden border border-border bg-surface shadow-sm">
            <div className="flex flex-col gap-4 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose an office">
                {OFFICES.map((o, i) => (
                  <button
                    key={o.name}
                    type="button"
                    role="tab"
                    aria-selected={i === activeOffice}
                    onClick={() => setActiveOffice(i)}
                    className={`border px-4 py-2 font-display text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                      i === activeOffice
                        ? "border-gold bg-gold text-gold-foreground shadow-sm"
                        : "border-border bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-gold hover:text-foreground"
                    }`}
                  >
                    {o.tag}
                  </button>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-display font-bold">{office.name}</p>
                <p className="text-muted-foreground">{office.lines.join(", ")}</p>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full bg-muted sm:aspect-[21/9]">
              <iframe
                key={office.name}
                title={`Map of BVC ${office.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full animate-in fade-in duration-500"
                style={{ border: 0 }}
              />
              <button
                type="button"
                aria-label={`Open ${office.name} in Google Maps`}
                onClick={() => openMaps(office.mapQuery)}
                className="absolute right-3 bottom-3 z-10 border border-gold bg-background/95 px-3 py-1.5 font-display text-[11px] font-semibold tracking-[0.12em] uppercase text-gold shadow-sm transition-all duration-300 hover:bg-gold hover:text-gold-foreground"
              >
                Open in Google Maps
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
              <p className="text-xs text-muted-foreground">
                Monday - Friday, 7:30 AM - 4:30 PM
              </p>
              <button
                type="button"
                onClick={() => openMaps(office.mapQuery, true)}
                className="border border-gold px-4 py-2 font-display text-xs font-semibold tracking-[0.12em] uppercase text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground"
              >
                Get directions
              </button>
            </div>

          </div>
        </section>
      </div>

    </>
  );
}
