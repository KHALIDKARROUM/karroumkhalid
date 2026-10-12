# Khalid Karroum — Portfolio

A portfolio for data science, machine learning, and backend projects, with a dark technical design, blue accents, illustrated project cards, and responsive layouts.

The home page introduces Khalid and showcases his existing projects, skills, education, and contact links. Each section also has a dedicated page in the shared layout, with a link back home. Project details include the problem, implementation, evaluation context, limitations, and source code. The charts on project cards are decorative illustrations, not reported evaluation results.

The theme button in the header switches between dark and light appearances and remembers the choice in your browser. Dark is the default. On narrow screens, the menu button opens the navigation.

## Pages

- `/` — introduction, about, skills, project gallery, and contact
- `/projects` — all five projects
- `/projects/[slug]` — project details
- `/skills` — skill groups and technologies
- `/about` — introduction, education, interests, and working approach
- `/contact` — availability and contact links

## Local setup

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

For the Vercel build, run `npm run build:vercel`.

## Editing content

- `data/profile.ts` — name, role, availability, social accounts, and language levels
- `data/projects.ts` — project descriptions, technologies, evaluation, and repository links
- `data/skills.ts` — skill groups
- `data/education.ts` — education from baccalaureate to master’s studies and expected graduation
- `data/experience.ts` — professional experience, project responsibilities, and technologies
- `app/globals.css` — shared styles

LinkedIn and GitHub are shown on the Contact page and in the shared contact links. Edit `socialAccounts` in `data/profile.ts` to maintain the account cards. Add an email in the same file to show an email link in the shared contact section. Keep education and experience dates tied to confirmed information.

To make the CV available, add `public/Khalid-Karroum-CV.pdf` and set `resume.available` to `true`. Until then, the CV link stays hidden.

New entries in `data/projects.ts` appear automatically in the project lists and detail routes.

## Deployment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the public site origin for metadata and the sitemap.

The default build uses Vinext for Sites/Cloudflare. Vercel uses `vercel.json` and the Next.js build. No database, external API, or secrets are required by the portfolio.

## Project content

Only include claims supported by the project repositories. Keep evaluation results with their context: Aegis-Credit’s reported results belong to its historical 2.1.0 demonstration and do not validate the corrected 2.2.0 model. The diabetes notebook is an educational project.
