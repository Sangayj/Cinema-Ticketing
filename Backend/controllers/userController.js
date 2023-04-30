// backend/controllers/userController.js
exports.getUserDashboard = (req, res) => {
  res.json({ message: "User dashboard" });
};

exports.getAdminDashboard = (req, res) => {
  res.json({ message: "Admin dashboard" });
};
