var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// Models
// TODO change these to filter based on the requesting user
var Task = require('../models/task');
Task.methods(['get', 'put', 'post', 'delete']);
Task.register(router,'/tasks');

var Project = require('../models/project');
Project.methods(['get', 'put', 'post', 'delete']);
Project.register(router,'/projects');

var Message = require('../models/message');
Message.methods(['get', 'put', 'post', 'delete']);
Message.register(router,'/messages');


// TODO: change these to respond with JSON
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

var User = require('../models/user');
router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
          return res.render("register", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

module.exports = router;
