const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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
    RegisteredCourses: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
//JWT
CorporateTraineeSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt();
  this.Password= await bcrypt.hash(this.Password,salt);
});
const CorporateTrainee = mongoose.model(
  "CorporateTrainee",
  CorporateTraineeSchema
);
module.exports = CorporateTrainee;
