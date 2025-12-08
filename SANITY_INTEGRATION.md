# 🎨 Sanity CMS Integration - Complete Setup

## 🎯 What Changed

Your blog now supports **dual content sources**:

### Before (MDX Only)
```
data/
  es/
    my-post.mdx
  en/
    my-post.mdx
```

### After (MDX + Sanity)
```
data/
  es/
    my-post.mdx         ← Still works!
  en/
    my-post.mdx         ← Still works!
    
+ Sanity CMS           ← New! Write here too
```

## 🚀 Quick Start

### 1. Start the CMS (Sanity Studio)

```bash
# From project root
pnpm run studio
```

Studio opens at: http://localhost:3333

### 2. Start Next.js Dev Server

```bash
# In another terminal
pnpm dev
```

Site runs at: http://localhost:3000

### 3. Create Your First Sanity Post

1. Open http://localhost:3333
2. Click "Blog Post" → "Create"
3. Fill in the form
4. Write MDX in "Body" field (same syntax as before!)
5. Click "Publish"
6. View at http://localhost:3000/blog/your-slug

## 📝 Writing Experience Comparison

### Old Way (MDX Files)
```bash
1. Create data/es/new-post.mdx
2. Write frontmatter manually
3. Write content
4. Save file
5. Git add, commit, push
6. Wait for deployment
```

### New Way (Sanity CMS)
```bash
1. Click "Create" in Sanity
2. Fill form (frontmatter is UI fields)
3. Write content in text area
4. Click "Publish"
5. Rebuild site (or auto-deploy)
```

## 🎨 Your Custom Components Still Work!

All MDX components work identically in Sanity:

```mdx
<CodeSnippet lang="go">
```go
package main

func main() {
    fmt.Println("Works perfectly!")
}
```
</CodeSnippet>

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

<BlogLink url="https://example.com" content="External link"/>

<EditPost path="your-slug" />

<NewsletterSubscribe />
```

## 🔧 Technical Architecture

### Content Flow

```
┌─────────────────┐
│  Sanity Studio  │  ← Write posts here
│  localhost:3333 │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Sanity Cloud   │  ← Content stored here
│  (Database)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   lib/sanity.js │  ← Fetch posts
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   lib/mdx.js    │  ← Merge with MDX files
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  pages/blog/*   │  ← Render posts
└─────────────────┘
```

### File Changes

#### New Files
- `lib/sanity.js` - Sanity client & queries
- `studio/` - Complete Sanity Studio
- `studio/schemaTypes/post.js` - Blog post schema
- `studio/BLOG_CMS_GUIDE.md` - Detailed CMS guide

#### Modified Files
- `lib/mdx.js` - Now async, fetches from both sources
- `package.json` - Added `studio` and `studio:deploy` scripts

## 🌍 Bilingual Support

### Option 1: Create Both Versions in Sanity

```javascript
// Spanish post
Language: es
Slug: mi-post-increible

// English post
Language: en
Slug: mi-post-increible  // Same slug!
```

### Option 2: Mix Sources

```javascript
// Spanish in MDX (existing)
data/es/mi-post-increible.mdx

// English in Sanity (new)
Language: en
Slug: mi-post-increible
```

Both approaches work! The system merges them seamlessly.

## 📊 Content Priority

When fetching a post by slug:

1. ✅ Check Sanity first
2. ⚠️ If not found, check MDX files
3. 🚫 If still not found, show 404

## 🎯 When to Use What

### Use Sanity CMS For:
- ✅ New blog posts (easier workflow)
- ✅ Quick edits (no git needed)
- ✅ Draft posts (built-in status)
- ✅ Mobile writing (Sanity mobile app)
- ✅ Image management (drag & drop)

### Keep MDX Files For:
- ✅ Existing 78 published posts (no migration needed)
- ✅ Posts with complex custom components
- ✅ Version control preference
- ✅ Local-first workflow

## 🔄 Migration Strategy (Optional)

You don't need to migrate existing posts! But if you want to:

### Gradual Migration
```bash
# Week 1: Test with new posts only
Write 2-3 new posts in Sanity

# Week 2: Migrate popular posts
Move top 10 most-viewed posts to Sanity

# Week 3+: Migrate as needed
Or just leave old posts in MDX forever
```

### Quick Migration Script (Future)
```javascript
// scripts/migrate-to-sanity.js (not yet created)
// Automate bulk migration if desired
```

## 🚀 Deployment

### Development
```bash
# Terminal 1: Studio
pnpm run studio

# Terminal 2: Next.js
pnpm dev
```

### Production Build
```bash
# Build static site (includes Sanity content)
pnpm run build

# Deploy to Firebase (your existing process)
firebase deploy
```

### Deploy Sanity Studio
```bash
# Deploy studio to Sanity Cloud
pnpm run studio:deploy

# Access at: https://your-project.sanity.studio
```

## 🎨 Customization

### Add More Fields to Blog Posts

Edit `studio/schemaTypes/post.js`:

```javascript
defineField({
  name: 'readingTime',
  title: 'Reading Time (minutes)',
  type: 'number',
  description: 'Estimated reading time',
}),
```

### Add New Content Types

Create `studio/schemaTypes/tutorial.js`:

```javascript
export default {
  name: 'tutorial',
  title: 'Tutorial',
  type: 'document',
  fields: [
    // Your fields here
  ]
}
```

### Modify Tag Options

In `studio/schemaTypes/post.js`:

```javascript
options: {
  list: [
    {title: 'Go', value: 'Go'},
    {title: 'Kubernetes', value: 'Kubernetes'}, // Add new tag
    // ... more tags
  ],
}
```

## 🐛 Troubleshooting

### "Sanity posts not showing on site"

**Check:**
1. Post status is "Published" (not "Draft")
2. Rebuild Next.js: `pnpm run build`
3. Check browser console for errors

**Debug:**
```javascript
// In lib/sanity.js, add console.log
export async function getSanityPosts(lang = 'es') {
  const posts = await sanityClient.fetch(query, { lang });
  console.log('Fetched posts:', posts);  // Add this
  return posts;
}
```

### "Studio won't start"

```bash
cd studio
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### "Custom components not rendering"

**Verify:**
1. MDX syntax is correct in Sanity
2. Component is imported in `components/MDXComponents.js`
3. Check browser console for errors

**Test:**
```mdx
# Simple test without components
Just plain text first.

# Then add components one by one
<CodeSnippet lang="go">
```go
fmt.Println("test")
```
</CodeSnippet>
```

### "Images not displaying"

**Option 1: Use Sanity Images (Recommended)**
```javascript
// Upload in "Main image" field
// Sanity handles hosting automatically
```

**Option 2: External URLs**
```mdx
<img src="https://your-cdn.com/image.jpg" />
```

## 📚 Next Steps

### Phase 1: ✅ Complete
- [x] Sanity Studio set up
- [x] Integration with Next.js
- [x] Custom components working
- [x] Dual content sources (MDX + Sanity)

### Phase 2: Try It Out (Now!)
- [ ] Create your first Sanity post
- [ ] Test all custom components
- [ ] Verify bilingual support works
- [ ] Test draft → publish workflow

### Phase 3: Advanced (Later)
- [ ] Deploy studio to Sanity Cloud
- [ ] Set up webhooks for auto-rebuild
- [ ] Add scheduled publishing
- [ ] Create custom preview component
- [ ] Add AI translation integration

## 🎉 Benefits Summary

### Before (Pure MDX)
- ❌ Git commits for every edit
- ❌ No draft system
- ❌ Manual frontmatter
- ❌ Desktop-only workflow
- ❌ Manual image hosting

### After (Sanity + MDX)
- ✅ No git commits needed
- ✅ Built-in draft/publish
- ✅ Form-based frontmatter
- ✅ Write from anywhere (mobile app!)
- ✅ Drag & drop image upload
- ✅ Auto-save every few seconds
- ✅ Revision history
- ✅ All custom components work!

## 🔗 Resources

- [Studio Guide](studio/BLOG_CMS_GUIDE.md) - Detailed CMS usage
- [Sanity Docs](https://www.sanity.io/docs) - Official documentation
- [Next.js + Sanity](https://www.sanity.io/guides/nextjs) - Integration guide
- [MDX Docs](https://mdxjs.com/) - MDX syntax reference

## 📞 Need Help?

Check the studio guide: `studio/BLOG_CMS_GUIDE.md`

---

**Ready to write?** 🚀

```bash
pnpm run studio  # Start writing!
```
