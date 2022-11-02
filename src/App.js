// External variables
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/IndividualController");
//App variables
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/users", require("./routes/users"));
app.use(router);
const port = process.env.PORT || "8000";
const User = require("./Models/IndividualTrainee");

// #Importing the userController

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
