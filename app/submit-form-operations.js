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
			duration: $('#duration').val(),
			trailer: $('#trailer').val(),
			author: $('#author').val(),
			publisher: $('#publisher').val()
		},
		newMedia = mediaTypes[option].init(submitFormResult);
		newMedia.Id = null;
		
		// console.log(newMedia);
		db.create(mediaTypesNames[option], newMedia, function(){
			return mediaTypesNames[option] + ' added successfully!';
		}, function(err){
			return err;
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
					background: 'green',
					'border-radius': '10px',
					'left': '500px',
					'top': '200px',
					'border': '1px solid #fff'
				}).text(data).appendTo($('body')).fadeIn(1000).fadeOut(1000);	

			} else {
				$('#success-alert').text(data).fadeIn(1000).fadeOut(1000);
			}
			// $('#clear-button').trigger('click');
		}, function(err){
			if(!($('#error-alert').length)) {
				$('<div />').attr('id', 'error-alert').css({
					position: 'absolute',
					width: '250px',
					height: '125px',
					'font-family': 'Arial',
					'font-size': '20px',
					'padding-top': '30px',
					'text-align': 'center',
					color: '#fff',
					display: 'none',
					background: 'red',
					'border-radius': '10px',
					'left': '500px',
					'top': '200px',
					'border': '1px solid #fff'
				}).text(data).appendTo($('body')).fadeIn(1000).fadeOut(1000);	

			} else {
				$('#error-alert').text(err).fadeIn(1000).fadeOut(1000);
			}
		});	
	};

	var setupAddMediaMenu = function(){

		$('#submit-music-form').on('click', function(){
			$('legend').text('Add song');
			$('#duration-container').show();
			$('#duration').attr('required', 'required');
			$('#author-container').hide();
			$('#author').removeAttr('required');
			$('#publisher-container').hide();
			$('#publisher').removeAttr('required');
			$('#trailer-container').hide();
			$('#trailer').removeAttr('required');
			// $('button[type="submit"]').unbind().on('click', function(){
			// 	addMedia(0);
			// });
			$('#submit-form').unbind('submit').submit(function(){
				addMedia(0);
				$('#clear-button').trigger('click');
			});
			$('#content').show();
		});

		$('#submit-video-form').on('click', function(){
			$('legend').text('Add video');
			$('#duration-container').show();
			$('#duration').attr('required', 'required');
			$('#author-container').hide();
			$('#author').removeAttr('required');
			$('#publisher-container').hide();
			$('#publisher').removeAttr('required');
			$('#trailer-container').show();
			$('#trailer').attr('required', 'required');
			// $('button[type="submit"]').unbind().on('click', function(){
			// 	addMedia(1);
			// });
			$('#submit-form').unbind('submit').submit(function(){
				addMedia(1);
				$('#clear-button').trigger('click');
			});
			$('#content').show();
		});

		$('#submit-book-form').on('click', function(){
			$('legend').text('Add book');
			$('#duration-container').hide();
			$('#duration').removeAttr('required');
			$('#author-container').show();
			$('#author').attr('required', 'required');
			$('#publisher-container').show();
			$('#publisher').attr('required', 'required');
			$('#trailer-container').hide();
			$('#trailer').removeAttr('required');
			// $('button[type="submit"]').unbind().on('click', function(){
			// 	addMedia(2);
			// });
			$('#submit-form').unbind('submit').submit(function(){
				addMedia(2);
				$('#clear-button').trigger('click');
			});
			$('#content').show();
		});	
	};

	return {
		setupAddMediaMenu
	};

}());

export default submit;