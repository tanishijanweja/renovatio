# Product Architecture

## Overview

Renovatio by Naresh Vijh is a portfolio website for an architect with 20+ years of experience. It presents his work, process, and practice to potential clients.

## Tech Stack

- **Next.js 16** (App Router, React Server Components) — full-stack framework
- **React 19** — UI
- **Tailwind CSS v4** — styling
- **shadcn/ui** — component primitives (shared in `packages/ui`)
- **Prisma 7 + PostgreSQL** — database (via `@prisma/adapter-pg`)
- **Turborepo + Bun** — monorepo build system and package manager
- **TypeScript 6** — type safety

## Monorepo Layout

```
renovatio/
├── apps/
│   └── web/          # Next.js application (the portfolio site)
├── packages/
│   ├── ui/           # Shared shadcn/ui components + design tokens (globals.css)
│   ├── db/           # Prisma schema, generated client, Supabase config
│   ├── env/          # Zod-validated env vars (@t3-oss/env-core)
│   └── config/       # Shared TypeScript config (tsconfig.base.json)
└── docs/
    ├── product/      # Product-level documentation (preamble)
    └── engineering/  # This folder — architecture, setup, decisions
```

## Key Packages

### `apps/web`
The portfolio site. Server components for content, client components for interactivity (theme toggle, loaders, etc.). Dev server runs on port `3001`.

### `packages/ui`
Houses all shared shadcn/ui primitives and the global stylesheet. Design tokens (colors, radius, fonts) live in `packages/ui/src/styles/globals.css`. App imports styles via `@renovatio/ui/globals.css`.

### `packages/db`
Prisma schema (`prisma/schema/schema.prisma`), generated client, and local Supabase config. All database scripts (`db:push`, `db:migrate`, etc.) run through this package.

### `packages/env`
Centralized, schema-validated environment variables. `DATABASE_URL`, `CORS_ORIGIN`, `NODE_ENV` are required server-side; validated at boot unless `SKIP_ENV_VALIDATION` is set.

### `packages/config`
Shared TypeScript base config consumed by every package.

## Design System

- **Primary text font: Manrope** (defined as `--font-sans` in the theme).
- Design tokens are defined in CSS variables in `globals.css` (`--background`, `--foreground`, `--primary`, etc.), mapped into Tailwind utilities via `@theme inline`.
- Light/dark themes via `.dark` class variant; next-themes handles runtime toggling.

## Data Flow

- Server components render content and can query the database through `@renovatio/db`.
- Client components communicate via props/context; Prisma client runs on the server.
- Env vars are validated once in `packages/env` and reused across web and db packages.

## Conventions

- Components in `packages/ui` are shared primitives only.
- App-specific components live in `apps/web/src/components`.
- Fonts and global styles belong in `packages/ui` (or the app layout for Google-font loading).
