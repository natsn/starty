// Dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/starty');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API
app.use('/api', require('./routes/api'))

// Start server
app.listen(3000);
console.log('API is running on port 3000!');
