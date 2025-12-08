# Carlos García Rosales - Portfolio & IT Consulting Website

Personal portfolio and consulting website showcasing IT consulting services, AI & data intelligence expertise, and software development capabilities.

🌐 **Live Site:** [solrac97gr.github.io](https://solrac97gr.github.io)

## 🎯 Overview

This is a modern, responsive single-page application (SPA) featuring:
- Personal branding and consulting services
- Bilingual support (English/Spanish)
- Interactive 3D animations
- Professional service showcase
- Client experience portfolio
- Direct WhatsApp integration for inquiries

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with animations
- **JavaScript (ES6+)** - Vanilla JS for functionality
- **Tailwind CSS** (CDN) - Utility-first styling
- **Three.js** (r128) - 3D graphics and animations
- **Anime.js** (3.2.1) - Scroll-triggered animations
- **Google Fonts** - Inter typography

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality & translations
├── styles.css          # Custom CSS styles
├── favicon.ico         # Site favicon
├── images/             # Logo and image assets
│   ├── accenture.png
│   ├── adevinta.png
│   ├── banco-santander.png
│   ├── bayonet.svg
│   ├── acklen.webp
│   └── manzana-verde.svg
├── CLAUDE.md          # Development documentation
└── README.md          # This file
```

## ✨ Key Features

### 1. **Hero Section**
- 3D animated sphere with interactive mouse tracking
- Wave deformation effects using Three.js
- Responsive gradient colors (dark blue to cyan)
- Clear call-to-action buttons

### 2. **Services Section**
- Six core service offerings:
  - AI Automatizations
  - Data Visualization
  - Software Development
  - MVP Validations
  - Cloud Solutions
  - AI Educational Services
- Interactive modal popups with use case examples

### 3. **Experience Showcase**
- Infinite scroll carousel of client logos
- Grayscale-to-color hover effects
- Optical centering adjustments for logo alignment
- Displays experience with enterprise companies

### 4. **About Section**
- Professional summary
- Key statistics (8+ years, 20+ projects, 24/7 support)
- Value propositions with visual icons
- Data-driven approach highlights

### 5. **Bilingual Support**
- Complete English/Spanish translations
- Language switcher in navigation
- Nested JSON translation structure
- Dynamic content updates

### 6. **Contact Form**
- WhatsApp integration (direct messaging)
- Service selection dropdown
- Form validation
- Success message feedback

## 🌍 Internationalization (i18n)

The site supports English and Spanish through a JSON-based translation system:

```javascript
const translations = {
    en: { /* English translations */ },
    es: { /* Spanish translations */ }
};
```

All translatable content uses `data-translate` attributes that map to translation keys.

## 🎨 Custom Styling

### Infinite Scroll Animation
- Seamless logo carousel using CSS keyframes
- 30-second loop duration
- Pauses on hover for better UX

### 3D Hero Animation
- Real-time vertex manipulation
- Mouse-responsive rotation
- Optimized for performance with `requestAnimationFrame`

### Scroll Animations
- Intersection Observer API
- Anime.js integration
- Fade-up, slide-in, and stagger effects

## 📱 Responsive Design

- **Mobile-first approach**
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Adaptive typography and spacing
- Touch-friendly interactive elements

## 🚀 Deployment

This site is deployed on **GitHub Pages**:

1. Repository: `solrac97gr/solrac97gr.github.io`
2. Branch: `main`
3. Auto-deployment on push to main

### Local Development

Simply open `index.html` in a modern browser. No build process required.

For live reload during development:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

## 📧 Contact Integration

The contact form integrates with WhatsApp:
- Phone: +34 603 418 717
- Opens WhatsApp with pre-filled message
- Includes form data (name, email, service, message)

## 🎯 SEO & Meta

- Descriptive page title: "Carlos García Rosales - IT Consulting & Software Development"
- Semantic HTML5 structure
- Accessible navigation
- Optimized loading with CDN resources

## 🔧 Configuration

### Update Personal Information

Edit `script.js` translations:
```javascript
footer: {
    email: "Email: your-email@example.com",
    phone: "Phone: +XX XXX XXX XXX",
    location: "Your City, Country",
    // ...
}
```

### Update WhatsApp Number

In `script.js` (line ~466):
```javascript
const whatsappNumber = "34603418717"; // Update this
```

### Add/Remove Services

Edit the service cards in `index.html` and corresponding translations in `script.js`.

## 🎨 Customization

### Colors
Main brand colors:
- Primary: Blue (`#2563eb` / `blue-600`)
- Accent: Cyan (`#00ffff`)
- Dark: Gray-900 (`#111827`)

### Fonts
- Primary: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800, 900

## 📄 License

© 2024 Carlos García Rosales. All Rights Reserved.

## 🤝 Contributing

This is a personal portfolio site. If you'd like to use this as a template:
1. Fork the repository
2. Update personal information
3. Replace client logos
4. Customize content and styling

## 📞 Contact

- **Email:** cgarciarosales97@gmail.com
- **Phone:** +34 603 418 717
- **Location:** Málaga, Andalusia, Spain
- **Website:** [solrac97gr.github.io](https://solrac97gr.github.io)

---

Built with ❤️ using vanilla JavaScript and modern web technologies.
