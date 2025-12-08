# Copilot Instructions - carlos.lat

## Project Overview

This is Carlos García's personal portfolio and blog website with a **dual architecture**:
- **Main site** (root): Next.js 12 blog with MDX content (Spanish/Go-focused technical articles)
- **v2 site** (`v2/`): Vanilla JS consulting landing page with bilingual support

Both sites coexist in the same repo but are architecturally independent.

## Tech Stack

### Main Blog Site
- **Framework**: Next.js 12 (Pages Router) with static export
- **Content**: MDX files in `data/` with frontmatter metadata
- **Styling**: styled-components + CSS modules
- **Deployment**: Firebase Hosting (static export to `out/`)
- **Package Manager**: pnpm (enforced via preinstall script)

### V2 Consulting Site  
- **Stack**: Vanilla HTML/CSS/JS with Tailwind CSS (CDN)
- **3D Graphics**: Three.js (r128) for hero animations
- **Animations**: Anime.js for scroll effects
- **i18n**: Custom translation system with `data-translate` attributes

## Critical Patterns

### MDX Blog Content
- All posts live in `data/*.mdx` with frontmatter (title, date, published, abstract, image, tag, author)
- Custom MDX components defined in `components/MDXComponents.js` (CodeSnippet, PromoBanner, EditPost, etc.)
- Syntax highlighting via Prism.js with theme in `styles/night-owl.css`
- Blog posts use dynamic routes: `pages/blog/[slug].js` with `getStaticPaths` + `getStaticProps`

**Example MDX frontmatter:**
```yaml
---
title: "¿Cómo acceder los campos dentro de map[string]interface{} 🐹?"
date: "31 de Marzo del 2022"
published: "2022-03-31"
abstract: "Convertiremos el campo..."
image: "https://miro.medium.com/max/1400/1*..."
tag: "Go"
author: "Carlos García"
---
```

### Static Site Generation
- All pages are statically exported: `pnpm run build` → `next build` + `next-sitemap` + `next export`
- Images use Akamai loader (configured in `next.config.js`) with Firebase Storage domains
- `trailingSlash: true` in config for static hosting compatibility

### Styled Components Architecture
- Component structure: `Component/index.js` + `Component/index.styles.js`
- Styles use styled-components with theme colors in component files
- Global styles in `styles/globals.css`, custom Prism theme in `styles/night-owl.css`

### Analytics & Tracking
- Google Analytics 4 initialized in `_app.js` via `lib/analytics.js`
- Event tracking with `logEvent(category, action, label, value)` for button clicks
- Example: Hero CTA tracks as `logEvent("Button", "Work_Together")`

### Constants Management
- Dynamic constants in `lib/consts.js` (YEARS_OF_EXPERIENCE calculated from 2018, AGE from 1997)
- Phone number, URLs, and personal info centralized here

## Development Workflows

### Local Development
```bash
pnpm install        # Install dependencies (pnpm enforced)
pnpm dev            # Start dev server on :3000
```

### Build & Deploy
```bash
pnpm run ci         # Full CI pipeline: install → build → sitemap → export
pnpm run build      # Next.js build
pnpm run postbuild  # Generate sitemap
pnpm run export     # Export to out/
```

### Testing V2 Site
```bash
cd v2
python3 -m http.server 8000  # Serve static files locally
# or just open index.html in browser
```

## File Organization

- `data/` - MDX blog posts (Spanish, mostly Go/backend topics)
- `pages/` - Next.js pages (index, blog, cursos, sobre-mi, mi-mapa)
- `components/` - React components (each has folder with index.js + index.styles.js)
- `lib/` - Utilities (mdx.js for content loading, helpers.js, analytics.js, consts.js)
- `public/` - Static assets
- `v2/` - Separate consulting site (index.html, script.js, styles.css)
- `.github/` - Repository config (this file)

## Key Conventions

1. **MDX Components**: Import custom components in MDX without imports - they're globally available via `MDXComponents.js`
2. **Blog Metadata**: Always include all frontmatter fields when creating posts
3. **Translation Keys**: V2 site uses nested keys like `nav.services`, `hero.title` in `translations` object in `v2/script.js`
4. **WhatsApp Integration**: Contact forms send to WhatsApp number from `PHONE_NUMBER` constant (34607376180)
5. **Image Handling**: Use Next.js `Image` component with Akamai loader for main site; placeholder images via placehold.co in v2
6. **Prism Languages**: Load language support in CodeSnippet component via `prismjs/components/prism-<lang>.js`

## Integration Points

- **Firebase Hosting**: `firebase.json` configures hosting with `out/` as public dir
- **Sitemap**: `next-sitemap.config.js` generates sitemap for https://carlos.lat
- **Giscus Comments**: Blog posts include Giscus script for GitHub Discussions integration
- **Buy Me a Coffee**: Widget injected in blog post pages via script tag

## Don't Do

- Don't use npm or yarn (pnpm is enforced)
- Don't modify frontmatter structure without updating `lib/mdx.js` parsing logic
- Don't add co-author attribution in git commits (per v2/CLAUDE.md)
- Don't assume v2 site has build step - it's pure static files

## Common Tasks

**Add new blog post:**
1. Create `data/new-post-slug.mdx` with frontmatter
2. Write MDX content using custom components
3. File will auto-appear in blog index (sorted by `published` date)

**Update personal info:**
- Edit `lib/consts.js` for years of experience, age, current location, etc.

**Modify V2 content:**
- Update `translations` object in `v2/script.js` for both English and Spanish
- Add service: update HTML in index.html + translations + modal content
