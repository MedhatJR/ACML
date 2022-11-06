const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");

appRouter.post("/Instructor_SelectCountry", async (req, res) => {
    Instructor.findOneAndUpdate(
        { Email: req.body.Email },
        {Country: req.body.Country  },
    { new: true },
        (error, data) => {
          if(error) {
            consosle.log(error);
          }
          else{
            console.log(data);
          }
        } )
  });
  module.exports = appRouter;

  appRouter.get("/Instructor_retrieveCourses", async (req,res) => {
   res.send(await Course.find().select(["Title","Hours","Rating"]));
  });