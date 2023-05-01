// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

router.get("/dashboard", authMiddleware.verifyToken, (req, res) => {
  if (req.user.isAdmin) {
    userController.getAdminDashboard(req, res);
  } else {
    userController.getUserDashboard(req, res);
  }
});

module.exports = router;
