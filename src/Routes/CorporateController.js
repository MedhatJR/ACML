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

  module.exports = appRouter;