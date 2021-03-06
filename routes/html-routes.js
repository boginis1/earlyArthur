// Require models
const db = require("../models");

// Passport routes
module.exports = function(app) {

    // Visit home page
    app.get('/', function(req, res) {
        // If user is logged in, visit the main page
        // If user is not logged in, visit splash page
    });

    // Create a new contact
    app.post('/new', function(req, res) {
        // Post new contact details
    });

    // Load create new contact page
    app.get('/new', function(req, res) {
        // If not logged in, load login page
        // Else
        // Load new contact page
    });

    // Update your profile info
    app.post('/profile', function(req, res) {
        // If not logged in, load login page
        // Else
        // Post updated profile details
    });

    // Load profile page
    app.get('/profile', function(req, res) {
        // If not logged in, load login page
        // Else
        // Load personal profile page
    });

    // List of contacts page
    app.get('/list', function(req, res) {
        // If not logged in, load login page
        // Else
        // Load contact list
    });

    // Results page
    app.post('/results', function(req, res) {
        // Load results page
    });

    // Login page
    app.get('/login', function(req, res) {
        // Load login page
    });

    // Sign Up page
    app.get('/signup', function(req, res) {
        // Load sign up page
    });

};



