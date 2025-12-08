# Sanity CMS Setup Guide

## 🔑 Getting Your Tokens

### 1. Access Sanity Dashboard
```bash
# Open your Sanity project dashboard
cd studio
pnpm run manage
# or visit: https://www.sanity.io/manage
```

### 2. Get Tokens

#### **For Studio Access (You Need This Now)**
1. Go to https://www.sanity.io/manage
2. Select your project: **carlos-lat** (ID: `s0zyxw39`)
3. Click **"API"** in the left sidebar
4. Click **"Tokens"** tab
5. Click **"Add API token"**
6. Settings:
   - **Name**: "Studio Write Token"
   - **Permissions**: **Editor** (can read and write)
   - Click "Add token"
7. **COPY THE TOKEN** - you'll only see it once!

#### **Token Permissions Explained**
- 🟢 **Viewer**: Read-only (public, safe for client-side)
- 🟡 **Editor**: Read + Write (keep secret, for Studio/Admin)
- 🔴 **Maintainer**: Full project access (rarely needed)

### 3. Configure Studio

Create `studio/.env.local`:
```bash
# In the studio directory
cd studio

# Create environment file
cat > .env.local << 'EOF'
SANITY_STUDIO_API_PROJECT_ID=s0zyxw39
SANITY_STUDIO_API_DATASET=production
EOF
```

**Note**: Studio authentication uses your Sanity login, not tokens!

### 4. Configure Main App (Optional - Only if You Need Preview Mode)

If you want to preview draft posts in your Next.js app:

```bash
# In the root directory
cd ..

# Create .env.local (gitignored by default)
cat > .env.local << 'EOF'
# Public - safe to commit (already in code)
NEXT_PUBLIC_SANITY_PROJECT_ID=s0zyxw39
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-12-09

# PRIVATE - Never commit! Only for preview mode
# SANITY_API_TOKEN=your-token-here
# SANITY_PREVIEW_SECRET=any-random-string
EOF
```

---

## 🚀 Quick Start

### Option 1: Run Everything Together (Recommended) ⭐
```bash
# From root directory - runs both Next.js and Studio
pnpm run dev:all
```

This starts:
- 🌐 **Next.js App**: http://localhost:3000
- 🎨 **Sanity Studio**: http://localhost:3333

### Option 2: Run Separately
```bash
# Terminal 1 - Next.js app
pnpm run dev

# Terminal 2 - Sanity Studio
pnpm run studio
```

### First Time Setup
```bash
# Install dependencies for both projects
pnpm install
cd studio && pnpm install && cd ..

# Run everything
pnpm run dev:all
```

Studio opens at: http://localhost:3333

### First Time Login
1. Click "Sign in"
2. Use your Google/GitHub/Email account
3. Once logged in, you can create posts!

---

## ✍️ Creating Your First Post

### In Sanity Studio (http://localhost:3333)

1. Click **"Post"** in the sidebar
2. Click **"Create new Post"**
3. Fill in:
   - **Title**: Your post title
   - **Slug**: Auto-generated from title
   - **Language**: Spanish or English
   - **Published At**: Today's date
   - **Abstract**: Short summary
   - **Main Image**: 
     - Click "Upload"
     - Drag & drop or select image
     - No Firebase needed! 🎉
   - **Tag**: Go, MongoDB, etc.
   - **Author**: Carlos García
   - **Body**: Write your MDX content here!
     ```mdx
     # Your Title
     
     Your content with **markdown**...
     
     <CodeSnippet lang="go">
     ```go
     package main
     
     func main() {
       println("Hello!")
     }
     ```
     </CodeSnippet>
     
     <BlogLink url="https://golang.org" content="Go Docs"/>
     ```
   - **Status**: Draft (to test) or Published (to go live)
4. Click **"Publish"** 🚀

### See It Live

```bash
# Run both app and studio together
pnpm run dev:all
```

Visit:
- 🌐 **Your blog**: http://localhost:3000/blog
- 🎨 **Sanity Studio**: http://localhost:3333

Your Sanity post appears alongside your MDX files!

---

## 🔒 Security Model

### What's Public (Safe to Commit)
✅ **Project ID** (`s0zyxw39`) - Required for reads, not sensitive
✅ **Dataset name** (`production`) - Just database name
✅ **API version** - Just a date string

### What's Private (NEVER Commit)
❌ **API Tokens** - Keep in `.env.local` (gitignored)
❌ **Preview secrets** - Random strings for draft access

### How It Works
- **Reading content**: Anyone can read published posts (CDN-cached, fast!)
- **Writing content**: Requires Studio login (your Sanity account)
- **Studio access**: Protected by Sanity authentication
- **No tokens needed** for basic read operations

Your repo is **safe to keep public**! 🎉

---

## 🛠️ Common Tasks

### Write a New Post
1. Open Studio: `cd studio && pnpm run dev`
2. Create post with Status: "Draft"
3. Write and save (auto-saves!)
4. Preview in main app: `pnpm run dev`
5. When ready: Change Status to "Published"

### Translate a Post
1. Find your Spanish post in Studio
2. Click "Duplicate"
3. Change Language to "English"
4. Update Title, Abstract, Body
5. Keep same slug for automatic language switching
6. Publish!

### Upload Images
1. In Studio, click Main Image field
2. Drag & drop any image
3. Sanity automatically:
   - Uploads to their CDN
   - Generates optimized sizes
   - Creates public URLs
4. No manual Firebase upload! 🎉

### Add Custom MDX Component
Your existing components work as-is! Just use them in the Body field:

```mdx
<CodeSnippet lang="go">
```go
// Your code
```
</CodeSnippet>

<FolderStructure 
  repo="https://github.com/user/repo"
  tree={[{ type: "folder", name: "src", content: [] }]}
/>

<BlogLink url="..." content="Link text"/>
```

---

## 📊 Deployment

### Deploy Studio to Sanity
```bash
cd studio
pnpm run deploy
```

Your studio will be live at: https://carlos-lat.sanity.studio

### Deploy Main Site (Unchanged)
```bash
pnpm run ci
firebase deploy
```

Works exactly the same! Sanity posts are fetched during build.

---

## 🐛 Troubleshooting

### "Project not found"
- Check project ID in `lib/sanity.js` matches your Sanity dashboard
- Run: `cd studio && sanity projects list`

### "Authentication required"
- Studio: Login with your Sanity account
- API: No token needed for reading published content

### "Can't see my post"
- Check Status is "Published" (not "Draft")
- Check Language matches (ES/EN)
- Rebuild app: `pnpm run build`

### "Images not loading"
- Sanity images work automatically
- No CDN configuration needed
- Check mainImage field is filled

---

## 🎯 Next Steps

1. ✅ Start Studio: `cd studio && pnpm run dev`
2. ✅ Login to Sanity
3. ✅ Create a test post (status: Draft)
4. ✅ Preview in main app: `pnpm run dev`
5. ✅ Publish when happy!
6. ✅ Keep writing! (No git commits needed for content)

---

## 💡 Pro Tips

- **Auto-save**: Studio saves every few seconds automatically
- **Drafts**: Use "Draft" status to work without publishing
- **Mobile**: Access studio from phone to write on the go
- **Images**: Drag & drop multiple images at once
- **History**: Sanity keeps version history (click History button)
- **Collaboration**: Invite team members in Sanity dashboard

**You're all set!** 🚀 Start writing in the Studio and enjoy the improved workflow!
