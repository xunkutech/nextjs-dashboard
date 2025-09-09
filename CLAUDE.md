# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 dashboard application built with:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configurations
- **Database**: PostgreSQL with Postgres.js client
- **Authentication**: NextAuth.js v5
- **Language**: TypeScript
- **Package Manager**: pnpm

## Key Architecture

### App Structure (App Router)

- `/app` - Next.js 14 App Router directory
- `/app/lib` - Utility functions and data fetching
- `/app/ui` - Reusable UI components
- `/app/ui/dashboard` - Dashboard-specific components
- `/app/ui/invoices` - Invoice management components
- `/app/ui/customers` - Customer management components

### Data Layer

- `app/lib/data.ts` - Database queries using Postgres.js
- `app/lib/definitions.ts` - TypeScript type definitions
- `app/lib/placeholder-data.ts` - Mock data for development
- Environment variables required: `POSTGRES_URL`

### Key Dependencies

- `postgres` - PostgreSQL client with SSL support
- `next-auth` - Authentication framework
- `zod` - Schema validation
- `bcrypt` - Password hashing
- `clsx` - Conditional className utility
- `@heroicons/react` - Icon library

## Development Commands

### Core Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

### Database Operations

```bash
# Seed database (via API route)
curl -X POST http://localhost:3000/seed

# Execute SQL query (via API route)  
curl -X POST http://localhost:3000/query
```

### Missing Testing Infrastructure

This project currently lacks testing setup. Consider adding:

- Jest/React Testing Library for unit tests
- Cypress/Playwright for E2E tests
- ESLint for code quality

## Key Files & Patterns

### Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration with path aliases
- `postcss.config.js` - PostCSS configuration

### Environment Setup

Copy `.env.example` to `.env.local` and configure:

- `POSTGRES_URL` - PostgreSQL connection string
- NextAuth.js environment variables

### Component Patterns

- UI components use Tailwind CSS for styling
- Data fetching in server components
- Client components for interactivity
- TypeScript interfaces for type safety

## Development Notes

- Uses Next.js 14 App Router with React Server Components
- Implements data fetching with Postgres.js and SQL queries
- Includes authentication setup with NextAuth.js
- Follows TypeScript best practices with strict mode enabled
- Uses path aliases (`@/*` for root imports)
- Built with Turbopack for faster development
