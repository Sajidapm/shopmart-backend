
const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUserbyId,
    updateUser,
    deleteUser,
    checkUser
} = require("../controllers/userController");

// GET all users
router.get("/", getUsers);

// GET user by ID
router.get("/:id", getUserbyId);

// UPDATE user by ID
router.put("/:id", updateUser);

// DELETE user by ID
router.delete("/:id", deleteUser);

// Check user
router.get("/validate", checkUser);

module.exports = router;
