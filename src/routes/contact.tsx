import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
};

const OFFICES: Office[] = [
  {
    name: "Head Office",
    tag: "Bonny Island",
    lines: ["Akiama-Oguede Road", "Bonny Island 503101", "Rivers State, Nigeria"],
    postal: "",
  },
  {
    name: "Port Harcourt Office",
    tag: "D-line, Port Harcourt",
    lines: ["16 Mbonu Street, D-line", "Port Harcourt 500101", "Rivers State, Nigeria"],
    postal: "",
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
              <div className="mt-4 space-y-4">
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

            {/* Email */}
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Email
              </h2>
              <p className="mt-4 text-sm">
                <a
                  href="mailto:info@bvcbonny.edu.ng"
                  className="font-display font-semibold hover:text-primary"
                >
                  info@bvcbonny.edu.ng
                </a>
              </p>
            </div>

            {/* Working hours */}
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Working hours
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Monday - Friday
                <br />
                <span className="font-display font-semibold text-foreground">7:30 AM - 4:30 PM</span>
              </p>
            </div>

            {/* Social */}
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Social
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display font-semibold hover:text-primary"
                    >
                      <span className="text-gold">{s.label}</span>
                      <span className="text-muted-foreground">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
