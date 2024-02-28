const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../functions/contactFunctions");
const validateToken = require("../middleware/validateToken");

//validate token
router.use(validateToken);

// get contacts and post contact
router.route("/").get(getContacts).post(createContact);

// get contact by _id or put or delete contact
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
