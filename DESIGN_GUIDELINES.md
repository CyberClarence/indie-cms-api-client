# IndieCMS Design System Guidelines

> A modern, developer-focused design system that balances sophistication with simplicity.

## Table of Contents

- [Design Philosophy](#design-philosophy)
- [Brand Identity](#brand-identity)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components](#components)
- [Motion & Animation](#motion--animation)
- [Accessibility](#accessibility)
- [Usage Guidelines](#usage-guidelines)

---

## Design Philosophy

### Core Principles

1. **Developer-First**: Design with developers in mind - clean, logical, and functional
2. **Modern Minimalism**: Embrace whitespace, reduce visual noise, focus on content
3. **Tech-Forward**: Use contemporary design patterns that feel innovative yet familiar
4. **Accessible by Default**: Build inclusivity into every component and interaction
5. **Performance-Minded**: Optimize for fast load times and smooth animations

### Visual Language

Our design system creates a sophisticated, tech-savvy identity through:

- **Clean geometric shapes** with subtle rounded corners
- **Strategic use of depth** through shadows and layering
- **Vibrant but balanced colors** that energize without overwhelming
- **Generous whitespace** that lets content breathe
- **Code-centric aesthetics** that appeal to technical audiences

---

## Brand Identity

### The IndieCMS Look & Feel

**Vibrant Purple + Electric Blue**
Our primary color palette combines the creativity and innovation of purple with the energy and trust of blue. This creates a unique identity that stands out in the developer tools space while maintaining professional credibility.

**Modern Typography**
We use Inter for its exceptional readability and modern geometric aesthetic, paired with JetBrains Mono for code to maintain visual consistency with developer workflows.

**Depth & Dimension**
Subtle shadows and gradients create a sense of depth without heaviness, making interfaces feel polished and premium.

**Motion with Purpose**
Smooth, intentional animations guide users and provide feedback, never just decoration.

---

## Color System

### Primary Palette

Our primary purple/indigo communicates **creativity, innovation, and sophistication**.

```css
/* Primary Scale */
--color-primary-500: #8b5cf6;  /* Base - Main brand color */
--color-primary-600: #7c3aed;  /* Dark - Hover states, emphasis */
--color-primary-700: #6d28d9;  /* Darker - Active states */
```

**Usage:**
- Primary CTAs and buttons
- Links and interactive elements
- Brand moments and hero sections
- Focus states and active indicators

### Accent Palette

Our accent blue adds **energy, trust, and clarity**.

```css
/* Accent Scale */
--color-accent-500: #3b82f6;   /* Base - Secondary brand color */
--color-accent-600: #2563eb;   /* Dark - Hover states */
```

**Usage:**
- Secondary CTAs
- Information badges
- Complementary accents to primary
- Data visualization highlights

### Neutral Palette

Cool grays provide **balance, sophistication, and readability**.

```css
/* Neutral Scale */
--color-neutral-50: #f9fafb;    /* Lightest backgrounds */
--color-neutral-100: #f3f4f6;   /* Secondary backgrounds */
--color-neutral-500: #6b7280;   /* Body text */
--color-neutral-900: #111827;   /* Headings, primary text */
```

**Usage:**
- Text hierarchy (900 → 500 → 400)
- Backgrounds and surfaces
- Borders and dividers
- Disabled states

### Semantic Colors

```css
--color-success-500: #10b981;  /* Success states, confirmations */
--color-warning-500: #f59e0b;  /* Warnings, cautions */
--color-error-500: #ef4444;    /* Errors, destructive actions */
```

### Color Usage Guidelines

**Do:**
- Use primary colors for main CTAs (max 1-2 per screen)
- Use neutral colors for 80% of the UI
- Maintain consistent color meanings (red = error, green = success)
- Test color contrast for accessibility (WCAG AA minimum)

**Don't:**
- Mix too many colors in one view
- Use color as the only indicator (add icons/text)
- Override semantic color meanings
- Use vibrant colors for large background areas

---

## Typography

### Font Families

**Inter** - Display & Body
Modern, geometric sans-serif with excellent readability at all sizes.

**JetBrains Mono** - Code
Designed specifically for developers with clear character distinction.

### Type Scale

```css
/* Display Sizes */
--font-size-7xl: 4.5rem;   /* 72px - Hero headlines */
--font-size-6xl: 3.75rem;  /* 60px - Large headers */
--font-size-5xl: 3rem;     /* 48px - Section headers */

/* Heading Sizes */
--font-size-4xl: 2.25rem;  /* 36px - H1 */
--font-size-3xl: 1.875rem; /* 30px - H2 */
--font-size-2xl: 1.5rem;   /* 24px - H3 */
--font-size-xl: 1.25rem;   /* 20px - H4 */

/* Body Sizes */
--font-size-lg: 1.125rem;  /* 18px - Large body */
--font-size-base: 1rem;    /* 16px - Default body */
--font-size-sm: 0.875rem;  /* 14px - Small text */
--font-size-xs: 0.75rem;   /* 12px - Captions */
```

### Font Weights

```css
--font-weight-light: 300;      /* Rare, special emphasis */
--font-weight-normal: 400;     /* Body text */
--font-weight-medium: 500;     /* Subtle emphasis */
--font-weight-semibold: 600;   /* Subheadings */
--font-weight-bold: 700;       /* Headings */
--font-weight-extrabold: 800;  /* Hero text */
```

### Typography Hierarchy

```
Hero Title:      font-size-6xl, font-weight-extrabold, line-height-tight
H1:              font-size-4xl, font-weight-bold, line-height-tight
H2:              font-size-3xl, font-weight-bold, line-height-snug
H3:              font-size-2xl, font-weight-semibold, line-height-snug
Body Large:      font-size-lg, font-weight-normal, line-height-relaxed
Body:            font-size-base, font-weight-normal, line-height-normal
Body Small:      font-size-sm, font-weight-normal, line-height-normal
Code:            font-family-mono, font-size-sm
```

### Typography Guidelines

**Do:**
- Use consistent hierarchy across pages
- Limit to 3 font weights per page
- Ensure 16px minimum for body text
- Use tight line-height for headlines (1.25)
- Use relaxed line-height for body (1.625)

**Don't:**
- Mix more than 2 font families
- Use all caps for long text (3-4 words max)
- Set body text below 14px
- Use light weights on small sizes

---

## Spacing & Layout

### Spacing Scale

Our spacing system uses a 4px base unit for mathematical harmony.

```css
--space-1: 0.25rem;   /* 4px  - Tight spacing */
--space-2: 0.5rem;    /* 8px  - Component padding */
--space-4: 1rem;      /* 16px - Standard gap */
--space-6: 1.5rem;    /* 24px - Section padding */
--space-8: 2rem;      /* 32px - Large gaps */
--space-12: 3rem;     /* 48px - Section spacing */
--space-16: 4rem;     /* 64px - Major sections */
--space-24: 6rem;     /* 96px - Hero spacing */
```

### Layout Principles

**Container Widths**
```css
--size-container-md: 768px;    /* Content-focused layouts */
--size-container-lg: 1024px;   /* Standard page width */
--size-container-xl: 1280px;   /* Wide layouts */
```

**Grid System**
- Use CSS Grid for 2D layouts
- Use Flexbox for 1D layouts
- 12-column grid for complex layouts
- 4-column grid for mobile

**Vertical Rhythm**
- Maintain consistent spacing between sections
- Use space-12 (48px) minimum between major sections
- Use space-6 (24px) between related content blocks
- Use space-4 (16px) between elements within a component

---

## Components

### Buttons

**Primary Button**
```css
background: var(--gradient-primary);
color: var(--color-text-inverse);
padding: var(--space-3) var(--space-6);
border-radius: var(--radius-lg);
font-weight: var(--font-weight-semibold);
transition: var(--transition-base);
box-shadow: var(--shadow-primary);
```

**States:**
- Hover: Lift with shadow-lg + slight scale (1.02)
- Active: Press down effect (scale 0.98)
- Disabled: Opacity 0.5, cursor not-allowed

**Secondary Button**
```css
background: transparent;
color: var(--color-primary-600);
border: 2px solid var(--color-primary-600);
```

### Cards

```css
background: var(--color-bg-primary);
border: 1px solid var(--color-border-light);
border-radius: var(--radius-xl);
padding: var(--space-6);
box-shadow: var(--shadow-md);
transition: var(--transition-base);
```

**Hover State:**
- Lift: translateY(-4px)
- Shadow: shadow-lg
- Border: color-primary-600 (optional)

### Code Blocks

```css
background: var(--color-neutral-900);
color: var(--color-neutral-100);
font-family: var(--font-family-mono);
font-size: var(--font-size-sm);
border-radius: var(--radius-lg);
padding: var(--space-6);
```

**Features:**
- Syntax highlighting
- Line numbers (optional)
- Copy button
- Language badge

### Badges

**Default Badge**
```css
background: var(--color-primary-100);
color: var(--color-primary-700);
padding: var(--space-1) var(--space-3);
border-radius: var(--radius-full);
font-size: var(--font-size-xs);
font-weight: var(--font-weight-medium);
```

---

## Motion & Animation

### Animation Principles

1. **Purpose-Driven**: Every animation should have a functional purpose
2. **Subtle**: Animations should enhance, not distract
3. **Fast**: Keep animations under 300ms for UI feedback
4. **Natural**: Use easing functions that mimic physics

### Timing

```css
--transition-fast: 150ms;   /* Hovers, small changes */
--transition-base: 200ms;   /* Standard interactions */
--transition-slow: 300ms;   /* Page transitions, modals */
--transition-slower: 500ms; /* Large movements, reveals */
```

### Common Animations

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 300ms ease-out;
```

**Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: slideUp 400ms ease-out;
```

**Scale Up (for buttons)**
```css
transition: transform 200ms ease-out;
&:hover {
  transform: scale(1.02);
}
```

### Animation Guidelines

**Do:**
- Use consistent timing across similar interactions
- Prefer transform and opacity (GPU-accelerated)
- Add animations to state changes
- Respect `prefers-reduced-motion`

**Don't:**
- Animate width/height (use transform: scale instead)
- Use animations longer than 500ms for UI
- Animate on page load excessively
- Ignore accessibility preferences

---

## Accessibility

### Standards

We meet **WCAG 2.1 Level AA** standards minimum.

### Color Contrast

**Minimum Ratios:**
- Normal text (< 18px): 4.5:1
- Large text (≥ 18px): 3:1
- UI components: 3:1

**Test All:**
- Text on backgrounds
- Icons and graphics
- Focus indicators
- Disabled states

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order (left to right, top to bottom)
- Skip links for main content
- Visible focus indicators

### Screen Readers

- Semantic HTML elements
- ARIA labels where needed
- Alt text for images
- Descriptive link text (no "click here")

### Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Usage Guidelines

### Getting Started

1. **Import Design Tokens**
```html
<link rel="stylesheet" href="design-system/tokens.css">
```

2. **Use CSS Variables**
```css
.my-button {
  background: var(--gradient-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  transition: var(--transition-base);
}
```

3. **Follow Component Patterns**
Use the documented component styles as starting points for consistency.

### Best Practices

**Composition Over Creation**
- Use existing tokens before creating new ones
- Combine simple components to create complex UIs
- Maintain consistency with established patterns

**Progressive Enhancement**
- Design mobile-first
- Add enhancements for larger screens
- Test across devices and browsers

**Performance**
- Minimize custom styles
- Use CSS variables for theming
- Optimize images and assets
- Lazy load below-the-fold content

### File Organization

```
design-system/
├── tokens.css           # Design tokens (import first)
├── reset.css            # CSS reset
├── base.css             # Base styles
├── components/          # Component styles
│   ├── buttons.css
│   ├── cards.css
│   └── ...
└── utilities.css        # Utility classes
```

---

## Design System Updates

### Version: 1.0.0

**Changelog:**
- Initial release
- Core token system established
- Component guidelines defined
- Accessibility standards documented

### Contributing

When proposing design system changes:

1. **Document the why**: Explain the problem being solved
2. **Show examples**: Provide visual demonstrations
3. **Consider impact**: How does this affect existing implementations?
4. **Test accessibility**: Ensure WCAG compliance
5. **Update docs**: Keep guidelines current

---

## Resources

### Tools

- **Color Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Typography Scale**: [Type Scale Generator](https://type-scale.com/)
- **Spacing Calculator**: Based on 4px base unit
- **Icon Library**: [Heroicons](https://heroicons.com/) or [Lucide](https://lucide.dev/)

### References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)
- [Material Design Motion](https://material.io/design/motion/)

---

## Questions or Feedback?

Open an issue in the repository or contact the design system team.

**Remember**: Good design is invisible. It guides without getting in the way, clarifies without explaining, and delights without distracting.
