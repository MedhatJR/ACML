const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExamsSchema = new Schema(
  {
    Question1: {
      type: String,
      required: true,
    },
    Choice11: {
      type: String,
      required: true,
    },
    Choice12: {
      type: String,
      required: true,
    },
    Choice13: {
      type: String,
      required: true,
    },
    Choice14: {
      type: String,
      required: true,
    },
    Answer1: {
      type: String,
      required: true,
    },
    Question2: {
      type: String,
      required: true,
    },
    Choice21: {
      type: String,
      required: true,
    },
    Choice22: {
      type: String,
      required: true,
    },
    Choice23: {
      type: String,
      required: true,
    },
    Choice24: {
      type: String,
      required: true,
    },
    Answer2: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

const Exams = mongoose.model("Exams",ExamsSchema);
module.exports = Exams;
