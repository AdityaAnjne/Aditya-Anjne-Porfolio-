# Aditya Anjne — Developer Portfolio

An immersive developer portfolio built with **Next.js 16**, **React Three Fiber**, and **Tailwind CSS v4**. It features a 3D mechanical keyboard, seasonal themes, smooth scrolling, project galleries, and a responsive layout.

Built by [Aditya Anjne](https://linkedin.com/in/aditya-anjne-43802b304).

---

## Highlights

- **Interactive 3D Keyboard** — A full mechanical keyboard rendered with React Three Fiber and Three.js. Keys react to real keypresses with physics-based animations and sound effects.
- **Seasonal Themes** — Four complete visual themes (Winter, Spring, Summer, Autumn) that re-skin the entire UI — colours, gradients, and 3D scene lighting — with a single click.
- **Project Showcases** — Modal dialogs with image carousels, tech stack chips, and links to live demos and source code.
- **English interface** — Portfolio content and project details are presented in English.
- **Smooth Scroll & Reveal Animations** — Powered by [Lenis](https://github.com/darkroomengineering/lenis) for buttery smooth scrolling with intersection-observer-based reveal effects.
- **Custom Cursor & Magnetic Targets** — A custom cursor that morphs on interactive elements, with magnetic snap behaviour on buttons.
- **Responsive & Mobile-First** — Optimised for recruiters reviewing on phones. WebGL performance and touch interactions are first-class concerns.
- **Security Headers** — HSTS, X-Frame-Options, Content-Type-Options, Referrer-Policy, and Permissions-Policy configured out of the box.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| 3D | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [Simple Icons](https://simpleicons.org/) (tech logos on 3D keycaps) |
| Language | JavaScript |
| Deploy | Vercel / Docker |

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/AdityaAnjne/Aditya-Anjne-Porfolio-.git
cd Aditya-Anjne-Porfolio-

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Docker

The project includes a multi-stage Dockerfile optimised for production (standalone output, ~100 MB final image):

```bash
docker build -t 3d-portfolio .
docker run -p 3000:3000 3d-portfolio
```

## Project Structure

```
├── app/
│   ├── globals.css        # Tailwind + CSS custom properties (seasonal themes)
│   ├── layout.jsx         # Root layout with providers
│   └── page.jsx           # Home page with all sections
├── components/
│   ├── FrozenKeyboard.jsx # 3D keyboard scene (R3F)
│   ├── FrozenBackground.jsx # Animated background particles
│   ├── Carousel.jsx       # Image carousel for project modals
│   ├── ProjectModal.jsx   # Fullscreen project detail dialog
│   ├── SeasonProvider.jsx # Seasonal theme context
│   ├── SeasonPicker.jsx   # Theme switcher UI
│   ├── LanguageProvider.jsx # English UI copy context
│   ├── CustomCursor.jsx   # Custom cursor with hover states
│   ├── MagneticTargets.jsx# Magnetic snap on interactive elements
│   ├── Reveal.jsx         # Scroll-triggered reveal animations
│   ├── SectionNav.jsx     # Dot navigation sidebar
│   ├── ScrollProgress.jsx # Scroll progress indicator
│   ├── CopyEmail.jsx      # Copy-to-clipboard button
│   └── smooth-scroll.jsx  # Lenis smooth scroll wrapper
├── lib/
│   ├── i18n.js            # English UI copy
│   ├── seasons.js         # Season theme definitions
├── public/
│   ├── fonts/             # 3D text typefaces
│   ├── projects/          # Project screenshots
│   └── sounds/            # Keyboard sound effects
├── Dockerfile             # Multi-stage production build
├── next.config.mjs        # Standalone output + security headers
└── package.json
```

## Customisation

### Adding a Project

Projects are defined in `app/page.jsx` in the `projects` array. Each entry supports:

```javascript
{
  num: "05",
  name: "My Project",
  stack: ["Next.js", "JavaScript"],
  desc: "A short project summary.",
  details: "A longer description of the project.",
  url: "https://myproject.com",          // optional — adds "View Site" button
  github: "https://github.com/user/repo", // optional — adds "View Code" button
  media: ["/projects/my-project/1.png"], // optional — carousel screenshots
  highlights: ["nextdotjs", "javascript"], // simple-icons slugs for 3D keyboard
  badge: "In progress",                  // optional status badge
  align: "left",                         // card alignment
  section: "project5",                   // data attribute for scroll nav
}
```

### Changing Themes

Seasonal colour tokens are defined as CSS custom properties in `app/globals.css` under `[data-season="..."]` selectors. Edit or add new seasons there.

### UI copy

User-facing English strings live in `lib/i18n.js` as a flat key-to-string dictionary.

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AdityaAnjne/Aditya-Anjne-Porfolio-)

### Docker / Self-Hosted

The included `Dockerfile` produces a standalone Next.js image. Works with any container platform (Railway, Fly.io, Coolify, etc.):

```bash
docker build -t 3d-portfolio .
docker run -p 3000:3000 3d-portfolio
```

## Performance

- **Standalone output** — No `node_modules` in production; the Docker image is ~100 MB.
- **Lazy loading** — Project screenshots use native lazy loading.
- **Font optimisation** — Uses `next/font` for zero-layout-shift web fonts.
- **Turbopack** — Sub-300ms dev server cold starts.

## Author

**Aditya Anjne**

- [LinkedIn](https://linkedin.com/in/aditya-anjne-43802b304)
- [GitHub](https://github.com/AdityaAnjne)
