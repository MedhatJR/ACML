const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");
const Corporate = require("../Models/CorporateTrainee");
const CorporateTrainee = require("../Models/CorporateTrainee");   ///////Twice????????????
const cors = require("cors");
const Exams = require("../Models/Exams");
appRouter.use(cors());
const Instructor = require("../Models/Instructor");

appRouter.get("/Corporate_read", async (req, res) => {
  Corporate.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.get("/Corporate_searchCourse", async (req, res) => {
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

appRouter.post("/Corporate_SelectCountry", async (req, res) => {
  Corporate.findOneAndUpdate(
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


appRouter.post("/Corporate_rateInstructor", async (req, res) => {
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

appRouter.post("/Corporate_rateCourse", async (req, res) => {
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

appRouter.get("/Corporate_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});
appRouter.post("/Corporate_Login", async (req, res) => {
  const Email = req.body.email;
  const Password = req.body.Password;
  Corporate.find({ Email : Email , Password: Password} ,(err,data ) => {
  if(err){res.send(err);}
  else { res.send("loged in");}
  }
  );
});

appRouter.get("/Corporate_retrieveAll", async (req, res) => {
  res.send(
    await CorporateTrainee.find().select([
      "Username",
      "Email",
      "Password",
      "Country",
      "Firstname",
      "Lastname",
      "Gender",
    ])
  );
});



appRouter.post("/createCorporateUser", async (req, res) => {
  const newuser = new Corporate({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
  });

  try {
    await Corporate.create(newuser);
  } catch (err) {
    console.log(err);
  }

  console.log("Hello");
  res.status(200).send("registration successful");
});

appRouter.post("/Corporate_filtercourse", async (req, res) => {
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
appRouter.get("/Corporate_view_exam", async (req, res) => {
  res.send(await Exams.find().select(["Question1", "Choice11", "Choice12","Choice13", "Choice14", "Question2","Choice21", "Choice22", "Choice23","Choice24"]));
});
  

appRouter.post("/Corporate_ChangePassword" , async(req,res) => {
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;
  Corporate.findOneAndUpdate(
    { Password : OldPassword },
    { Password : NewPassword },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        res.status(200).send("update done");
      }
    }
  );
  
});

appRouter.post("/Corporate_ForgotPassword" , async(req,res) => {
  const Username = req.body.Username;
  const NewPassword = req.body.NewPassword;
  Corporate.findOneAndUpdate(
    { Username: Username },
    { Password : NewPassword },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        res.status(200).send("update done");
      }
    }
  );
  
});
module.exports = appRouter;
