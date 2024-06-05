const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    Name : {
        name : String,
        surname : String,
     },
    PhoneNumber : { 
        type :  Number},

    email:{type : String},
    VN:{
       type : String
    },
    RC : {
        type : String
    },
    VP : {
        type : String
    },
    CarModel : {
        type : String
    },
    CarYear : {
        type : Number
    }
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;