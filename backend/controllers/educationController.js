const Education = require("../models/Education");

exports.getEducation = async (req, res) => {
  const data = await Education.find();
  res.json(data);
};

exports.createEducation = async (req, res) => {
  const data = await Education.create(req.body);
  res.json(data);
};

exports.updateEducation = async (req, res) => {
  const data = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
