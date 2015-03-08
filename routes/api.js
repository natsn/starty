var express = require('express'),
    router = express.Router();

// Models
var Todo = require('../models/todo');

Todo.methods(['get', 'put', 'post', 'delete']);
Todo.register(router,'/todos');

// router.get('/todos', function(req,res){
//     res.send('api is working!');
// });

module.exports = router;