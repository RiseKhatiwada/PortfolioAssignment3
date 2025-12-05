const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.json(data);
};

exports.getContacts = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
