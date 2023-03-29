const School = require("../models/schoolModel");

const getAllSchools = async (req, res) => {
  const schools = await School.find({});
  if (schools.length == 0) {
    res.status(404).json({
      statusCode: 200,
      message: "No schools data for now",
    });
  } else {
    res.status(200).json({
      statusCode: 200,
      schools: schools.length,
      data: schools,
    });
  }
};

const getSchoolByDistrict = async (req, res) => {
  const district = req.params.district;

  const data = await School.find({
    district: new RegExp(district, "i"),
  });
  if (data.length == 0)
    res.status(404).json({
      statusCode: 404,
      message: "Item not found",
    });
  else
    res.status(200).json({
      statusCode: 200,
      schools: data.length,
      data: data,
    });
};

const getSchoolByCode = async (req, res) => {
  const schoolCode = req.params.schoolCode;
  try {
    const data = await School.find({ schoolCode: schoolCode });
    if (data.length == 0) {
      res.status(404).json({
        statusCode: 404,
        message: "Item not found",
      });
    } else {
      res.status(200).json({
        statusCode: 200,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getSchoolByType = async (req, res) => {
  try {
    const type = req.params.schoolType;
    const data = await School.find({
      schoolType: new RegExp(type, "i"),
    });
    if (data.length == 0) {
      res.status(404).json({
        statusCode: 404,
        message: "Item not found",
      });
    } else {
      res.status(200).json({
        statusCode: 200,
        schools: data.length,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getSchoolsByName = async (req, res) => {
  try {
    const school = req.params.school;
    const data = await School.find({
      schoolName: new RegExp(school, "i"),
    });
    if (data.length == 0) {
      res.status(404).json({
        statusCode: 404,
        message: "Item not found",
      });
    } else {
      res.status(200).json({
        statusCode: 200,
        schools: data.length,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getSchoolsByPlace = async (req, res) => {
  const place = req.params.place;
  try {
    const data = await School.find({
      place: new RegExp(place, "i"),
    });
    if (data.length == 0) {
      res.status(404).json({
        statusCode: 404,
        message: "Item not found",
      });
    } else {
      res.status(200).json({
        statusCode: 200,
        schools: data.length,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSchools,
  getSchoolByCode,
  getSchoolByDistrict,
  getSchoolByType,
  getSchoolsByName,
  getSchoolsByPlace,
};
