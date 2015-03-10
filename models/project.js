var restful = require('node-restful'),
    mongoose = restful.mongoose;


// Schema
var projectSchema = new mongoose.Schema({
    _creator : { type: Number, ref: 'User' },
    title: String,
    due: Date,
    created: Date,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    delegates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});


module.exports = restful.model('Projects', projectSchema);