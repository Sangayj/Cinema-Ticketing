const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seatRoutes = require("./routes/seatRoutes");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
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

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", userRoutes);
app.use(movieRoutes);
app.use(seatRoutes);

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});