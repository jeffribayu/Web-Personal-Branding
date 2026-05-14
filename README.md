# Portfolio — Personal Branding Landing Page

A modern, single-page personal portfolio inspired by a clean dark-teal + white
reference design. Built with **React + Vite**, **Tailwind CSS**,
**Framer Motion** for animations, and **React Icons**.

---

## Features

- Fixed semi-transparent navbar with blur effect, search overlay, dark-mode toggle, and mobile menu
- Full-screen hero with outline-style "Freelancer" display typography, animated portrait, and gradient overlay
- About section with grayscale portrait that fades to color on hover, biography, info grid, socials, CTAs
- Services section with 6 icon cards (hover lift), portrait, and "10+ years" floating badge
- Animated counter for stats (Intersection Observer driven)
- Portfolio gallery with hover zoom + overlay + action icons
- Client/brand strip on teal gradient
- Dark footer with contact info, social icons, back-to-top
- Fully responsive (mobile, tablet, desktop)
- Smooth Framer Motion entrance + scroll animations
- Easy theming through `tailwind.config.js`

## Tech Stack

| Layer        | Library              |
| ------------ | -------------------- |
| Framework    | React 18 + Vite 5    |
| Styling      | Tailwind CSS 3       |
| Animation    | Framer Motion 11     |
| Icons        | React Icons (Fi, Fa, Gi) |
| Fonts        | Poppins, Caveat (Google Fonts) |

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

To build for production:

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Stats.jsx
│   ├── Portfolio.jsx
│   ├── Clients.jsx
│   └── Footer.jsx
├── data/
│   └── content.js        ← edit name, bio, services, gallery, etc.
└── hooks/
    └── useCountUp.js
```

## Customizing your brand

All content lives in `src/data/content.js`:

- `profile` — your name, role, tagline, bio, email, phone
- `services` — six service cards (icons come from `react-icons/fi`)
- `stats` — animated counter values
- `portfolio` — image URLs + titles + categories
- `clients` — brand strip names

To change the theme palette, edit `tailwind.config.js` → `theme.extend.colors.brand`.

The hero "Freelancer" word is rendered with `font-display` (Caveat) +
`-webkit-text-stroke` (see the `.outline-text` utility in `index.css`).

## Dummy assets

All images use stable Unsplash URLs by default; replace them with your own
images by editing `src/data/content.js`.

---

Made with care. Enjoy.
