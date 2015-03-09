var express = require('express'),
    router = express.Router();

// Models
var Task = require('../models/task');

Task.methods(['get', 'put', 'post', 'delete']);
Task.register(router,'/tasks');

// router.get('/todos', function(req,res){
//     res.send('api is working!');
// });

module.exports = router;