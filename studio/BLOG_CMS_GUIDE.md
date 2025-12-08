# Carlos.lat - Sanity Studio

This is the Sanity Studio for managing blog posts for carlos.lat.

## 🚀 Getting Started

### 1. Start the Studio

```bash
cd studio
pnpm install
pnpm dev
```

The studio will be available at: http://localhost:3333

### 2. Login

On first run, you'll be prompted to login with your Sanity account.

### 3. Create Your First Blog Post

1. Click "Blog Post" in the sidebar
2. Click "Create" button
3. Fill in the fields:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (you can edit)
   - **Language**: Spanish (es) or English (en)
   - **Published at**: Publication date
   - **Abstract**: Short description (max 200 chars)
   - **Main image**: Upload or select image
   - **Tag**: Select primary topic
   - **Body (MDX)**: Write your post in MDX format
   - **Status**: Draft or Published

4. Click "Publish" when ready!

## 📝 Writing MDX in Sanity

All your custom components work exactly as before! Write in the "Body (MDX)" field:

```mdx
# Your Blog Post Title

<small>9 de Diciembre del 2025</small>
<EditPost path="your-slug" />

<img
  width="100%"
  alt="description"
  src="https://your-image-url.com/image.jpg"
  style={{ borderRadius: "8px" }}
/>

## Introduction

Your introduction here...

<CodeSnippet lang="go">
\`\`\`go
package main

func main() {
    fmt.Println("Hello from Sanity!")
}
\`\`\`
</CodeSnippet>

## Main Content

<BlogLink url="https://example.com" content="Check this out"/>

<FolderStructure
  repo="https://github.com/user/repo"
  tree={[
    {
      type: "folder",
      name: "src",
      content: []
    }
  ]}
/>

---

<NewsletterSubscribe />
```

## 🔄 How It Works

### Dual System (MDX + Sanity)

Your blog now supports **both** content sources:

1. **Existing MDX files** in `data/es/` and `data/en/` continue to work
2. **New Sanity posts** are fetched from the CMS
3. Both are merged and displayed together seamlessly

### Content Priority

When fetching a post by slug:
1. First checks Sanity CMS
2. Falls back to MDX files if not found
3. Displays regardless of source

### Blog Index Page

The blog index (`/blog`) automatically combines:
- All published MDX posts
- All published Sanity posts
- Sorted by publication date

## 🎨 Custom Components

Your existing MDX components are preserved:

- `<CodeSnippet>` - Syntax-highlighted code blocks
- `<FolderStructure>` - Visual folder tree
- `<BlogLink>` - Styled external links
- `<EditPost>` - Edit suggestion link
- `<PromoBanner>` - Promotional banners
- `<NewsletterSubscribe>` - Newsletter signup
- And all others!

## 📊 Post Status

- **Draft**: Visible only in Sanity, not on the live site
- **Published**: Visible on carlos.lat immediately after rebuild

## 🌍 Bilingual Support

Create separate posts for each language:
1. Create Spanish version (language: es, slug: "mi-post")
2. Create English version (language: en, slug: "mi-post")

Use the same slug for both languages to enable language switching.

## 🔧 Schema Customization

Edit `studio/schemaTypes/post.js` to:
- Add new fields
- Modify validation rules
- Add more tag options
- Customize preview display

## 📦 Deployment

The studio is separate from your main site:

### Option 1: Deploy to Sanity Cloud (Recommended)
```bash
cd studio
pnpm exec sanity deploy
```

Your studio will be available at: https://carlos-lat.sanity.studio

### Option 2: Self-host
Include the studio in your main deployment.

## 🔗 Integration

The Next.js site connects to Sanity via:
- `lib/sanity.js` - Client configuration and queries
- `lib/mdx.js` - Hybrid content fetching
- Environment: No secrets needed (public dataset)

## 🎯 Workflow Tips

### Starting a New Post

1. **Quick Draft**: 
   - Create post with just title, abstract, and status: draft
   - Write content over time
   - Publish when ready

2. **Image Management**:
   - Drag & drop images directly into "Main image" field
   - Sanity handles hosting and optimization
   - Copy public URL for use in body

3. **Preview Before Publishing**:
   - Keep status as "draft"
   - Build locally: `pnpm dev` in main project
   - View at http://localhost:3000/blog/your-slug
   - Change to "published" when ready

### Migrating Existing Posts (Optional)

To move an MDX post to Sanity:

1. Open the MDX file
2. Copy frontmatter fields → Sanity fields
3. Copy body content → Body (MDX) field
4. Publish in Sanity
5. (Optional) Delete MDX file

No rush - old MDX posts continue working indefinitely!

## 🐛 Troubleshooting

### Studio won't start
```bash
cd studio
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Posts not appearing on site
- Check status is "Published"
- Rebuild Next.js: `pnpm run build` in root
- Check Sanity query in `lib/sanity.js`

### Images not showing
- Ensure image is uploaded in Sanity
- Check image URL in console
- Verify `lib/sanity.js` urlFor() function

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)

## 🎉 Benefits Over Pure MDX

- ✅ **No Git commits** for content updates
- ✅ **Draft system** built-in
- ✅ **Image management** with drag & drop
- ✅ **Mobile writing** via Sanity mobile app
- ✅ **Auto-save** every few seconds
- ✅ **Revision history** for all changes
- ✅ **Collaboration** ready (invite team members)
- ✅ **Scheduled publishing** (future feature)

---

**Ready to write?** Run `pnpm dev` and start creating! 🚀
