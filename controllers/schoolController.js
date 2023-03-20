const School = require("../models/schoolModel");

const getSchoolByDistrict = (req, res) => {
  const district = req.params.district;

  School.find({
    district: district,
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};

const getSchoolByPin = (req, res) => {
  const district = req.params.district;
  const pincode = req.params.pincode;

  School.find({
    district: district,
    pincode: pincode,
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getSchoolByDistrict,
  getSchoolByPin,
};
