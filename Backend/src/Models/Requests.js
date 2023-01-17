const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestsSchema =new Schema (
    {
        Email:{
            type: String,
            required: true,
        },
        
        Course:{
            type:String,
            required: true,
        },
        Status:{
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);
const Requests = mongoose.model("Requests",RequestsSchema);
module.exports = Requests;