var restful = require('node-restful'),
    mongoose = restful.mongoose;


// Schema
var projectSchema = new mongoose.Schema({
    _creator : { type: Number, ref: 'User' },
    title: String,
    due: Date,
    created: Date
    // tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});


module.exports = restful.model('Projects', projectSchema);