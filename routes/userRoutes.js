const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../functions/userFunction");
const validateToken = require("../middleware/validateToken");

const router = express.Router();

// register the user
router.post("/register", registerUser);

//login the user
router.post("/login", loginUser);

//get the current user info
router.get("/current", validateToken, currentUser);

module.exports = router;
