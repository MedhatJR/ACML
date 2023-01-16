const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema =new Schema (
    {
        Email:{
            type: String,
            required: true,
        },
        Category : {
            type: String,
            required: true,
        },
        Description:{
            type: String,
            required: true,
        },
        Type:{
            type: String,
            required: true,
        },
        Course:{
            type:String,
            required: true,
        },
        Status : {
            type:String,
            required: true,
        }
    },
    {timestamps: true}
);
const Problem = mongoose.model("Problem",problemSchema);
module.exports = Problem;