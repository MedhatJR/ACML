const express = require("express");
const appRouter = express.Router();

const Instructor = require("../Models/IndividualTrainee");
const Course = require("../Models/Course");

appRouter.get("/instructor_viewCourses", (req, res) => {
  Instructor;
});
