# Portfolio Professionnel - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern developer portfolios (Brittany Chiang, Josh Comeau) with professional structure suitable for engineering recruitment. Balance creative showcase with corporate credibility.

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, h-8, mt-12, etc.)
- Section padding: py-20 desktop, py-12 mobile
- Component spacing: gap-8 for grids, gap-6 for lists
- Container: max-w-6xl for content, max-w-7xl for full-width sections

## Typography Hierarchy
**Font Family**: 
- Primary: Inter or Poppins (Google Fonts) - modern, professional
- Monospace: JetBrains Mono for code snippets/technical details

**Scale**:
- Hero name: text-5xl md:text-7xl, font-bold
- Section headers: text-3xl md:text-4xl, font-bold
- Subsection titles: text-2xl, font-semibold
- Project titles: text-xl, font-semibold
- Body text: text-base md:text-lg
- Small text (skills, dates): text-sm

## Core Sections & Layout

### 1. Hero Section (80vh)
- Split layout: 60% text (left) / 40% professional photo (right) on desktop, stacked on mobile
- Name + title prominent
- Brief tagline about "Data & Software Engineering"
- Primary CTA: "Voir mes projets" + secondary "Me contacter"
- Social links (GitHub, LinkedIn, email) with icons

### 2. À Propos / Profil
- Single column, max-w-3xl centered
- Professional summary from CV
- Key highlights in grid: Years studying, Technologies mastered, Projects completed
- Download CV button

### 3. Compétences / Skills
- Grid layout: grid-cols-2 md:grid-cols-4
- Grouped categories: Langages, Frameworks, Databases, Outils
- Each skill as pill/badge with icon
- Hover effect to show proficiency level

### 4. Projets (Critical Section)
**Layout**: Masonry-style or alternating layout (avoid standard 3-column grid)
- Each project card includes:
  - Project screenshot/mockup (prominent)
  - Title + brief description
  - Tech stack badges
  - Three action buttons:
    1. "Démo Live" (primary, opens modal with iframe)
    2. "Code Source" (GitHub link)
    3. "Détails" (expand for more info)
  
**Project Cards Design**:
- Large featured image (16:9 aspect ratio)
- Overlay gradient on image with title
- Expand on hover to show full description
- Modal for live demo: full-screen iframe with close button

**Projects to feature**: 
- Storeillo-Api-main
- HandyConnect
- Site planification voyages
- Application mobile portfolio
- Application conférences

### 5. Expérience Professionnelle
- Timeline layout (vertical on mobile, could be horizontal on desktop)
- Each experience card:
  - Company logo placeholder
  - Role + company + location
  - Dates (prominent)
  - Bullet points of achievements
  - Project links if applicable

### 6. Formation
- Clean cards for each education entry
- Institution name + degree
- Years + location
- Key courses or achievements

### 7. Contact Section
- Two-column layout (md:grid-cols-2)
- Left: Contact form (Nom, Email, Message)
- Right: Direct contact info + social links
- Form inputs: full-width, generous padding (p-4), rounded corners
- Submit button: full-width on mobile, auto-width on desktop

### 8. Footer
- Centered layout
- Copyright + quick links (Projets, Expérience, Contact)
- Social icons repeat
- "Fait avec ❤️ en utilisant HTML, CSS & JavaScript"

## Component Library

**Buttons**:
- Primary: Large (px-8 py-3), bold text, rounded-lg
- Secondary: Outlined version of primary
- Icon buttons: Square (p-3), centered icon

**Cards**:
- Rounded corners: rounded-xl
- Subtle shadow on hover
- Padding: p-6 to p-8
- Border: 1px solid for secondary cards

**Inputs**:
- Consistent height: h-12
- Padding: px-4
- Rounded: rounded-lg
- Focus state: ring effect

**Badges/Pills** (for skills):
- Small (px-3 py-1), text-sm
- Rounded: rounded-full
- Icon + text where applicable

**Modal** (for project demos):
- Full-screen overlay with semi-transparent backdrop
- Content container: max-w-7xl, centered
- Close button (X) top-right, always visible
- Iframe: w-full, h-[80vh]

## Navigation
**Fixed header** (sticky top-0):
- Logo/Name (left) + Nav links (right) on desktop
- Hamburger menu on mobile
- Links: Projets | Expérience | Compétences | Contact
- Smooth scroll to sections
- Height: h-16 to h-20

## Animations (Minimal, Strategic)
- Fade-in on scroll for sections (use Intersection Observer)
- Hover scale (scale-105) on project cards
- Button hover: subtle translate-y
- NO distracting parallax or continuous animations

## Images
**Hero Image**: Professional headshot or illustration of developer at work (right side of hero, circular frame, w-64 to w-80)

**Project Screenshots**: Each project needs a representative image (can be mockup, screenshot, or project logo), aspect ratio 16:9, high quality

**Icons**: Use Heroicons via CDN for all interface icons (social, navigation, skills)

## Responsive Breakpoints
- Mobile-first approach
- md: (768px) - Tablet adjustments
- lg: (1024px) - Desktop multi-column layouts
- All grids collapse to single column on mobile

## Accessibility
- Semantic HTML5 (header, nav, main, section, footer)
- Alt text for all images (descriptive)
- Form labels properly associated
- Keyboard navigation support
- Focus states clearly visible (ring-2)

**Delivery**: Fully commented code in French explaining each section, component, and interaction.