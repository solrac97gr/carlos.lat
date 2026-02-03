# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and portfolio built with Next.js 15 and Sanity CMS. Features bilingual content (Spanish/English) with technical articles focused on Go, Rust, and backend development. Uses a hybrid content system supporting both MDX files and Sanity's Portable Text.

**Live Site**: https://carlos.lat

## Essential Commands

### Development
```bash
pnpm install                    # Install dependencies (pnpm enforced)
pnpm run dev                    # Next.js dev server → http://localhost:3000
pnpm run studio                 # Sanity Studio → http://localhost:3333
pnpm run dev:all               # Run both concurrently (recommended)
```

### Build & Deploy
```bash
pnpm run ci                     # Full build: install → build → sitemap → RSS
pnpm run build                  # Next.js build only
node scripts/generate-sanity-manifest.js  # Generate Sanity post manifest
firebase deploy                 # Deploy to Firebase Hosting
pnpm run studio:deploy         # Deploy Sanity Studio
```

### Testing
```bash
pnpm run lint                   # ESLint
lsof -ti:3333 | xargs kill -9  # Kill port 3333 if stuck
rm -rf .next out                # Clean build cache
```

## Architecture

### Separate AI Tooling Landing Pages for Campaign Targeting

The AI Tooling offering has **separate landing pages** for Spanish and English campaigns:

- **`/ai-tooling` (Spanish)**: Default AI tooling landing for Spanish-speaking audience
- **`/en/ai-tooling` (English)**: English AI tooling landing for international campaigns

Both pages:
- Use the same AIToolingLanding component with bilingual translations
- Force their respective language via `useEffect` hook
- Have unique meta tags and SEO optimization for their target audience
- Include hreflang tags for proper SEO

**Why separate pages?**: Better campaign targeting (Google Ads, Facebook Ads), unique URLs for A/B testing, language-specific meta tags, and clearer analytics tracking per language.

### Hybrid Content System

The site uses a **two-source content architecture** that merges MDX files with Sanity CMS:

1. **MDX Files** (`data/es/`, `data/en/`)
   - Legacy blog posts stored as `.mdx` files
   - Frontmatter metadata + MDX content
   - Processed by `next-mdx-remote` with Prism.js syntax highlighting

2. **Sanity CMS** (Portable Text)
   - Modern posts stored in Sanity Studio
   - Rich text with custom blocks (CodeSnippet, BlogLink, FolderStructure, CodeComparison)
   - Rendered via `@portabletext/react`

3. **Unified Loading** (`lib/mdx.js`)
   - `getFileBySlug()`: Checks Sanity first, falls back to MDX
   - `getAllFilesMetadata()`: Merges posts from both sources
   - Language fallback: Tries requested language, then alternative language
   - Returns `frontmatter.isPortableText` flag to determine renderer

### Static Export with Pre-Build Manifest

Since Next.js static export can't fetch data at runtime:

1. **Pre-build** (`prebuild` script): `generate-sanity-manifest.js` fetches all Sanity post slugs → `.sanity-manifest.json`
2. **Build**: `getStaticPaths` in `pages/blog/[slug].js` reads manifest + MDX files to generate all routes
3. **Export**: All pages exported as static HTML to `out/`

**Critical**: Sanity posts won't appear until you rebuild after publishing. The manifest is regenerated on every build.

### Bilingual Content Flow

- **Global Language Context**: `lib/LanguageContext.js` provides site-wide language state
- **Navbar Language Switcher**: Changes global language, triggers post reload
- **Post Resolution**: `pages/blog/[slug].js` pre-loads all language versions, switches client-side
- **Translation Detection**: Shows banner when translation is/isn't available
- **Hreflang Tags**: Automatic SEO tags for available languages

### Sanity Schema

**Post Schema** (`studio/schemaTypes/post.js`):
- `title`, `slug`, `language` (es/en), `author`, `publishedAt`
- `abstract` (max 200 chars), `mainImage`, `tag` (Go/Rust/JS/etc.)
- `body`: Portable Text array with custom blocks
- `status`: draft/published (only published posts are fetched)

**Custom Blocks**:
- `codeSnippet`: Code with language + syntax highlighting
- `blogLink`: Internal blog post references
- `folderStructure`: File tree visualization
- `codeComparison`: Side-by-side code comparison

### Key Files

- `lib/mdx.js`: Hybrid content loading (MDX + Sanity merger)
- `lib/sanity.js`: Sanity client, queries, image URL builder, post normalization
- `lib/consts.js`: Dynamic constants (YEARS_OF_EXPERIENCE from 2018, AGE from 1997)
- `pages/blog/[slug].js`: Dynamic blog post page with bilingual switching
- `components/MDXComponents.js`: Custom MDX components globally available in MDX files
- `components/PortableTextRenderer.js`: Renders Sanity Portable Text with custom components
- `scripts/generate-sanity-manifest.js`: Pre-build Sanity slug fetcher
- `scripts/generate-rss.js`: Post-build RSS feed generator

## Important Patterns

### Adding New Blog Posts

**Via Sanity Studio (Recommended)**:
1. Open http://localhost:3333
2. Create new Post
3. Fill required fields: title, slug, language, publishedAt, abstract, mainImage, tag, body
4. Set status to "Published"
5. Rebuild: `pnpm run ci` + `firebase deploy`

**Via MDX Files**:
1. Create `data/es/slug-name.mdx` or `data/en/slug-name.mdx`
2. Add frontmatter:
```yaml
---
title: "Post Title"
date: "31 de Marzo del 2022"
published: "2022-03-31"
abstract: "Brief description..."
image: "https://..."
tag: "Go"
author: "Carlos García"
---
```
3. Write content using MDX + custom components (CodeSnippet, EditPost, NewsletterSubscribe)
4. Rebuild automatically picks up new files

### Code Snippets

**In Sanity**: Use CodeSnippet block (language dropdown + code field)

**In MDX**: Use JSX component (no triple backticks):
```jsx
<CodeSnippet language="go" code={`
func main() {
    fmt.Println("Hello World")
}
`}/>
```

**IMPORTANT**: For inline code with `<-` or `->` operators, use HTML entities: `` `ch &lt;- value` ``

### Styled Components Pattern

- Component structure: `components/Component/index.js` + `components/Component/index.styles.js`
- Global styles: `styles/globals.css`
- Prism theme: `styles/night-owl.css`
- Theme colors defined in component files

### Analytics Events

- Google Analytics 4 initialized in `_app.js`
- Track events: `logEvent(category, action, label, value)`
- Example: Hero CTA tracks as `logEvent("Button", "Work_Together")`

## Deployment

### Manual Deploy (GitHub Actions)
1. Go to Actions tab
2. Select "Deploy Blog (Manual Trigger)"
3. Run workflow → Select branch → Run
4. Wait 2-3 minutes

### Local Deploy
```bash
pnpm run ci         # Build + sitemap + RSS
firebase deploy     # Push to Firebase
```

### When to Rebuild
- Publishing new Sanity post
- Editing existing Sanity post
- Adding/editing MDX files
- Changing site configuration

**Why**: Static export requires rebuild to update `.sanity-manifest.json` and regenerate HTML.

## Environment Variables

**Sanity Configuration** (hardcoded, no secrets needed):
- Project ID: `s0zyxw39`
- Dataset: `production`
- API Version: `2025-12-09`

All published posts are publicly accessible via Sanity CDN. No authentication required for builds.

## Common Issues

### Build Fails: "Post not found"
- Check `.sanity-manifest.json` was generated
- Ensure post status is "published" in Sanity
- Run `node scripts/generate-sanity-manifest.js` manually

### MDX Compilation Errors
- Check for `<-` in inline code → use `&lt;-`
- Ensure CodeSnippet uses `code={`...`}` format (no triple backticks)
- Verify all JSX components are closed

### Port 3333 Already in Use
```bash
lsof -ti:3333 | xargs kill -9
pnpm run studio
```

### Static Files Not Updating
```bash
rm -rf .next out
pnpm run build
```

## Critical Conventions

- **Package Manager**: pnpm only (enforced via preinstall script)
- **Image Optimization**: Disabled (`unoptimized: true`) for static export
- **Trailing Slash**: Enabled for static hosting compatibility
- **Reading Time**: Calculated from content (200 words/min for Portable Text)
- **Sitemap**: Auto-generated post-build for https://carlos.lat
- **RSS Feeds**: `/rss-es.xml`, `/rss-en.xml`, `/rss.xml` generated post-build
- **Comments**: Giscus integration with GitHub Discussions
