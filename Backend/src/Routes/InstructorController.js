const express = require("express");
const appRouter = express.Router();
const cors = require("cors");
appRouter.use(cors());

const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
var nodemailer = require('nodemailer');
var dbcourses = [];

const Exams = require("../Models/Exams");
appRouter.get("/Instructor_read", async (req, res) => {
  Instructor.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.get("/Instructor_searchCourse", async (req, res) => {
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

appRouter.post("/Instructor_SelectCountry", async (req, res) => {
  Instructor.findOneAndUpdate(
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

appRouter.get("/Instructor_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});

appRouter.post("/Instructor_addcourse", async (req, res) => {
  const course = new Course({
    Title: req.body.Title,
    Subtitle: req.body.Subtitle,
    Shortsummary: req.body.Shortsummary,
    Subject: req.body.Subject,
    Price: req.body.Price,
    Price_after_promotion: req.body.Price_after_promotion,
    Instructor: req.body.Instructor,
    Rating: req.body.Rating,
    Hours: req.body.Hours,
    Views: req.body.Views,
    PreviewLink: req.body.PreviewLink,
    SubLink: req.body.SubLink,
    Promotion: req.body.Promotion,
    Promotion_valid_for: req.body.Promotion_valid_for,
  });
  try {
    await Course.create(course);

    const title = req.body.Title;
    Instructor.findOneAndUpdate(
      { Lastname: { $eq: req.body.Instructor } },
      { $push: { Courses: { title } } },
      function (error, doc) {
        if (error) {
          res.send("update_Error");
        } else {
          res.send("Data Inserted");
          // res.send(doc);
        }
      }
    );
  } catch (error) {
    res.send("Error");
  }
});

appRouter.get("/instructor_viewCourses", async (req, res) => {
  //data = req.body.Courses;
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  }).select("Courses");
});

appRouter.post("/instructor_viewMyCourses", async (req, res) => {
  //data = req.body.Courses;
  Course.find({ Instructor: req.body.Instructor }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.post("/instructor_viewRatings", async (req, res) => {
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  }).select("Rating");
});

appRouter.post("/instructor_viewCourseRatings", async (req, res) => {
  Course.find({ Instructor: req.body.Instructor }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  }).select(["Title", "Rating"]);
});

appRouter.get("/instructor_search", async (req, res) => {
  //data = req.body.Courses;
  Course.find(
    {
      $and: [
        { Instructor: req.body.Instructor },

        { $or: [{ Title: req.body.Title }, { Subject: req.body.Subject }] },
      ],
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else res.send(data);
    }
  );
});

appRouter.post("/instructor_filter", async (req, res) => {
  const minPrice = req.body.minPrice;
  const maxPrice = req.body.maxPrice;
  const requiredSubj = req.body.requiredSubj;
  Course.find(
    {
      $and: [
        { Instructor: { $eq: req.body.Instructor } },
        {
          $or: [
            {
              $and: [
                { Price: { $gte: minPrice, $lte: maxPrice } },

                { Subject: { $eq: requiredSubj } },
              ],
            },
            { Price: { $gte: minPrice, $lte: maxPrice } },
            { Subject: { $eq: requiredSubj } },
          ],
        },
      ],
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

appRouter.post("/Instructor_add", async (req, res) => {
  const newinstructor = new Instructor({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    Courses: req.body.Courses,
    Rating:req.body.Rating,
    Biography: req.body.Biography,
  });
  try {
    Instructor.create(newinstructor);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});
appRouter.post("/Instructor_filtercourse", async (req, res) => {
  const minrating = req.body.minrating;
  const maxrating = req.body.maxrating;
  const Subject = req.body.Subject;
  Course.find(
    {
      $or: [
        { Rating: { $gte: minrating, $lte: maxrating } },
        { Subject: Subject },
      ],
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

appRouter.post("/Instructor_filtercourse_price", async (req, res) => {
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

appRouter.post("/Instructor_editemail", async (req, res) => {
  const Emailold = req.body.Emailold;
  const Emailnew = req.body.Emailnew;
  Instructor.findOneAndUpdate(
    { Email: Emailold },
    { Email: Emailnew },
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
appRouter.post("/Instructor_editbiography", async (req, res) => {
  const Email = req.body.Email;
  const Biography = req.body.Biography;
  Instructor.findOneAndUpdate(
    { Email: Email },
    { Biography: Biography },
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
  //res.status(200).send("update done");
});

appRouter.post("/Instructor_addpromotion", async (req, res) => {
  const Title = req.body.Title;
  const Promotion = req.body.Promotion;
  const price = req.body.price;
  //  var price = Course.findOne({Title:Title},(error,data) => {if(error){console.log("error")} else console.log("done"); }).select("Price")
   console.log(price);
  const Promotion_valid_for = req.body.Promotion_valid_for;

  // var m = {$mul: {  : 2 }}  
  // console.log(m) 
  const p  = (100-Promotion)/100; 

Course.findOneAndUpdate(
    { Title: Title },
    { Promotion: Promotion } ,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("first")
    }
});
  Course.findOneAndUpdate(
          { Title: Title },
          {Promotion_valid_for: Promotion_valid_for } ,
          { new: true },
          (error, dataa) => {
            if (error) {
              console.log(error);  
            } else {
              console.log("second")
                   
            }
      })


    Course.findOneAndUpdate(
      { Title: Title },
      {  Price_after_promotion : price*p } ,
      { new: true },
      (error, dataaa) => {
        if (error) {
          console.log(error);  
        } else {
          console.log(dataaa)
      //    console.log(price)
          res.status(200).send("update done");
        }
        })  

           

        
});


appRouter.post("/Instructor_ChangePassword" , async(req,res) => {
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;
  Instructor.findOneAndUpdate(
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

appRouter.post("/Instructor_ForgotPassword" , async(req,res) => {
  const Username = req.body.Username;
  const NewPassword = req.body.NewPassword;
  const CNewPassword = req.body.CNewPassword;
  if(NewPassword == CNewPassword){
  Instructor.findOneAndUpdate(
    { Username: Username  },
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
  }
  else{res.send("Passwords Do Not Match ")}
});

// appRouter.post("/Instructor_ForgotPassword" , async(req,res) => {
//   const Username = req.body.Username;
//   const NewPassword = req.body.NewPassword;
//   const CNewPassword = req.body.CNewPassword;
//   if(NewPassword == CNewPassword){
//   Instructor.findOneAndUpdate(
//     { Username: Username  },
//     { Password : NewPassword },
//     { Title: Title },
//     {
//       Promotion: Promotion,
//       Promotion_valid_for: Promotion_valid_for,
//       $mul: { price: p },
//     },

appRouter.post("/Instructor_create_exams", async (req, res) => {
  const exams = new Exams({

   
    Question1: req.body.Question1,
    Choice11: req.body.Choice11,
    Choice12: req.body.Choice12,
    Choice13: req.body.Choice13,
    Choice14: req.body.Choice14,
    Answer1: req.body.Answer1,
    Question2: req.body.Question2,
    Choice21: req.body.Choice21,
    Choice22: req.body.Choice22,
    Choice23: req.body.Choice23,
    Choice24: req.body.Choice24,
    Answer2: req.body.Answer2,
    Course:req.body.Course,
    
     
  });
  try {
    Exams.create(exams);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Instructor_Login", async (req, res) => {
  const Email = req.body.email;
  const Password = req.body.Password;
  Instructor.find({ Email : Email , Password: Password} ,(err,data ) => {
  if(err){res.send(err);}
  else { res.send("loged in");}
  }
  );
});

appRouter.post("/Instructor_receiveemail", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aminmoataz072@gmail.com',
      pass: 'hunnwqvdqtpytwib'
    }
  });
  
  var mailOptions = {
    from: 'aminmoataz072@gmail.com',
    to: 'aminmoataz072@gmail.com',
    subject: 'Sending Email to rest password',
    text: `This code is so confidential , Please do not share it with anyone else .
    Your code to reset your password is 12345` ,
   // html: '<h1>RESET YOUR PASSWORD</H1><P>This code is so confidential , Please do not share it with anyone else Your code to reset your password is 12345 </P>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('emailsent')
    }
  });
});
module.exports = appRouter;
