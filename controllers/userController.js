const User = require("../models/userModel");

// CREATE USER
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  User.createUser(name, email, (err, result) => {
    if (err) throw err;

    res.json({
      message: "User added successfully",
      id: result.insertId,
      name,
      email
    });
  });
};

// GET ALL USERS
exports.getUsers = (req, res) => {
  User.getUsers((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// GET SINGLE USER
exports.getUserById = (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

// UPDATE USER
exports.updateUser = (req, res) => {
  const { name, email } = req.body;

  User.updateUser(req.params.id, name, email, (err, result) => {
    if (err) throw err;
    res.json({ message: "User updated successfully" });
  });
};

// DELETE USER
exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: "User deleted successfully" });
  });
};
