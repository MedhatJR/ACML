const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");






appRouter.post("/Guest_filtercourse", async (req, res) => {
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



//view the price of each course
appRouter.get("/Guest_coursesPrice", async (req,res) => {
  res.send(await Course.find().select(["Price"]));
});


// filter the courses based on price (price can be FREE)
appRouter.post("/Guest_filtercourse_price", async (req, res) => {
    const Price = req.body.Price;
  Course.find(
    {
      Price :{$eq: req.body.Price}
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