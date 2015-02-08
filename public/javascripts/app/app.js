/*====================================
=            ON DOM READY            =
====================================*/


$(document).ready(function(){
	$('#share').focus();

	$('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
        $('#bar').addClass('bar');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
        $('#bar').removeClass('bar');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

//escape key closes Nav
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($('#site-wrapper').hasClass('show-nav')) {
            // Assuming you used the function I made from the demo
            toggleNav();
        }
    } 
});

// show Nav button
// $(window).scroll(function() {
// 	var distanceFromTop = $(this).scrollTop();
// 	if(distanceFromTop > 25) {
// 		$('#menu-button').removeClass('hidden');
// 	} else {
// 		$('#menu-button').addClass('hidden');
// 	}
// });




	$('#share').on('focus', function(){
		$('#panel-share').addClass('highlight');
	}).on('focusout', function(){
		$('#panel-share').removeClass('highlight');
	})

	$('#share').keyup(function() {
		//count share characters and bind to counter display
			var count = $(this).val().length;
			$('#counter').html(count);

			//change counter color
			if(count > 140 ) {
			$('#counter').css("color", "red");
		} else {
			$('#counter').css("color", "green");
		}
	});

	//switch out heading (this is the vision)
	// var headingWords = [" I Backpack", " I Love My Dog", " I Bake", " I Play the Ukele", " I'm a Cheese Taster", " I'm a Mohawk Enthusiast"];
	// setInterval(function(){
	// 	if(true){
	// 		var changeWord = headingWords[Math.floor(Math.random()*headingWords.length)];	
	// 		$("#changeWord").html(changeWord).hide().fadeIn();
	// 	}
	// }, 5000);


	// $('.heart').on("click", function() {
	// $(this).removeClass("heart").addClass("hearted");
	// })

	// $('.hearted').on("click", function() {
	// 	$(this).removeClass("hearted").addClass("heart");
	// })


	
	//share button add post to post listing
	function addPost () {
		if($('#share').val().length < 141){
			var post = $('#share').val();
			
			//clear post and reset count
			$('#share').val('');
			$('#counter').html('0');

			$('.post-list').prepend("<div class='post' id='newPost'><p class='text-center post-content'>" + post + "</p><span class='hearted glyphicon glyphicon-heart'></span></div>");
			//$('#newPost').hide().fadeIn();

			var moveTo = ($('.post-list').offset().top) - 50;
			$('html body').animate({scrollTop: moveTo});

		} else {
			$('#share').effect('shake', {times: 2, distance: 10});
		}

	};

	//show like button on desktop and large desktop
	if($(window).width() > 992){
		$(".post").hover(  
		        function(){
		        	$('.hearted').stop(true,true).animate({top: 25}, 100);  
		        },  
		        function(){
		        	$('.hearted').stop(true,true).animate({top: -20}, 100);  
			});
		}


	//posts to load initially for testing purposes Object
	// var postListing = [
	// 				{ content: "Because I feel at peace.",
	// 				  favorite: true,
	// 				  likes: 24,
	// 				  date: new Date().toString()
	// 				},

	// 				{ content: "So I can indulge in decadent entrees.",
	// 				  favorite: true,
	// 				  likes: 15,
	// 				  date: new Date().toString()
	// 				},
					
	// 				{ content: "So my dog Milo and I can get some exercise and hit the trails. Guy can’t sit around all day.",
	// 				  favorite: false,
	// 				  likes: 8,
	// 				  date: new Date().toString()
	// 				},

	// 				{ content: "For the ladies.",
	// 				  favorite: false,
	// 				  likes: 0,
	// 				  date: new Date().toString()
	// 				},

	// 				{ content: "To escape.",
	// 				  favorite: true,
	// 				  likes: 5,
	// 				  date: new Date().toString()
	// 				},

	// 				{ content: "this has 140 characters this has 140 characters this has 140 characters this has 140 characters this has 140 characters this has 140 charact",
	// 				  favorite: false,
	// 				  likes: 0,
	// 				  date: new Date().toString()
	// 				},

	// 				{ content: "After years of wanting to I finally started running, and it totally changed my life in so many ways.",
	// 				  favorite: true,
	// 				  likes: 12,
	// 				  date: new Date().toString()
	// 				},

	// 				{ content: "It makes me feel alive.",
	// 				  favorite: true,
	// 				  likes: 49,
	// 				  date: new Date().toString()
	// 				}
	// 			];


	//posts to load initially for testing purposes JSON
	// var postListing = [
	// 				{ "content": "Because I feel at peace.",
	// 				  "favorite": true,
	// 				  "likes": 24,
	// 				  "date": "new Date().toString()"
	// 				},

	// 				{ "content": "So I can indulge in decadent entrees.",
	// 				  "favorite": true,
	// 				  "likes": 15,
	// 				  "date": "new Date().toString()"
	// 				},
					
	// 				{ "content": "So my dog Milo and I can get some exercise and hit the trails. Guy can’t sit around all day.",
	// 				  "favorite": false,
	// 				  "likes": 8,
	// 				  "date": "new Date().toString()"
	// 				},

	// 				{ "content": "For the ladies.",
	// 				  "favorite": false,
	// 				  "likes": 0,
	// 				  "date": "new Date().toString()"
	// 				},

	// 				{ "content": "To escape.",
	// 				  "favorite": true,
	// 				  "likes": 5,
	// 				  "date": "new Date().toString()"
	// 				},

	// 				{ "content": "this has 140 characters this has 140 characters this has 140 characters this has 140 characters this has 140 characters this has 140 charact",
	// 				  "favorite": false,
	// 				  "likes": 0,
	// 				  "date": "new Date().toString()"
	// 				},

	// 				{ "content": "After years of wanting to I finally started running, and it totally changed my life in so many ways.",
	// 				  "favorite": true,
	// 				  "likes": 12,
	// 				  "date": "new Date().toString()"
	// 				},

	// 				{ "content": "It makes me feel alive.",
	// 				  "favorite": true,
	// 				  "likes": 49,
	// 				  "date": "new Date().toString()"
	// 				}
	// 			];


	//AJAX to grab post, currently as JSON
	//for loop to iterate posts object and display to initial page load
	//grab #post div and append each object as post

	function displayPosts(){
		//AJAX
		var postRequest = new XMLHttpRequest();
		var postJSON = '/javascripts/app/postListing.json';

		postRequest.onreadystatechange = function() {
			//if we all have all the data and things are OK...
		    if (postRequest.readyState == 4 && postRequest.status == 200) {
		        //update DOM
				var postListing = JSON.parse(postRequest.responseText);	
				console.log(postListing);	        
				var posts = $(".post-list");
				var post = '';
				for(i = 0; i < postListing.length; i++){
					post += "<div class='post'><p class='text-center post-content'>" + postListing[i].content + "</p>";
						if(postListing[i].favorite === false){
							post += "<span class='hearted glyphicon glyphicon-heart'></span>";
						} else {
							post += "<span class='hearted glyphicon glyphicon-heart'></span>";
						}
					//add counter and date	
					// post += "<span class='text-muted like-counter'>" + postListing[i].likes + "</span>" + 
					// 		"<span class='text-muted date'>" + postListing[i].date + "</span>" + 
					   post += "</div>";
				}
				posts.append(post);
		    }
		}
		postRequest.open("GET", postJSON, true);
		postRequest.send();
	}

	displayPosts();


		function getJson(){
		//AJAX
		var postRequest = new XMLHttpRequest();
		var postJSON = 'http://localhost:3000/posts';

		postRequest.onreadystatechange = function() {
			//if we all have all the data and things are OK...
		    if (postRequest.readyState == 4 && postRequest.status == 200) {
		        //update DOM
		        console.log('post listing');
				var postListing = JSON.parse(postRequest.responseText);	
				console.log(postListing);	        
				// var posts = $(".post-list");
				// var post = '';
				// for(i = 0; i < postListing.length; i++){
				// 	post += "<div class='post'><p class='text-center post-content'>" + postListing[i].content + "</p>";
				// 		if(postListing[i].favorite === false){
				// 			post += "<span class='hearted glyphicon glyphicon-heart'></span>";
				// 		} else {
				// 			post += "<span class='hearted glyphicon glyphicon-heart'></span>";
				// 		}
				// 	//add counter and date	
				// 	// post += "<span class='text-muted like-counter'>" + postListing[i].likes + "</span>" + 
				// 	// 		"<span class='text-muted date'>" + postListing[i].date + "</span>" + 
				// 	   post += "</div>";
				}
				//posts.append(post);
		    }
		    
		postRequest.open("GET", postJSON, true);
		postRequest.send();
	}

	getJson();








