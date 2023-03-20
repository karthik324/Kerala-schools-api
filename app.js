const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
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

app.get("/api/v1/schools/:district/all", schoolController.getSchoolByDistrict);

app.get("/api/v1/schools/:district/:pincode", schoolController.getSchoolByPin);
