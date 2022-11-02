// #Task route solution

const express = require("express");
// const mongoose = require("mongoose");
const appRouter = express.Router();

const User = require("../Models/User");

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//const appRouter = express.appRouter();

//const { appRouter } = require("../appRouter");

// appRouter.get("/", (req, res) => {
//   res.status(200).send("GET request to the homepage");
// });
// appRouter.get("/login", (req, res) => {
//   res.send("Welcome to the login page");
// });
// var output = await client
//   .db("firstdb")
//   .collection("firstcollection")
//   .find()
//   .toArray();
//to display the register page
appRouter.get("/", async (req, res) => {
  // const newuser = new User({
  //   Name: "Ahmed",
  //   Email: "sks@gmail.com",
  //   Age: 20,
  //   BornIn: "two thousand",
  //   LivesIn: "Berlin",
  //   MartialStatus: "single",
  //   PhoneNumber: 011111,
  //   Job: "Engineer",
  // });
  // try {
  //   await User.create(newuser);
  // } catch (err) {
  //   console.log(err);
  // }
  res.status(200).send("Home");
});

appRouter.get("/createUser", (req, res) => {
  res.status(200).send("Welcome to registration page");
});
appRouter.post("/createUser", async (req, res) => {
  const newuser = new User({
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
    await User.create(newuser);
  } catch (err) {
    console.log(err);
  }
  //console.log(req.body.Name);
  console.log("Hello");
  res.status(200).send("registration successful");
});
appRouter.post("/update", async (req, res) => {
  User.findOneAndUpdate(
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
appRouter.get("/read", async (req, res) => {
  User.find({ Name: req.body.Name }, (error, data) => {
    if (error) {
      res.send(error);
    } else res.send(data);
  });
  //res.status(200).send(data);
});
appRouter.post("/delete", (req, res) => {
  User.findOneAndRemove({ Name: req.body.Name }, (error, deletedRecord) => {
    if (!error) {
      console.log(deletedRecord);
    }
  });
  //res.status(200).send("delete done");
});

module.exports = appRouter;
