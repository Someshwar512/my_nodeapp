const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");


// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
