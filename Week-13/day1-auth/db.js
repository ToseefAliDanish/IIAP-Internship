const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "day1_db",
    password: "toseef2004",
    port: 5432
});

module.exports = pool;