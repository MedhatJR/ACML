const express = require("express");
const appRouter = express.Router();

//const Instructor = require("../Models/IndividualTrainee");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
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

appRouter.get("/instructor_viewCourses", async (req, res) => {
  //data = req.body.Courses;
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  }).select("Courses");
});

appRouter.get("/instructor_search", async (req, res) => {
  //data = req.body.Courses;
  Course.find(
    {
      $and: [
        { Instructor: req.body.Instructor },

        { $or: [{ Title: req.body.Title }, { Subject: req.body.Subject }] },
      ],
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else res.send(data);
    }
  );
});

appRouter.post("/instructor_filter", async (req, res) => {
  const minPrice = req.body.minPrice;
  const maxPrice = req.body.maxPrice;
  const requiredSubj = req.body.requiredSubj;
  Course.find(
    {
      $and: [
        { Instructor: { $eq: req.body.Instructor } },
        {
          $or: [
            {
              $and: [
                { Price: { $gte: minPrice, $lte: maxPrice } },

                { Subject: { $eq: requiredSubj } },
              ],
            },
            { Price: { $gte: minPrice, $lte: maxPrice } },
            { Subject: { $eq: requiredSubj } },
          ],
        },
      ],
    },
    function (err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send(result);
      }
    }
  );
});

appRouter.post("/Instructor_add", async (req, res) => {
  const newinstructor = new Instructor({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    Courses: req.body.Courses,
  });
  try {
    Instructor.create(newinstructor);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});
module.exports = appRouter;
