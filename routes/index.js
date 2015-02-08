var express = require('express');
var router  = express.Router();
var Post    = require('../models/post.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Why I Run' });
});

router.get('/posts', function(req, res) {
	//var postData = Post.getPosts();
	//console.log(postData);
	//console.log("Router: " + postData);
	res.json(Post.getPosts());
});


// app.route('/login')

//     // show the form (GET http://localhost:8080/login)
//     .get(function(req, res) {
//         res.send('this is the login form');
//     })

//     // process the form (POST http://localhost:8080/login)
//     .post(function(req, res) {
//         console.log('processing');
//         res.send('processing the login form!');
//     });



module.exports = router;





	// Post.find({}, function(err, posts){
	// 	var postHTML;
	// 	if (err) { return console.error(err); }
	// 	else {
	// 		for ( var i = 0; i < posts.length; i++ ) {
	// 			postHTML += "<div class='post'><p class='text-center post-content'>" + posts[i].content + "</p><span class='hearted glyphicon glyphicon-heart'></span></div>";
	// 		}
	// 	}
		
	// 	console.log("Model: " + postHTML);
	// 	return postHTML;
	// });