const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Car = require("./models/cars.js");
const User = require("./models/users.js");
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require('connect-flash');
const {isLoggedIn} = require("./middleware.js");

// Middleware and settings
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/css", express.static("dist"));

mongoose.connect('mongodb://127.0.0.1:27017/Rental_Buddy')
  .then(() => console.log("Successfully connected to DB"))
  .catch(err => console.log(err));

const sessionOptions = {
  secret: "My name is Mudit",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};

app.use(session(sessionOptions));
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});



app.get("/database", async (req, res) => {
  const data = {
    title: "Mercedes Benz",
    image: null,
    Posted_By: "Mudit"
  }
  await Car.insertMany(data);
  res.send(data);
});

//////// SIGNUP AND LOGIN ROUTES //////////

app.get("/signup", (req, res) => {
  res.render("signUp");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User was registered successfully");
      res.redirect("/post/home");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true,
}), (req, res) => {
  req.flash("success", "Welcome to Wanderlust! You are logged in!");
  res.redirect("/home");
});


//////// ---------------------- //////////

app.get("/home",isLoggedIn,(req, res) => {
  res.render("index.ejs");
});

