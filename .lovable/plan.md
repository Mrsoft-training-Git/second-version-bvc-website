# National Diplomas & Academic Departments

Both uploaded documents describe the same academic structure: seven academic departments, each offering exactly one National Diploma programme. The ND catalogue and the department overviews are new to the site — today only the City & Guilds programmes exist.

## What gets built

### 1. National Diploma programmes (7)

- Mechanical Engineering Technology
- Welding and Fabrication Technology
- Electrical and Electronics Engineering Technology
- Business Administration and Management
- Hospitality Management Technology
- Computer Science
- Building Technology

Each carries: duration (2 academic years / 4 semesters including SIWES), O'Level admission requirements, description, certification awarded, and career opportunities — taken verbatim in substance from the document.

**Dedicated page** at `/programs/national-diploma`: an "Approved ND Programmes" hero band, a short intro explaining NBTE accreditation and the 2-year structure, then the seven programmes as cards.

**Promoted block on the main Programs page**: a distinct band (above the City & Guilds categories) that introduces the ND route and links to the dedicated page, so the two award routes stay visually separate rather than mixed into one grid.

**Detail pages** reuse the existing programme detail layout at `/programs/{slug}`, with the duration panel showing "2 academic years / 4 semesters incl. SIWES" instead of training days, and the awarding line showing NBTE-approved National Diploma instead of City & Guilds.

### 2. Departments page

New `/departments` page listing all seven departments. Each entry shows:

- Department name
- Full overview paragraph from the document
- Head of Department block with the leadership-remit text and a "Profile to be updated" placeholder, styled so a real photo and bio can drop in later
- The ND programme it offers, linking to that programme's detail page

Layout follows the existing editorial style used on About: ink/slate section headers, gold accents, stone content plates.

### 3. Navigation

- Add a single `Departments` link to the top nav (nav stays flat).
- Add both new pages to the sitemap.
- Link departments and the ND page to each other from the footer quick links.

## Technical notes

- Extend `src/data/programs.ts`: add an `award: "city-guilds" | "nd"` field and a `"National Diploma"` category, plus the seven ND entries with their own slugs (`nd-mechanical-engineering-technology`, etc.). `days`/`duration` become optional for ND records, replaced by a `durationLabel`.
- `src/routes/programs.index.tsx` filters the existing category grids to City & Guilds records only, so the NDs don't appear twice, and renders the new promo band.
- New `src/routes/programs.national-diploma.tsx` (route `/programs/national-diploma`) — must be declared before the `$slug` route resolution concern is moot since it is a literal segment and wins over the dynamic one.
- New `src/data/departments.ts` holding the seven department records, each referencing its ND programme slug.
- New `src/routes/departments.tsx` consuming that data.
- `src/routes/programs.$slug.tsx` branches its duration/certification panels on `award`.
- Each new route gets its own `head()` with unique title, description, og:title, og:description, og:type and twitter:card.
- `NAV` in `src/data/site.ts` and `src/routes/sitemap[.]xml.ts` updated.
- Programme imagery continues to use the existing placeholder pool in `src/lib/program-images.ts`, with the new categories mapped to sensible existing photos until real assets arrive.
