/* global System */
import media from './media/media';
import db from './db-operations';

// var testObj = media.init({
// 	title: 'test title',
// 	duration: 5
// });

// console.log(testObj);

// db.create('Media', {
// 	title: 'SomeDBTest',
// 	duration: 5
// });

var test = db.read('Media');
test.then(function(data){
	data.forEach(function(item){
		document.body.innerHTML += 'Title: ' + item.title + ', duration: ' + item.duration + '<hr />';
	});
});

