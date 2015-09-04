import sammy from '../node_modules/sammy/lib/min/sammy-latest.min';
import appController from './controller';
import $ from '../../node_modules/jquery/dist/jquery.min';
import db from './db-operations';

$('#search').unbind().on('click', function(){
    $('#search').blur(function(){
        $('#search-btn').attr('href', '').attr('href', '#/search/' + $('#search').val());
    });
});

var app = sammy('body', function () {
    var mediaType;
    this.get('#/home', function (context) {
        $('#submit-media-menu').on('click', function(){
            context.redirect('#/submit-media');
            //appController.submitMedia();
        });
        appController.loadHome();
    });

    this.get('#/video', function () {
        mediaType = 'Video';
        appController.printVideo();
    });

    this.get('#/music', function () {
        mediaType = 'Song';
        appController.printMusic();
    });

    this.get('#/books', function () {
        mediaType = 'Book';
        appController.printBooks();
    });

    this.get('#/submit-media', function () {
        appController.submitMedia();
    });

    this.get('#/search/:text', function () {
        var searchText = $('#search').val();
        $('#search').val('');
        appController.search(mediaType, searchText);
    });
});

app.run('#/home');

// var test = db.read('Song', 1, 'Seek');
// test.then(function(data){
//     console.log(JSON.stringify(data));
// });
