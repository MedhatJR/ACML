// External variables
const express = require("express");
const mongoose = require("mongoose");
//const appRouter = require("../src/Routes/userController");
const router = require("./Routes/IndividualController");
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
//const MongoURI =
//"mongodb+srv://mohamedmedhat:MMMMS12345@cluster0.7j7qatg.mongodb.net/test";

//App variables
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/users", require("./routes/users"));
app.use(router);
const port = process.env.PORT || "8000";
const User = require("./Models/IndividualTrainee");

// #Importing the userController

//const appRouter = require("./Routes/userController");
//app.use("./Routes/userController", appRouter);///////////////////////////////////
// configurations
// Mongo DB
mongoose
  .connect(
    "mongodb+srv://mohamedmedhat:MMMMS12345@cluster0.7j7qatg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
/*
                                                    Start of your code
*/
// app.get("/home", (req, res) => {
//   res.status(200).send("You have everything installed!");
// });

// #Routing to userController here

/*
                                                    End of your code
*/
