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

module.exports = router;
