var restful = require('node-restful'),
    mongoose = restful.mongoose;


// Schema
var taskSchema = new mongoose.Schema({
    text: String,
    due: Date,
    created: Date,
    author: String,
    priority: Number,
    completed: Boolean
});


module.exports = restful.model('Tasks', taskSchema);