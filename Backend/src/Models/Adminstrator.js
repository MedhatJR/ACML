const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const AdminstratorSchema = new Schema(
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

AdminstratorSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt();
  this.Password= await bcrypt.hash(this.Password,salt);
});

const Adminstrator = mongoose.model("Adminstrator", AdminstratorSchema);
module.exports = Adminstrator;
