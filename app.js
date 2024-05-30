const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const {Schema} = mongoose;


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine" ," ejs");
app.use("/css",express.static("dist"));

main().then((res)=>{
    console.log("success  connected to DB");
  })
  .catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Rental_Buddy');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }


app.listen("8080",()=>{
    console.log("Server is listening on port 8080");
});


app.get("/",(req,res)=>{
    res.render("index.ejs");
});
