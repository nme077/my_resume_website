// App config
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const User = require('./models/user');

app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// CONNECT TO MONGODB
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => handleError(error));


// Register Form

