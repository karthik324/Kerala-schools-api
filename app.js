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

//* get all schools of the corresponding district
app.get("/api/v1/schools/:district", schoolController.getSchoolByDistrict);

//* get all schools that is in a corresponding pincode of a village
app.get("/api/v1/schools/:district/:pincode", schoolController.getSchoolByPin);
