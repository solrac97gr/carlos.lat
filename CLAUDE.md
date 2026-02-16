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

### Landing Pages Architecture

All landing pages (without navbar) are organized under the **`/landing/`** prefix:

**Current Landing Pages:**
- **`/landing/ai-tooling` (Spanish)**: AI tooling landing for Spanish-speaking audience
- **`/landing/en/ai-tooling` (English)**: AI tooling landing for international campaigns

**Key Features:**
- Any page under `/landing/*` automatically hides the navbar (configured in `_app.js`)
- Each language version forces its language via `useEffect` hook
- Language switcher component is hidden (via `hideLanguageSwitcher` prop)
- Unique meta tags and SEO optimization per language
- Hreflang tags for proper SEO

**Why this approach?**:
- Clean, scalable pattern for adding new landing pages
- Better campaign targeting (Google Ads, Facebook Ads)
- Unique URLs for A/B testing
- Language-specific meta tags
- Clearer analytics tracking per language
- No navbar clutter for conversion-focused pages

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

## MDX Components Reference

All components listed below are globally available in MDX files (registered in `components/MDXComponents.js`) and do not require imports. Components marked with (Portable Text) are also available as Sanity custom blocks via `components/PortableTextRenderer.js`.

### CodeSnippet (Portable Text)

**File**: `components/CodeSnipet/index.js`

Renders syntax-highlighted code blocks using Prism.js.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | string | required | The code to display |
| `language` | string | required | Language for highlighting: `go`, `rust`, `bash`, `docker`, `json`, `yaml`, `typescript`, `javascript`, `css`, `toml`, `makefile` |
| `route` | string | `"~"` | File path shown in the header bar |
| `noHeaders` | boolean | `false` | Hides the header (file path + copy button) |
| `output` | string | `""` | Terminal output displayed below the code block |

```jsx
<CodeSnippet language="go" route="main.go" code={`
package main

func main() {
    fmt.Println("Hello World")
}
`}/>

<CodeSnippet language="bash" code={`go run main.go`} output={`Hello World`}/>
```

**Note**: Use `code={backtick...backtick}` syntax, never triple-backtick markdown fences. For `<-` operators in inline code, use `&lt;-`.

### CodeComparison (Portable Text)

**File**: `components/CodeComparison/index.js`

Side-by-side code comparison with independent syntax highlighting per panel.

| Prop | Type | Description |
|------|------|-------------|
| `left` | string | Code for the left panel |
| `right` | string | Code for the right panel |
| `languageL` | string | Language for the left panel |
| `languageR` | string | Language for the right panel |

```jsx
<CodeComparison
  languageL="go"
  languageR="rust"
  left={`func main() {
    fmt.Println("Hello")
}`}
  right={`fn main() {
    println!("Hello");
}`}
/>
```

### MermaidDiagram

**File**: `components/MermaidDiagram/index.js`

Interactive Mermaid diagrams with zoom, pan, and export capabilities.

| Prop | Type | Description |
|------|------|-------------|
| `code` | string | Mermaid diagram definition (flowchart, sequence, class, state, etc.) |

**Features**: Zoom in/out (50%-300%), drag to pan, download as SVG/PNG, copy code, mobile touch support with auto-hiding controls.

```jsx
<MermaidDiagram code={`
flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action]
    B -->|No| D[End]
`}/>
```

### FolderStructure (Portable Text)

**File**: `components/FolderStructure/index.js`

Interactive collapsible file tree with language-specific icons and a copy/fork button.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tree` | array | required | Nested structure of `{ type: "file"\|"folder", name: string, content?: array }` |
| `repo` | string | `""` | GitHub repo URL. If set, shows a "Fork" button instead of "Copy" |

**Supported file icons**: `.go`, `.js`, `.html`, `.css`, `.json`, `.yaml`, `.rs`, `.csv`, `.md`, `.sh`, `dockerfile`, `.gitignore`

```jsx
<FolderStructure
  repo="https://github.com/solrac97gr/go-project"
  tree={[
    { type: "folder", name: "cmd", content: [
      { type: "file", name: "main.go" }
    ]},
    { type: "folder", name: "internal", content: [
      { type: "file", name: "handler.go" },
      { type: "file", name: "service.go" }
    ]},
    { type: "file", name: "go.mod" },
    { type: "file", name: "Dockerfile" }
  ]}
/>
```

The "Copy" button generates shell commands (`mkdir`/`touch`) to recreate the structure.

### BlogLink (Portable Text)

**File**: `components/BlogLink/index.js`

Styled external/internal link with analytics tracking.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | string | required | URL to link to |
| `content` | string | URL value | Display text for the link |

```jsx
<BlogLink url="https://go.dev/doc/" content="Go documentation" />
```

Opens in a new tab. Tracks click events via Google Analytics.

### EditPost

**File**: `components/EditPost/index.js`

Link to edit the current MDX post on GitHub. Displays "¿Ves algún error? Corregir artículo".

| Prop | Type | Description |
|------|------|-------------|
| `path` | string | Post slug (without `.mdx` extension). Maps to `data/{path}.mdx` on GitHub |

```jsx
<EditPost path="es/mi-post" />
```

### NewsletterSubscribe

**File**: `components/NewsletterSubscribe/index.js`

Mailchimp newsletter subscription form. No props — self-contained. Displays a Spanish-language form ("Conviértete en un Go Ninja") with email validation, status messages, and analytics tracking.

```jsx
<NewsletterSubscribe />
```

### SocialShareButtons

**File**: `components/SocialShareButtons/index.js`

Social media sharing buttons (Facebook, Twitter, Telegram, WhatsApp, LinkedIn, Email).

| Prop | Type | Description |
|------|------|-------------|
| `post` | object | `{ slug, title, abstract, tag }` — post metadata for share URLs and text |

```jsx
<SocialShareButtons post={{
  slug: "my-post-slug",
  title: "Post Title",
  abstract: "Brief description",
  tag: "Go,Tutorial"
}} />
```

### Podcast

**File**: `components/Podcast/index.js`

Embedded Spotify podcast player.

| Prop | Type | Description |
|------|------|-------------|
| `episode` | string | Spotify episode ID |

```jsx
<Podcast episode="4rOoJ6Egrf8K2IrywzwOMk" />
```

### Gist

**File**: `components/Gist/index.js`

Embeds a GitHub Gist via the `next/script` component.

| Prop | Type | Description |
|------|------|-------------|
| `url` | string | GitHub Gist embed URL (`.js` script URL) |

```jsx
<Gist url="https://gist.github.com/user/gistid.js" />
```

### PromoBanner

**File**: `components/PromoBanner/index.js`

Placeholder component. Currently returns `null` (disabled). No props.

### Table Overrides

**File**: `components/Table/index.js`

Styled replacements for HTML table elements. These override default markdown table rendering — no manual usage needed. Components: `Table`, `Thead`, `Tbody`, `Th`, `Td`, `Tr`.

### Element Overrides (MDXComponents.js)

These override default HTML elements in all MDX content:

- **`img`**: Wrapped with `next/image`, adds `border-radius: 5px`
- **`p`**: Adds `text-align: justify` for readable paragraph alignment

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
