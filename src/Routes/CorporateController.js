const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");
const Corporate = require("../Models/CorporateTrainee");

appRouter.get("/Corporate_read", async (req, res) => {
    Corporate.find({ Name: req.body.Name }, (error, data) => {
      if (error) {
        res.send(error);
      } else res.send(data);
    });
  });

  appRouter.get("/Corporate_searchCourse", async (req, res) => {
    Course.find({ $or : [{Title: req.body.Title} ,{ Subject: req.body.Subject }, {Instructor: req.body.Instructor}]}, (error, data) => {
      if (error) {
        res.send(error);
      } else res.send(data);
    });
  });
  

appRouter.post("/Corporate_SelectCountry", async (req, res) => {
    Corporate.findOneAndUpdate(
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

  appRouter.get("/Corporate_retrieveCourses", async (req,res) => {
    res.send(await Course.find().select(["Title","Hours","Rating"]));
  })


appRouter.post("/Corporate_filtercourse", async (req, res) => {
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