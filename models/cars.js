const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    title : {type : String },
    description : String,
    image : { 
        filename : String,
        url : String },
    Posted_By:{
       name: String
    },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;