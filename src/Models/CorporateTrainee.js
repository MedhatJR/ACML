const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CorporateTraineeSchema = new Schema(
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
  },
  { timestamps: true }
);

const CorporateTrainee = mongoose.model(
  "CorporateTrainee",
  CorporateTraineeSchema
);
module.exports = CorporateTrainee;
