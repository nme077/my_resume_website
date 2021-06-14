// App config
const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      methodOverride = require("method-override"),
      mongoose = require("mongoose"),
      passport = require('passport'),
      localStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      User = require('./models/user.js'),
      session = require('express-session'),
      authRoutes = require('./routes/index.js'),
      resumeRoutes = require('./routes/resume.js'),
      //enforce = require('express-sslify'),
      dotenv = require('dotenv').config();


// Middleware
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
// Setup passport
app.use(session({
    secret: 'Def Leppard is the GOAT',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.path = req.path;
    res.locals.currentUser = req.user;
    req.isAuthenticated() ? res.locals.loggedIn = true : res.locals.loggedIn = false;
    next();
});

// CONNECT TO MONGODB
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => handleError(error));


app.use(authRoutes);
app.use('/resume', resumeRoutes);

app.get('*', (req, res) => {
    res.redirect('/resume');
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server running...')
});