var express = require('express');
var router  = express.Router();
var Post    = require('../models/post.js');
var User    = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.cookies["youAreLoggedIn"]) {
  	res.redirect('/login');
  }	else {
  	res.render('index', {title: 'Why I Run'});
  }	
});


/* POST home page. */
router.post('/', function(req, res, next) {
  Post.savePost(newPost);
    //res.redirect('/');
});



router.get('/posts', function(req, res, next) {
	Post.getPosts(function(posts){
		var postHTML;
		for ( var i = 0; i < posts.length; i++ ) {
			postHTML += "<div class='post'><p class='text-center post-content'>" + posts[i].content + "</p><span class='hearted glyphicon glyphicon-heart'></span></div>";
		}
		console.log(postHTML);
		res.json(postHTML);
	});
});



/* GET logout page */
router.get('/logout', function(req, res, next) {
  res.clearCookie("youAreLoggedIn");
  res.redirect('/');
});

/* GET login page */
router.get('/login', function(req, res, next) {
  if (!req.cookies["youAreLoggedIn"]) {
  	res.render('login', {title: "Log in to Why I Run"});
  }	else {
  	res.redirect('/');
  }	
});

/* POST login page */
router.post('/login', function(req, res, next) {
	console.log(req.body);
    User.findUser(req.body.email, function(user) {
    	var user = user[0];
    	console.log(user);
    	if (!user) { console.log("failed"); res.render ('login', {title: 'Incorrect login information'}); }
	    else if ( user.email === req.body.email && user.password === req.body.password ) {
	   	  console.log("success");
	      res.cookie('youAreLoggedIn', user._id);
	      res.redirect('/');
	    }
    });

});


// router.get('/signup', function(req, res, next) {
//   res.render('signup', { title: 'Sign up for Why I Run' });
// });


// router.post('/signup', function(req, res, next) {
//   User.saveUser(newUser);
//   var user = User.findUser(email);
//   res.cookie('youAreLoggedIn', user._id);
//   res.redirect('/');
// });








module.exports = router;



