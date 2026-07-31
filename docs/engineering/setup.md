# Setup

## Prerequisites

- **Bun** (package manager; version pinned to `bun@1.3.7` via `packageManager` in root `package.json`)
- **Node.js** (compatible with the Next.js 16 / Turborepo toolchain)
- **PostgreSQL** (or a hosted DB / Supabase instance)

## Install

```bash
bun install
```

This also runs `prisma generate` (postinstall in `packages/db`).

## Environment Variables

Required server-side variables (validated by `packages/env`):

| Variable            | Description                       |
| ------------------- | --------------------------------- |
| `DATABASE_URL`      | PostgreSQL connection string      |
| `CORS_ORIGIN`       | Allowed CORS origin (a URL)       |
| `NODE_ENV`          | `development` / `production` / `test` (defaults to `development`) |

Optional: `SKIP_ENV_VALIDATION=1` to bypass validation during builds.

Env files live at `apps/web/.env` (copy from a reference / create as needed).

## Database

The schema currently declares the PostgreSQL datasource and Prisma client generator; models are added as the product evolves.

```bash
bun run db:generate   # Regenerate the Prisma client/types
bun run db:push       # Push schema to the database (no migration history)
bun run db:migrate    # Create and apply migrations
bun run db:studio     # Open Prisma Studio UI
```

## Development

```bash
bun run dev           # Start all apps in dev mode
bun run dev:web       # Start only the web app (http://localhost:3001)
```

## Build & Checks

```bash
bun run build         # Build all apps/packages
bun run check-types   # Type-check across all apps
```

## Common Scripts (root)

- `dev` — turbo run dev
- `build` — turbo run build
- `check-types` — turbo run check-types
- `dev:web` — web app only
- `db:*` — database workflows (push, generate, migrate, studio)

See `package.json` and `turbo.json` for the full task graph.

## Fonts

The primary text font is **Manrope**. Load it via `next/font/google` in `apps/web/src/app/layout.tsx` and wire it into the `--font-sans` theme token in `packages/ui/src/styles/globals.css`.
