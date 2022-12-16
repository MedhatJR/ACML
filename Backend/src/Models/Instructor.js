const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Courses: {
      type: Array,
      required: true,
    },
    Rating: {
      type: Number,
      required: true,
    },
    Biography:{
      type: String,
      required: true,
    }

  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructor", InstructorSchema);
module.exports = Instructor;
