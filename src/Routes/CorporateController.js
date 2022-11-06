const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");
const Corporate = require("../Models/CorporateTrainee");

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