$(document).ready(function(){
	$('#share').focus();

}); //end Document Ready




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


	$('.heart').on("click", function() {
	$(this).removeClass("heart").addClass("hearted");
	})

	$('.hearted').on("click", function() {
		$(this).removeClass("hearted").addClass("heart");
	})


	
	//share button add post to post listing
	function addPost () {
		if($('#share').val().length < 141){
			var post = $('#share').val();
			
			//clear post and reset count
			$('#share').val('');
			$('#counter').html('0');

			var moveTo = ($('#posts').offset().top) - 50;
			$('html body').animate({scrollTop: moveTo}, function(callback) {
				$('#posts').prepend("<div id='newPost'>"+post+"</div><span class='heart glyphicon glyphicon-heart'></span><hr>");
				$('#newPost').hide().toggle('slide');
			});

		} else {
			$('#share').effect('shake', {times: 2, distance: 10});
		}

	};




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


	//for loop to iterate posts object and display to initial page load
	//grab #post div and append each object as post

	function displayPosts(){
		//AJAX
		var xmlhttp = new XMLHttpRequest();
		var url = '/javascripts/app/postListing.json';

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        //update DOM
				var postListing = JSON.parse(xmlhttp.responseText);	
				console.log(postListing);	        
				var posts = $("#posts");
				var post = '';
				for(i = 0; i < postListing.length; i++){
					post += "<div>" + postListing[i].content + "</div>";
						if(postListing[i].favorite === false){
							post += "<span class='heart glyphicon glyphicon-heart'></span>";
						} else {
							post += "<span class='hearted glyphicon glyphicon-heart'></span>";
						}
					post += "<span class='text-muted like-counter'>" + postListing[i].likes + "</span>" + 
							"<span class='text-muted date'>" + postListing[i].date + "</span>" + 
							"</div>" + 
							"<hr>";
				}
				posts.prepend(post);
		    }
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	};

	displayPosts();








