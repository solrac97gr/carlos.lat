# Sanity CMS Integration - Current Status

## ✅ What's Working

1. **Sanity Studio** - Running at http://localhost:3333
2. **Content Creation** - You can create posts in Sanity
3. **Blog List** - Sanity posts appear in http://localhost:3000/blog
4. **Hybrid System** - MDX and Sanity posts work side-by-side

## ⚠️ Current Issue

**Problem**: Individual Sanity post pages (e.g., `/blog/como-funcionan-los-canales-de-go-internamente`) show 404 in static export mode.

**Why**: Next.js with `output: 'export'` requires all paths to be known at build time (`getStaticPaths`). Our current implementation tries to fetch Sanity posts during build, but there's a module resolution issue with server-side code (`fs` module) being included in the client bundle.

## 🔧 Solutions

### Option 1: Use Fallback Pages (Quick Fix)
Change to `fallback: 'blocking'` - but this doesn't work with static export.

### Option 2: Pre-generate Sanity Posts at Build Time (Recommended)
Create a build script that fetches all Sanity posts before the Next.js build and generates a manifest file.

### Option 3: Remove Static Export (Best Long-term)
Deploy to Vercel/Netlify instead of Firebase, which supports dynamic routes natively.

## 🚀 Quick Fix Implementation

Since you're on Firebase with static export, here's the immediate solution:

### Step 1: Create Build Manifest Script

```javascript
// scripts/generate-sanity-manifest.js
const { sanityClient } = require('../lib/sanity');
const fs = require('fs');
const path = require('path');

async function generateManifest() {
  try {
    const query = `*[_type == "post" && status == "published"] {
      "slug": slug.current,
      language
    }`;
    
    const posts = await sanityClient.fetch(query);
    const slugs = posts.map(p => p.slug);
    
    const manifest = {
      slugs: Array.from(new Set(slugs)),
      generated: new Date().toISOString()
    };
    
    fs.writeFileSync(
      path.join(__dirname, '..', '.sanity-manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log(`✅ Generated manifest with ${manifest.slugs.length} Sanity post slugs`);
  } catch (error) {
    console.error('❌ Failed to generate Sanity manifest:', error);
    // Create empty manifest so build doesn't fail
    fs.writeFileSync(
      path.join(__dirname, '..', '.sanity-manifest.json'),
      JSON.stringify({ slugs: [], generated: new Date().toISOString() }, null, 2)
    );
  }
}

generateManifest();
```

### Step 2: Update getStaticPaths

```javascript
// pages/blog/[slug].js
export async function getStaticPaths() {
  const fs = require('fs');
  const path = require('path');
  
  // Get MDX slugs
  const { getFiles } = await import("../../lib/mdx");
  const enPosts = getFiles("en");
  const esPosts = getFiles("es");
  const mdxSlugs = [
    ...enPosts.map(post => post.replace(/\.mdx/, "")),
    ...esPosts.map(post => post.replace(/\.mdx/, ""))
  ];
  
  // Get Sanity slugs from manifest
  let sanitySlugs = [];
  try {
    const manifestPath = path.join(process.cwd(), '.sanity-manifest.json');
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      sanitySlugs = manifest.slugs;
    }
  } catch (error) {
    console.log('No Sanity manifest found, using MDX only');
  }
  
  // Combine and deduplicate
  const allSlugs = Array.from(new Set([...mdxSlugs, ...sanitySlugs]));
  
  const paths = allSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
```

### Step 3: Update Build Script

```json
// package.json
{
  "scripts": {
    "prebuild": "node scripts/generate-sanity-manifest.js",
    "build": "next build",
    "postbuild": "next-sitemap && node scripts/generate-rss.js"
  }
}
```

### Step 4: Add to .gitignore

```
# .gitignore
.sanity-manifest.json
```

## 📝 How It Works

1. **Before Build**: Script fetches all Sanity post slugs → saves to `.sanity-manifest.json`
2. **During Build**: `getStaticPaths` reads manifest → generates static pages for all posts
3. **After Build**: Static HTML exists for both MDX and Sanity posts
4. **On Deploy**: All posts accessible as static files

## ✨ Benefits

- ✅ Works with Firebase static hosting
- ✅ No runtime Sanity API calls (faster!)
- ✅ All posts pre-rendered at build time
- ✅ Falls back gracefully if Sanity is unavailable
- ✅ Keeps existing MDX workflow intact

## 🎯 Next Steps

1. I can implement this solution now (15 minutes)
2. Test build with your Sanity post
3. Deploy and verify it works
4. Document for future posts

## 🔮 Future Enhancements

- **Option A**: Migrate to Vercel (supports dynamic routes natively)
- **Option B**: Add ISR (Incremental Static Regeneration) with Vercel
- **Option C**: Webhook from Sanity → trigger rebuild on content changes

---

**Want me to implement the Quick Fix now?** It will make your Sanity post accessible immediately after build. 🚀
