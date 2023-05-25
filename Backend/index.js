const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seatRoutes = require("./routes/seatRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");
const generateRandomCode = require("./controllers/random_code");
const User = require("./models/Users");
const Booking = require("./models/Bookings");
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
      userId: user._id.toString(), // Assign the ObjectId as a string
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
  const { userId, username, gender, email, phone, role } = req.user;

  const token = jwt.sign(
    { userId, username, gender, email, phone, role },
    process.env.TOKEN
  );

  res.json({ token });
});

app.get("/api/user/", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN);
    const { userId, username, gender, email, phone, role } = decoded;
    res.json({ userId, username, gender, email, phone, role });
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.post("/api/booking/", async (req, res) => {
  try {
    const { userId, movieId, theatreId } = req.body;

    const { journalCode, seatNumber, totalPrice } = req.body;

    if (
      !theatreId ||
      !userId ||
      !journalCode ||
      !seatNumber ||
      !totalPrice ||
      !movieId
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const booking = await Booking.create({
      theatreId,
      userId: userId, // Convert userId to ObjectId
      journalCode,
      seatNumber,
      totalPrice,
      movieId,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the booking." });
  }
});

app.put("/api/bookings/:id/approve", async (req, res) => {
  const bookingId = req.params.id;

  try {
    // Update the booking status to "approved" in the database
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "approved" },
      { new: true }
    );

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the booking." });
  }
});

app.put("/api/bookings/:bookingId/cancel", (req, res) => {
  const bookingId = req.params.bookingId;

  // Find the booking by ID and delete it
  Booking.findByIdAndDelete(bookingId)
    .then(() => {
      // Send a response indicating the success of the cancellation
      res.json({ message: "Booking canceled successfully" });
    })
    .catch((error) => {
      // Handle any errors that occur during the deletion
      console.error("An error occurred while canceling the booking:", error);
      res
        .status(500)
        .json({ error: "An error occurred while canceling the booking" });
    });
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
