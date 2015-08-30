import $ from '../../node_modules/jquery/dist/jquery.min';

var submit = (function(){
	var addSong = function(songObj){

	};

	var addVideo = function(videoObj){

	};

	var addBook = function(bookObj){

	};

	var setupAddMediaMenu = function(){

		$('#submit-music-form').on('click', function(){
			$('legend').text('Add song');
			$('#duration-container').show();
			$('#author-container').hide();
			$('#publisher-container').hide();
			$('#trailer-container').hide();
			$('button[type="submit"]').unbind().on('click', addSong);
			$('#content').show();
		});

		$('#submit-video-form').on('click', function(){
			$('legend').text('Add video');
			$('#duration-container').show();
			$('#author-container').hide();
			$('#publisher-container').hide();
			$('#trailer-container').show();
			$('button[type="submit"]').unbind().on('click', addVideo);
			$('#content').show();
		});

		$('#submit-book-form').on('click', function(){
			$('legend').text('Add book');
			$('#duration-container').hide();
			$('#author-container').show();
			$('#publisher-container').show();
			$('#trailer-container').hide();
			$('button[type="submit"]').unbind().on('click', addBook);
			$('#content').show();
		});	
	};

	return {
		setupAddMediaMenu
	};

}());

export default submit;