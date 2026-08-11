// Real BVC / City & Guilds programme catalogue.
// Images are placeholders until real programme photography is supplied.

export type Program = {
  slug: string;
  name: string;
  category: ProgramCategory;
  /** Awarding route. Omitted means City & Guilds. */
  award?: "nd";
  /** Duration in training days (City & Guilds programmes only). */
  days?: number;
  duration: string;
  body: string;
  entry: string[];
  certification: string;
  careers: string[];
};

export type ProgramCategory =
  | "Hospitality & Culinary"
  | "ICT"
  | "Business & Education"
  | "Skills Proficiency"
  | "Engineering"
  | "National Diploma";

/** City & Guilds catalogue groupings shown on the Programs page. */
export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  "Engineering",
  "Hospitality & Culinary",
  "ICT",
  "Business & Education",
  "Skills Proficiency",
];


const d = (days: number) => `${days} training days`;

export const ND_DURATION = "2 academic years · 4 semesters incl. SIWES";


export const PROGRAMS: Program[] = [
  // ---------------- Engineering ----------------
  {
    slug: "engineering-fabrication-welding-l3",
    name: "Level 3 Diploma in Engineering — Fabrication and Welding",
    category: "Engineering",
    days: 130,
    duration: d(130),
    body:
      "An advanced technical programme preparing learners for skilled careers in fabrication, structural steelwork, pipeline construction, manufacturing, marine engineering, oil and gas, and heavy engineering. Engineering theory is combined with intensive workshop practice so learners can fabricate, assemble, weld, inspect and maintain components to internationally recognised standards, covering engineering drawing interpretation, fabrication techniques, manual and semi-automatic welding processes, metallurgy, welding inspection, quality assurance, engineering calculations and workplace health and safety.",
    entry: [
      "Basic secondary school education",
      "Level 2 Engineering qualification or equivalent is advantageous",
      "Relevant industry experience may also be considered",
    ],
    certification: "City & Guilds Level 3 Diploma in Engineering – Fabrication and Welding (2850-32)",
    careers: [
      "Fabrication Technician",
      "Welding Technician",
      "Structural Fabricator",
      "Pipeline Welder",
      "Welding Inspector",
      "Quality Assurance Technician",
      "Marine Fabrication Technician",
      "Oil and Gas Fabrication Technician",
      "Engineering Workshop Supervisor",
      "Fabrication Entrepreneur",
    ],
  },
  {
    slug: "engineering-maintenance-technology-l2",
    name: "Level 2 Diploma in Engineering — Maintenance Technology",
    category: "Engineering",
    days: 70,
    duration: d(70),
    body:
      "Provides the practical skills and technical knowledge required to inspect, maintain, troubleshoot and repair industrial equipment and machinery. The programme focuses on preventive maintenance, fault diagnosis, mechanical systems, basic electrical systems, lubrication, engineering tools, maintenance planning and workplace safety, giving practical experience for entry-level maintenance roles across manufacturing, utilities, construction and production.",
    entry: [
      "Basic secondary school education",
      "Interest in engineering and industrial maintenance",
      "Basic literacy and numeracy skills",
      "No previous engineering qualification is required",
    ],
    certification: "City & Guilds Level 2 Diploma in Engineering – Maintenance Technology (2850-52)",
    careers: [
      "Maintenance Technician",
      "Mechanical Maintenance Assistant",
      "Plant Maintenance Operative",
      "Equipment Maintenance Technician",
      "Production Maintenance Assistant",
      "Facilities Maintenance Technician",
      "Engineering Workshop Technician",
      "Utilities Maintenance Assistant",
      "Manufacturing Technician",
      "Technical Apprentice",
    ],
  },
  {
    slug: "engineering-electrical-electronic-l3",
    name: "Level 3 Diploma in Engineering — Electrical and Electronic Engineering",
    category: "Engineering",
    days: 90,
    duration: d(90),
    body:
      "Prepares learners for careers in electrical installation, industrial automation, electronics, instrumentation, maintenance engineering, renewable energy and power systems. Classroom instruction and laboratory practice cover electrical installation techniques, electronic circuits, programmable logic controllers (PLCs), industrial control systems, instrumentation, electrical testing, fault diagnosis, preventive maintenance, renewable energy technologies and engineering safety.",
    entry: [
      "Basic secondary school education",
      "Level 2 Engineering qualification or equivalent is advantageous",
      "Relevant technical experience may also be considered",
    ],
    certification:
      "City & Guilds Level 3 Diploma in Engineering – Electrical and Electronic Engineering (2850-90)",
    careers: [
      "Electrical Engineering Technician",
      "Electronics Technician",
      "Industrial Automation Technician",
      "Instrumentation Technician",
      "Electrical Maintenance Technician",
      "Renewable Energy Technician",
      "Control Systems Technician",
      "Telecommunications Technician",
      "Power Distribution Technician",
      "Technical Services Engineer",
    ],
  },
  {
    slug: "engineering-maintenance-installation-commissioning-l3",
    name: "Level 3 Diploma in Engineering — Maintenance, Installation and Commissioning",
    category: "Engineering",
    days: 90,
    duration: d(90),
    body:
      "Equips learners with advanced knowledge and practical skills to install, commission, test, operate, maintain and troubleshoot industrial machinery and engineering systems. Develops expertise in installation techniques, commissioning procedures, mechanical and electrical maintenance, fault diagnosis, quality assurance, equipment testing, engineering documentation and workplace health, safety and environmental practice through practical workshops and industry-based projects.",
    entry: [
      "Basic secondary school education",
      "Level 2 Engineering qualification or equivalent experience is recommended",
      "Strong interest in engineering maintenance and industrial operations",
    ],
    certification:
      "City & Guilds Level 3 Diploma in Engineering – Maintenance, Installation and Commissioning (2850-88)",
    careers: [
      "Installation Technician",
      "Commissioning Technician",
      "Industrial Maintenance Technician",
      "Plant Operations Technician",
      "Mechanical Installation Technician",
      "Electrical Installation Technician",
      "Facilities Maintenance Engineer",
      "Engineering Service Technician",
      "Manufacturing Engineering Technician",
      "Maintenance Supervisor",
    ],
  },

  // ---------------- Hospitality & Culinary ----------------
  {
    slug: "food-preparation-culinary-arts-l2",
    name: "Level 2 Diploma in Food Preparation and Culinary Arts",
    category: "Hospitality & Culinary",
    days: 90,
    duration: d(90),
    body:
      "Provides the practical culinary skills, technical knowledge and professional behaviours required for careers in hospitality and catering. The programme covers food preparation, cooking methods, kitchen operations, food hygiene, nutrition, menu planning, stock control, customer service, teamwork, creativity and international food safety standards through extensive hands-on kitchen training.",
    entry: [
      "Basic secondary school education",
      "Passion for culinary arts and hospitality",
      "Basic literacy and numeracy skills",
      "Mature candidates with relevant industry experience may be considered",
    ],
    certification:
      "City & Guilds Level 2 Diploma in Food Preparation and Culinary Arts (8064-01)",
    careers: [
      "Commis Chef",
      "Line Cook",
      "Restaurant Cook",
      "Hotel Kitchen Assistant",
      "Catering Assistant",
      "Institutional Cook",
      "Food Production Assistant",
      "Cruise Ship Galley Assistant",
      "Airline Catering Assistant",
      "Catering Entrepreneur",
    ],
  },
  {
    slug: "culinary-arts-patisserie-l2",
    name: "Level 2 Diploma in Food Preparation and Culinary Arts — Patisserie",
    category: "Hospitality & Culinary",
    days: 90,
    duration: d(90),
    body:
      "Develops specialist skills in professional baking and pastry production. Learners master breads, cakes, pastries, desserts, chocolates, confectionery and decorative presentation techniques while gaining a solid understanding of the science and artistry of modern patisserie.",
    entry: [
      "Basic secondary school education",
      "Basic communication and numeracy skills",
      "Interest in baking and confectionery",
      "Mature candidates with relevant experience may be admitted",
    ],
    certification:
      "City & Guilds Level 2 Diploma in Food Preparation and Culinary Arts – Patisserie (8064-02)",
    careers: [
      "Pastry Chef",
      "Baker",
      "Cake Decorator",
      "Dessert Chef",
      "Bakery Production Assistant",
      "Chocolatier Assistant",
      "Bakery Entrepreneur",
      "Catering Pastry Specialist",
      "Hotel Pastry Cook",
      "Confectionery Production Technician",
    ],
  },
  {
    slug: "food-and-beverage-service-l2",
    name: "Level 2 Diploma in Food and Beverage Service",
    category: "Hospitality & Culinary",
    days: 90,
    duration: d(90),
    body:
      "Equips learners with practical front-of-house hospitality skills in customer service, restaurant operations, food presentation, beverage service, banquet operations, cashiering, communication and hospitality etiquette while promoting international service standards.",
    entry: [
      "Basic secondary school education",
      "Good communication skills",
      "Interest in hospitality and customer service",
      "Basic literacy and numeracy",
    ],
    certification: "City & Guilds Level 2 Diploma in Food and Beverage Service (8064-03)",
    careers: [
      "Restaurant Attendant",
      "Food Service Supervisor",
      "Banquet Assistant",
      "Hotel Waitstaff",
      "Room Service Attendant",
      "Bar Service Assistant",
      "Guest Service Officer",
      "Hospitality Assistant",
      "Conference Service Officer",
      "Catering Supervisor",
    ],
  },
  {
    slug: "culinary-arts-supervision-l3",
    name: "Level 3 Advanced Diploma in Culinary Arts and Supervision",
    category: "Hospitality & Culinary",
    days: 120,
    duration: d(120),
    body:
      "Designed for aspiring chefs seeking leadership roles. The programme develops advanced culinary techniques alongside supervisory and management competencies including menu engineering, kitchen management, food costing, inventory control, quality assurance, staff supervision, leadership and commercial kitchen operations.",
    entry: [
      "City & Guilds Level 2 Diploma in Culinary Arts or equivalent qualification",
      "Relevant industry experience may be considered",
      "Basic supervisory skills are advantageous",
    ],
    certification:
      "City & Guilds Level 3 Advanced Diploma in Culinary Arts and Supervision (8064-06)",
    careers: [
      "Sous Chef",
      "Head Chef",
      "Kitchen Supervisor",
      "Kitchen Manager",
      "Executive Chef Assistant",
      "Catering Operations Supervisor",
      "Food Production Manager",
      "Hospitality Entrepreneur",
      "Culinary Instructor",
      "Restaurant Operations Supervisor",
    ],
  },
  {
    slug: "professional-patisserie-confectionery-l3",
    name: "Level 3 Diploma in Professional Patisserie and Confectionery (Unit Route)",
    category: "Hospitality & Culinary",
    days: 120,
    duration: d(120),
    body:
      "Provides advanced specialist training in artisan baking, fine pastry, chocolate work, sugar craft, confectionery production, plated desserts and creative cake artistry for careers in luxury hospitality and specialist bakeries.",
    entry: [
      "Level 2 qualification in Culinary Arts or Patisserie, or equivalent practical experience",
      "Passion for professional baking and confectionery",
    ],
    certification:
      "City & Guilds Level 3 Diploma in Professional Patisserie and Confectionery (7120-95)",
    careers: [
      "Professional Pastry Chef",
      "Executive Pastry Chef",
      "Artisan Baker",
      "Chocolatier",
      "Cake Artist",
      "Dessert Consultant",
      "Bakery Production Supervisor",
      "Luxury Hotel Pastry Chef",
      "Bakery Entrepreneur",
      "Confectionery Specialist",
    ],
  },
  {
    slug: "food-safety-in-catering-l2",
    name: "Level 2 Award in Food Safety in Catering",
    category: "Hospitality & Culinary",
    days: 3,
    duration: d(3),
    body:
      "Provides essential knowledge and practical understanding of food hygiene principles, food contamination prevention, personal hygiene, sanitation, hazard control, temperature management, legal responsibilities and food safety best practice for catering and hospitality operations.",
    entry: [
      "Basic secondary school education",
      "Suitable for food handlers, chefs, caterers, kitchen assistants, entrepreneurs, hospitality workers and job seekers in the food industry",
    ],
    certification: "City & Guilds Level 2 Award in Food Safety in Catering (7150-92)",
    careers: [
      "Food Handler",
      "Kitchen Assistant",
      "Catering Assistant",
      "Restaurant Staff",
      "Hotel Kitchen Staff",
      "Bakery Staff",
      "Food Vendor",
      "School Caterer",
      "Hospital Catering Staff",
      "Hospitality Employee",
    ],
  },

  // ---------------- ICT ----------------
  {
    slug: "it-systems-support-l2",
    name: "Level 2 IVQ Diploma in IT Systems Support",
    category: "ICT",
    days: 40,
    duration: d(40),
    body:
      "Provides the practical knowledge and technical skills required to install, configure, maintain and troubleshoot computer hardware, operating systems, software applications and basic computer networks. Extensive hands-on training covers computer assembly, operating system installation, network fundamentals, cybersecurity awareness, troubleshooting, data management, customer support and IT best practice through laboratory sessions and real-world problem solving.",
    entry: [
      "Basic secondary school education",
      "Basic computer literacy is an advantage but not compulsory",
      "Ability to communicate effectively in English",
      "Basic numeracy skills",
    ],
    certification: "City & Guilds Level 2 IVQ Diploma in IT Systems Support (7267-24)",
    careers: [
      "IT Support Technician",
      "Computer Technician",
      "Help Desk Assistant",
      "Desktop Support Technician",
      "Computer Maintenance Technician",
      "ICT Support Assistant",
      "Hardware Technician",
      "Technical Support Officer",
      "Computer Repair Technician",
      "ICT Entrepreneur",
    ],
  },
  {
    slug: "it-systems-support-l3",
    name: "Level 3 IVQ Advanced Diploma in IT Systems Support",
    category: "ICT",
    days: 100,
    duration: d(100),
    body:
      "Equips learners with the advanced technical competencies required to manage, maintain, secure and optimise enterprise IT systems. The programme develops practical expertise in computer networking, server administration, cybersecurity, cloud technologies, virtualization, systems maintenance, technical support management and advanced troubleshooting using industry-standard technologies.",
    entry: [
      "City & Guilds Level 2 IVQ Diploma in IT Systems Support or equivalent qualification",
      "Alternatively, relevant industry experience may be considered",
      "Basic networking knowledge is advantageous",
    ],
    certification: "City & Guilds Level 3 IVQ Advanced Diploma in IT Systems Support (7267-25)",
    careers: [
      "Network Support Technician",
      "Systems Administrator",
      "IT Support Engineer",
      "Server Administrator",
      "Technical Support Supervisor",
      "ICT Infrastructure Technician",
      "Network Operations Technician",
      "Cloud Support Technician",
      "Cybersecurity Support Technician",
      "ICT Consultant",
    ],
  },
  {
    slug: "ict-professionals-systems-principles-l4",
    name: "Level 4 Diploma for ICT Professionals — Systems and Principles",
    category: "ICT",
    days: 120,
    duration: d(120),
    body:
      "An advanced qualification for learners seeking professional careers in systems administration, network engineering, cybersecurity, cloud computing, database administration and enterprise ICT management. Learners develop higher-level analytical, technical and project management skills through practical training in systems architecture, network design, information security, cloud services, virtualization, systems integration, technical documentation and ICT project implementation.",
    entry: [
      "Level 3 qualification in Information Technology or Computer Science",
      "Relevant professional experience may also be considered",
      "Strong computer literacy and networking knowledge",
    ],
    certification:
      "City & Guilds Level 4 Diploma for ICT Professionals – Systems and Principles (7630-04)",
    careers: [
      "Systems Administrator",
      "Network Engineer",
      "ICT Systems Analyst",
      "Cloud Infrastructure Technician",
      "ICT Project Coordinator",
      "Database Administrator",
      "Information Security Officer",
      "Enterprise Support Engineer",
      "ICT Operations Supervisor",
      "Technical Consultant",
    ],
  },
  {
    slug: "ict-professionals-systems-principles-l4-unit-route",
    name: "Level 4 Diploma for ICT Professionals — Systems and Principles (Unit Route)",
    category: "ICT",
    days: 80,
    duration: d(80),
    body:
      "A flexible learning pathway enabling learners to complete specialist units while building comprehensive knowledge of enterprise ICT systems and infrastructure. Core and optional units cover advanced networking, systems administration, cybersecurity, cloud technologies, technical support, systems integration and ICT project management, allowing learners to tailor their studies to specific career goals.",
    entry: [
      "Level 3 qualification in ICT or equivalent",
      "Relevant workplace experience may be accepted",
      "Good understanding of computer systems and networking",
      "Commitment to independent and practical learning",
    ],
    certification:
      "City & Guilds Level 4 Diploma for ICT Professionals – Systems and Principles (Unit Route) (7630-94)",
    careers: [
      "ICT Systems Engineer",
      "Network Administrator",
      "Cloud Systems Technician",
      "Infrastructure Engineer",
      "Cybersecurity Analyst",
      "Technical Support Manager",
      "Database Administrator",
      "Systems Integration Specialist",
      "ICT Project Officer",
      "Technology Consultant",
    ],
  },

  // ---------------- Business & Education ----------------
  {
    slug: "principles-business-administration-l2",
    name: "Level 2 Certificate in Principles of Business and Administration",
    category: "Business & Education",
    days: 30,
    duration: d(30),
    body:
      "Provides the essential knowledge and workplace skills required to perform effectively in modern business environments. The programme introduces office administration, business communication, customer service, record management, information handling, teamwork, workplace professionalism and administrative procedures, preparing learners for employment across public and private sector organisations and for progression to higher business qualifications.",
    entry: [
      "Basic secondary school education",
      "Good communication skills",
      "Basic literacy and numeracy",
      "Interest in business administration and office management",
    ],
    certification:
      "City & Guilds Level 2 Certificate in Principles of Business and Administration (4475-02)",
    careers: [
      "Administrative Assistant",
      "Office Assistant",
      "Receptionist",
      "Customer Service Assistant",
      "Records Clerk",
      "Office Support Officer",
      "Administrative Clerk",
      "Front Desk Officer",
      "Data Entry Clerk",
      "Office Administrator",
    ],
  },
  {
    slug: "principles-business-administration-l3",
    name: "Level 3 Certificate in Principles of Business and Administration",
    category: "Business & Education",
    days: 40,
    duration: d(40),
    body:
      "Prepares learners for supervisory and administrative roles within business organisations. The programme develops advanced knowledge of business operations, office management, communication systems, customer relationship management, project coordination, organisational procedures, workplace leadership, information management, scheduling, analytical thinking and professional decision-making.",
    entry: [
      "Level 2 Business qualification or equivalent",
      "Relevant workplace experience may be considered",
      "Good communication and organisational skills",
    ],
    certification:
      "City & Guilds Level 3 Certificate in Principles of Business and Administration (4475-03)",
    careers: [
      "Senior Administrative Officer",
      "Executive Assistant",
      "Office Supervisor",
      "Administrative Coordinator",
      "Customer Relations Officer",
      "Business Operations Assistant",
      "Office Manager",
      "Project Administrator",
      "Human Resources Assistant",
      "Business Support Officer",
    ],
  },
  {
    slug: "business-support-l2",
    name: "Level 2 Diploma in Business Support",
    category: "Business & Education",
    days: 50,
    duration: d(50),
    body:
      "Equips learners with the practical administrative, organisational and customer service skills required to support efficient business operations. The programme focuses on office systems, business communication, information management, teamwork, digital office applications, workplace professionalism and customer service, preparing graduates to contribute across government agencies, private companies, educational institutions, financial organisations and NGOs.",
    entry: [
      "Basic secondary school education",
      "Basic computer literacy is an advantage",
      "Good communication skills",
      "Commitment to professional development",
    ],
    certification: "City & Guilds Level 2 Diploma in Business Support (4475-12)",
    careers: [
      "Business Support Assistant",
      "Administrative Assistant",
      "Office Clerk",
      "Customer Service Representative",
      "Reception Officer",
      "Office Support Technician",
      "Records Officer",
      "Administrative Secretary",
      "Front Office Executive",
      "Business Office Assistant",
    ],
  },
  {
    slug: "business-support-l3",
    name: "Level 3 Diploma in Business Support",
    category: "Business & Education",
    days: 60,
    duration: d(60),
    body:
      "Develops the advanced administrative and organisational competencies required to coordinate business operations efficiently. Learners acquire expertise in office management, project coordination, document control, customer relationship management, leadership, digital business systems, workplace communication and business operations while preparing for supervisory responsibilities.",
    entry: [
      "City & Guilds Level 2 Diploma in Business Support or equivalent qualification",
      "Relevant workplace experience may also be considered",
      "Basic ICT proficiency",
    ],
    certification: "City & Guilds Level 3 Diploma in Business Support (4475-13)",
    careers: [
      "Office Supervisor",
      "Business Support Officer",
      "Executive Administrator",
      "Administrative Coordinator",
      "Project Support Officer",
      "Customer Service Supervisor",
      "Office Manager",
      "Executive Secretary",
      "Business Operations Coordinator",
      "Administrative Consultant",
    ],
  },
  {
    slug: "teaching-training-assessing-learning-l3",
    name: "Level 3 IVQ Advanced Diploma in Teaching, Training and Assessing Learning",
    category: "Business & Education",
    days: 10,
    duration: d(10),
    body:
      "Designed for aspiring and practising educators, trainers, instructors, facilitators and workplace assessors. The programme develops the knowledge, practical teaching skills and assessment competencies required to plan, deliver, facilitate and evaluate learner-centred instruction, exploring curriculum planning, learner engagement, instructional design, assessment strategies, inclusive education, classroom management, educational technology, quality assurance and reflective professional practice through supervised teaching practice.",
    entry: [
      "Level 2 qualification or higher in a relevant occupational area",
      "Good communication skills in English",
      "Teaching, training or workplace supervision experience is an advantage but not mandatory",
      "Commitment to professional development and lifelong learning",
    ],
    certification:
      "City & Guilds Level 3 IVQ Advanced Diploma in Teaching, Training and Assessing Learning (1106-03)",
    careers: [
      "Vocational Instructor",
      "Technical Trainer",
      "Workplace Assessor",
      "Learning and Development Officer",
      "Corporate Trainer",
      "Skills Development Facilitator",
      "Training Coordinator",
      "Education Consultant",
      "TVET Instructor",
      "Curriculum Development Assistant",
    ],
  },

  // ---------------- Skills Proficiency ----------------
  {
    slug: "basic-plumbing",
    name: "Skills Proficiency Certificate in Basic Plumbing",
    category: "Skills Proficiency",
    days: 20,
    duration: d(20),
    body:
      "A practical, competency-based programme equipping learners with the essential skills required to install, maintain, repair and troubleshoot domestic and light commercial plumbing systems. Intensive hands-on training covers water supply systems, drainage installation, pipe fitting, sanitary ware installation, leak detection, plumbing maintenance, workplace health and safety and sustainable plumbing practice using industry-standard tools.",
    entry: [
      "Basic literacy and numeracy skills",
      "Interest in plumbing and construction trades",
      "No previous plumbing experience required",
      "Suitable for school leavers, artisans and individuals seeking vocational skills",
    ],
    certification: "City & Guilds Skills Proficiency Certificate – Basic Plumbing (3529-04)",
    careers: [
      "Plumbing Technician",
      "Plumbing Assistant",
      "Maintenance Plumber",
      "Building Services Technician",
      "Facilities Maintenance Operative",
      "Construction Site Plumber",
      "Self-employed Plumbing Contractor",
      "Property Maintenance Technician",
      "Water Systems Installer",
      "Vocational Apprentice",
    ],
  },
  {
    slug: "basic-refrigeration-air-conditioning",
    name: "Skills Proficiency Certificate in Basic Refrigeration and Air Conditioning",
    category: "Skills Proficiency",
    days: 20,
    duration: d(20),
    body:
      "Introduces learners to the installation, servicing, maintenance and repair of refrigeration and air conditioning systems used in residential, commercial and industrial environments. The curriculum develops competence in refrigeration principles, electrical controls, refrigerant handling, fault diagnosis, preventive maintenance, energy-efficient cooling systems and environmental responsibility while ensuring compliance with industry safety standards.",
    entry: [
      "Basic literacy and numeracy skills",
      "Interest in mechanical or electrical trades",
      "No prior experience required",
    ],
    certification:
      "City & Guilds Skills Proficiency Certificate – Basic Refrigeration and Air Conditioning (3529-05)",
    careers: [
      "Refrigeration Technician",
      "Air Conditioning Installer",
      "HVAC Maintenance Technician",
      "Cold Room Technician",
      "Building Services Technician",
      "Refrigeration Service Assistant",
      "Facilities Maintenance Technician",
      "HVAC Entrepreneur",
      "Technical Sales Representative",
      "Industrial Maintenance Assistant",
    ],
  },
  {
    slug: "basic-electrical-installation",
    name: "Skills Proficiency Certificate in Basic Electrical Installation",
    category: "Skills Proficiency",
    days: 20,
    duration: d(20),
    body:
      "Provides practical training in domestic and light commercial electrical installations. Learners develop competence in electrical wiring, circuit installation, testing procedures, fault finding, electrical maintenance, safe use of hand and power tools and compliance with electrical installation standards through intensive practical instruction and workplace-based problem solving.",
    entry: [
      "Basic literacy and numeracy skills",
      "Interest in electrical engineering or construction trades",
      "No previous electrical experience required",
    ],
    certification:
      "City & Guilds Skills Proficiency Certificate – Basic Electrical Installation (3529-06)",
    careers: [
      "Electrical Installation Technician",
      "Electrical Maintenance Assistant",
      "Building Electrician",
      "Electrical Wiring Technician",
      "Facilities Maintenance Technician",
      "Electrical Contractor Assistant",
      "Solar Installation Assistant",
      "Construction Electrician",
      "Technical Apprentice",
      "Self-employed Electrical Installer",
    ],
  },
  {
    slug: "scaffolding",
    name: "Skills Proficiency Certificate in Scaffolding",
    category: "Skills Proficiency",
    days: 20,
    duration: d(20),
    body:
      "Prepares learners with the knowledge and practical skills required to safely erect, inspect, modify and dismantle scaffold structures used in construction, maintenance, oil and gas, marine and industrial projects. Training combines classroom instruction with practical exercises covering scaffold components, load calculations, hazard identification, working at height, PPE, risk assessment and statutory health and safety requirements.",
    entry: [
      "Basic literacy and numeracy skills",
      "Physical fitness for practical training",
      "Commitment to safe working practices",
      "No previous scaffolding experience required",
    ],
    certification: "City & Guilds Skills Proficiency Certificate in Scaffolding (3529-14)",
    careers: [
      "Scaffolder",
      "Scaffolding Technician",
      "Construction Site Operative",
      "Oil and Gas Scaffolder",
      "Marine Scaffolder",
      "Industrial Maintenance Worker",
      "Access Systems Installer",
      "Construction Safety Assistant",
      "Scaffold Inspector Assistant",
      "Self-employed Scaffolding Contractor",
    ],
  },
  {
    slug: "food-preparation-proficiency",
    name: "Skills Proficiency Certificate in Food Preparation",
    category: "Skills Proficiency",
    days: 20,
    duration: d(20),
    body:
      "Designed for individuals seeking practical culinary skills for employment or self-employment in the hospitality and catering industry. Intensive hands-on training covers food preparation techniques, cooking methods, kitchen hygiene, food presentation, nutrition and safe food handling while developing the confidence to prepare a wide variety of local and international dishes in commercial kitchens.",
    entry: [
      "Basic literacy and numeracy skills",
      "Passion for cooking and hospitality",
      "No previous culinary qualification required",
    ],
    certification: "City & Guilds Skills Proficiency Certificate – Food Preparation (3529-50)",
    careers: [
      "Kitchen Assistant",
      "Catering Assistant",
      "Commis Cook",
      "Restaurant Cook",
      "Hotel Kitchen Staff",
      "Institutional Cook",
      "Food Vendor",
      "Catering Entrepreneur",
      "School Catering Assistant",
      "Hospitality Support Staff",
    ],
  },

  // ---------------- BVC approved National Diploma programmes ----------------
  {
    slug: "nd-mechanical-engineering-technology",
    name: "National Diploma in Mechanical Engineering Technology",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Equips students with theoretical knowledge and practical skills in mechanical systems, manufacturing, maintenance engineering, thermodynamics, fluid mechanics, welding technology, CAD, engineering drawing and industrial safety for careers in manufacturing, oil and gas, construction, marine and energy industries.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics, Physics, Chemistry and one other relevant Science subject",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Mechanical Engineering Technology",
    careers: [
      "Mechanical Engineering Technician",
      "Maintenance Technician",
      "Plant Operator",
      "Manufacturing Technician",
      "Mechanical Design Assistant",
      "Production Supervisor",
      "Marine Engineering Technician",
      "Oil & Gas Maintenance Technician",
      "CAD Technician",
      "Quality Control Technician",
    ],
  },
  {
    slug: "nd-welding-and-fabrication-technology",
    name: "National Diploma in Welding and Fabrication Technology",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Develops highly skilled welding and fabrication professionals through practical training in arc welding, MIG, TIG, gas welding, fabrication drawing, metallurgy, structural fabrication, quality assurance and workplace safety for careers in construction, oil and gas, marine and manufacturing industries.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics, Physics, Chemistry and one other Science subject",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Welding and Fabrication Technology",
    careers: [
      "Welding Technician",
      "Fabrication Technician",
      "Pipe Fabricator",
      "Steel Structure Fabricator",
      "Welding Inspector",
      "Offshore Fabrication Technician",
      "Marine Fabrication Technician",
      "Maintenance Welder",
      "Industrial Plant Technician",
      "Welding Entrepreneur",
    ],
  },
  {
    slug: "nd-electrical-and-electronics-engineering-technology",
    name: "National Diploma in Electrical and Electronics Engineering Technology",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Provides practical and theoretical training in electrical installation, industrial automation, electrical machines, electronics, instrumentation, PLCs, renewable energy systems, power distribution and industrial safety to prepare graduates for Nigeria's industrial and energy sectors.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics, Physics, Chemistry and one other relevant Science subject",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Electrical and Electronics Engineering Technology",
    careers: [
      "Electrical Technician",
      "Electronics Technician",
      "Power Systems Technician",
      "Industrial Maintenance Technician",
      "Instrumentation Technician",
      "Renewable Energy Technician",
      "Automation Technician",
      "Telecommunications Technician",
      "Electrical Installation Supervisor",
      "Technical Support Engineer",
    ],
  },
  {
    slug: "nd-business-administration-and-management",
    name: "National Diploma in Business Administration and Management",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Develops managerial, entrepreneurial and administrative skills through studies in business management, accounting, marketing, entrepreneurship, economics, office technology, project management, customer relationship management and business communication.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics, Economics or Commerce (where applicable) and two other relevant subjects",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Business Administration and Management",
    careers: [
      "Administrative Officer",
      "Human Resource Assistant",
      "Business Development Officer",
      "Marketing Executive",
      "Customer Service Officer",
      "Sales Executive",
      "Office Manager",
      "Operations Officer",
      "Entrepreneur",
      "Small Business Owner",
    ],
  },
  {
    slug: "nd-hospitality-management-technology",
    name: "National Diploma in Hospitality Management Technology",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Prepares students for careers in hotels, tourism, restaurants, catering and event management through practical training in food production, hotel administration, front office operations, housekeeping, food and beverage service, tourism, customer service and hospitality entrepreneurship.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics and three other relevant subjects",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Hospitality Management Technology",
    careers: [
      "Hotel Supervisor",
      "Restaurant Manager",
      "Front Office Executive",
      "Housekeeping Manager",
      "Catering Manager",
      "Event Coordinator",
      "Tourism Officer",
      "Hospitality Consultant",
      "Resort Administrator",
      "Entrepreneur",
    ],
  },
  {
    slug: "nd-computer-science",
    name: "National Diploma in Computer Science",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Provides practical computing knowledge in programming, database management, networking, web development, cybersecurity, operating systems, software engineering, hardware maintenance, cloud computing and artificial intelligence fundamentals for careers in modern ICT.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics, Physics and two other Science subjects",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Computer Science",
    careers: [
      "Software Developer",
      "Web Developer",
      "Network Administrator",
      "Database Administrator",
      "IT Support Specialist",
      "Systems Administrator",
      "Cybersecurity Technician",
      "Computer Hardware Technician",
      "ICT Officer",
      "Technology Entrepreneur",
    ],
  },
  {
    slug: "nd-building-technology",
    name: "National Diploma in Building Technology",
    category: "National Diploma",
    award: "nd",
    duration: ND_DURATION,
    body:
      "Prepares students to supervise, construct and maintain modern buildings through practical training in building construction, structural drawing, surveying, quantity estimation, building services, project supervision, sustainable construction and construction safety.",
    entry: [
      "Five (5) O'Level credits including English Language, Mathematics, Physics, Chemistry and one other relevant subject",
      "Acceptable examinations: WAEC, NECO, NABTEB or GCE",
      "Applicants must satisfy current NBTE admission requirements",
    ],
    certification: "National Diploma (ND) in Building Technology",
    careers: [
      "Building Technician",
      "Site Supervisor",
      "Construction Inspector",
      "Project Assistant",
      "Building Maintenance Officer",
      "Quantity Survey Assistant",
      "Facilities Officer",
      "Property Maintenance Technician",
      "Construction Materials Technician",
      "Building Contractor",
    ],
  },
];

export const ND_PROGRAMS = PROGRAMS.filter((p) => p.award === "nd");
export const CITY_GUILDS_PROGRAMS = PROGRAMS.filter((p) => p.award !== "nd");

export function getProgram(slug: string) {
  return PROGRAMS.find((p) => p.slug === slug);
}

