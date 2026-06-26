# Chaitrali Kadam - Portfolio

A modern, recruiter-focused personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- **Resume:** Add your resume PDF to `public/resume.pdf`
- **GitHub URL:** Update in `src/data/portfolio.ts`
- **EmailJS:** Copy `.env.example` to `.env.local` and add your credentials
- **Project links:** Update `githubUrl` and `liveUrl` in `src/data/portfolio.ts`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, etc.)
│   └── ui/           # Reusable UI components
├── data/             # Portfolio content & configuration
├── lib/              # Utilities
└── types/            # TypeScript interfaces
```
