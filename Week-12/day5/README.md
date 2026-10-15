# Day 5 — Week 12 Final: Task & Asset Tracker

**Mini-project:** Standalone weekly capstone. It combines Week 12 concepts and does **not** use Days 1–4 projects or databases.

**Learn:** ERD/relations, advanced SQL reports, indexes/transactions/constraints, Prisma CRUD, parameterized queries, backups, soft deletes, and audit columns.

## Start from zero
1. In **pgAdmin 4**, create an empty database `week12_day5`.
2. In VS Code PowerShell, open this `day5` folder and run:

```powershell
npm install
Copy-Item .env.example .env
```

3. Edit `.env` and replace `YOUR_PASSWORD` with your PostgreSQL password.
4. Run:

```powershell
npx prisma migrate dev --name init
npx prisma generate
npm install -D tsx
npx tsx prisma/seed.ts
npm run dev
```

5. Open the address shown in the terminal (normally `http://localhost:3000`).

## Test all five days
- **Day 1:** Read `prisma/schema.prisma`; find Department, User, Profile, Asset, WorkOrder, Assignment and their relations.
- **Day 2:** In pgAdmin Query Tool for `week12_day5`, run `reports.sql` and inspect joins, aggregates, CTEs, subqueries and view.
- **Day 3:** Examine indexes/constraints in the Prisma schema; inspect EXPLAIN and transaction examples in `reports.sql`.
- **Day 4:** Add and search assets; add work orders, mark them done, and test pagination after adding several assets.
- **Day 5:** Archive an asset (soft delete); inspect `deletedAt`, `createdAt`, `updatedAt`, and `createdBy` in Prisma Studio (`npx prisma studio`). Prisma's normal query methods safely parameterize search inputs.

## Backup and restore (optional local practice)
Run in PowerShell with PostgreSQL `bin` tools available on PATH:

```powershell
.\backup.ps1
```

This creates `backup.dump`. **Only restore into your disposable `week12_day5` practice database** because restore uses `--clean` and can overwrite existing data:

```powershell
.\restore.ps1
```

If `pg_dump` or `pg_restore` is not recognized, add your installed PostgreSQL `bin` folder to PATH.

## Finish
Open `REVIEW.md` and complete the short mentor checklist.

**Troubleshooting:** If `@prisma/client did not initialize yet`, stop Next.js, run `npx prisma generate`, remove `.next` with `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue`, then restart `npm run dev`.

**Security:** This is a local learning application without login/authentication; do not deploy publicly.
