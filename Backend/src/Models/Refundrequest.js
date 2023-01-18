const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RefundrequestSchema =new Schema (
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
const Requests = mongoose.model("Refundrequest",RefundrequestSchema);
module.exports = Requests;