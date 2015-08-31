import $ from '../../node_modules/jquery/dist/jquery.min';
import book from './media/book';
import song from './media/song';
import video from './media/video';
import db from './db-operations';

var submit = (function(){
	var addMedia = function(option){
		var mediaTypes = [song, video, book],
			mediaTypesNames = ['Song', 'Video', 'Book'],
			submitFormResult = {
			title: $('#title').val(),
			description: $('#description').val(),
			image: $('#image').val(),
			url: $('#url').val(),
			genre: $('#genre').val(),
			rating: $('#rating').val()*1,
		},

		newMedia = mediaTypes[option].init(submitFormResult);
		
		if(option !== 2){
			newMedia.duration = $('#duration').val();
			if (option) {
				newMedia.trailer = $('#trailer').val();
			}
		} else{
			newMedia.author = $('#author').val();
			newMedia.publisher = $('#publisher').val();
		}

		db.create(mediaTypesNames[option], newMedia, function(){
			return mediaTypesNames[option] + ' added successfully!';
		}, function(err){
			console.log(err);
		}).then(function(data){
			if(!($('#success-alert').length)) {
				$('<div />').attr('id', 'success-alert').css({
					position: 'absolute',
					width: '250px',
					height: '125px',
					'font-family': 'Arial',
					'font-size': '20px',
					'padding-top': '30px',
					'text-align': 'center',
					color: '#fff',
					display: 'none',
					background: '#000',
					'border-radius': '10px',
					'left': '500px',
					'top': '200px',
					'border': '1px solid #fff'
				}).text(data).appendTo($('body')).fadeIn(2000).fadeOut(2000);	

			} else {
				$('#success-alert').text(data).fadeIn(2000).fadeOut(2000);
			}
			$('#clear-button').trigger('click');
		});
	};

	var setupAddMediaMenu = function(){

		$('#submit-music-form').on('click', function(){
			$('legend').text('Add song');
			$('#duration-container').show();
			$('#author-container').hide();
			$('#publisher-container').hide();
			$('#trailer-container').hide();
			$('button[type="submit"]').unbind().on('click', function(){
				addMedia(0);
			});
			$('#content').show();
		});

		$('#submit-video-form').on('click', function(){
			$('legend').text('Add video');
			$('#duration-container').show();
			$('#author-container').hide();
			$('#publisher-container').hide();
			$('#trailer-container').show();
			$('button[type="submit"]').unbind().on('click', function(){
				addMedia(1);
			});
			$('#content').show();
		});

		$('#submit-book-form').on('click', function(){
			$('legend').text('Add book');
			$('#duration-container').hide();
			$('#author-container').show();
			$('#publisher-container').show();
			$('#trailer-container').hide();
			$('button[type="submit"]').unbind().on('click', function(){
				addMedia(2);
			});
			$('#content').show();
		});	
	};

	return {
		setupAddMediaMenu
	};

}());

export default submit;