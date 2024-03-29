const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    Title: {
      type: String,
      required: false,
    },
    Subtitle: {
      type: String,
      required: true,
    },
    Subtitle1: {
      type: String,
      required: true,
    },
    Subtitle2: {
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
    Price_after_promotion: {
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

    PreviewLink: {
      type: String,
      required: true,
    },
    SubLink: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    SubLink1: {
      type: String,
      required: true,
    },
  
    Description1: {
      type: String,
      required: true,
    },
    SubLink2: {
      type: String,
      required: true,
    },
    Description2: {
      type: String,
      required: true,
    },
    Promotion: {
      type: Number,
      required: true,
    },
    Promotion_valid_for: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
