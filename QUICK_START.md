# Quick Reference - Running the Project

## 🚀 Development Commands

### Run Everything (Recommended)
```bash
pnpm run dev:all
```
Starts both:
- Next.js App → http://localhost:3000
- Sanity Studio → http://localhost:3333

### Run Individually
```bash
# Next.js only
pnpm run dev

# Sanity Studio only
pnpm run studio
```

## 📝 Writing Workflow

### Using Sanity Studio (New Way)
1. Run `pnpm run dev:all`
2. Open http://localhost:3333
3. Login to Sanity
4. Create/edit posts
5. View live at http://localhost:3000/blog

### Using MDX Files (Old Way - Still Works!)
1. Edit files in `data/es/*.mdx` or `data/en/*.mdx`
2. Changes appear automatically at http://localhost:3000/blog

## 🏗️ Build & Deploy

```bash
# Build for production
pnpm run build

# Deploy Studio to Sanity
pnpm run studio:deploy

# Full CI pipeline
pnpm run ci
```

## 📚 More Info

See `SANITY_SETUP.md` for complete setup guide.
