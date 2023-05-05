// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "cjnvrt5487ryudbhnfn978eagyfbhn23878");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

exports.checkAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};
