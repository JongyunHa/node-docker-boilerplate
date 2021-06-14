const { Pool } = require("pg");
export const pool = new Pool({
  user: "root",
  host: "postgres",
  password: "postgres",
  database: "app",
  port: 5432,
});
