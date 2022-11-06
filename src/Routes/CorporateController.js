const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");
const Corporate = require("../Models/IndividualTrainee");


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