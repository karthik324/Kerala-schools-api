const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A school must have a name"],
  },
  type: {
    type: String,
    required: [true, "A school must have a type"],
  },
  place: {
    type: String,
    required: [true, "A school must have a place"],
  },
  district: {
    type: String,
    required: [true, "A school must have a district"],
  },
  pincode: {
    type: Number,
    required: [true, "A school must have a pincode"],
  },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
