const express = require("express");
const appRouter = express.Router();

const Instructor= require("../Models/Instructor");
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

appRouter.get("/instructor_viewCourses", (req, res) => {
  Instructor;
})


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
