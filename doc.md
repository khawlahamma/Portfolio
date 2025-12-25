# Portfolio Professionnel - Khawla Hamma

## Overview

This is a professional portfolio website built for Khawla Hamma, a Data & Software Engineering student at INSEA. The application showcases projects, skills, professional experience, and academic background. It features a modern, responsive design with both light and dark theme support, drawing inspiration from contemporary developer portfolios.

The portfolio is built as a full-stack application with a React frontend and Express backend, designed to present professional work while providing a contact form for potential recruiters and collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single-page application)

**UI Component Library:**
- shadcn/ui component system (based on Radix UI primitives)
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theming system supporting light/dark modes with localStorage persistence

**State Management:**
- TanStack Query (React Query) for server state management and API caching
- React Context API for theme state (ThemeProvider)
- React Hook Form with Zod validation for form state management

**Design System:**
- Typography: Inter/Poppins for primary text, JetBrains Mono for code/technical content
- Color system: HSL-based with CSS custom properties for theme switching
- Spacing: Tailwind's standard spacing scale (4, 6, 8, 12, 16, 20, 24)
- Component variants: Uses class-variance-authority for consistent component styling

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the API server
- HTTP server (not WebSocket) for standard request/response patterns
- Development mode uses Vite middleware for HMR
- Production mode serves pre-built static files

**API Design:**
- RESTful API endpoints prefixed with `/api`
- JSON request/response format
- Contact message submission endpoint (`POST /api/contact`)
- Admin endpoints for message retrieval and status updates
- Error handling with Zod validation and custom error formatting

**Storage Layer:**
- In-memory storage implementation (MemStorage) for development
- Interface-based design (IStorage) allows easy migration to database
- Drizzle ORM configured for PostgreSQL (schema defined, ready for provisioning)
- Session storage ready for future authentication features

**Build Process:**
- esbuild for server-side TypeScript compilation
- Dependency bundling with allowlist for optimized cold starts
- Separate client and server build outputs

### Application Structure

**Page Sections:**
1. Hero Section - Introduction with call-to-action buttons
2. About Section - Profile summary, metrics highlights, CV download button
3. Projects Section - Showcase with live demo modals (iframe integration)
4. Skills Section - Categorized technical competencies (languages, frameworks, databases, tools)
5. Experience Section - Professional timeline with project links
6. Education Section - Academic background cards
7. Contact Section - Form submission with validation + direct contact info
8. Footer - Quick navigation and social links

**Key Features:**
- Smooth scrolling navigation between sections
- Project demo viewer with iframe modal for live previews
- Contact form with backend integration and toast notifications
- Fully responsive design (mobile-first approach)
- Accessibility features (ARIA labels, semantic HTML)

### External Dependencies

**UI & Styling:**
- Radix UI primitives (@radix-ui/*) - Accessible component primitives
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library
- Google Fonts - Inter, Poppins, JetBrains Mono typography

**Data Management:**
- @tanstack/react-query - Server state management
- React Hook Form - Form handling
- Zod - Schema validation
- drizzle-orm - TypeScript ORM (configured for PostgreSQL)
- @neondatabase/serverless - PostgreSQL driver for Neon

**Development Tools:**
- TypeScript - Type safety
- Vite - Build tool and dev server
- esbuild - Server bundler
- tsx - TypeScript execution for Node.js

**Planned Integrations:**
- PostgreSQL database (Neon) - Schema defined in `shared/schema.ts`
- Session management - Connect-pg-simple configured for future auth

