const express = require("express");
const router = express.Router();
const { auth, admin } = require("../middleware/auth");
const { getProjects, createProject, updateProject, deleteProject } = require("../controllers/projectController");

router.get("/", getProjects);
router.post("/", auth, admin, createProject);
router.put("/:id", auth, admin, updateProject);
router.delete("/:id", auth, admin, deleteProject);

module.exports = router;
