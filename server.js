const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "Nodetestdb",
});

// CHECK CONNECTION
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// ---------------------------
// CREATE USER (POST)
// ---------------------------
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    res.json({ message: "User added", id: result.insertId });
    console.log({result});
  });
});

// ---------------------------
// READ USERS (GET)
// ---------------------------
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// ---------------------------
// READ SINGLE USER (GET BY ID)
// ---------------------------
app.get("/users/:id", (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// ---------------------------
// UPDATE USER (PUT)
// ---------------------------
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;

  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: "User updated" });
  });
});

// ---------------------------
// DELETE USER (DELETE)
// ---------------------------
app.delete("/users/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: "User deleted" });
  });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
