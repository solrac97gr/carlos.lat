# Sanity Studio Deployment Guide

## 🎯 When to Deploy the Studio

Deploy the Sanity Studio when you:
- ✅ Change the schema (add/remove fields)
- ✅ Update the Sanity config
- ✅ Add new plugins
- ✅ Update Studio dependencies

**Don't deploy for:**
- ❌ Writing new blog posts (content updates)
- ❌ Editing existing posts
- ❌ Uploading images

## 🚀 Manual Deployment (Recommended)

### From your local machine:
```bash
cd studio
pnpm run deploy
```

This deploys to: **https://carlos-lat.sanity.studio**

You'll be prompted to login if needed.

## 🤖 Automatic Deployment (Optional)

If you want to auto-deploy the Studio on schema changes, add this workflow:

### `.github/workflows/deploy-sanity-studio.yml`
```yaml
name: Deploy Sanity Studio

on:
  push:
    branches:
      - main
    paths:
      - 'studio/**'
      - '!studio/README.md'
      - '!studio/BLOG_CMS_GUIDE.md'

jobs:
  deploy-studio:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Setup pnpm
        run: npm i -g pnpm
      
      - name: Install Studio dependencies
        run: cd studio && pnpm install
      
      - name: Deploy to Sanity
        run: cd studio && pnpm run deploy
        env:
          SANITY_AUTH_TOKEN: ${{ secrets.SANITY_DEPLOY_TOKEN }}
```

### Setup Required:

1. **Get Sanity Deploy Token:**
   ```bash
   cd studio
   npx sanity manage
   # Or visit: https://www.sanity.io/manage
   ```
   
2. **Create Token:**
   - Go to your project → API → Tokens
   - Click "Add API token"
   - Name: "GitHub Actions Deploy"
   - Permissions: **Deploy Studio**
   - Copy the token

3. **Add to GitHub Secrets:**
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `SANITY_DEPLOY_TOKEN`
   - Value: [paste the token]
   - Click "Add secret"

4. **Commit the workflow:**
   ```bash
   git add .github/workflows/deploy-sanity-studio.yml
   git commit -m "feat: add Sanity Studio auto-deploy workflow"
   git push
   ```

Now the Studio auto-deploys when you change files in `studio/`!

## 🔒 Current Setup (No Auto-Deploy)

Your current workflows:
- ✅ **firebase-hosting-merge.yml** - Deploys Next.js site to Firebase on main branch
- ✅ **firebase-hosting-pull-request.yml** - Preview deployments for PRs
- ⚠️ **No Sanity auto-deploy** - Deploy manually with `pnpm run studio:deploy`

This is **intentional and good** because:
- Studio changes are infrequent
- Manual deployment gives you control
- Avoids unnecessary deployments
- Simpler workflow

## 📋 Deployment Checklist

### When deploying the Studio:
```bash
# 1. Test locally first
cd studio
pnpm run dev
# Verify everything works at http://localhost:3333

# 2. Deploy to production
pnpm run deploy

# 3. Test live studio
# Visit https://carlos-lat.sanity.studio
# Login and verify changes

# 4. Commit schema changes to git
git add studio/
git commit -m "feat: update Sanity schema"
git push
```

### When deploying the main site:
```bash
# Option 1: Automatic (on merge to main)
git push origin main
# GitHub Actions handles everything

# Option 2: Manual
pnpm run ci
firebase deploy
```

## 💡 Pro Tips

- **Studio URL**: https://carlos-lat.sanity.studio (after first deploy)
- **Live in seconds**: Studio deploys are instant (no build time)
- **Version control**: Studio code is in git, content is in Sanity
- **Rollback**: Just redeploy previous git commit
- **Multiple environments**: Use different datasets (production, staging)

## 🐛 Troubleshooting

### "Deployment failed"
```bash
# Check you're logged in
cd studio
npx sanity login

# Try deploy again
pnpm run deploy
```

### "Project not found"
```bash
# Verify project ID
cd studio
npx sanity projects list
```

### "Permission denied"
- Make sure you're logged in with the correct Sanity account
- Check you have deploy permissions for the project

---

**Current Recommendation:** Keep manual deployment for now. Add auto-deploy later if you find yourself updating the schema frequently. 🚀
