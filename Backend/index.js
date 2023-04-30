// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Connect to the database
mongoose
  .connect("mongodb+srv://jamtsho:sangay@cinema.cupetj2.mongodb.net/data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use("/api", authRoutes);

// Start the server
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
