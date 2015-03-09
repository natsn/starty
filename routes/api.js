var express = require('express'),
    router = express.Router();

// Models
var Task = require('../models/task');
Task.methods(['get', 'put', 'post', 'delete']);
Task.register(router,'/tasks');

var Project = require('../models/project');
Project.methods(['get', 'put', 'post', 'delete']);
Project.register(router,'/projects');


module.exports = router;
