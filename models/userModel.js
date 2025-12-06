const db = require("../config/db");

// CREATE USER
exports.createUser = (name, email, callback) => {
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], callback);
};

// GET ALL USERS
exports.getUsers = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, callback);
};

// GET USER BY ID
exports.getUserById = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};

// UPDATE USER
exports.updateUser = (id, name, email, callback) => {
  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, id], callback);
};

// DELETE USER
exports.deleteUser = (id, callback) => {
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};
