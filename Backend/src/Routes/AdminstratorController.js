const express = require("express");
const cors = require("cors");
const appRouter = express.Router();
const Adminstrator = require("../Models/Adminstrator");
const Instructor = require("../Models/Instructor");
const CorporateTrainee = require("../Models/CorporateTrainee");
const IndividualTrainee = require("../Models/IndividualTrainee");
const Problem = require("../Models/Problem");
const Requests = require("../Models/Requests");
const Course = require("../Models/Course");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { title, send } = require("process");
const { isBooleanObject } = require("util/types");
appRouter.use(cors());

appRouter.post("/Adminstrator_addadminstrator", async (req, res) => {
  const newuser = ({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    RegisteredCourses:req.body.RegisteredCourses,
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
    const oldUser = await Adminstrator.find({ Email: { $eq: req.body.Email } });

    console.log(oldUser);
    console.log(email);

    if (oldUser != "") {
      return res.status(200).send("User Already Exist. Please Login");
    }

    await Adminstrator.create(newuser);

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

appRouter.post("/Adminstrator_addinstructor", async (req, res) => {
  const newuser = ({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    Courses: req.body.Courses,
    Rating: req.body.Rating,
    Biography: req.body.Biography,
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

appRouter.post("/Adminstrator_addcorporatetrainee", async (req, res) => {
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
    const oldUser = await CorporateTrainee.find({ Email: { $eq: req.body.Email } });

    console.log(oldUser);
    console.log(email);

    if (oldUser != "") {
      return res.status(200).send("User Already Exist. Please Login");
    }

    await CorporateTrainee.create(newuser);

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

appRouter.post("/Adminstrator_Login", async (req, res) => {
  try {
    const Email = req.body.Email;
    const Password = req.body.Password;
    if (!(Email && Password)) {
      res.status(400).send("All input is required");
    }

    const user = await Adminstrator.findOne({ Email });
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
    }
    if (user && (Password== user.Password)) {
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
appRouter.post("/Adminstrator_addpromotion", async (req, res) => {
  const Title = req.body.Title;
  const Promotion = req.body.Promotion;
  //  const price = req.body.price;
  const Promotion_valid_for = req.body.Promotion_valid_for;
  const p = (100 - Promotion) / 100;
  var price;
  Course.find({ Title: Title }, (error, data) => {
    if (error) {
      console.log("error");
    } else {
      price = data[0].Price;
      console.log(price);
    }

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
});

// several courses

appRouter.post("/Adminstrator_addpromotion_several", async (req, res) => {
  const Title1 = req.body.Title1;
  const Title2 = req.body.Title2;
  const Title3 = req.body.Title3;
  const Title4 = req.body.Title4;
  const Title5 = req.body.Title5;
  const Promotion = req.body.Promotion;
  const Promotion_valid_for = req.body.Promotion_valid_for;
  const p = (100 - Promotion) / 100;
  var price1;
  var price2;
  var price3;
  var price4;
  var price5;

  if (Title1 != "") {
    Course.find({ Title: Title1 }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        price1 = data[0].Price;
      }
      Course.findOneAndUpdate(
        { Title: Title1 },
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
        { Title: Title1 },
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
        { Title: Title1 },
        { Price_after_promotion: price1 * p },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            //res.status(200).send("update 1 done");
          }
        }
      );
    });
  }

  if (Title2 != "") {
    Course.find({ Title: Title2 }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        price2 = data[0].Price;
      }
      Course.findOneAndUpdate(
        { Title: Title2 },
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
        { Title: Title2 },
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
        { Title: Title2 },
        { Price_after_promotion: price2 * p },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            // res.status(200).send("update done");
          }
        }
      );
    });
  }

  if (Title3 != "") {
    Course.find({ Title: Title3 }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        price3 = data[0].Price;
      }
      Course.findOneAndUpdate(
        { Title: Title3 },
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
        { Title: Title3 },
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
        { Title: Title3 },
        { Price_after_promotion: price3 * p },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            //res.status(200).send("update done");
          }
        }
      );
    });
  }

  if (Title4 != "") {
    Course.find({ Title: Title4 }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        price4 = data[0].Price;
      }
      Course.findOneAndUpdate(
        { Title: Title4 },
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
        { Title: Title4 },
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
        { Title: Title4 },
        { Price_after_promotion: price4 * p },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            // res.status(200).send("update done");
          }
        }
      );
    });
  }

  if (Title5 != "") {
    Course.find({ Title: Title5 }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        price5 = data[0].Price;
      }
      Course.findOneAndUpdate(
        { Title: Title5 },
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
        { Title: Title5 },
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
        { Title: Title5 },
        { Price_after_promotion: price5 * p },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            //res.status(200).send("update done");
          }
        }
      );
    });
  }
});

// all courses

appRouter.post("/Adminstrator_addpromotionall", async (req, res) => {
  //const Title = req.body.Title;
  const Promotion = req.body.Promotion;
  //  const price = req.body.price;
  const Promotion_valid_for = req.body.Promotion_valid_for;
  const p = (100 - Promotion) / 100;
  var price;
  Course.find({}, (error, data) => {
    if (error) {
      console.log("error");
    } else {
      console.log(data.length);
      res.send(data);
    }

    for (var i = 0; i < data.length; i++) {
      price = data[i].Price;

      Course.findOneAndUpdate(
        { Title: data[i].Title },
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
        { Title: data[i].Title },
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
        { Title: data[i].Title },
        { Price_after_promotion: price * p },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
          }
        }
      );
    }
  });
});

appRouter.post("/Adminstrator_Refund", async (req, res) => {
  console.log("hello");
  const Email = req.body.Email;
  const Category = req.body.Category;
  var amount = req.body.amount;
  var W = 0;

  if (Category == "IndividualTrainee") {
    IndividualTrainee.find({ Email: Email }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        W = data[0].Wallet;
        console.log(W);
        var y = W + amount;
        console.log(y);
      }

      IndividualTrainee.findOneAndUpdate(
        { Email: Email, Wallet: W },
        { Wallet: W + amount },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            res.send("amount added to this individual trainee");
          }
        }
      );
    });
  } else if (Category == "Corporate Trainee") {
    //console.log(W)
    CorporateTrainee.find({ Email: Email }, (error, data) => {
      if (error) {
        console.log("error");
      } else {
        W = data[0].Wallet;
        console.log(W);
        var y = Number(W) + Number(amount);
        console.log(y);
      }


})
}
});

// sho8l moataz ==========================================================================================
appRouter.post("/change_status_to_seen",async(req,res)=>{
  const _id = req.body._id;
  Problem.findOneAndUpdate(
    { _id : _id , Status : "Unseen"},
    { Status : "seen" },
    { new: true },
    (error, data) => {
      if (error) {
        console.log('error');
      } else {
        console.log('data');
        res.status(200).send(data);
      }
    }
  );
});


appRouter.post("/change_status_to_pending",async(req,res)=>{
  const _id = req.body._id;
  Problem.findOneAndUpdate(
    { _id : _id },
    { Status : 'pending' },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error");
      } else {
        console.log("data");
        res.status(200).send("problem pending");
      }
    }
  );
});

appRouter.post("/change_status_to_solved", async (req, res) => {
  const _id = req.body._id;
  Problem.findOneAndUpdate(
    { _id: _id },
    { status: "solved" },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error");
      } else {
        console.log("data");
        res.status(200).send("problem solved");
      }
    }
  );
});

appRouter.get("/view_problems",async(req,res)=>{
 // const  _id = req.body._id;
 Problem.find(  {
  $or: [
    {  Status: {$eq : "Unseen"} },
    { Status:  {$eq : "pending"} },
    { Status:  {$eq : "seen"} },
  ],
}, (error, data)=>{
  if(error){
    console.log("error");
  }
else{

console.log(data.length);
res.send(data)
}
});
});

appRouter.post("/view_problem",async(req,res)=>{
   const  _id = req.body._id;
  Problem.find(  { _id : _id },(error, data)=>{
   if(error){
     console.log("error");
   }
 else{
 
 console.log(data.length);
 res.send(data)
 }
 });

});

appRouter.get("/view_requests",async(req,res)=>{
  // const  _id = req.body._id;
  Requests.find(  {
   $or: [
     {  Status: {$eq : "pending"} },
   ],
 }, (error, data)=>{
   if(error){
     console.log("error");
   }
 else{
 
 console.log(data.length);
 res.send(data)
 }
 });
 });

 appRouter.post("/accept_requests",async(req,res)=>{
  const _id = req.body._id;
  Requests.findOneAndUpdate(
    { _id: _id },
    { Status: "accepted"  , Status : "pending"  },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error");
      } else {
        console.log(data);
        res.status(200).send("request accepted");
      }
    }
  );
 });

 appRouter.post("/reject_requests",async(req,res)=>{
  const _id = req.body._id;
  Requests.findOneAndUpdate(
    { _id: _id , Status : "pending"  },
    { Status: "rejected" },
    { new: true },
    (error, data) => {
      if (error) {
        console.log("error");
      } else { 
        console.log(data);
        res.status(200).send("request rejected");
      }
    }
  );
 });
module.exports = appRouter;
