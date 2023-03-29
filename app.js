const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
const mongoose = require("mongoose");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");
const schoolController = require("./controllers/schoolController");
const School = require("./models/schoolModel");

const port = 3000;
const DB = process.env.DATABASE;

//mongoose connect
mongoose
  .connect(DB, {})
  .then((value) => app.listen(port))
  .then((val) => console.log(`listening on port ${port}`))
  .then((val) => console.log("connected to database!"))
  .catch((err) => console.log(err));

//*get all data of schools
app.get("/api/v1/schools", schoolController.getAllSchools);

//* get all schools of the corresponding district
app.get("/api/v1/schools/:district", schoolController.getSchoolByDistrict);

//* get a school's details by the school code
app.get("/api/v1/schools/code/:schoolCode", schoolController.getSchoolByCode);

//* get a school by its type
app.get("/api/v1/schools/type/:schoolType", schoolController.getSchoolByType);

///* get the details of a school
app.get("/api/v1/schools/find/:school", schoolController.getSchoolsByName);

//* get a school by a place
app.get("/api/v1/schools/place/:place", schoolController.getSchoolsByPlace);
