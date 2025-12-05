const express = require("express");
const router = express.Router();
const { auth, admin } = require("../middleware/auth");
const { getEducation, createEducation, updateEducation, deleteEducation } = require("../controllers/educationController");

router.get("/", getEducation);
router.post("/", auth, admin, createEducation);
router.put("/:id", auth, admin, updateEducation);
router.delete("/:id", auth, admin, deleteEducation);

module.exports = router;
