var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    email: String,
    first_name: String,
    last_name: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);