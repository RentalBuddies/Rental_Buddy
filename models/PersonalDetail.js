const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    Name : {
        name : String,
        surname : String,
     },
    PhoneNumber : { 
        type : Number},
    email:{type : String},
    Address:{
       type : String
    },
    Experience : {
        type : Number
    },
    Licence : {
        type : String
    },
    Passport : {
        type : String
    }
});

const Detail = mongoose.model("Detail", detailSchema);
module.exports = Detail;