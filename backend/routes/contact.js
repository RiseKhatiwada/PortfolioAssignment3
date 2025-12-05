const express = require("express");
const router = express.Router();
const { auth, admin } = require("../middleware/auth");
const { submitContact, getContacts, deleteContact } = require("../controllers/contactController");

router.post("/", submitContact);
router.get("/", auth, admin, getContacts);
router.delete("/:id", auth, admin, deleteContact);

module.exports = router;
