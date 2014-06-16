var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    content: String
});

var Post = mongoose.model('Post', postSchema);

var run = new Post({content: "I'm running"});