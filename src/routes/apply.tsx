import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { CheckCircle2, FileText, Upload } from "lucide-react";
import { z } from "zod";

import { PageHeader } from "@/components/page-header";
import { PROGRAMS } from "@/data/programs";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Programme Application Form - Bonny Vocational Centre" },
      {
        name: "description",
        content:
          "Apply to a Bonny Vocational Centre programme: personal details, education history, examination results, supporting documents and declaration.",
      },
      { property: "og:title", content: "Programme Application Form - Bonny Vocational Centre" },
      {
        property: "og:description",
        content:
          "Complete the BVC application form with your personal, academic and document details ahead of the next intake.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Apply,
});

/* ------------------------------- validation ------------------------------- */

const REQUIRED = { message: "This field is required" };

const applicationSchema = z.object({
  programme: z.string().trim().min(1, REQUIRED),
  intake: z.string().trim().min(1, REQUIRED),
  studyMode: z.string().trim().min(1, REQUIRED),
  surname: z.string().trim().min(1, REQUIRED).max(60),
  firstName: z.string().trim().min(1, REQUIRED).max(60),
  middleName: z.string().trim().max(60).optional().or(z.literal("")),
  gender: z.string().trim().min(1, REQUIRED),
  dob: z.string().trim().min(1, REQUIRED),
  maritalStatus: z.string().trim().max(30).optional().or(z.literal("")),
  nationality: z.string().trim().min(1, REQUIRED).max(60),
  stateOfOrigin: z.string().trim().min(1, REQUIRED).max(60),
  lga: z.string().trim().max(60).optional().or(z.literal("")),
  idType: z.string().trim().min(1, REQUIRED),
  idNumber: z.string().trim().min(1, REQUIRED).max(40),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z.string().trim().min(7, { message: "Enter a valid phone number" }).max(25),
  altPhone: z.string().trim().max(25).optional().or(z.literal("")),
  address: z.string().trim().min(1, REQUIRED).max(300),
  city: z.string().trim().min(1, REQUIRED).max(80),
  state: z.string().trim().min(1, REQUIRED).max(80),
  kinName: z.string().trim().min(1, REQUIRED).max(80),
  kinRelationship: z.string().trim().min(1, REQUIRED).max(40),
  kinPhone: z.string().trim().min(7, { message: "Enter a valid phone number" }).max(25),
  kinEmail: z.string().trim().max(255).optional().or(z.literal("")),
  kinAddress: z.string().trim().max(300).optional().or(z.literal("")),
  secondarySchool: z.string().trim().min(1, REQUIRED).max(150),
  secondaryFrom: z.string().trim().min(1, REQUIRED),
  secondaryTo: z.string().trim().min(1, REQUIRED),
  examBody: z.string().trim().min(1, REQUIRED),
  examNumber: z.string().trim().min(1, REQUIRED).max(40),
  examYear: z.string().trim().min(1, REQUIRED).max(10),
  examResults: z.string().trim().min(1, REQUIRED).max(600),
  tertiary: z.string().trim().max(400).optional().or(z.literal("")),
  otherQualifications: z.string().trim().max(400).optional().or(z.literal("")),
  workExperience: z.string().trim().max(600).optional().or(z.literal("")),
  sponsor: z.string().trim().min(1, REQUIRED).max(120),
  sponsorPhone: z.string().trim().max(25).optional().or(z.literal("")),
  healthConditions: z.string().trim().max(400).optional().or(z.literal("")),
  disability: z.string().trim().max(400).optional().or(z.literal("")),
  referee: z.string().trim().max(200).optional().or(z.literal("")),
  motivation: z.string().trim().min(1, REQUIRED).max(1500),
  source: z.string().trim().max(80).optional().or(z.literal("")),
  declarationName: z.string().trim().min(1, REQUIRED).max(120),
  declarationDate: z.string().trim().min(1, REQUIRED),
  declaration: z.preprocess(
    (v) => v === "on",
    z.boolean().refine((v) => v, { message: "You must accept the declaration" }),
  ),
  regulations: z.preprocess(
    (v) => v === "on",
    z.boolean().refine((v) => v, { message: "You must accept the academic regulations" }),
  ),
});

/* --------------------------------- options -------------------------------- */

const INTAKES = ["September 2026", "January 2027", "May 2027", "Not sure yet"];
const STUDY_MODES = ["Full-time", "Part-time", "Weekend", "Sponsored / company nominated"];
const GENDERS = ["Female", "Male", "Prefer not to say"];
const MARITAL = ["Single", "Married", "Other"];
const ID_TYPES = [
  "National Identity Number (NIN)",
  "International passport",
  "Driver's licence",
  "Voter's card",
  "Birth certificate",
];
const EXAM_BODIES = ["WAEC (WASSCE)", "NECO (SSCE)", "NABTEB", "GCE / IGCSE", "Other"];
const SOURCES = [
  "BVC website",
  "Social media",
  "Radio or newspaper",
  "Friend or family",
  "Employer / sponsor",
  "Community outreach",
];

const DOCUMENTS = [
  { id: "doc-photo", label: "Recent passport photograph", note: "White background, JPG or PNG" },
  { id: "doc-birth", label: "Birth certificate or age declaration" },
  { id: "doc-id", label: "Government-issued means of identification" },
  { id: "doc-results", label: "O'Level result (WAEC / NECO / NABTEB) or statement of result" },
  { id: "doc-testimonial", label: "Secondary school testimonial or certificate" },
  { id: "doc-transcript", label: "Academic transcript (transfer & tertiary applicants)" },
  { id: "doc-lga", label: "Local government / state of origin certificate" },
  { id: "doc-medical", label: "Medical fitness / immunisation report" },
  { id: "doc-sponsor", label: "Sponsorship or employer nomination letter", note: "If applicable" },
  { id: "doc-reference", label: "Character reference or letter of recommendation" },
  { id: "doc-cv", label: "Curriculum vitae and evidence of work experience", note: "If applicable" },
  { id: "doc-payment", label: "Evidence of application fee payment" },
];

/* ------------------------------- primitives ------------------------------- */

const fieldClass =
  "mt-1.5 w-full border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary";

function Field({
  label,
  name,
  children,
  error,
  hint,
  span,
}: {
  label: string;
  name: string;
  children: ReactNode;
  error?: string;
  hint?: string;
  span?: boolean;
}) {
  return (
    <div className={span ? "sm:col-span-2" : undefined}>
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function Text({
  name,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className={fieldClass}
    />
  );
}

function Select({
  name,
  options,
  required,
  placeholder = "Select an option",
}: {
  name: string;
  options: readonly string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <select id={name} name={name} required={required} defaultValue="" className={fieldClass}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function Area({
  name,
  rows = 4,
  required,
  placeholder,
}: {
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      required={required}
      placeholder={placeholder}
      className={fieldClass}
    />
  );
}

function Section({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="border-b border-border pb-4">
        <h2 className="mt-2 font-display text-2xl font-bold text-foreground">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">{children}</div>
    </section>
  );
}

/* --------------------------------- screen --------------------------------- */

function Apply() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = applicationSchema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = document.getElementById(Object.keys(next)[0] ?? "");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      (first as HTMLElement | null)?.focus?.();
      return;
    }

    setErrors({});
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          eyebrow="Application"
          title="Your application details are complete"
          intro="This form is not yet connected to the BVC learning portal, so nothing has been transmitted. Once the portal integration is live, submissions will be routed to the Academic Office automatically."
        />
        <div className="mx-auto max-w-3xl px-4 py-14">
          <div className="flex gap-4 rounded-xl border border-gold/40 bg-gold/10 p-6">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p className="font-display text-base font-bold text-foreground">
                Validation passed
              </p>
              <p className="mt-2">
                All required fields were completed correctly. Keep your original documents ready -
                the Academic Office verifies every uploaded item before admission is confirmed.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="border border-primary px-6 py-2.5 font-display text-xs font-semibold tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Back to the form
            </button>
            <Link
              to="/regulations"
              className="border border-border px-6 py-2.5 font-display text-xs font-semibold tracking-[0.12em] uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Read the regulations
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Programme application form"
        intro="Complete every section carefully. Details must match your official documents - false declarations may lead to withdrawal of admission."
      />

      <div className="mx-auto max-w-4xl px-4 py-14">
        

        <form onSubmit={onSubmit} noValidate className="mt-12 space-y-16">
          <Section
            step="01"
            title="Programme choice"
            description="Select the programme, intake and study mode you are applying for."
          >
            <Field label="Programme applied for" name="programme" error={errors.programme} span>
              <Select
                name="programme"
                options={PROGRAMS.map((p) => p.name)}
                placeholder="Select a programme"
              />
            </Field>
            <Field label="Preferred intake" name="intake" error={errors.intake}>
              <Select name="intake" options={INTAKES} />
            </Field>
            <Field label="Study mode" name="studyMode" error={errors.studyMode}>
              <Select name="studyMode" options={STUDY_MODES} />
            </Field>
          </Section>

          <Section
            step="02"
            title="Personal details"
            description="Enter your names exactly as they appear on your certificates and identification."
          >
            <Field label="Surname" name="surname" error={errors.surname}>
              <Text name="surname" />
            </Field>
            <Field label="First name" name="firstName" error={errors.firstName}>
              <Text name="firstName" />
            </Field>
            <Field label="Middle name (optional)" name="middleName" error={errors.middleName}>
              <Text name="middleName" />
            </Field>
            <Field label="Gender" name="gender" error={errors.gender}>
              <Select name="gender" options={GENDERS} />
            </Field>
            <Field label="Date of birth" name="dob" error={errors.dob}>
              <Text name="dob" type="date" />
            </Field>
            <Field label="Marital status (optional)" name="maritalStatus" error={errors.maritalStatus}>
              <Select name="maritalStatus" options={MARITAL} placeholder="Select" />
            </Field>
            <Field label="Nationality" name="nationality" error={errors.nationality}>
              <Text name="nationality" placeholder="Nigerian" />
            </Field>
            <Field label="State of origin" name="stateOfOrigin" error={errors.stateOfOrigin}>
              <Text name="stateOfOrigin" placeholder="Rivers" />
            </Field>
            <Field label="Local government area (optional)" name="lga" error={errors.lga}>
              <Text name="lga" placeholder="Bonny" />
            </Field>
            <Field label="Means of identification" name="idType" error={errors.idType}>
              <Select name="idType" options={ID_TYPES} />
            </Field>
            <Field
              label="Identification number"
              name="idNumber"
              error={errors.idNumber}
              hint="NIN, passport or licence number"
            >
              <Text name="idNumber" />
            </Field>
          </Section>

          <Section
            step="03"
            title="Contact information"
            description="Admission notifications are sent to the email address and phone number provided here."
          >
            <Field label="Email address" name="email" error={errors.email}>
              <Text name="email" type="email" />
            </Field>
            <Field label="Phone number" name="phone" error={errors.phone}>
              <Text name="phone" type="tel" placeholder="+234 800 000 0000" />
            </Field>
            <Field label="Alternative phone (optional)" name="altPhone" error={errors.altPhone}>
              <Text name="altPhone" type="tel" />
            </Field>
            <Field label="City / town" name="city" error={errors.city}>
              <Text name="city" />
            </Field>
            <Field label="State" name="state" error={errors.state}>
              <Text name="state" />
            </Field>
            <Field label="Residential address" name="address" error={errors.address} span>
              <Area name="address" rows={3} />
            </Field>
          </Section>

          <Section
            step="04"
            title="Next of kin, parent or guardian"
            description="Provide a contact the Centre can reach in an emergency."
          >
            <Field label="Full name" name="kinName" error={errors.kinName}>
              <Text name="kinName" />
            </Field>
            <Field label="Relationship" name="kinRelationship" error={errors.kinRelationship}>
              <Text name="kinRelationship" placeholder="Parent, guardian, spouse" />
            </Field>
            <Field label="Phone number" name="kinPhone" error={errors.kinPhone}>
              <Text name="kinPhone" type="tel" />
            </Field>
            <Field label="Email (optional)" name="kinEmail" error={errors.kinEmail}>
              <Text name="kinEmail" type="email" />
            </Field>
            <Field label="Address (optional)" name="kinAddress" error={errors.kinAddress} span>
              <Area name="kinAddress" rows={2} />
            </Field>
          </Section>

          <Section
            step="05"
            title="Education history"
            description="List your secondary school and any post-secondary study, with dates attended."
          >
            <Field
              label="Secondary school attended"
              name="secondarySchool"
              error={errors.secondarySchool}
              span
            >
              <Text name="secondarySchool" />
            </Field>
            <Field label="From" name="secondaryFrom" error={errors.secondaryFrom}>
              <Text name="secondaryFrom" type="month" />
            </Field>
            <Field label="To" name="secondaryTo" error={errors.secondaryTo}>
              <Text name="secondaryTo" type="month" />
            </Field>
            <Field
              label="Post-secondary institutions (optional)"
              name="tertiary"
              error={errors.tertiary}
              hint="Institution, course, dates and qualification obtained"
              span
            >
              <Area name="tertiary" rows={3} />
            </Field>
            <Field
              label="Other qualifications and trainings (optional)"
              name="otherQualifications"
              error={errors.otherQualifications}
              hint="Trade tests, City & Guilds, NABTEB, safety certifications"
              span
            >
              <Area name="otherQualifications" rows={3} />
            </Field>
          </Section>

          <Section
            step="06"
            title="Examination results"
            description="Provide your O'Level examination details. Subjects and grades must match your result slip."
          >
            <Field label="Examination body" name="examBody" error={errors.examBody}>
              <Select name="examBody" options={EXAM_BODIES} />
            </Field>
            <Field label="Examination number" name="examNumber" error={errors.examNumber}>
              <Text name="examNumber" />
            </Field>
            <Field label="Year of examination" name="examYear" error={errors.examYear}>
              <Text name="examYear" placeholder="2024" />
            </Field>
            <Field
              label="Subjects and grades"
              name="examResults"
              error={errors.examResults}
              hint="One subject per line, e.g. Mathematics - C4"
              span
            >
              <Area name="examResults" rows={5} />
            </Field>
          </Section>

          <Section
            step="07"
            title="Work experience and sponsorship"
            description="Relevant industry experience strengthens applications for advanced programmes."
          >
            <Field
              label="Work experience (optional)"
              name="workExperience"
              error={errors.workExperience}
              hint="Employer, role, dates and key duties"
              span
            >
              <Area name="workExperience" rows={4} />
            </Field>
            <Field label="Sponsor / who pays your fees" name="sponsor" error={errors.sponsor}>
              <Text name="sponsor" placeholder="Self, parent, employer name" />
            </Field>
            <Field label="Sponsor phone (optional)" name="sponsorPhone" error={errors.sponsorPhone}>
              <Text name="sponsorPhone" type="tel" />
            </Field>
          </Section>

          <Section
            step="08"
            title="Health and support needs"
            description="Workshops and laboratories carry safety requirements. Disclosures are treated confidentially and used only to arrange support."
          >
            <Field
              label="Medical conditions (optional)"
              name="healthConditions"
              error={errors.healthConditions}
              span
            >
              <Area name="healthConditions" rows={3} />
            </Field>
            <Field
              label="Disability or learning support required (optional)"
              name="disability"
              error={errors.disability}
              span
            >
              <Area name="disability" rows={3} />
            </Field>
            <Field
              label="Referee (optional)"
              name="referee"
              error={errors.referee}
              hint="Name, position, organisation and phone number"
              span
            >
              <Area name="referee" rows={2} />
            </Field>
          </Section>

          <Section
            step="09"
            title="Statement of purpose"
            description="Tell the Academic Office why you have chosen this programme and what you plan to do with the qualification."
          >
            <Field label="Why this programme?" name="motivation" error={errors.motivation} span>
              <Area name="motivation" rows={6} placeholder="Maximum 1500 characters" />
            </Field>
            <Field label="How did you hear about BVC? (optional)" name="source" error={errors.source}>
              <Select name="source" options={SOURCES} placeholder="Select" />
            </Field>
          </Section>

          <section className="scroll-mt-24">
            <div className="border-b border-border pb-4">
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                Supporting documents
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Attach clear scans or photographs. Accepted formats: PDF, JPG or PNG, up to 5MB per
                file. Originals must be presented at registration for verification.
              </p>
            </div>
            <ul className="mt-6 divide-y divide-border border border-border">
              {DOCUMENTS.map((doc) => (
                <li key={doc.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                  <div className="sm:flex-1">
                    <label htmlFor={doc.id} className="text-sm font-semibold">
                      {doc.label}
                    </label>
                    {doc.note && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{doc.note}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 sm:w-72">
                    <Upload aria-hidden className="h-4 w-4 shrink-0 text-primary" />
                    <input
                      id={doc.id}
                      name={doc.id}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full text-xs text-muted-foreground file:mr-3 file:border file:border-input file:bg-background file:px-3 file:py-1.5 file:font-display file:text-xs file:font-semibold file:uppercase"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground">Declaration</h2>
            <div className="mt-6 space-y-5">
              <div>
                <label className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input
                    id="declaration"
                    name="declaration"
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                  />
                  <span>
                    I declare that the information provided in this application is true, complete
                    and accurate. I understand that false information or fraudulent documents may
                    lead to withdrawal of admission.
                  </span>
                </label>
                {errors.declaration && (
                  <p role="alert" className="mt-1 text-xs font-medium text-destructive">
                    {errors.declaration}
                  </p>
                )}
              </div>
              <div>
                <label className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input
                    id="regulations"
                    name="regulations"
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                  />
                  <span>
                    I have read and accept the BVC{" "}
                    <Link to="/regulations" className="font-semibold text-primary hover:text-gold">
                      enrolment and academic regulations
                    </Link>
                    , attendance policy and Student Code of Conduct.
                  </span>
                </label>
                {errors.regulations && (
                  <p role="alert" className="mt-1 text-xs font-medium text-destructive">
                    {errors.regulations}
                  </p>
                )}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name (signature)"
                  name="declarationName"
                  error={errors.declarationName}
                >
                  <Text name="declarationName" />
                </Field>
                <Field label="Date" name="declarationDate" error={errors.declarationDate}>
                  <Text name="declarationDate" type="date" />
                </Field>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="bg-gold px-7 py-3 font-display text-sm font-semibold tracking-wide text-gold-foreground uppercase shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              Submit application
            </button>
            <p className="text-xs text-muted-foreground">
              Nothing is transmitted yet - the portal connection is pending.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
