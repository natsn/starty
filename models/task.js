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
    // owners: [{ type: Schema.Types.ObjectId, ref: 'User' }]  ??
});


module.exports = restful.model('Tasks', taskSchema);