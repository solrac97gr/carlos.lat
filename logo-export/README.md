# carlos.lat — Logo Asset Pack

Brand: **carlos.lat** · Carlos García Rosales · Strategic IT Consulting & Software Development

## Files

### Marks (square SVG, 64×64 viewBox — scale freely)
- `mark.svg` — primary mark, blue tile + white dot
- `mark-on-dark.svg` — for dark surfaces (footer, dark mode)
- `mark-inverse.svg` — white tile, blue dot, hairline border
- `mark-circle.svg` — circle version for masked avatars (LinkedIn, X, GitHub)

### Lockup (mark + wordmark, 240×56)
- `lockup.svg` — primary, on light surfaces
- `lockup-on-dark.svg` — for dark surfaces
- `lockup-mono-black.svg` — single-color black (print, fax, etched)
- `lockup-mono-white.svg` — single-color white (knockout on photos/dark)

### Favicons (`favicons/`)
- `favicon-16.png` · `favicon-32.png` · `favicon-48.png` · `favicon-64.png`
- `apple-touch-icon.png` (180×180)
- `icon-192.png` · `icon-512.png` (PWA / Android)

### Avatars (`avatars/`)
- `avatar-400.png` · `avatar-800.png` — circle mark, social profiles

### Open Graph
- `og-image.png` (1200×630) — for `<meta property="og:image">`
- `og-image.svg` — source

## HTML head snippet

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
<link rel="icon" type="image/svg+xml" href="/mark.svg">
<meta property="og:image" content="https://carlos.lat/og-image.png">
```

## Color tokens used
- Primary: `#3b82f6`
- Primary light (dark-bg accent): `#60a5fa`
- Text: `#111827`
- Muted: `#6b7280`
- Tint soft (OG bg): `#eff6ff`

## Typography
Wordmark is **Inter ExtraBold (800)** with `-0.035em` letter-spacing. The `.lat`
TLD is set in **Inter Medium (500)** at `#6b7280` (or `rgba(255,255,255,0.55)`
on dark) so the dot mark carries the color accent.

The lockup SVGs reference Inter as a CSS font — make sure Inter is loaded on
the page. For environments where it isn't, use the PNG renders.

## Don'ts
- Don't recolor the dot mark with the blue→violet gradient — that gradient is
  reserved for one accent moment per page (hero/featured-service panel).
- Don't put `.lat` in primary blue when used next to the mark — the mark
  already carries the blue accent. Doubling up dilutes both.
- Don't outline the mark or add a drop shadow. The shape is already final.
- Don't use the legacy mint `#63f3ab` near the logo. That color belongs to old
  blog body styles only.
