const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  school: String,
  degree: String,
  startYear: String,
  endYear: String,
  details: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Education", educationSchema);
