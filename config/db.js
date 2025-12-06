const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "Nodetestdb",
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Failed", err);
    return;
  }
  console.log("MySQL Connected...");
});

module.exports = db;
