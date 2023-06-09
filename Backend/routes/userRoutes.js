const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/SignUp", userController.SignUp);

router.get("/users", userController.getUsers);

// DELETE user by ID
router.delete("/users/:userId", userController.deleteUser);

// PUT update user by ID
router.put("/users/:userId", userController.updateUser);
router.get("/users/:id", userController.getUserById);

module.exports = router;
