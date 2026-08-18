import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import {
  ArrowLeft,
  Award,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { PageHeader } from "@/components/page-header";


export const Route = createFileRoute("/regulations")({
  head: () => ({
    meta: [
      { title: "Enrolment & Academic Regulations - Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "BVC enrolment requirements, 75% attendance policy, graduation and certificate rules, academic integrity and student responsibilities.",
      },
      {
        property: "og:title",
        content: "Enrolment & Academic Regulations - Bonny Vocational Centre",
      },
      {
        property: "og:description",
        content:
          "What every BVC applicant and trainee must meet: enrolment, attendance, graduation, certification and conduct rules.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Regulations,
});

const SECTIONS = [
  { id: "enrolment", label: "Enrolment" },
  { id: "attendance", label: "Attendance" },
  { id: "graduation", label: "Graduation" },
  { id: "certificates", label: "Certificates" },
  { id: "integrity", label: "Integrity & conduct" },
] as const;

const ENROLMENT_STEPS = [
  "Meet the minimum entry requirements for the chosen programme.",
  "Complete and submit the official application form.",
  "Provide all required academic and personal documents.",
  "Pay the prescribed registration, tuition and other applicable fees.",
  "Complete course registration within the approved registration period.",
  "Attend the compulsory student orientation programme.",
  "Accept and comply with all academic regulations, policies and the Student Code of Conduct.",
];

const ENROLMENT_NOTES = [
  "Admission remains provisional until all admission requirements have been satisfied.",
  "False declarations or submission of fraudulent documents may result in withdrawal of admission.",
  "Students are responsible for ensuring that all information provided during admission is accurate and up to date.",
  "Late registration may attract additional charges or require special approval from the Academic Office.",
  "BVC reserves the right to refuse or withdraw admission where institutional regulations have not been met.",
];

const ATTENDANCE_RULES = [
  "Attend all scheduled lectures and practical classes.",
  "Participate fully in laboratory and workshop activities.",
  "Arrive punctually for all academic sessions.",
  "Complete all practical exercises and continuous assessments.",
  "Notify the department of any prolonged absence, supported by appropriate documentation.",
];

const EXCUSED_ABSENCE = [
  "Certified medical conditions",
  "Bereavement",
  "Official institutional assignments",
  "Other exceptional circumstances approved by the Centre",
];

const GRADUATION_REQUIREMENTS = [
  "Successfully complete all required courses and training modules.",
  "Pass all internal and external assessments.",
  "Complete all required practical and laboratory activities.",
  "Successfully complete industrial training (SIWES or workplace attachment), where applicable.",
  "Meet the minimum credit and competency requirements of the programme.",
  "Settle all outstanding financial obligations to the Centre.",
  "Return all Centre property, including library materials and equipment.",
  "Meet all academic and disciplinary requirements.",
];

const CERTIFICATE_REQUIREMENTS = [
  "Successfully complete all required courses or units.",
  "Achieve the minimum pass standard in all required assessments.",
  "Complete all practical competency assessments.",
  "Satisfy attendance requirements.",
  "Complete industrial attachment where applicable.",
  "Fulfil all financial obligations.",
  "Return all institutional property.",
  "Be formally approved for certification by the Centre.",
];

const COLLECTION_ITEMS = [
  "Valid means of identification.",
  "Evidence of programme completion.",
  "Clearance from relevant departments.",
  "Proof of payment of all applicable fees.",
];

const RESPONSIBILITIES = [
  "Maintain regular attendance and active participation in learning activities.",
  "Respect Centre rules, staff, fellow students and institutional property.",
  "Observe all health, safety and environmental regulations, particularly in workshops and laboratories.",
  "Conduct themselves professionally at all times.",
  "Protect the reputation and values of Bonny Vocational Centre.",
];

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  id,
  icon: Icon,
  eyebrow,
  title,
}: {
  id: string;
  icon: typeof ClipboardList;
  eyebrow: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-b border-border pb-4">
      <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
    </div>
  );
}

function Regulations() {
  return (
    <>
      <PageHeader
        eyebrow="Student management"
        title="Enrolment & academic regulations"
        intro="Bonny Vocational Centre is committed to maintaining high academic standards and ensuring that every learner is adequately prepared for their chosen programme. Prospective students must comply with the Centre's admission and registration procedures before commencing studies."
      />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_220px]">
          <div className="space-y-16">
            {/* Enrolment */}
            <section>
              <SectionHeading
                id="enrolment"
                icon={ClipboardList}
                eyebrow="Enrolment rules"
                title="Completing your enrolment"
              />
              <p className="mt-6 text-muted-foreground">To complete enrolment, applicants must:</p>
              <ol className="mt-5 space-y-4">
                {ENROLMENT_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-xl border border-border bg-surface p-6">
                <h3 className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                  <UserCheck className="h-4 w-4 text-primary" />
                  Important notes
                </h3>
                <Bullets items={ENROLMENT_NOTES} />
              </div>
            </section>

            {/* Attendance */}
            <section>
              <SectionHeading
                id="attendance"
                icon={CalendarCheck}
                eyebrow="Attendance requirements"
                title="Regular attendance is essential"
              />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Regular attendance is essential for successful learning, particularly in programmes
                that involve practical workshops, laboratories and competency-based assessments.
                Students are expected to participate actively in all scheduled lectures, practical
                sessions, tutorials, industrial training and assessments.
              </p>

              <div className="mt-8 flex flex-col gap-6 rounded-xl border border-gold/40 bg-gold/10 p-6 sm:flex-row sm:items-center">
                <p className="font-display text-4xl font-bold leading-none text-foreground sm:text-5xl">
                  75%
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Minimum attendance required in each course or training module to be eligible to
                  sit semester examinations or competency assessments, unless otherwise specified by
                  the relevant regulatory or awarding body.
                </p>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    Students are required to
                  </h3>
                  <Bullets items={ATTENDANCE_RULES} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    Absence may be excused for
                  </h3>
                  <Bullets items={EXCUSED_ABSENCE} />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    Students with excessive absenteeism may be required to repeat practical
                    sessions, defer assessments or repeat the affected course in accordance with
                    Centre regulations.
                  </p>
                </div>
              </div>
            </section>

            {/* Graduation */}
            <section>
              <SectionHeading
                id="graduation"
                icon={GraduationCap}
                eyebrow="Graduation rules"
                title="Qualifying for graduation"
              />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Graduation signifies that a learner has demonstrated the knowledge, skills,
                competence and professional standards expected of a Bonny Vocational Centre
                graduate. To qualify, students must:
              </p>
              <Bullets items={GRADUATION_REQUIREMENTS} />
              <p className="mt-8 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
                Final approval for graduation is subject to verification and approval by the
                Academic Board and, where applicable, the relevant awarding or regulatory body.
              </p>
            </section>

            {/* Certificates */}
            <section>
              <SectionHeading
                id="certificates"
                icon={Award}
                eyebrow="Certificate requirements"
                title="Awarding and collecting certificates"
              />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                For National Diploma programmes, certificates are awarded in accordance with
                National Board for Technical Education (NBTE) requirements. For City & Guilds and
                ILM programmes, certificates are issued by the respective awarding organisations
                following successful completion of all required assessments and quality assurance
                processes.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    Requirements for award
                  </h3>
                  <Bullets items={CERTIFICATE_REQUIREMENTS} />
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                    <FileCheck2 className="h-4 w-4 text-primary" />
                    Collection of certificates
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Graduates may collect their certificates after official notification from the
                    Centre. Learners may be required to present:
                  </p>
                  <Bullets items={COLLECTION_ITEMS} />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    Where certificates are collected by a representative, a signed authorisation
                    letter and valid identification documents may be required.
                  </p>
                </div>
              </div>
            </section>

            {/* Integrity */}
            <section>
              <SectionHeading
                id="integrity"
                icon={ShieldCheck}
                eyebrow="Academic integrity"
                title="Conduct and student responsibilities"
              />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                BVC upholds the highest standards of honesty, integrity and professionalism. Any
                form of examination malpractice, plagiarism, falsification of records or other acts
                of academic misconduct may result in disciplinary action, including suspension,
                withdrawal of examination privileges, cancellation of results or expulsion from the
                Centre.
              </p>
              <h3 className="mt-8 font-display text-base font-bold text-foreground">
                Every learner is expected to
              </h3>
              <Bullets items={RESPONSIBILITIES} />
            </section>
          </div>


          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24">
              <ul className="mt-4 space-y-3 border-l border-border pl-4 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-muted-foreground transition-colors hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
