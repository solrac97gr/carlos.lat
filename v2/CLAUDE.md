# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page website for Garcia & Durman IT Consulting, built as a static site using vanilla HTML, CSS, and JavaScript. The site showcases IT consulting services focused on AI, data visualization, and software development.

## Tech Stack

- **Frontend**: Vanilla HTML5, JavaScript (ES6+), Tailwind CSS (via CDN)
- **3D Graphics**: Three.js (r128) for hero section animation
- **Animations**: Anime.js (3.2.1) for scroll-triggered animations
- **Styling**: Tailwind CSS + custom CSS (styles.css)
- **Deployment**: Static hosting (GitHub Pages compatible)

## Architecture

### File Structure
- `index.html` - Main single-page application with all sections
- `script.js` - All JavaScript functionality including:
  - Translation system (English/Spanish)
  - Three.js 3D animation
  - Modal logic for service details
  - Contact form with WhatsApp integration
  - Scroll-triggered animations
- `styles.css` - Custom CSS overrides and animation states
- `favicon.ico` - Site favicon

### Key Components

**Translation System** (lines 1-264 in script.js):
- JSON-based translations for English and Spanish
- Uses `data-translate` attributes on HTML elements
- Supports nested translation keys (e.g., "nav.services")
- Language switcher in header with dropdown menu
- Updates text content, placeholders, and select options

**3D Hero Animation** (lines 267-401 in script.js):
- Three.js point cloud sphere with wave deformation
- Mouse-interactive rotation
- Gradient coloring from dark blue to cyan
- Responsive canvas sizing

**Service Modal System** (lines 461-506 in script.js):
- Click-to-open modals for service cards
- Displays detailed service descriptions
- Translatable modal content
- Smooth fade-in/scale animations

**Contact Form** (lines 416-459 in script.js):
- Sends submissions to WhatsApp (number: 34607376180)
- Formats form data as WhatsApp message
- Shows success message on submission

**Scroll Animations** (lines 508-574 in script.js):
- Intersection Observer pattern
- Animation types: fade-up, stagger-fade-up, slide-in-left, slide-in-right
- Triggered via `data-animation` attributes

## Development Workflow

### Testing Changes
Since this is a static site, simply open `index.html` in a browser:
```bash
open index.html
```

Or use a local server (recommended for testing):
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Making Changes

**Editing Content**:
- Update text in both English and Spanish within the `translations` object in script.js
- HTML structure in index.html uses `data-translate` attributes to reference translation keys

**Adding Services**:
1. Add service card HTML in the services section (index.html around line 234)
2. Add translations in script.js `translations.en.services` and `translations.es.services`
3. Add modal content in `translations.en.modals` and `translations.es.modals`
4. Ensure card has `data-service="service-key"` attribute

**Styling**:
- Uses Tailwind utility classes extensively
- Custom styles in styles.css for animations and specific overrides
- Three.js/Anime.js CDN dependencies in HTML head

### Deployment
This is a GitHub Pages site. To deploy:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## Important Notes

- All external libraries loaded via CDN (no npm/build process)
- Contact form integrates with WhatsApp instead of email backend
- Language preference not persisted (resets on page reload)
- Site uses smooth scroll behavior (`scroll-smooth` class on html tag)
- Mobile menu toggle functionality included (index.html line 104-154)
- All images use placeholder service (placehold.co)

## Git Workflow

When committing changes, do not add co-author attribution in commit messages.
