const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    

    Title: {
      type: String,
      required: true,
    },
    Subtitle: {
      type: String,
      required: true,
    },
    Shortsummary: {
      type: String,
      required: true,
    },
    Subject: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Instructor: {
      type: String,
      required: true,
    },
    Rating: {
      type: Number,
      required: true,
    },
    Hours: {
      type: Number,
      required: true,
    },
    Views: {
      type: Number,
      required: true,
    },
    Courses: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
