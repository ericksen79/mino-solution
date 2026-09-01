# Graph Report - mino-solution  (2026-08-31)

## Corpus Check
- Large corpus: 143 files · ~521,588 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 225 nodes · 262 edges · 26 communities (12 shown, 11 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.91)
- Token cost: 182,658 input · 0 output

## Community Hubs (Navigation)
- Homepage UI Components
- CV & Portfolio Entities
- package.json Metadata
- Legacy Site Pages & Content
- NPM Dependencies
- TypeScript Compiler Config
- App Layout & i18n Routing
- Dev Dependencies & Types
- Projects Page Components
- TSConfig References
- Legacy Site Main JS
- Legacy Site Projects Filter JS
- Agents/Claude Config
- fix_cv Script
- Next.js Config
- Next.js Breaking-Changes Note
- convert_cv Script
- convert_projects Script
- ESLint Config
- Client Logo: ABG Homes
- Client Logo: RPG Architect
- Client Logo: Super Clean SV
- Client Logo: Zentro Labs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Erick Hernández (UI/UX Designer & WordPress Developer)` - 16 edges
3. `Homepage (index.html)` - 12 edges
4. `include` - 7 edges
5. `SectionHeader()` - 6 edges
6. `Case study: CATO Media` - 6 edges
7. `scripts` - 5 edges
8. `Button()` - 4 edges
9. `routing` - 4 edges
10. `lib` - 4 edges

## Surprising Connections (you probably didn't know these)
- `create-next-app standard Next.js bootstrap` --conceptually_related_to--> `Non-standard Next.js warning`  [INFERRED]
  README.md → AGENTS.md
- `Client logo: CATO Media` --references--> `Case study: CATO Media`  [INFERRED]
  _legacy_site/index.html → _legacy_site/projects.html
- `Employer: Linework (Fintech)` --references--> `Case study: Linework`  [INFERRED]
  _legacy_site/cv.html → _legacy_site/projects.html
- `Homepage (index.html)` --references--> `Erick Hernández (UI/UX Designer & WordPress Developer)`  [EXTRACTED]
  _legacy_site/index.html → _legacy_site/cv.html
- `Homepage (index.html)` --references--> `Case study: CATO Media`  [EXTRACTED]
  _legacy_site/index.html → _legacy_site/projects.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CATO Media 4-Platform Ecosystem** — _legacy_site_projects_cato_media, _legacy_site_projects_salem_business_journal, _legacy_site_projects_clark_county_catalyst, _legacy_site_projects_press_release_salem, _legacy_site_projects_cato_media_company [EXTRACTED 1.00]
- **CV Reference Letters for Erick Hernández** — _legacy_site_cv_erick_hernandez, _legacy_site_cv_ariela_suvillaga, _legacy_site_cv_luis_roberto_ticas_valdivieso, _legacy_site_cv_doroty_johnstone, _legacy_site_cv_jesse_lippold_peone [EXTRACTED 1.00]
- **MINO Solutions Service Packages** — _legacy_site_index_package_webunity, _legacy_site_index_package_businesssync, _legacy_site_index_package_socialboost, _legacy_site_index_service_transformacion_digital, _legacy_site_index_service_web_dev, _legacy_site_index_service_estrategia_contenido [EXTRACTED 1.00]

## Communities (26 total, 11 thin omitted)

### Community 0 - "Homepage UI Components"
Cohesion: 0.11
Nodes (17): About(), Cases(), Clients, Button(), ButtonProps, ButtonSize, ButtonVariant, SectionHeader() (+9 more)

### Community 1 - "CV & Portfolio Entities"
Cohesion: 0.11
Nodes (23): Employer: AB POS Solution / NUV POS Solution, Project: Lienzos y Trazos — CENAR (2024), Course: Diseño y desarrollo de apps móviles (2022), Doroty Johnstone (Founder & CEO, SIPcity), Erick Hernández (UI/UX Designer & WordPress Developer), Project: ESArt — Escuela de Artes (2023), IMJ (Instituto de la Juventud), Jesse Lippold Peone (Founder & Journalist, Salem Business Journal / CATO Media) (+15 more)

### Community 2 - "package.json Metadata"
Cohesion: 0.10
Nodes (20): author, bugs, url, description, homepage, keywords, license, main (+12 more)

### Community 3 - "Legacy Site Pages & Content"
Cohesion: 0.15
Nodes (18): 404 Page (404.html), CV Page (cv.html), Ariela Suvillaga (Founder, Casa Escencia), Homepage (index.html), Client logo: Casa Escencia, Client logo: Linework, MINO Solutions (brand/company), Package: BusinessSync (+10 more)

### Community 4 - "NPM Dependencies"
Cohesion: 0.11
Nodes (19): framer-motion, graphifyy, gsap, @gsap/react, lenis, next-intl, dependencies, framer-motion (+11 more)

### Community 5 - "TypeScript Compiler Config"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 6 - "App Layout & i18n Routing"
Cohesion: 0.15
Nodes (8): inter, rubik, Footer(), Navbar(), SmoothScroll(), {Link, redirect, usePathname, useRouter}, routing, config

### Community 7 - "Dev Dependencies & Types"
Cohesion: 0.15
Nodes (13): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @types/node, @types/react, @types/react-dom (+5 more)

### Community 8 - "Projects Page Components"
Cohesion: 0.21
Nodes (7): metadata, Cta(), LOGOS_ROW_1, LOGOS_ROW_2, LogosCarousel(), Portfolio(), ProjectsHero()

### Community 9 - "TSConfig References"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 10 - "Legacy Site Main JS"
Cohesion: 0.22
Nodes (6): fadeObserver, hamburger, mobileMenu, navbar, projectsTranslations, translations

### Community 11 - "Legacy Site Projects Filter JS"
Cohesion: 0.40
Nodes (3): filterBtns, projectSections, visibleCount

## Knowledge Gaps
- **102 isolated node(s):** `navbar`, `hamburger`, `mobileMenu`, `fadeObserver`, `translations` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 121 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `NPM Dependencies` to `package.json Metadata`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies & Types` to `package.json Metadata`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Erick Hernández (UI/UX Designer & WordPress Developer)` connect `CV & Portfolio Entities` to `Legacy Site Pages & Content`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `navbar`, `hamburger`, `mobileMenu` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Homepage UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.11494252873563218 - nodes in this community are weakly interconnected._
- **Should `CV & Portfolio Entities` be split into smaller, more focused modules?**
  _Cohesion score 0.1067193675889328 - nodes in this community are weakly interconnected._
- **Should `package.json Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._