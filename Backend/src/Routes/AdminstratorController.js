const express = require("express");
const cors = require("cors");
const appRouter = express.Router();
const Adminstrator = require("../Models/Adminstrator");
const Instructor = require("../Models/Instructor");
const CorporateTrainee = require("../Models/CorporateTrainee");
appRouter.use(cors());

appRouter.post("/Adminstrator_addadminstrator", async (req, res) => {
  const adminstrator = new Adminstrator({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
  });
  try {
    Adminstrator.create(adminstrator);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Adminstrator_addinstructor", async (req, res) => {
  const instructor = new Instructor({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    Courses: req.body.Courses,
    Rating: req.body.Rating,
  });
  try {
    Instructor.create(instructor);
    res.send("Instructor Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Adminstrator_addcorporatetrainee", async (req, res) => {
  const corporatetrainee = new CorporateTrainee({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
  });
  try {
    CorporateTrainee.create(corporatetrainee);
    res.send("Corporate Trainee Data is successfully Inserted");
  } catch (err) {
    res.send("Error");
  }
});

module.exports = appRouter;
