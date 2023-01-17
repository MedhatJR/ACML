const express = require("express");
const appRouter = express.Router();
const cors = require("cors");
appRouter.use(cors());
const Problem = require("../Models/Problem");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
var nodemailer = require("nodemailer");
var dbcourses = [];

const Exams = require("../Models/Exams");
appRouter.get("/Instructor_read", async (req, res) => {
  Instructor.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
});

appRouter.post("/Instructor_Register", async (req, res) => {
  const newuser = ({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
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
    const oldUser = await Instructor.find({ Email: { $eq: req.body.Email } });

    console.log(oldUser);
    console.log(email);

    if (oldUser != "") {
      return res.status(200).send("User Already Exist. Please Login");
    }

    await Instructor.create(newuser);

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

appRouter.post("/Instructor_searchCourse", async (req, res) => {
  var username = "";
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      username = data[0].Username;
      console.log(username);
    }
    Course.find(
      {
        $and: [
          { Instructor: { $eq: username } },
          {
            $or: [
              { Title: req.body.Title },
              { Subject: req.body.Subject },
              { Instructor: req.body.Instructor },
            ],
          },
        ],
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else res.send(data);
      }
    );
  });
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

appRouter.post("/Instructor_ReportAProblem", async (req, res) => {
  const problem = new Problem({
    Email: req.body.Email,
    Category: "Instructor",
    Description: req.body.Description,
    Type: req.body.Type,
    Course: req.body.Course,
    Status: "Unseen",
  });
  try {
    Problem.create(problem);
  } catch (err) {
    console.log(err);
  }
  console.log(problem);
  res.status(200).send("Submitted Problem");
});

appRouter.post("/Instructor_AllProblems", async (req, res) => {
  if(!req.body.Email){
    console.log("All input is required");
  };
res.send(
  await Problem.find( {
    Email: { $eq: req.body.Email },
    Category:{ $eq: "Instructor"},
  }).select([
    "Description",
    "Type",
    "Course",
    "Status",
 
  ])
);
});

appRouter.get("/Instructor_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});

appRouter.get("/Instructor_retrieveCourses", async (req, res) => {
  res.send(await Course.find().select(["Title", "Hours", "Rating"]));
});


appRouter.post("/Instructor_addcourse", async (req, res) => {
 

     Instructor.find({ Email : req.body.Email }, async(error, data) => {
      if (error) {
        res.send(error);
      } else{ 
      //res.send(data[0].Username);
      console.log("gegrhi")
      }
 
  const course = new Course({
    Title: req.body.Title,
    Subtitle: req.body.Subtitle,
    Subtitle1: req.body.Subtitle1,
    Subtitle2: req.body.Subtitle2,
    Shortsummary: req.body.Shortsummary,
    Subject: req.body.Subject,
    Price: req.body.Price,
    Price_after_promotion: req.body.Price_after_promotion,
    Instructor: data[0].Username,
    Rating: req.body.Rating,
    Hours: req.body.Hours,
    Views: req.body.Views,
    PreviewLink: req.body.PreviewLink,
    SubLink: req.body.SubLink,
    Description :  req.body.Description,
    SubLink1: req.body.SubLink1,
    Description1 :  req.body.Description1,
    SubLink2: req.body.SubLink2,
    Description2 :  req.body.Description2,
    Promotion: req.body.Promotion,
    Promotion_valid_for: req.body.Promotion_valid_for,
  });
  try {
    await Course.create(course);
console.log("dfkjbhs")
    //const title = req.body.Title;
    Instructor.findOneAndUpdate(
      { Username: { $eq: data[0].Username } },
      { $push: { Courses: req.body.Title } },
      function (error, doc) {
        if (error) {
         res.send("update_Error");
        } else {
          //res.send("Data Inserted");
          res.send(doc);
        }
      }
    );
  } catch (error) {
    res.send("Error");
  }
})
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
  }).select(
    "Title",
    "Shortsummary",
    "Subject",
    "Price",
    "Rating",
    "Hours",
    "Views"
  );
});
appRouter.post("/instructor_viewMyCourses2", async (req, res) => {
  //data = req.body.Courses;
  var username = "";
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log(data);
      username = data[0].Username;
      console.log(username);
    }
    Course.find({ Instructor: username }, (error, data) => {
      if (error) {
        res.send(error);
      } else res.send(data);
    }).select([
      "Title",
      "Shortsummary",
      "Subject",
      "Price",
      "Rating",
      "Hours",
      "Views",
      "PreviewLink",
    ]);
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
  var username = "";
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      username = data[0].Username;
      console.log(username);
    }
    Course.find(
      {
        $and: [
          { Instructor: { $eq: username } },
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
});

appRouter.post("/instructor_filter_allcourses", async (req, res) => {
  const minRating = req.body.minRating;
  const maxRating = req.body.maxRating;
  const requiredSubj = req.body.requiredSubj;
  Course.find(
    {
     
        
          $or: [
            {
              $and: [
                { Rating: { $gte: minRating, $lte: maxRating } },

                { Subject: { $eq: requiredSubj } },
              ],
            },
            { Rating: { $gte: minRating, $lte: maxRating } },
            { Subject: { $eq: requiredSubj } },
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

//********************************************MENNAAAA*************************************************************** */
//view the price of each course
appRouter.get("/Instructor_course_price", async (req, res) => {
  res.send(await Course.find().select(["Price"]));
});

//filter the courses based on price (price can be FREE)
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
//choose a course from the results and view (but not open) its details including course subtitles, excercises ,
// total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected

//*************************************************************MENNA'S END PART*********************************************************** */
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
  const p = (100 - Promotion) / 100;

  Course.findOneAndUpdate(
    { Title: Title },
    { Promotion: Promotion },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log("first");
      }
    }
  );
  Course.findOneAndUpdate(
    { Title: Title },
    { Promotion_valid_for: Promotion_valid_for },
    { new: true },
    (error, dataa) => {
      if (error) {
        console.log(error);
      } else {
        console.log("second");
      }
    }
  );

  Course.findOneAndUpdate(
    { Title: Title },
    { Price_after_promotion: price * p },
    { new: true },
    (error, dataaa) => {
      if (error) {
        console.log(error);
      } else {
        console.log(dataaa);
        //    console.log(price)
        res.status(200).send("update done");
      }
    }
  );
});

appRouter.post("/Instructor_ChangePassword", async (req, res) => {
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;
  Instructor.findOneAndUpdate(
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

appRouter.post("/Instructor_ForgotPassword", async (req, res) => {
  const Username = req.body.Username;
  const NewPassword = req.body.NewPassword;
  const CNewPassword = req.body.CNewPassword;
  if (NewPassword == CNewPassword) {
    Instructor.findOneAndUpdate(
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
  } else {
    res.send("Passwords Do Not Match ");
  }
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
    Course: req.body.Course,
  });
  try {
    Exams.create(exams);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Instructor_Login", async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    if (!(Email && Password)) {
      res.status(400).send("All input is required");
    }

    const user = await Instructor.findOne({ Email });
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



appRouter.post("/Instructor_FollowUP", async (req, res) => {
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

appRouter.post("/Instructor_receiveemail", async (req, res) => {
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
    text: `This code is so confidential , Please do not share it with anyone else .
    Your code to reset your password is 12345`,
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

appRouter.post("/Instructor_viewMyWallet", async (req, res) => {
  //data = req.body.Courses;
  var username = "";
  Instructor.find({ Email: req.body.Email }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log(data);
      // username = data[0].Username;
      //console.log(username);
      res.send(data);
    }
  }).select("Wallet");
});
module.exports = appRouter;
