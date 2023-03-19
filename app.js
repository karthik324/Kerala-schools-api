const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");
const app = express();
const fs = require("fs");
const port = 3000;

const DB = process.env.DATABASE;

//mongoose connect
mongoose
  .connect(DB, {})
  .then((value) => console.log("Database successfully connected"))
  .catch((err) => console.log(err));
