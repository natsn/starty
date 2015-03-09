// Dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    io = require('socket.io'),
    passport = require('passport');

// MongoDB
mongoose.connect('mongodb://localhost/starty');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API
app.use('/api', require('./routes/api'));

// Start server
io.listen(app.listen(3000));
console.log('API is running on port 3000!');
