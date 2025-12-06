

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");


// Middleware
app.use(express.json());

// Use routes
app.use("/api", userRoutes);


// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
