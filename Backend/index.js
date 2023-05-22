const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seatRoutes = require("./routes/seatRoutes");
const bookingsRoutes = require("./routes/bookings");
const generateRandomCode = require("./controllers/random_code");
const User = require("./models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const randomCode = generateRandomCode();
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
app.use(bookingsRoutes);

async function authenticate(req, res, next) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  try {
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    req.user = {
      username: user.username,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };
    return next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res
      .status(500)
      .json({ error: "An error occurred during authentication" });
  }
}

app.post("/api/Login", authenticate, async (req, res) => {
  const { username, gender, email, phone, role } = req.user;

  const token = jwt.sign({ username, gender, email, phone, role }, randomCode);

  res.json({ token });
});

app.get("/api/user", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json("Unauthorized");
  }
  try {
    const decoded = jwt.verify(token, randomCode);
    const { username, gender, email, phone, role } = decoded;
    res.json({ username, gender, email, phone, role });
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
