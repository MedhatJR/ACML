const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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
      required: false,
    },
    Rating: {
      type: Number,
      required: false,
    },
    Biography: {
      type: String,
      required: false,
    },
    Wallet: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

InstructorSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.Password = await bcrypt.hash(this.Password, salt);
});

const Instructor = mongoose.model("Instructor", InstructorSchema);
module.exports = Instructor;
