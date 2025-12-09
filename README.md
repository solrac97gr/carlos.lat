# Carlos García - Personal Blog & Portfolio

Personal website and technical blog built with Next.js 15 and Sanity CMS. Features bilingual content (Spanish/English) with focus on Go, Rust, and backend development.

🌐 **Live**: [carlos.lat](https://carlos.lat)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.7 (Pages Router, Static Export)
- **CMS**: Sanity Studio v4 (Hybrid with MDX)
- **Styling**: styled-components + CSS Modules
- **Deployment**: Firebase Hosting
- **Package Manager**: pnpm (enforced)

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Run Next.js + Sanity Studio together (recommended)
pnpm run dev:all

# Or run individually
pnpm run dev        # Next.js only → http://localhost:3000
pnpm run studio     # Sanity Studio → http://localhost:3333
```

### Build & Deploy

```bash
# Full build pipeline
pnpm run ci         # Builds site + generates RSS + exports static files

# Deploy to Firebase
firebase deploy

# Or use GitHub Actions manual trigger
# Go to Actions tab → "Deploy Blog (Manual Trigger)" → Run workflow
```

## 📝 Content Management

### Two Ways to Write Posts

#### 1. **Sanity Studio (Recommended)**
- Visual editor with live preview
- Image management via Sanity CDN
- Structured content with validation
- Access: http://localhost:3333

**Create a post:**
1. Open Sanity Studio
2. Click "Post" → "Create new Post"
3. Fill in title, abstract, date, image, tag
4. Write content using CodeSnippet components (see format below)
5. Set status to "Published"
6. Rebuild site: `pnpm run ci` + `firebase deploy`

#### 2. **MDX Files (Still Supported)**
- Files in `data/es/*.mdx` and `data/en/*.mdx`
- Frontmatter + MDX content
- Direct file editing

### CodeSnippet Format for Sanity

**Use this format (NOT triple backticks):**

```jsx
<CodeSnippet language="go" code={`
func main() {
    fmt.Println("Hello World")
}
`}/>
```

**For inline code with `<-` or `->` operators:**
- Use HTML entities: `` `ch &lt;- value` `` instead of `` `ch <- value` ``

### Required Content Structure

All posts (MDX and Sanity) must include:

```markdown
# Post Title 🚀

<small>Date</small>
<EditPost path="post-slug" />

<img width="100%" alt="Description" src="image-url" style={{ borderRadius: "8px" }} />

Your introduction paragraph...

## Section 1
...content...

<NewsletterSubscribe />
```

## 📁 Project Structure

```
.
├── pages/              # Next.js pages
│   ├── index.js       # Homepage
│   ├── blog/          # Blog listing & posts
│   └── api/           # API routes
├── components/        # React components
├── data/              # MDX blog posts
│   ├── es/           # Spanish posts
│   └── en/           # English posts
├── lib/              # Utilities
│   ├── mdx.js        # Content loading (hybrid MDX + Sanity)
│   ├── sanity.js     # Sanity client & helpers
│   └── consts.js     # Dynamic constants
├── studio/           # Sanity Studio (separate workspace)
│   ├── schemaTypes/  # Content schemas
│   └── sanity.config.js
├── scripts/          # Build scripts
│   ├── generate-sanity-manifest.js  # Pre-build Sanity slugs
│   └── generate-rss.js              # RSS feed generation
├── out/              # Static export output
└── .github/workflows/ # CI/CD pipelines
```

## 🔧 Key Features

### Static Export with Sanity Integration

Since Next.js static export can't fetch data at runtime, we use a **manifest-based approach**:

1. **Pre-build**: `scripts/generate-sanity-manifest.js` fetches Sanity post slugs → `.sanity-manifest.json`
2. **Build**: `getStaticPaths` reads manifest to generate all pages at build time
3. **Export**: All pages (MDX + Sanity) exported as static HTML

### Bilingual Support

- Content in Spanish (`es`) and English (`en`)
- Language switcher in navbar
- Automatic translation detection
- Fallback to Spanish if translation unavailable

### RSS Feeds

Auto-generated during build:
- `/rss-es.xml` - Spanish posts
- `/rss-en.xml` - English posts  
- `/rss.xml` - All posts

### Analytics & Tracking

- Google Analytics 4 (initialized in `_app.js`)
- Event tracking for button clicks
- Reading time calculation

## 🌐 Deployment

### Automatic (GitHub Actions)

**Manual Trigger:**
1. Go to [Actions tab](https://github.com/solrac97gr/carlos.lat/actions)
2. Select "Deploy Blog (Manual Trigger)"
3. Click "Run workflow" → Select branch → Run
4. Wait 2-3 minutes for deployment

### Manual (Local)

```bash
# Build everything
pnpm run ci

# Deploy to Firebase
firebase deploy

# Or deploy Sanity Studio
pnpm run studio:deploy
```

### When to Rebuild

You need to rebuild and redeploy when:
- ✅ Publishing new Sanity post
- ✅ Editing existing Sanity post
- ✅ Adding/editing MDX files
- ✅ Changing site configuration

## 🔐 Environment Variables

### Required for Build

**Sanity (public - safe to commit):**
- Project ID: `s0zyxw39` (hardcoded in code)
- Dataset: `production` (hardcoded in code)

**No secrets needed!** Published posts are publicly accessible via Sanity CDN.

### Optional (for draft posts)

Create `studio/.env.local` if you need preview mode:
```env
SANITY_STUDIO_API_PROJECT_ID=s0zyxw39
SANITY_STUDIO_API_DATASET=production
```

## 🐛 Troubleshooting

### Port 3333 Already in Use
```bash
lsof -ti:3333 | xargs kill -9
pnpm run studio
```

### Build Fails with "Post not found"
- Check `.sanity-manifest.json` was generated
- Ensure post status is "published" in Sanity
- Run `node scripts/generate-sanity-manifest.js` manually

### MDX Compilation Errors
- Check for `<-` in inline code → use `&lt;-` instead
- Ensure CodeSnippet uses `code={`...`}` format (no triple backticks)
- Verify all JSX components are properly closed

### Static Files Not Updating
```bash
# Clean build cache
rm -rf .next out
pnpm run build
```

## 📚 Documentation Files

Core documentation maintained in this README. Additional references:
- `.github/copilot-instructions.md` - AI assistant context
- `studio/README.md` - Sanity Studio info

Archived docs (can be deleted after migration):
- `SANITY_*.md` - Setup guides (info now in this README)
- `BLOG_WORKFLOW_IMPROVEMENTS.md` - Future enhancements
- `go-channels-internal-template.md` - Sample post template

## 🤝 Contributing

This is a personal project, but feel free to:
- Report issues
- Suggest improvements
- Use as reference for your own blog

## 📝 License

Personal project - All rights reserved for original content.
Code examples in blog posts may be freely used.

---

**Built with ❤️ by [Carlos García](https://carlos.lat)**
