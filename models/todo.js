var restful = require('node-restful'),
    mongoose = restful.mongoose;


// Schema
var todoSchema = new mongoose.Schema({
    text: String,
    nice: Number
});


module.exports = restful.model('Todos', todoSchema);