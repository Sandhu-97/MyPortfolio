# Daanveer Singh — Portfolio

A modern, animated portfolio website built with React + Vite + Framer Motion.

## Tech Stack
- **React 18** — component-based UI
- **Vite** — fast dev server & build tool
- **Framer Motion** — animations (page load, scroll reveals, GPA chart)
- **react-intersection-observer** — scroll-triggered animations

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (runs at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — click Deploy
4. Done. Live in ~60 seconds.

## Project Structure

```
src/
  data/
    portfolio.js      ← All your content lives here — edit this!
  components/
    Cursor.jsx        ← Custom cursor with lag ring
    Nav.jsx           ← Fixed navbar
    Hero.jsx          ← Hero with typed animation + orb
    About.jsx         ← Skills + stats grid
    FeaturedProject.jsx ← Cold Store hero project card
    Projects.jsx      ← Other projects grid with spotlight effect
    Education.jsx     ← Animated GPA bar chart
    Recognition.jsx   ← Achievements + certifications
    Contact.jsx       ← Contact links
    Reveal.jsx        ← Reusable scroll-reveal wrapper
  App.jsx             ← Wires all sections together
  index.css           ← Global CSS variables & base styles
```

## Customization

**All content is in one file:** `src/data/portfolio.js`

To update anything — projects, GPA, skills, links — just edit that file. No hunting through components.
