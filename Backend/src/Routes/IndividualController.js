// #Task route solution

const express = require("express");
const Course = require("../Models/Course");
const appRouter = express.Router();
const Individual = require("../Models/IndividualTrainee");
const cors = require("cors");
appRouter.use(cors());
const Instructor = require("../Models/Instructor");

//to display the register page
appRouter.get("/", async (req, res) => {
  res.status(200).send("Home");
});

appRouter.get("/createUser", (req, res) => {
  res.status(200).send("Welcome to registration page");
});
appRouter.post("/createUser", async (req, res) => {
  const newuser = new Individual({
    Name: req.body.Name,
    Email: req.body.Email,
    Age: req.body.Age,
    BornIn: req.body.BornIn,
    LivesIn: req.body.LivesIn,
    MartialStatus: req.body.MartialStatus,
    PhoneNumber: req.body.PhoneNumber,
    Job: req.body.Job,
  });
  try {
    await Individual.create(newuser);
  } catch (err) {
    console.log(err);
  }
  console.log("Hello");
  res.status(200).send("registration successful");
});
appRouter.post("/update", async (req, res) => {
  Individual.findOneAndUpdate(
    { Name: req.body.Name },
    { Email: req.body.Email },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );
  res.status(200).send("update done");
});

appRouter.post("/Individual_rateInstructor", async (req, res) => {
  Instructor.findOneAndUpdate(
    {Email: req.body.Email},
    { Rating: req.body.Rating },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );
  res.status(200).send("update done");
});

appRouter.post("/Individual_rateCourse", async (req, res) => {
  Course.findOneAndUpdate(
    {Name: req.body.Name},
    { Rating: req.body.Rating },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );
  res.status(200).send("update done");
});

appRouter.get("/Individual_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});

appRouter.get("/Individual_read", async (req, res) => {
  Individual.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.get("/Individual_searchCourse", async (req, res) => {
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

appRouter.post("/Individual_SelectCountry", async (req, res) => {
  Individual.findOneAndUpdate(
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

appRouter.post("/delete", (req, res) => {
  Individual.findOneAndRemove(
    { Name: req.body.Name },
    (error, deletedRecord) => {
      if (!error) {
        console.log(deletedRecord);
      }
    }
  );
});

appRouter.post("/Individual_filtercourse", async (req, res) => {
  const minrating = req.body.minrating;
  const maxrating = req.body.maxrating;
  Course.find(
    { Rating: { $gte: minrating, $lte: maxrating } },
    function (err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send(result);
      }
    }
  );
});

appRouter.get("/Individual_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});

appRouter.post("/Individual_retrieveMyCourse", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  const RegisteredCourses = Individual.find(
    {
      RegisteredCourses: { $eq: req.body.RegisteredCourses },
    },
    function (err, result) {
      if (err) {
        res.send("Error");
      } else {
        res.send(result);
      }
    }
  );
  Course.find({ Title: { $eq: RegisteredCourses } }, function (err, result) {
    if (err) {
      res.send("Error");
    } else {
      res.send(result);
    }
  }).select([
    "Title",
    "Subtitle",
    "Shortsummary",
    "Subject",
    "Price",
    "Instructor",
    "Rating",
    "Hours",
    "Views",
  ]);
});

module.exports = appRouter;
