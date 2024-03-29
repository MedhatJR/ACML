const express = require("express");
const appRouter = express.Router();
const Course = require("../Models/Course");
 const Corporate = require("../Models/CorporateTrainee");
const CorporateTrainee = require("../Models/CorporateTrainee"); ///////Twice????????????
const cors = require("cors");
const Exams = require("../Models/Exams");
appRouter.use(cors());
const Instructor = require("../Models/Instructor");
const CorporateExam = require("../Models/CorporateExam");
const mongoose = require("mongoose");
const Exam = require("../Models/Exams");
const Problem = require("../Models/Problem");
const Requests = require("../Models/Requests");


const jwt = require("jsonwebtoken");
const dote = require("dotenv").config();
var popup = require("alert");
const bcrypt = require("bcrypt");

appRouter.get("/Corporate_read", async (req, res) => {
  Corporate.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.post("/Corporate_searchCourse", async (req, res) => {
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

appRouter.post("/Corporate_rateCourse", async (req, res) => {
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

appRouter.get("/Corporate_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});

appRouter.post("/Corporate_Login", async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    if (!(Email && Password)) {
      res.status(400).send("All input is required");
    }

    const user = await Corporate.findOne({ Email });

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
    } 
   else if (user && (Password==user.Password)) {
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
    }
    else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
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
    RegisteredCourses: req.body.RegisteredCourses,
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
    const oldUser = await Corporate.find({ Email: { $eq: req.body.Email } });

    console.log(oldUser);
    console.log(email);

    if (oldUser != "") {
      return res.status(200).send("User Already Exist. Please Login");
    }

    await Corporate.create(newuser);

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

//submit the answers to the exercise after completing it

appRouter.post("/Coporate_submitAnswer", async (req, res) => {
  const newAnswer = new CorporateExam({
    Question1: req.body.Question1,
    Answer1: req.body.Answer1,
    Question2: req.body.Question2,
    Answer2: req.body.Answer2,
  });
  try {
    await CorporateExam.create(newAnswer);
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("Submitted Answer");
});


appRouter.post("/Corporate_ChangePassword", async (req, res) => {
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;
  Corporate.findOneAndUpdate(
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

appRouter.post("/Corporate_ReportAProblem", async (req, res) => {
    const problem = new Problem({
       Email : req.body.Email,
       Category: req.body.Category,
       Description : req.body.Description,
       Type : req.body.Type,
       Course : req.body.Course,
       Status : req.body.Status,
    });
    try {
      Problem.create(problem);
    } catch (err) {
      console.log(err);
    }
    console.log(problem);
    res.status(200).send("Submitted Problem");
});
appRouter.post("/Corporate_Request_Course", async (req, res) => {
  const requests = new Requests({
     Email : req.body.Email,
     Course : req.body.Course,
     Status : req.body.Status,
  });
  try {
    Requests.create(requests);
  } catch (err) {
    console.log(err);
  }
  console.log(requests);
  res.status(200).send("Submitted Request");
});

appRouter.get("/Corporate_AllProblems", async (req, res) => {
  if(!req.body.Email){
    console.log("All input is required");
  };
  // if(!(Problem.find( {
  //   Username: { $eq: req.body.Username }
  // }))){
  //   console.log("There is no a reported problem with this username");
  // }
  res.send(
    await Problem.find( {
      Email: { $eq: req.body.Email },
    }).select([
      "Description",
      "Type",
      "Course",
      "Status",
   
    ])
  );
});


appRouter.post("/Corporate_ForgotPassword", async (req, res) => {
  const Username = req.body.Username;
  const NewPassword = req.body.NewPassword;
  const CNewPassword = req.body.CNewPassword;
  Corporate.findOneAndUpdate(
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

appRouter.post("/Corporate_retrieveMyCourse", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  var RegisteredCoursesArr = [];
  var final = [];

  Corporate.find(
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

appRouter.post("/Corporate_retrieveMyCourseData", async (req, res) => {
  //const RegisteredCourses = req.body.RegisteredCourses;
  var RegisteredCoursesArr = [];
  var final = [];
  var myCourse = req.body.myCourse;
  var answer = "";
  Corporate.find(
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
        ]);
      }
    }
  ).select("RegisteredCourses");
  console.log(final.length);
});

appRouter.post("/addCorporate", async (req, res) => {
  const newCorporate = new CorporateTrainee({
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
    console.log(newCorporate);
    CorporateTrainee.create(newCorporate);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.get("/Corporate_view_exam", async (req, res) => {
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

//****************************************************MENNAAAAAAAAAAAAAAA****************************** */

//
appRouter.post("/courses_ex",async(req,res)=>{
  const course = await Exam.find({ Course: { $eq: req.body.Course } }).select("Question1").select("Question2");
  console.log(course);
res.status(200).send("Exercise 1 :" +course[0].Question1 +"     " +
"Exercise 2: " + course[0].Question2 )

  
});
//view his/her grade from the exercise
appRouter.post("/Coporate_Grade", async (req, res) => {
  var grade = 0;
  var final = "";
  const _id = req.body._id;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ error: "No such id" });
   }
  const ans1 = await CorporateExam.findById(_id)
    .select("Answer1")
    .select("Answer2");
  const ques1 = await CorporateExam.findById(_id)
    .select("Question1")
    .select("Question2");
  final = ques1.Question1;
  console.log(final);
  if (!ans1) {
    return res.status(400).json({ error: "No such exam" });
  }

  Exam.findOne({ Question1: final }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);

      if (data.Answer1 == ans1.Answer1) {
        grade += 1;
      }
      console.log(data);
      if (data.Answer2 == ans1.Answer2) {
        grade += 1;
      }
      res.status(200).send("Grade :" + grade);
    }
  })
    .select("Answer1")
    .select("Answer2");
});


//view the questions with the correct solution to view the incorrect answers
appRouter .post("/Corporate_getExamId" , async (req,res)=>{

const ans = await CorporateExam.find({}).sort({ _id: -1 }).limit(1) ;
const data = ans[0]._id;
//console.log(ans);
res.send(data);

}) ;

appRouter.post("/Corporate_QuestionAnswers", async (req, res) => {
  var grade = 0;
  var final = "";
  const _id = req.body._id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such id" });
  }
  const ans1 = await CorporateExam.findById(_id)
  .select("Answer1")
  .select("Answer2");
const ques1 = await CorporateExam.findById(_id)
  .select("Question1")
  .select("Question2");
  final = ques1.Question1;
  //console.log(final);
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
      if ((data[0].Answer1 == ans1.Answer1) & (data[0].Answer2 != ans1.Answer2)
      ) {
        grade = 1;
        res.status(200) .send(
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

//see his/her progress in the course as a percentage of how much of the course has been completed so far


//receive a certificate as a PDF after completing the course via email
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",  
    auth: {
      user: "mennaabdullahh@gmail.com",
      pass: process.env.EMAIL_TEST_APP_PSWO
    }
})
appRouter.post('/Corporate_Recieve_Certificate_Via_Email', async (req, res) => {
//  const { Email } = req.body

  let details = {
      from: "mennaabdullahh@gmail.com",
     to: "mennaabdullahh@gmail.com",
      // to: Email,
      subject: "completing the course",
      cc: "mennaabdullahh@gmail.com",
      bcc: "mennaabdullahh@gmail.com",
      text: "congrats...... here is an attachment of the certificate ",
      attachments: [
          { filename: 'certificate.pdf', path: './Certificate .pdf' }
      ]
  }
  mailTransporter.sendMail(details, (err) => {
      if (err) {
          console.log(err)
      }
      else {
          console.log("email is sent")
      }

  })
  res.status(200).send( "email is sent" );
});

//download the certificate as a PDF from the website

//DONE FRONTEND

//write notes while watching the video
appRouter.post('/corporate_Notes', async (req, res) => {
  const id = req.body.id

  const corporate = await Corporate.findById(id)

  res.json({ message: corporate.notes })
})
//download the notes as a PDF

//*************************************************************MENNA'S END PART*********************************************************** */

appRouter.post("/Corporate_submitAnswer", async (req, res) => {
  const newAnswer = new CorporateExam({
    Question1: req.body.Question1,
    Answer1: req.body.Answer1,
    Question2: req.body.Question2,
    Answer2: req.body.Answer2,
  });
  try {
    CorporateExam.create(newAnswer);
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("Submitted Answer");
});

appRouter.post("/Corporate_viewPopularCourses", async (req, res) => {
  const minrating = 4;
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
module.exports = appRouter;
