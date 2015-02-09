var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// User Schema
var PostSchema = new Schema({
	content: String,
	created: { type: Date, default: Date.now },
	likes: { type: Number, default: 0},
	owner: String
});

var Post = mongoose.model('Post', PostSchema);


// SAVE CREATED USER
function savePost (newPost) {

	newPost.save(function(error){
		if (error) { return console.error(error); }
	});

};
    


// UPDATE USER DATA
function updatePost (content) {

	Post.update(oldDataObj, newDataObj, function(err){
		if (err) { return console.error(err); }
	}); 

};



// DELETE USER FROM DATABASE
function deletePost (dataObj) {

	Post.remove(dataObj, function(err){
		if (err) { return console.error(err); }
	});

};


// RETRIEVE POST FROM DATABASE
function getPosts (callback) {


// <div class="post">
// 	<p class="text-center post-content">Because I feel at peace.</p><span class="hearted glyphicon glyphicon-heart"></span>
// </div>



	Post.find({}, function(err, posts){
		console.log(posts);
		if (err) { return console.error(err); }
		else {
				callback(posts);
				//return postHTML;

		}
	});
}

		// var postHTML;
		// if (err) { return console.error(err); }
		// else {
		// 	for ( var i = 0; i < posts.length; i++ ) {
		// 		postHTML += "<div class='post'><p class='text-center post-content'>" + posts[i].content + "</p><span class='hearted glyphicon glyphicon-heart'></span></div>";
		// 	}
		// }
		
		// console.log("Model: " + postHTML);
		// return postHTML;



	// .stream();
	// var docs;
	// stream.on('data', function (doc) {
	//   // do something with the mongoose document
	//   docs = JSON.stringify(doc);
	// }).on('error', function (err) {
	//   // handle the error
	//   return console.error(err);
	// }).on('close', function () {
	//   // the stream is closed
	//   return docs;
	// });


	// 	for (var i;i<data.length;i++){
 //                console.log(data[i].name);
 //            }



	// Post.find(function(err, data){
	// 	if (err) { return console.error(err); }
	// 	else {
	// 		if ( data.hasNext() ) { data.next(); }
	// 	}
	// });

	// var stream = Post.find({}).stream();

	// // Each `data` event has a Post document attached
	// stream.on('data', function (post) {
	//   console.log(post);
	// });

	// stream = JSON.stringify(stream);
	// return stream;





module.exports = {
	Post: Post,
	savePost: savePost,
	updatePost: updatePost,
	deletePost: deletePost,
	getPosts: getPosts
};