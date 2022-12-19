const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndividualExamSchema = new Schema(
  {    
    Question1: {
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
      Answer2: {
        type: String,
        required: true,
      },
     
    
  },
  { timestamps: true }
);

const IndividualExam = mongoose.model(
  "IndividualExam",
  IndividualExamSchema
);
module.exports = IndividualExam;
