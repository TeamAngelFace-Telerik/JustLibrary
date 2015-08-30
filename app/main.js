/* global System */
import media from './media/media';
import book from './media/book';
import song from './media/song';
import video from './media/video';
import db from './db-operations';
import _ from '../node_modules/underscore/underscore';
import sammy from '../lib/sammy';
import appController from './controller';
import utils from './common/utils';
import $ from '../../node_modules/jquery/dist/jquery.min';
import submit from './submit-form-operations';


var testMedia = media.init({
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

// var test = db.read('Media');
// test.then(function (data) {
//     _.each(data, function (item) {
//         _.each(item, function (value, key) {
//             console.log(key, ': ', value);
//         });
//         console.log('----------------------------------');
//     });

//     db.create('Media', testMedia);

//     var test = db.read('Media');
//     test.then(function (data) {
//         console.log('Media: ');
//         _.each(data, function (item) {
//             _.each(item, function (value, key) {
//                 console.log(key, ': ', value);
//             });
//             console.log('----------------------------------');
//         });
//     });

//     $('button').on('click', utils.submitForm);
// });

var app = sammy('body', function () {
    this.get('#/home', function () {
        console.log('Call home!');
        appController.loadHome();
    });

    this.get('#/video', function () {
        appController.videoSearch();
    });

    this.get('#/music', function () {
        appController.musicSearch();
    });

    this.get('#/books', function () {
        appController.booksSearch();
    });

    this.get('#/submit-media', function () {
        appController.submitMedia();
    });
});

app.run('#/home');
$('#submit-media-menu').on('click', function(){
    appController.submitMedia();
});

// Creating objects of all types tests

var testBook = book.init({
    title: 'test title',
    rating: 5,
    description: 'Some description',
    genre: 'blabla',
    image: 'Image url',
    url: 'book url',
    publisher: 'some publisher',
    author: 'Pesho'
});

var testSong = song.init({
    title: 'test title',
    rating: 5,
    description: 'Some description',
    genre: 'blabla',
    image: 'Image url',
    url: 'song url',
    duration: '5:23'
});

var testVideo = video.init({
    title: 'test title',
    rating: 5,
    description: 'Some description',
    genre: 'blabla',
    image: 'Image url',
    url: 'song url',
    duration: '5:23',
    trailer: 'Trailer url'
});    

// db.create('Book', testBook, utils.printMedia('Book'));
// db.create('Song', testSong, utils.printMedia('Song'));
// db.create('Video', testVideo, utils.printMedia('Video'));
