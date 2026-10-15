# Day 2 — Advanced SQL Reports

**Mini-project:** Work Order Reports. Uses its own database; Day 1 is not needed.

**Learn:** INNER/LEFT/RIGHT JOIN, GROUP BY, HAVING, COUNT/AVG, subqueries, CTEs, and views.

## Start from zero
1. In **pgAdmin 4**, create a database named `week12_day2`.
2. Select that database → **Query Tool**.
3. Open `reports.sql`.
4. Execute the file with **F5**. To inspect one result at a time, select one `SELECT` statement and execute the selection.

## Test
- Check the join results for work orders and departments.
- Check `open_count` and `average_completion_time`.
- Run `SELECT * FROM department_report;` to test the view.

**Success:** SQL reports return rows, including departments without work orders.

**Note:** Run the setup SQL once in a new database; rerunning the entire file will attempt to recreate the tables and view.
