// Require dependencies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Authentication Packages
var session = require('express-session');
var passport = require('passport');

// Initalize Sequelize with session store
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// Require models
const db = require('./models');

app.use(express.static("public"));

// Run Morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cookieParser());
app.use(session({
  secret: 'therussianthirteen',
  resave: false,
  saveUninitialized: false, // Create cookies for logged in users only
  // cookie: { secure: true}  // Only use if using HTTPS
}));



app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/routes.js')(app);
require('./routes/login-routes.js')(app);

// Sync database prior to starting the server
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
      console.log("The magic happens on PORT " + PORT);
  })
});