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
   await  Course.create(course);

   const name = req.body.Name;
   Instructor.findOneAndUpdate({lastName : req.body.Instructor},  {$push: {Courses : {name}}} ,function(error, doc) {

      
      if(error){
       res.send("update_Error");
      }else{
        res.send("Data Inserted");
       // res.send(doc);
      }
  });
  
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

appRouter.post("/Instructor_filtercourse", async (req, res) => {
  const minrating = req.body.minrating;
  const maxrating = req.body.maxrating;
  Course.find({ Rating : { $gte: minrating , $lte: maxrating } }, function(err , result) {
    if(err){
      res.send("Error");
    }
      else {
        res.send(result);
      }
  });
  

});

module.exports = appRouter;
