# César Adrián Galván Medrano — Portfolio Website

A personal portfolio website built from a professional CV, showcasing experience as a SAFe-certified Scrum Master, Associate Project Manager, and Software Engineer.

## ✨ Features

- **Responsive design** — works on desktop, tablet, and mobile
- **Dark / Light theme toggle** — persisted in `localStorage`; toggles `data-theme="dark"` on `<html>` via CSS custom properties
- **EN / ES language toggle** — reads `document.documentElement.lang` on init; all visible text is driven by a `data-i18n` attribute system with a full translation dictionary in `main.js`
- **Smooth scroll navigation** — fixed navbar with anchor links to each section
- **Scroll-triggered animations** — cards and items fade in via `IntersectionObserver`
- **Services section** — Single-Page Application development and Design Improvement offerings with a contact CTA
- **Paper & ink aesthetic** — warm editorial palette with serif typography

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Bootstrap 5.3](https://getbootstrap.com/) | Grid, layout utilities, responsive breakpoints |
| [Font Awesome 6.5](https://fontawesome.com/) | Social / brand icons (LinkedIn, GitHub, envelope, certificate…) |
| [Lucide Icons](https://lucide.dev/) | UI icons (mail, map-pin, layers, palette, globe, moon/sun…) |
| [Google Fonts](https://fonts.google.com/) | DM Serif Display · DM Mono · Outfit |
| Vanilla JS (`main.js`) | Theme toggle, language toggle (i18n), Lucide init, scroll animations |

## 📁 File Structure

```
portfolio/
├── index.html   # Markup — all text nodes carry data-i18n attributes
├── styles.css   # All styles + CSS variables for light & dark themes
├── main.js      # i18n dictionary, theme/lang toggle logic, scroll animations
└── README.md    # This file
```

## 🚀 Getting Started

No build step required. Open `index.html` in any modern browser — because the files reference each other with relative paths, it's best served over a local server to avoid CORS issues with Google Fonts:

```bash
# Option 1 — npx serve
npx serve .

# Option 2 — Python
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## 🌗 Theme Toggle

The theme button in the navbar toggles between `light` (default) and `dark` mode.

- In `styles.css`, light-mode tokens live on `:root` and dark-mode tokens override them under `html[data-theme="dark"]`.
- `main.js` calls `document.documentElement.setAttribute('data-theme', 'dark')` and persists the choice with `localStorage.setItem('theme', ...)`.

## 🌐 Language Toggle

The language button switches between Spanish (`es`, default) and English (`en`).

- The active language is read from `document.documentElement.lang` on page load.
- Every translatable text node has a `data-i18n="key"` attribute. `applyLang()` in `main.js` iterates all of them and swaps text from the dictionary object `i18n[lang]`.
- The choice is saved to `localStorage.setItem('lang', ...)`.

## 📐 Sections

1. **Hero** — Name, title, summary, CTAs, quick-stats card
2. **Experience** — Vertical timeline with 6 roles
3. **Skills** — Six-card grid (Agile/PM, Frontend, Testing, AI/LLM, Backend, Collaboration)
4. **Services** — SPA development & Design Improvement service cards + contact CTA
5. **Education** — Degrees and language programs
6. **Certifications** — SAFe 6 SM and CAPM
7. **Languages** — Dot-level visual indicators
8. **Contact** — Dark section with email, phone, location, social links

## 🎨 Design Tokens (CSS variables)

```css
/* Light */            /* Dark override (html[data-theme="dark"]) */
--ink:    #0e0e0e      --ink:    #e8e2d9
--paper:  #f5f0e8      --paper:  #141210
--accent: #c84b31      --accent: #e05c3a
--card-bg:#faf7f2      --card-bg:#1c1916
--border: #ddd8ce      --border: #2e2b28
```

## 📬 Contact

| Field | Value |
|-------|-------|
| Email | cesar.galvanmedrano@gmail.com |
| Phone | +52 55 5509 4243 |
| Location | Mexico City, Mexico |
| LinkedIn | [linkedin.com/in/cesargalvanmedrano](https://www.linkedin.com/in/cesargalvanmedrano/) |

## 📄 License

Personal portfolio — all rights reserved by César Adrián Galván Medrano.
