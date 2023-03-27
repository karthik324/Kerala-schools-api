const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: [true, "Index should be given"],
  },
  schoolCode: {
    type: String,
    required: [true, "A school must have a code"],
  },
  schoolName: {
    type: String,
    required: [true, "A school must have a name"],
  },
  phone: {
    type: String,
    required: [true, "A school must have a phone number"],
  },
  email: {
    type: String,
    required: [true, "A school must have an email"],
  },
  schoolType: {
    type: String,
    required: [true, "A school must specify it's type"],
  },
  place: {
    type: String,
    required: [true, "A school must have a place"],
  },
  educationalDistrict: {
    type: String,
  },
  assemblyConstituancy: {
    type: String,
  },
  district: {
    type: String,
    required: [true, "A school must specify it's district"],
  },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
