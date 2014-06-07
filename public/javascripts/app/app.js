$(document).ready(function(){
	$('#share').focus();
});

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

// $('.heart').click(function() {
// 	$(this).removeClass("heart").addClass("hearted");
// })

// $('.hearted').click(function() {
// 	$(this).removeClass("hearted").addClass("heart");
// })


//share button add post to post listing
function addPost () {
	if($('#share').val().length < 141){
		post = $('#share').val();
		$('#posts').prepend("<div id='newPost'>"+post+"</div><span class='heart glyphicon glyphicon-heart'></span><hr>");
		$('#newPost').hide().toggle('slide');
		//clear post and reset count
		$('#share').val('');
		$('#counter').html('0');

		var moveTo = ($('#posts').offset().top) - 50;
		$('html, body').animate({scrollTop: moveTo});

	} else {
		$('#share').effect('shake', {times: 2, distance: 10});
	}

};

    $(".scroll").click(function(event){
      event.preventDefault();
      var id = $(this).attr("href");
      var divPosition = $(id).offset().top;
      $("html, body").animate({scrollTop: divPosition});
    });
