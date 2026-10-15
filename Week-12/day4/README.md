# Day 4 — Next.js + Prisma Asset Manager

**Mini-project:** Asset Manager. Independent Next.js + PostgreSQL application.

**Learn:** Prisma schema, models, relations, migrations, seeding, CRUD, filtering, pagination, includes, and transactions.

## Start from zero
1. In **pgAdmin 4**, create an empty database `week12_day4`.
2. In VS Code PowerShell, open this `day4` folder and run:

```powershell
npm install
Copy-Item .env.example .env
```

3. Edit `.env` and replace `YOUR_PASSWORD` with your PostgreSQL password.
4. Continue:

```powershell
npx prisma migrate dev --name init
npx prisma generate
npm install -D tsx
npx tsx prisma/seed.ts
npm run dev
```

5. Open the local address shown by Next.js (normally `http://localhost:3000`).

## Test
- Add an asset, search, repair, and delete it.
- Add enough assets to test pagination.
- Use `npx prisma studio` in another terminal to inspect records and department relations.

**Success:** The browser shows assets stored in the `week12_day4` PostgreSQL database.

**Troubleshooting:** If you see `@prisma/client did not initialize yet`, stop the dev server, run `npx prisma generate`, remove `.next` with `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue`, and restart `npm run dev`. Keep the folder path capitalization consistent.

**Security:** This is a local learning project without authentication. Do not deploy publicly.
