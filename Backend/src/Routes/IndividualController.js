// #Task route solution

const express = require("express");
const Course = require("../Models/Course");
const appRouter = express.Router();
const Individual = require("../Models/IndividualTrainee");
const Exam = require("../Models/Exams");
const cors = require("cors");
const Instructor = require("../Models/Instructor");
const IndividualExam = require("../Models/IndividualExam")
appRouter.use(cors());

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
    { Email: req.body.Email },
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
    { Name: req.body.Name },
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

appRouter.post("/addIndividual", async (req, res) => {
  const newIndividual = new Individual({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    RegisteredCourses: req.body.RegisteredCourses,
  });
  try {
    Individual.create(newIndividual);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.get("/Individual_retrieveMyCourse", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  var RegisteredCoursesArr = [];
  var final = [];

  Individual.find(
    {
      Username: { $eq: req.body.Username },
    },
    function (err, result) {
      if (err) {
        console.log("err");
      } else {
        // console.log(RegisteredCoursesArr);
        console.log("Done1");
        //RegisteredCoursesArr = result[0];
        RegisteredCoursesArr = result;
        final = RegisteredCoursesArr[0].RegisteredCourses;
        console.log(final[1]);
        console.log(final.length);

        Course.find({ Title: final }, function (err, result1) {
          if (err) {
            res.send("err");
          } else {
            console.log(result1);
            res.send({ CourseDetails: result1 });
            console.log("Done2");
          }
        }).select([
          "Title",
          "Shortsummary",
          "Subject",
          "Price",
          "Instructor",
          "Rating",
        ]);
      }
    }
  ).select("RegisteredCourses");
  console.log(final.length);
});

appRouter.get("/Individual_retrieveMyCourseData", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  var RegisteredCoursesArr = [];
  var final = [];
  var myCourse = req.body.myCourse;
  Individual.find(
    {
      Username: { $eq: req.body.Username },
    },
    function (err, result) {
      if (err) {
        console.log("err");
      } else {
        // console.log(RegisteredCoursesArr);
        console.log("Done1");
        //RegisteredCoursesArr = result[0];
        RegisteredCoursesArr = result;
        final = RegisteredCoursesArr[0].RegisteredCourses;
        console.log(final[1]);
        console.log(final.length);

        for (let i = 0; i < final.length; i++) {
          if (myCourse == final[i]) {
            answer = final[i];
            break;
          }
        }
        Course.find({ Title: answer }, function (err, result1) {
          if (err) {
            res.send("err");
          } else {
            console.log(result1);
            res.send({ CourseDetails: result1 });
            console.log("Done2");
          }
        }).select([
          "Title",
          "Shortsummary",
          "Subject",
          "Price",
          "Instructor",
          "Rating",
        ]);
      }
    }
  ).select("RegisteredCourses");
  console.log(final.length);
});

//submit the answers to the exercise after completing it

appRouter.post("/Instructor_submitAnswer", async (req, res) => {
  const newAnswer = new IndividualExam({
    Question1: req.body.Question1,
    Answer1: req.body.Answer1,
    Question2: req.body.Question2,
    Answer2: req.body.Answer2,

  });
  try {
    await IndividualExam.create(newAnswer);
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("Submitted Answer");
});

//view his/her grade from the exercise
appRouter.get("/Individual_Grade", async (req, res) => {
  var grade = 0;
  var ans1 = Exam.findOne({}, (error, data) => { if (error) { console.log("error") } else console.log("done1"); }).select("Answer1")
  var ans11 = IndividualExam.findOne({}, (error, data) => { if (error) { console.log("error") ; } else console.log("done2"); }).select("Answer1")
 var ans2 = Exam.findOne({}, (error, data) => { if (error) { console.log("error")  } else console.log("done21"); }).select("Answer2")
 var ans22 = IndividualExam.findOne({}, (error, data) => { if (error) {console.log("error") } else console.log("done22"); }).select("Answer2")
 
  if (ans1[1]==(ans11[1])) {
    grade += 1;
    console.log(grade);
  }
  if (ans2[1]==(ans22[1])) {
    grade += 1;
  }
  
  res.status(200).send({Grade: grade});
}
);

//view the questions with the correct solution to view the incorrect answers
/*
appRouter.get("/Individual_correctSolution", async (req, res) => {
  
  var grade = 0;
  var ans1 = Exam.findOne({}, (error, data) => { if (error) { console.log("error") } else console.log("done1"); }).select("Answer1")
  var ans11 = IndividualExam.findOne({}, (error, data) => { if (error) { console.log("error") ; } else console.log("done2"); }).select("Answer1")
 var ans2 = Exam.findOne({}, (error, data) => { if (error) { console.log("error")  } else console.log("done21"); }).select("Answer2")
 var ans22 = IndividualExam.findOne({}, (error, data) => { if (error) {console.log("error") } else console.log("done22"); }).select("Answer2")
  if (ans1[1]==(ans11[1])) {
    
    
    grade += 1;
    console.log(grade);
  }
  if (ans2[1]==(ans22[1])) {
    grade += 1;
  }
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
  res.status(200).send({Grade: grade});
}
);
*/
module.exports = appRouter;
