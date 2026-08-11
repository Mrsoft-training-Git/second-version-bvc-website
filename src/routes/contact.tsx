import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Bonny Vocational Center" },
      {
        name: "description",
        content:
          "Reach BVC admissions, placement or workshop staff, or arrange a campus visit on Finima Road, Bonny Island.",
      },
      { property: "og:title", content: "Contact & Visit — Bonny Vocational Center" },
      {
        property: "og:description",
        content: "Office hours, department contacts and campus visit information for BVC.",
      },
    ],
  }),
  component: Contact,
});

const DEPARTMENTS = [
  { name: "Admissions", detail: "admissions@bvc.example · +234 800 000 0001" },
  { name: "Placement & partnerships", detail: "placement@bvc.example · +234 800 000 0002" },
  { name: "Workshops & facilities", detail: "workshops@bvc.example · +234 800 000 0003" },
  { name: "Media enquiries", detail: "media@bvc.example · +234 800 000 0004" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch or come see the workshops"
        intro="The gate office is open Monday to Friday, 8:00–16:30. Guided workshop tours run on the first Friday of each month."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="module-rule pt-3 text-2xl font-bold">
              Send a message
            </h2>
            {sent ? (
              <p className="mt-6 border border-border bg-surface p-6 text-sm">
                Thank you — this demo form doesn't submit anywhere yet. Wire it up once the real
                contact address is confirmed.
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
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Campus
              </h2>
              <address className="mt-4 text-sm not-italic text-muted-foreground">
                Bonny Vocational Center
                <br />
                Finima Road, Bonny Island
                <br />
                Rivers State, Nigeria
              </address>
            </div>
            <div>
              <h2 className="module-rule pt-3 font-display text-sm font-semibold tracking-[0.14em] uppercase">
                Departments
              </h2>
              <ul className="mt-4 text-sm">
                {DEPARTMENTS.map((d) => (
                  <li key={d.name} className="border-b border-border py-3">
                    <span className="font-display font-semibold">{d.name}</span>
                    <span className="block text-muted-foreground">{d.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Placeholder contact details for layout purposes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
