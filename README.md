# dev-portfolio

Frontend Web Development Portfolio — a quirky, single-page showcase of weekend projects built with Next.js, React, TypeScript, and SCSS.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **SCSS Modules** 
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/              # Next.js app router (layout, page, globals)
components/       # React components (layout, sections, projects, ui)
content/          # Weekend project data (edit projects.ts to add projects)
lib/              # Types and site constants/copy
styles/           # Shared SCSS tokens, mixins, animations
public/           # Static assets
```

## Adding a Weekend Project

Edit `content/projects.ts`:

```typescript
{
  id: "my-app",
  title: "My App",
  tagline: "One sentence description.",
  url: "https://my-app.example.com",
  tags: ["React", "TypeScript"],
  accentColor: "#7f5af0",
}
```

## Customizing Copy

Site copy lives in `lib/constants.ts` — hero text, about section, contact info, and social links.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra config needed

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
