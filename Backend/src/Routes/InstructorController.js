const express = require("express");
const appRouter = express.Router();
const cors = require("cors");
appRouter.use(cors());

const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");

appRouter.get("/Instructor_read", async (req, res) => {
  Instructor.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.get("/Instructor_searchCourse", async (req, res) => {
  Course.find(
    {
      $or: [
        { Title: req.body.Title },
        { Subject: req.body.Subject },
        { Instructor: req.body.Instructor },
      ],
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else res.send(data);
    }
  );
});

appRouter.post("/Instructor_SelectCountry", async (req, res) => {
  Instructor.findOneAndUpdate(
    { Email: req.body.Email },
    { Country: req.body.Country },
    { new: true },
    (error, data) => {
      if (error) {
        consosle.log(error);
      } else {
        console.log(data);
      }
    }
  );
});

appRouter.get("/Instructor_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});

appRouter.post("/Instructor_addcourse", async (req, res) => {
  const course = new Course({
    Title: req.body.Title,
    Subtitle: req.body.Subtitle,
    Shortsummary: req.body.Shortsummary,
    Subject: req.body.Subject,
    Price: req.body.Price,
    Instructor: req.body.Instructor,
    Rating: req.body.Rating,
    Hours: req.body.Hours,
    Views: req.body.Views,
    PreviewLink: req.body.PreviewLink,
    SubLink: req.body.SubLink,
  });
  try {
    await Course.create(course);

    const title = req.body.Title;
    Instructor.findOneAndUpdate(
      { Lastname: { $eq: req.body.Instructor } },
      { $push: { Courses: { title } } },
      function (error, doc) {
        if (error) {
          res.send("update_Error");
        } else {
          res.send("Data Inserted");
          // res.send(doc);
        }
      }
    );
  } catch (error) {
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
appRouter.post("/Instructor_filtercourse", async (req, res) => {
  const minrating = req.body.minrating;
  const maxrating = req.body.maxrating;
  const Subject = req.body.Subject;
  Course.find(
    {
      $or: [
        { Rating: { $gte: minrating, $lte: maxrating } },
        { Subject: Subject },
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

module.exports = appRouter;
