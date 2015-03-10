var restful = require('node-restful'),
    mongoose = restful.mongoose;


// Schema
var messageSchema = new mongoose.Schema({
    _creator : { type: Number, ref: 'User' },
    _recipient : { type: Number, ref: 'User' },
    text: String,
    created: Date,
    seen: Boolean,
});


module.exports = restful.model('Messages', messageSchema);