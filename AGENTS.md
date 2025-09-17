# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router drives everything under `app/`. `app/page.tsx` covers the marketing shell, while authenticated dashboards live under `app/dashboard/**` with feature folders like `customers` and `invoices`. Reusable UI stays in `app/ui`, and database helpers, Zod schemas, and server actions belong in `app/lib`. Development-only utilities (`app/query/route.ts`, `app/seed/route.ts`) support SQL inspection and seeding—disable or protect them before release. Static assets live in `public/`, with global config in the repository root (`auth.ts`, `tailwind.config.ts`, `tsconfig.json`).

## Build, Test, and Development Commands
Run `pnpm install` after pulling new dependencies. `pnpm dev` spins up the Turbopack-powered local server, `pnpm build` produces a production bundle, and `pnpm start` serves that bundle. Keep lint errors at bay with `pnpm lint`, and use `pnpm test` to invoke the experimental Next.js test runner. To refresh seed data locally, call `curl -X POST http://localhost:3000/seed` once the dev server is running.

## Coding Style & Naming Conventions
Code is TypeScript-first, with two-space indentation and double quotes enforced by the bundled ESLint config (`pnpm lint --fix` handles most fixes). Favor server components; opt into client components with the `"use client"` directive only when interactivity demands it. Co-locate styling using Tailwind utilities or CSS modules (see `app/ui/home.module.css`). Name routes with kebab-case (`latest-invoices/page.tsx`) and helpers with camelCase (`app/lib/utils.ts`).

## Testing Guidelines
The repository currently lacks automated tests, so new work should add coverage alongside code. Co-locate component and route tests with a `.test.tsx` suffix, or introduce feature-specific `__tests__` folders when grouping is clearer. Run `pnpm test` before opening a pull request and call out any intentional gaps. Database-heavy changes should include integration checks that stub the Postgres client.

## Commit & Pull Request Guidelines
Write concise, imperative commit titles (e.g., `Add invoice status badges`) and add a short body when context is needed. Squash fixup commits before merging. Pull requests should summarize the change, link issues, attach UI proof when visuals shift, and note any migrations or seeding steps. Confirm linting and tests pass, then request review from the relevant domain owner (`dashboard`, `auth`, or `infrastructure`).

## Security & Configuration Tips
Authenticate against Postgres with `POSTGRES_URL` in `.env.local`, and never commit secrets or connection strings. Local credential auth relies on bcrypt hashes seeded through `app/seed/route.ts`; rerun it if passwords drift. Audit `app/query/route.ts` and similar utilities before deploying, disabling or guarding them with platform-level auth.
