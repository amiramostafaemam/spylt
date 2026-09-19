<div align="center">
  <img src="https://raw.githubusercontent.com/amiramostafaemam/spylt/main/public/images/nav-logo.svg" alt="SPYLT Logo" width="120"/>
  
  # SPYLT
  
  **Interactive Protein Drink Landing Page**
  
  [![Live Demo](https://img.shields.io/badge/🌐_LIVE_DEMO-Visit_Site-success?style=for-the-badge)](https://spylt-theta.vercel.app/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
  [![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
  
</div>

---

## 🎯 About

Interactive landing page for SPYLT protein drinks — advanced GSAP scroll animations, a custom magnetic cursor, and a fully responsive, accessible, and performance-tuned build. Built as a portfolio piece to showcase animation engineering and production-quality front-end craft, not just a static mockup.

**Tech Stack:** React 19 • Vite 7 • GSAP 3 (ScrollTrigger, ScrollSmoother, SplitText) • Tailwind CSS 4 • Vitest

---

## ✨ Key Features

-  Advanced scroll-based animations with GSAP ScrollTrigger + ScrollSmoother
-  Custom magnetic cursor and a magnetic hero CTA (desktop, hover-capable pointers only)
-  Interactive parallax effects on hover/touch, with real tap support on touch devices
-  Working newsletter form (client-side validation) and a functional FAQ accordion
-  Fully responsive (mobile-first design) and keyboard/screen-reader accessible
-  Preloader, lazy-loaded media, and WebP images with automatic PNG fallback
-  Horizontal/vertical adaptive scrolling per breakpoint

---

## Sections

### Hero Section
<img src="./public/images/screenshots/heroSection.PNG" width="100%"/>

**Features:** Video background (desktop) • Character-by-character text reveal • Scroll rotation effect

---

### Message Section
<img src="./public/images/screenshots/messageSection.PNG" width="100%"/>

**Features:** Progressive text color change • Word-by-word animation • Clip-path expanding effect

---

### Flavor Showcase
<img src="./public/images/screenshots/flavorSection1.PNG" width="100%"/>
<img src="./public/images/screenshots/flavorSection2.PNG" width="100%"/>

**Features:** 6 interactive flavor cards • Parallax hover effects • Horizontal scroll (desktop) • Touch-optimized

---

### Nutrition & Benefits
<img src="./public/images/screenshots/nutritionSection.PNG" width="100%"/>
<img src="./public/images/screenshots/benefitSection1.PNG" width="100%"/>

**Features:** Animated nutrition facts • Sequential clip-path reveals • Custom colored badges

---

### Video Pin Section
<img src="./public/images/screenshots/benefitSection2.PNG" width="100%"/>

**Features:** Scroll-pinned video • Circular clip-path reveal • Spinning text overlay

---

### Testimonials
<img src="./public/images/screenshots/testimonialsSection.PNG" width="100%"/>

**Features:** 7 stacked video cards • Hover-to-play on desktop, tap-to-play on touch • 3D rotation effects • Poster frames + `preload="none"` so idle cards cost nothing until interacted with

---

### FAQ

**Features:** Accessible single-open accordion (`aria-expanded`, `aria-controls`) • Animated with a pure-CSS `grid-template-rows` reveal • Scroll-in entrance via GSAP ScrollTrigger

---

### Footer
<img src="./public/images/screenshots/footer1.PNG" width="100%"/>
<img src="./public/images/screenshots/footer2.PNG" width="100%"/>

**Features:** Animated title reveal • Working newsletter signup with inline validation feedback • Social links

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/amiramostafaemam/spylt.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint
npm run lint
```

---

## Responsive Design

| Device | Width | Behavior |
|--------|-------|----------|
| 📱 Mobile | < 640px | Vertical layout, simplified animations |
| 📱 Tablet | 768px - 1023px | Hybrid layout, moderate effects |
| 💻 Desktop | 1024px - 1279px | Full features, horizontal scroll |
| 🖥️ Large | ≥ 1280px | Maximum effects, all parallax |

---

## Technologies

**Frontend**
- React 19
- Vite 7
- Tailwind CSS 4

**Animation**
- GSAP 3.13
- ScrollTrigger
- ScrollSmoother
- SplitText

**Utils**
- React Responsive

**Testing & Quality**
- Vitest + React Testing Library
- ESLint (React Hooks rules enabled)
- GitHub Actions CI (lint → test → build on every push/PR)

---

## ✅ Testing & CI

This project ships with a real test suite, not just a build check:

```bash
npm run test   # Vitest + React Testing Library
```

Every push and pull request runs `lint → test → build` via GitHub Actions
(see [`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

---

## 📂 Project Structure

```
spylt/
├── .github/workflows/    # CI (lint → test → build)
├── public/
│   ├── images/           # Assets, WebP + PNG fallback pairs, screenshots
│   ├── videos/           # Video files
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # Reusable components (+ *.test.jsx)
│   │   ├── Preloader.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── BackToTop.jsx
│   │   └── ...
│   ├── sections/         # Page sections (+ *.test.jsx)
│   ├── constants/        # Data & configs (+ index.test.js)
│   ├── test/setup.js     # Vitest + Testing Library setup
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## ⚡ Performance

- Conditional rendering per device (no desktop video shipped to mobile, and vice versa)
- `preload="none"` + poster frames on the 7 testimonial videos — nothing downloads until a card is actually interacted with
- Heavy PNGs converted to WebP (largest asset went from 1.17MB to 96KB) with automatic `<picture>` fallback
- `loading="lazy"` on below-the-fold images
- Hardware-accelerated, GPU-friendly GSAP timelines (transform/opacity/clip-path only)

---

## ♿ Accessibility

- Every interactive element is a real `<button>`/`<a>` (keyboard-focusable, screen-reader friendly) — no click handlers on bare `<div>`s
- FAQ accordion follows the WAI-ARIA disclosure pattern (`aria-expanded`, `aria-controls`, `role="region"`)
- Touch devices get tap-to-play on testimonial cards instead of a hover-only interaction they could never trigger
- Meaningful `alt` text on product imagery, empty `alt=""` reserved for purely decorative art

---

## 🌐 Browser Support

Chrome • Firefox • Safari 12+ • Edge • Mobile Safari • Chrome Mobile

---

## Author

**Amira Mostafa**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/amiramostafaemam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amira-mostafa-bb160a323/)


---

<div align="center">
  
**Built with ❤️ using React, GSAP, and Vite**

[⬆ Back to Top](#spylt)

</div>
