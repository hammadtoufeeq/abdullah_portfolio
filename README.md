# Abdullah Azhar — Portfolio

Personal portfolio for **Abdullah Azhar**, Full Stack Developer (MERN / Next.js).

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Motion** (animations)
and **Font Awesome** icons, with a bold black + orange (`#FF5B0F`) theme and the Poppins font.

Theme colors are defined once in [`app/globals.css`](app/globals.css) under `@theme`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All text (profile, experience, projects, skills, certifications) lives in
[`data/resume.ts`](data/resume.ts) — edit it and the site updates. Add `live` / `repo`
URLs to a project to show its links. The downloadable resume is
`public/Abdullah_Azhar_Resume.pdf`.

To show a real photo in the hero, add it to `public/` (e.g. `public/abdullah.jpg`) and set
`photo: "/abdullah.jpg"` in `data/resume.ts`. Skill bar percentages live in `skillLevels`.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — no configuration needed.
