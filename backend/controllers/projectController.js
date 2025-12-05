const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const data = await Project.find();
  res.json(data);
};

exports.createProject = async (req, res) => {
  const data = await Project.create(req.body);
  res.json(data);
};

exports.updateProject = async (req, res) => {
  const data = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
