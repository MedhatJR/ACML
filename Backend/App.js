// External variables
const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/Routes/IndividualController");
const cors = require("cors");
const dote = require("dotenv").config();
const bcrypt = require("bcrypt");
//import Register from "./Register";d
//JWT
//const authRoutes = require("../frontend/src/Routes/AuthRoutes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
//const authRoutes = require("../frontend/src/Routes/AuthRoutes");
//const cookieParser = require("cookie-parser");

app.use(cookieParser());
//app.use("/", authRoutes);
//--------------------
app.use('/LogIn', (req, res) => {
  res.send({
    token: 'test123'
  });
});


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
const { setAuthToken } = require("../frontend/src/Controllers/setAuthToken");
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


app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Spatula company",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});
