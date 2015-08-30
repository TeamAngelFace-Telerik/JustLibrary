import $ from '../../node_modules/jquery/dist/jquery.min';
import media from '../media/';
import db from '../db-operations';

var utils = (function(){
	var isValid = function isValid(input, min, max) {
		if(typeof(input) !== 'string' && typeof(input) !== 'number'){
			return false;
		}    
		if (typeof(input) === 'string') {
			return input.length >= min && input.length <= max;	
		}
	    return input >= minLength && input <= maxLength;
	};

	var submitForm = function(){
		var submitFormResult = {
			title: $('#title').val(),
			description: $('#description').val(),
			image: $('#image').val(),
			url: $('#url').val(),
			genre: $('#genre').val(),
			rating: $('#rating').val()*1
		},

		newMedia = media.init(submitFormResult);
		
		db.create('Media', newMedia, function(){
			return;
		}, function(err){
			console.log(err);
		});
	};

	var printMedia = function(mediaType){
		var media = db.read(mediaType);
    	media.then(function (data) {
        console.log(mediaType + 's: ');
        _.each(data, function (item) {
            _.each(item, function (value, key) {
                console.log(key, ': ', value);
            });
            console.log('----------------------------------');
        });
    });
	};

	return {
		isValid,
		submitForm,
		printMedia
	};
}());

export default utils;