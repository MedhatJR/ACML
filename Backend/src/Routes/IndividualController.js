// #Task route solution

const express = require("express");
const Course = require("../Models/Course");
const appRouter = express.Router();
const Individual = require("../Models/IndividualTrainee");
const Exams = require("../Models/Exams");
const cors = require("cors");
const Instructor = require("../Models/Instructor");
const IndividualExam = require("../Models/IndividualExam");
appRouter.use(cors());
const mongoose = require("mongoose");
const Problem = require("../Models/Problem");
const dote = require("dotenv").config();
const Refundrequest= require("../Models/Refundrequest");

let alert = require('alert'); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//to display the register page

appRouter.post("/Individual_Register", async (req, res) => {
  const newuser = ({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    Wallet:req.body.Wallet,
  });
  email = newuser.Email;
  try {
    if (
      !(
        newuser.Username &&
        newuser.Email &&
        newuser.Password &&
        newuser.Country &&
        newuser.Firstname &&
        newuser.Lastname &&
        newuser.Gender
      )
    ) {
      res.status(200).send("All input is required");
    }
    const oldUser = await Individual.find({ Email: { $eq: req.body.Email } });

    console.log(oldUser);
    console.log(email);

    if (oldUser != "") {
      return res.status(200).send("User Already Exist. Please Login");
    }

    await Individual.create(newuser);

    const token = jwt.sign(
      { newuser_id: newuser._id, email },
      "secret",
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        console.log(err);
        console.log(token);
      }
    );

    newuser.token = token;

    // return new user
    res.status(200).json(newuser);
    console.log("Registration Successful");
    // res.status(200).send("registration successful");
  } catch (err) {
    console.log(err);
  }
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
    { Title: req.body.Title },
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

// appRouter.get("/Individual_retrieveCourses", async (req, res) => {
//   res.send(await Course.find().select(["Title", "Hours", "Rating"]));
// });

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

appRouter.post("/Individual_viewPopularCourses", async (req, res) => {
  const minrating = 5;
  const maxrating = 5;
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

appRouter.post("/Individual_retrieveCourses", async (req, res) => {
  res.send(
    await Course.find().select([
      "Title",
      "Hours",
      "Rating",
      "Subtitle",
      "Shortsummary",
      "Subject",
      "Price",
      "Price_after_promotion",
      "Instructor",
      "Views",
      "PreviewLink",
      "SubLink",
      "Promotion",
      "Promotion_valid_for",
    ])
  );
});

appRouter.post("/Individual_ReportAProblem", async (req, res) => {
  const problem = new Problem({
    Email: req.body.Email,
    Category: req.body.Category,
    Description: req.body.Description,
    Type: req.body.Type,
    Course: req.body.Course,
    Status: req.body.Status,
  });
  try {
    Problem.create(problem);
  } catch (err) {
    console.log(err);
  }
  console.log(problem);
  res.status(200).send("Submitted Problem");
});

appRouter.post("/Individual_AllProblems", async (req, res) => {
  if (!req.body.Email) {
    console.log("All input is required");
  }
  res.send(
    await Problem.find({
      Email: { $eq: req.body.Email },
      Category: { $eq: "IndividualTrainee" },
    }).select(["Description", "Type", "Course", "Status"])
  );
});

appRouter.post("/Individual_FollowUP", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aminmoataz072@gmail.com",
      pass: "hunnwqvdqtpytwib",
    },
  });

  var mailOptions = {
    from: "aminmoataz072@gmail.com",
    to: "aminmoataz072@gmail.com",
    subject: "Sending Email to rest password",
    text: `Please Check my report!`,
    // html: '<h1>RESET YOUR PASSWORD</H1><P>This code is so confidential , Please do not share it with anyone else Your code to reset your password is 12345 </P>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("emailsent");
    }
  });
});

appRouter.post("/Individual_retrieveMyCourse", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  var RegisteredCoursesArr = [];
  var final = [];

  Individual.find(
    {
      Email: { $eq: req.body.Email },
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
        console.log(final, "final");
        console.log(final.length);

        Course.find({ Title: final }, function (err, result1) {
          if (err) {
            res.send("err");
          } else {
            console.log(result1);
            res.send({ CourseDetails: result1 });
            console.log("Done2");
          }
        }).select(["Title", "Shortsummary", "Subject", "Instructor", "Rating"]);
      }
    }
  ).select("RegisteredCourses");
  console.log(final.length);
});

appRouter.post("/Individual_ChangePassword", async (req, res) => {
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;
  Individual.findOneAndUpdate(
    { Password: OldPassword },
    { Password: NewPassword },
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

appRouter.post("/Individual_ForgotPassword", async (req, res) => {
  const Username = req.body.Username;
  const NewPassword = req.body.NewPassword;
  const CNewPassword = req.body.CNewPassword;
  Individual.findOneAndUpdate(
    { Username: Username },
    { Password: NewPassword },
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

appRouter.post("/Individual_retrieveMyCourseData", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  var RegisteredCoursesArr = [];
  var final = [];
  var myCourse = req.body.myCourse;
  var answer = "";
  Individual.find(
    {
      Email: { $eq: req.body.Email },
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
          "Subtitle",
          "Subtitle1",
          "Subtitle2",
          "Shortsummary",
          "Subject",
          "Price",
          "Instructor",
          "Rating",
          "Hours",
          "Views",
          "PreviewLink",
          "SubLink",
          "SubLink1",
          "SubLink2",
          "Description",
          "Description1",
          "Description2",
        ]);
      }
    }
  ).select("RegisteredCourses");
  console.log(final.length);
});

//submit the answers to the exercise after completing it

appRouter.post("/Individual_submitAnswer", async (req, res) => {
  const newAnswer = new IndividualExam({
    Question1: req.body.Question1,
    Answer1: req.body.Answer1,
    Question2: req.body.Question2,
    Answer2: req.body.Answer2,
  });
  try {
    IndividualExam.create(newAnswer);
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("Submitted Answer");
});
appRouter.get("/Individual_view_exam", async (req, res) => {
  res.send(
    await Exams.find().select([
      "Question1",
      "Choice11",
      "Choice12",
      "Choice13",
      "Choice14",
      "Question2",
      "Choice21",
      "Choice22",
      "Choice23",
      "Choice24",
      "Course",
    ])
  );
});

appRouter.post("/Individual_Login", async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    if (!(Email && Password)) {
      res.status(400).send("All input is required");
    }

    const user = await Individual.findOne({ Email });
    console.log(Email);
    console.log(Password);
    console.log(user.Email);
    console.log(user.Password);

    if (user && (await bcrypt.compare(Password, user.Password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, Email },
        "secret",
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
});
//****************************************************MENNAAAAAAAAAAAAAAA****************************** */

//view the price of each course
appRouter.get("/Individual_course_price", async (req, res) => {
  res.send(await Course.find().select(["Price"]));
});

//filter the courses based on price (price can be FREE)
appRouter.post("/Individual_filtercourse_price", async (req, res) => {
  //const Price1 = req.body.Price;
  Course.find(
    {
      Price: { $eq: req.body.Price },
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

//choose a course from the results and view (but not open) its details including course subtitles,
//excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected

//!!!!!!!!!!!!!

//view his/her grade from the exercise
appRouter.post("/Individual_Grade", async (req, res) => {
  var grade = 0;
  var final = "";
  const _id = req.body._id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such id" });
  }
  const ans1 = await IndividualExam.findById(_id)
    .select("Answer1")
    .select("Answer2");
  const ques1 = await IndividualExam.findById(_id)
    .select("Question1")
    .select("Question2");
  final = ques1.Question1;
  console.log(final);
  if (!ans1) {
    return res.status(400).json({ error: "No such exam" });
  }

  console.log(final);
  Exams.find({ Question1: final }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);

      if (data[0].Answer1 == ans1.Answer1) {
        grade += 1;
      }

      if (data[0].Answer2 == ans1.Answer2) {
        grade += 1;
      }
      res.status(200).send("Grade : " + grade);
    }
  })
    .select("Answer1")
    .select("Answer2");
});

//view the questions with the correct solution to view the incorrect answers
appRouter.post("/Individual_QuestionAnswers", async (req, res) => {
  var grade = 0;
  var final = "";
  const _id = req.body._id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such id" });
  }
  const ans1 = await IndividualExam.findById(_id)
    .select("Answer1")
    .select("Answer2");
  const ques1 = await IndividualExam.findById(_id)
    .select("Question1")
    .select("Question2");
  final = ques1.Question1;
  console.log(final);
  if (!ans1) {
    return res.status(400).json({ error: "No such exam" });
  }

  Exams.find({ Question1: final }, function (error, data) {
    if (error) {
      console.log("error");
    } else {
      console.log(data);

      if (
        (data[0].Answer1 == ans1.Answer1) &
        (data[0].Answer2 == ans1.Answer2)
      ) {
        grade = 2;
        res
          .status(200)
          .send(
            "1. Question 1 is : " +
              ques1.Question1 +
              " The Correct Solution is: ( " +
              ans1.Answer1 +
              ")     2. Question 2 is : " +
              ques1.Question2 +
              " The Correct Solution is: ( " +
              ans1.Answer2 +
              " ),Your Grade:  " +
              grade
          );
      }
      if (
        (data[0].Answer1 != ans1.Answer1) &
        (data[0].Answer2 == ans1.Answer2)
      ) {
        grade = 1;
        res
          .status(200)
          .send(
            "1. Question 1 is : " +
              ques1.Question1 +
              "<--> Your answer is Wrong   : " +
              ans1.Answer1 +
              " The Correct Solution is: ( " +
              data[0].Answer1 +
              ")     2. Question 2 is : " +
              ques1.Question2 +
              " <--> Your answer is Correct.  (" +
              ans1.Answer2 +
              " ) , Your Grade in this quiz is :  " +
              grade
          );
      }
      if (
        (data[0].Answer1 == ans1.Answer1) &
        (data[0].Answer2 != ans1.Answer2)
      ) {
        grade = 1;
        res
          .status(200)
          .send(
            "1. Question 1 is : " +
              ques1.Question1 +
              " <--> Your answer is Correct. ( " +
              ans1.Answer1 +
              ")     2. Question 2 is : " +
              ques1.Question2 +
              "<--> Your answer is Wrong   : " +
              ans1.Answer2 +
              "( The Correct Solution is:  " +
              data[0].Answer2 +
              " ), Your Grade in this quiz is :  " +
              grade
          );
      }
      if (
        (data[0].Answer1 != ans1.Answer1) &
        (data[0].Answer2 != ans1.Answer2)
      ) {
        grade = 0;
        res
          .status(200)
          .send(
            "Question 1: " +
              ques1.Question1 +
              "<--> Your answer is Wrong   : " +
              ans1.Answer1 +
              "(The Correct Solution is: " +
              data[0].Answer1 +
              ")     2. Question 2 is : " +
              ques1.Question2 +
              "<--> Your answer is Wrong   : " +
              ans1.Answer2 +
              "(The Correct Solution is: (" +
              data[0].Answer2 +
              " ), Your Grade in this quiz is :  " +
              grade
          );
      }
    }
  })
    .select("Answer1")
    .select("Answer2");
});

//view the questions with the correct solution to view the incorrect answers
appRouter .post("/Individual_getExamId" , async (req,res)=>{

  const ans = await IndividualExam.find({}).sort({ _id: -1 }).limit(1) ;
  const data = ans[0]._id;
  //console.log(ans);
  res.send(data);
  
  }) ;
//see his/her progress in the course as a percentage of how much of the course has been completed so far

appRouter.post("/Individual_addPaidCourse", async (req, res) => {
  const Email = req.body.Email;
  //const title = req.body.Title;
  Individual.findOneAndUpdate(
    { Email: { $eq: req.body.Email } },
    { $push: { RegisteredCourses: req.body.Title } },
    function (error, doc) {
      if (error) {
        res.send("update_Error");
      } else {
        res.send("Data Inserted");
        // res.send(doc);
      }
    }
  );
});

// sho8l moataz ==========================================================================================

appRouter.post("/change_status_to_pending", async (req, res) => {
  const Username = req.body.Username;
  Individual.findOneAndUpdate(
    { Username: Username },
    { Gender: "pending" },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error");
      } else {
        console.log("data");
        res.status(200).send("update done");
      }
    }
  );
});

appRouter.post("/change_status_to_solved", async (req, res) => {
  const Username = req.body.Username;
  Individual.findOneAndUpdate(
    { Username: Username },
    { Gender: "solved" },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error");
      } else {
        console.log("data");
        res.status(200).send("update done");
      }
    }
  );
});
//!!!!!!!!!!!!!!//

//receive a certificate as a PDF after completing the course via email
const nodemailer = require("nodemailer");
let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mennaabdullahh@gmail.com",
    pass: process.env.EMAIL_TEST_APP_PSWO,
  },
});
appRouter.post(
  "/Individual_Recieve_Certificate_Via_Email",
  async (req, res) => {
    const { Email } = req.body;

    let details = {
      from: "mennaabdullahh@gmail.com",
      to:  "mennaabdullahh@gmail.com",
      subject: "completing the course",
      cc: "mennaabdullahh@gmail.com",
      bcc: "mennaabdullahh@gmail.com",
      text: "congrats...... here is an attachment of the certificate ",
      attachments: [
        { filename: 'certificate.pdf', path: './Certificate .pdf' }
    ]    };
    mailTransporter.sendMail(details, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email is sent");
      }
    });
    res.status(200).send( "email is sent" );
  }
);

//download the certificate as a PDF from the website

//done frontend

//write notes while watching the video
appRouter.post("/individual_Notes", async (req, res) => {
  const _id = req.body.id;

  const individual = await Individual.findById(id);

  res.json({ message: individual.notes });
});

//download the notes as a PDF

//*************************************************************MENNA'S END PART*********************************************************** */

appRouter.post("/Individual_Register", async (req, res) => {
  const newIndividual = new Individual({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    RegisteredCourses: req.body.RegisteredCourses,
    Wallet: 0,
  });

  try {
    Individual.create(newIndividual);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});
appRouter.post("/Individual_Wallet", async (req, res) => {
  Individual.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  }).select("Wallet");
});
appRouter.post("/Individual_Refund", async (req, res) => {
  const refund = new Refundrequest({
     Email : req.body.Email,
     Course : req.body.Course,
     Status : req.body.Status,
  });
  try {
    Refundrequest.create(refund);
  } catch (err) {
    console.log(err);
  }
  console.log(refund);
  res.status(200).send("Submitted Request");
});
module.exports = appRouter;
