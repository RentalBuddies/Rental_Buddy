const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine" ," ejs")


app.listen("8080",()=>{
    console.log("Server is listening on port 8080");
});


app.get("/",(req,res)=>{
    res.render("home.ejs");
});
