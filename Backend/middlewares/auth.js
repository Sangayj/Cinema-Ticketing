const User = require("../models/Users");

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    // User is an admin
    next();
  } else {
    // User is not an admin
    // Handle unauthorized access, e.g., send an error response
    res.status(401).json({ error: "Unauthorized" });
  }
};
