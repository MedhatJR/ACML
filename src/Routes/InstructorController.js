const express = require("express");
const appRouter = express.Router();

const Instructor = require("../Models/IndividualTrainee");
const Course = require("../Models/Course");
appRouter.post("/Instructor_addcourse", async (req, res) => {
  const course = new Course({
    Name: req.body.Name,
    Title: req.body.Title,
    Subtitle: req.body.Subtitle,
    Shortsummary: req.body.Shortsummary,
    Subject: req.body.Subject,
    Price: req.body.Price,
    Instructor: req.body.Instructor,
    Rating: req.body.Rating,
    Hours: req.body.Hours,
    Views: req.body.Views,
  });
  try {
    await Course.create(course);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.get("/instructor_viewCourses", (req, res) => {
  Instructor;
});

module.exports = appRouter;
