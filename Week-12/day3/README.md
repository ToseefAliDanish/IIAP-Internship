# Day 3 — Indexes, Transactions and Constraints

**Mini-project:** PostgreSQL Performance Lab. Fully independent.

**Learn:** Indexes, EXPLAIN ANALYZE, transactions/ACID, UNIQUE, CHECK, FOREIGN KEY, ON DELETE.

## Start from zero
1. In **pgAdmin 4**, create a database named `week12_day3`.
2. Select the database → **Query Tool**.
3. Open `performance.sql` and execute it with **F5**.
4. To compare plans clearly, select and run the `EXPLAIN ANALYZE` queries individually before and after `CREATE INDEX`.

## Test
- Compare query plans and execution times; an index is **not guaranteed** to be chosen for a low-selectivity query.
- Observe the `UPDATE` inside `BEGIN` / `ROLLBACK`: the change is undone.
- Try inserting a duplicate `code` or invalid `status` in a separate query to see constraints reject it.

**Success:** You can explain why an index may help and why a transaction rollback protects data.

**Note:** Run setup once in the fresh database.
