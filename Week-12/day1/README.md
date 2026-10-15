# Day 1 — Database Design and ERD

**Mini-project:** Asset Management Database. Independent of every other day.

**Learn:** 1NF–3NF, one-to-one, one-to-many, many-to-many, ER diagrams, names, and data types.

## Start from zero
1. Open **pgAdmin 4** and connect to PostgreSQL.
2. Right-click **Databases → Create → Database**, name it `week12_day1`, and save.
3. Select `week12_day1` → **Query Tool**.
4. Open `schema.sql` in the Query Tool and press **F5** to execute.
5. Read `ERD.md` for the relationship diagram.

## Test
- Refresh **Schemas → public → Tables** to see the tables.
- Run `SELECT * FROM work_orders;` in Query Tool.
- Identify the foreign keys and the join table in `schema.sql`.

**Success:** The tables exist and the ERD explains how they connect.

**Note:** Run the setup SQL once in the new database; rerunning `CREATE TABLE` statements will report existing tables.
