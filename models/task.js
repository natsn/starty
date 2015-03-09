var restful = require('node-restful'),
    mongoose = restful.mongoose;


// Schema
var taskSchema = new mongoose.Schema({
    _creator : { type: Number, ref: 'User' },
    text: String,
    due: Date,
    created: Date,
    priority: Number,
    completed: Boolean
});


module.exports = restful.model('Tasks', taskSchema);