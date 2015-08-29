/* global System */
import media from './media/media';
import db from './db-operations';
import _ from '../node_modules/underscore/underscore';
import utils from './common/utils';
import $ from '../../node_modules/jquery/dist/jquery.min';



$(function() {
    var testObj = media.init({
		title: 'test title',
		rating: 5,
		description: 'Some description',
		genre: 'blabla',
		image: 'Image url',
		url: 'media url'
	});

	// _.each(testObj, function(value, key){
	// 	console.log(key, ': ', value);
	// });


	// db.create('Media', testObj);

	var test = db.read('Media');
	test.then(function(data){
		_.each(data, function(item){
			_.each(item, function(value, key){
				console.log(key, ': ', value);
			});
			console.log('----------------------------------');
		});
	});

	$('button').on('click', utils.submitForm);
});

