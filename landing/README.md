# IndieCMS Landing Page

A modern, responsive landing page for the IndieCMS API Client library.

## Features

- **Modern Design System**: Built with a comprehensive design token system
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Interactive**: Smooth animations, code examples with syntax highlighting, and copy-to-clipboard functionality
- **Accessible**: WCAG 2.1 Level AA compliant with keyboard navigation support
- **Performance Optimized**: Minimal dependencies, fast load times
- **SEO Ready**: Semantic HTML with proper meta tags

## Quick Start

### Viewing Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Bun
bun --hot landing/index.html

# Using Node.js http-server
npx http-server landing -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Structure

```
landing/
├── index.html      # Main landing page
├── styles.css      # All styling (imports design tokens)
├── script.js       # Interactive features
└── README.md       # This file
```

## Design System

The landing page uses the IndieCMS Design System located in `/design-system/`:

- **Design Tokens**: `design-system/tokens.css`
- **Guidelines**: `DESIGN_GUIDELINES.md` (root directory)

### Color Palette

- **Primary**: Purple/Indigo (#7c3aed) - Innovation and creativity
- **Accent**: Electric Blue (#2563eb) - Energy and trust
- **Neutrals**: Cool grays for balance and readability

### Typography

- **Display/Body**: Inter
- **Code**: JetBrains Mono

## Key Sections

1. **Hero**: Eye-catching introduction with clear CTAs
2. **Features**: 6 key benefits presented in a grid
3. **Code Examples**: Interactive code showcase with tabs
4. **API Reference**: Complete method documentation
5. **CTA**: Final conversion section with install command
6. **Footer**: Navigation and resources

## Customization

### Updating Content

Edit `index.html` to update:
- Copywriting and messaging
- Feature descriptions
- Code examples
- Links and navigation

### Styling Changes

Edit `styles.css` or modify design tokens in `design-system/tokens.css`:

```css
:root {
  --color-primary-600: #7c3aed;  /* Change primary color */
  --font-family-body: 'Inter';   /* Change fonts */
  --radius-lg: 0.5rem;           /* Adjust border radius */
}
```

### Adding Features

Add new interactive features in `script.js`:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Your custom functionality
});
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **First Contentful Paint**: < 1.0s
- **Time to Interactive**: < 2.0s
- **Total Bundle Size**: < 50KB (HTML + CSS + JS)

## Deployment

### GitHub Pages

1. Push to your repository
2. Go to Settings → Pages
3. Select branch and `/landing` folder
4. Save

### Netlify

```bash
# netlify.toml
[build]
  publish = "landing"
```

### Vercel

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Respects `prefers-reduced-motion`
- Screen reader tested

## Contributing

When making changes:

1. Follow the design system guidelines
2. Test on multiple devices/browsers
3. Ensure accessibility standards are met
4. Update this README if adding major features

## License

MIT License - Same as the IndieCMS API Client

## Resources

- [Design Guidelines](../DESIGN_GUIDELINES.md)
- [IndieCMS.io](https://indiecms.io)
- [GitHub Repository](https://github.com/CyberClarence/indie-cms-api-client)
