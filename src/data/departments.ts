// BVC academic departments. Each department offers one National Diploma programme.
// HOD profiles are placeholders until real names, photos and bios are supplied.

export type Department = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  /** Remit of the Head of Department. */
  hodRemit: string;
  /** Slug of the ND programme offered by this department. */
  programSlug: string;
  programName: string;
  /** City & Guilds / Skills Proficiency programmes delivered by this department. */
  programSlugs: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "mechanical-engineering-technology",
    name: "Department of Mechanical Engineering Technology",
    short: "Mechanical Engineering Technology",
    overview:
      "The Department of Mechanical Engineering Technology is committed to producing highly skilled engineering professionals equipped with the technical knowledge, practical competencies and innovative mindset required to support Nigeria's growing industrial economy. The department combines the National Diploma curriculum with industry-driven, competency-based learning approaches inspired by international vocational best practices. Students receive extensive practical training in manufacturing processes, machine operations, maintenance engineering, computer-aided design (CAD), fluid mechanics, thermodynamics, engineering materials and production systems. Strong emphasis is placed on safety, innovation, sustainability and professional ethics to prepare graduates for careers in the manufacturing, oil and gas, marine, construction and power sectors.",
    hodRemit:
      "Provides academic leadership, oversees curriculum implementation, promotes quality assurance, coordinates industry engagement, and ensures students receive high-quality education aligned with NBTE standards and industry expectations.",
    programSlug: "nd-mechanical-engineering-technology",
    programSlugs: [
      "engineering-maintenance-technology-l2",
      "engineering-maintenance-installation-commissioning-l3",
      "basic-refrigeration-air-conditioning",
    ],
    programName: "National Diploma in Mechanical Engineering Technology",
  },
  {
    slug: "welding-and-fabrication-technology",
    name: "Department of Welding and Fabrication Technology",
    short: "Welding and Fabrication Technology",
    overview:
      "The Department of Welding and Fabrication Technology develops competent professionals with advanced practical skills in welding, fabrication, structural steelwork and industrial engineering. Through competency-based practical training and rigorous technical instruction, students acquire expertise in welding processes, fabrication techniques, metallurgy, engineering drawings, quality assurance and industrial safety. The programme prepares graduates for careers in construction, manufacturing, shipbuilding, offshore operations and the oil and gas industry.",
    hodRemit:
      "Provides leadership in academic planning, workshop management, curriculum development, industry collaboration, student mentorship and quality assurance.",
    programSlug: "nd-welding-and-fabrication-technology",
    programSlugs: [
      "engineering-fabrication-welding-l3",
    ],
    programName: "National Diploma in Welding and Fabrication Technology",
  },
  {
    slug: "electrical-and-electronics-engineering-technology",
    name: "Department of Electrical and Electronics Engineering Technology",
    short: "Electrical and Electronics Engineering Technology",
    overview:
      "The Department of Electrical and Electronics Engineering Technology prepares students to design, install, maintain and troubleshoot electrical and electronic systems across diverse industries. Learners receive extensive practical laboratory training in electrical installation, industrial automation, instrumentation, electronics, renewable energy, PLCs, power systems and industrial maintenance. The department adopts competency-based learning approaches that produce innovative, safety-conscious graduates capable of supporting technological advancement.",
    hodRemit:
      "Oversees curriculum implementation, laboratory development, academic quality, staff development and partnerships with industry.",
    programSlug: "nd-electrical-and-electronics-engineering-technology",
    programSlugs: [
      "engineering-electrical-electronic-l3",
      "basic-electrical-installation",
    ],
    programName: "National Diploma in Electrical and Electronics Engineering Technology",
  },
  {
    slug: "business-administration-and-management",
    name: "Department of Business Administration and Management",
    short: "Business Administration and Management",
    overview:
      "The Department of Business Administration and Management develops future business professionals, entrepreneurs and organisational leaders through a blend of academic excellence and practical business education. Students gain competencies in management, marketing, accounting, entrepreneurship, customer service, office administration, business communication and leadership. The department promotes innovation, ethical leadership, digital business practices and enterprise development to prepare graduates for both employment and entrepreneurship.",
    hodRemit:
      "Provides strategic academic leadership, supports curriculum innovation, strengthens industry partnerships and promotes excellence in business education.",
    programSlug: "nd-business-administration-and-management",
    programSlugs: [
      "principles-business-administration-l2",
      "principles-business-administration-l3",
      "business-support-l2",
      "business-support-l3",
    ],
    programName: "National Diploma in Business Administration and Management",
  },
  {
    slug: "hospitality-management-technology",
    name: "Department of Hospitality Management Technology",
    short: "Hospitality Management Technology",
    overview:
      "The Department of Hospitality Management Technology prepares students for careers in hospitality, tourism, hotel management, food production, catering and customer service. Learners develop practical competencies through simulated hospitality environments covering culinary arts, food and beverage service, front office operations, housekeeping, tourism, event management and hospitality entrepreneurship. The department emphasises customer satisfaction, creativity, professionalism and global hospitality standards.",
    hodRemit:
      "Leads academic planning, coordinates hospitality training, strengthens industry partnerships and ensures quality delivery of hospitality education.",
    programSlug: "nd-hospitality-management-technology",
    programSlugs: [
      "food-preparation-culinary-arts-l2",
      "culinary-arts-patisserie-l2",
      "food-and-beverage-service-l2",
      "culinary-arts-supervision-l3",
      "professional-patisserie-confectionery-l3",
      "food-safety-in-catering-l2",
      "food-preparation-proficiency",
    ],
    programName: "National Diploma in Hospitality Management Technology",
  },
  {
    slug: "computer-science",
    name: "Department of Computer Science",
    short: "Computer Science",
    overview:
      "The Department of Computer Science develops innovative ICT professionals equipped with practical computing skills and technical expertise to support digital transformation. Students receive hands-on training in programming, networking, cybersecurity, database management, software engineering, cloud computing, artificial intelligence fundamentals, systems administration and web development. The department encourages innovation, critical thinking and lifelong learning while preparing graduates for careers in the global digital economy.",
    hodRemit:
      "Provides academic leadership, oversees curriculum implementation, supports innovation and strengthens collaboration with the ICT industry.",
    programSlug: "nd-computer-science",
    programSlugs: [
      "it-systems-support-l2",
      "it-systems-support-l3",
      "ict-professionals-systems-principles-l4",
      "ict-professionals-systems-principles-l4-unit-route",
    ],
    programName: "National Diploma in Computer Science",
  },
  {
    slug: "building-technology",
    name: "Department of Building Technology",
    short: "Building Technology",
    overview:
      "The Department of Building Technology prepares students for professional careers in construction and infrastructure development through a combination of theoretical knowledge and practical experience. Students develop competencies in building construction, surveying, quantity estimation, construction materials, building services, project supervision, sustainable construction, and health and safety. Practical workshops, field exercises and project-based learning ensure graduates are equipped to contribute effectively to the built environment.",
    hodRemit:
      "Provides academic and administrative leadership, ensures quality assurance, promotes industry engagement and supports continuous improvement in teaching and practical training.",
    programSlug: "nd-building-technology",
    programSlugs: [
      "basic-plumbing",
      "scaffolding",
    ],
    programName: "National Diploma in Building Technology",
  },
];

export function departmentForProgram(slug: string) {
  return DEPARTMENTS.find((d) => d.programSlug === slug || d.programSlugs.includes(slug));
}
