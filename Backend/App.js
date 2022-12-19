// External variables
const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/Routes/IndividualController");
const cors = require("cors");
//import Register from "./Register";d

//App variables
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || "8000";

const instructorRouter = require("./src/Routes/InstructorController");
const adminrouter = require("./src/Routes/AdminstratorController");
app.use(router);
app.use(instructorRouter);
app.use(adminrouter);
app.use(instructorRouter);

const guestRouter = require("./src/Routes/GuestController");
const corporateRouter = require("./src/Routes/CorporateController");
app.use(corporateRouter);
app.use(guestRouter);

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

/*
                                                    End of your code
*/
