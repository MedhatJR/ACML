const express = require("express");
const cors = require("cors");
const appRouter = express.Router();
const Adminstrator = require("../Models/Adminstrator");
const Instructor = require("../Models/Instructor");
const CorporateTrainee = require("../Models/CorporateTrainee");
const IndividualTrainee = require("../Models/IndividualTrainee");
const Course = require("../Models/Course");
const { title, send } = require("process");
const { isBooleanObject } = require("util/types");
appRouter.use(cors());

appRouter.post("/Adminstrator_addadminstrator", async (req, res) => {
  const adminstrator = new Adminstrator({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
  });
  try {
    Adminstrator.create(adminstrator);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Adminstrator_addinstructor", async (req, res) => {
  const instructor = new Instructor({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    Country: req.body.Country,
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Gender: req.body.Gender,
    Courses: req.body.Courses,
    Rating: req.body.Rating,
  });
  try {
    Instructor.create(instructor);
    res.send("Instructor Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Adminstrator_addcorporatetrainee", async (req, res) => {
  const corporatetrainee = new CorporateTrainee({
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
    CorporateTrainee.create(corporatetrainee);
    res.send("Corporate Trainee Data is successfully Inserted");
  } catch (err) {
    res.send("Error");
  }
});
appRouter.post("/Individual_Register", async (req, res) => {
  const newIndividual = new IndividualTrainee({
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
    IndividualTrainee.create(newIndividual);
    res.send("Data Inserted");
  } catch (err) {
    res.send("Error");
  }
});

appRouter.post("/Adminstrator_Login", async (req, res) => {
  const Email = req.body.email;
  const Password = req.body.Password;
  Adminstrator.find({ Email: Email, Password: Password }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send("loged in");
    }
  });
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

  if (Category == "Individual Trainee") {
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

      CorporateTrainee.findOneAndUpdate(
        { Email: Email, Wallet: W },
        { Wallet: Number(W) + Number(amount) },
        { new: true },
        (error, dataaa) => {
          if (error) {
            console.log(error);
          } else {
            res.send("amount added to this corporate trainee");
          }
        }
      );
    });
  }
});

module.exports = appRouter;
