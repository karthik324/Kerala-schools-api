const express = require("express");
const School = require("./../models/schoolModel");
const router = express.Router();

router.get("/kasargod/all", (req, res) => {
  School.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
