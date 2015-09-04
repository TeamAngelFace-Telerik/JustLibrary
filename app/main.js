import sammy from '../node_modules/sammy/lib/min/sammy-latest.min';
import appController from './controller';
import $ from '../../node_modules/jquery/dist/jquery.min';

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
        appController.printVideo();
        mediaType = 'Video';
    });

    this.get('#/music', function () {
        appController.printMusic();
        mediaType = 'Song';
    });

    this.get('#/books', function () {
        appController.printBooks();
        mediaType = 'Book';
    });

    this.get('#/submit-media', function () {
        appController.submitMedia();
    });

    this.get('#/search/:text', function (context) {
        console.log(this.params['text']);
        $('#search-form').submit(function(){
            var searchText = $(this).find('input').val();
            context.redirect('#/search/' + searchText);
        });
        appController.search($('#search').val(), mediaType);
    });
});



app.run('#/home');

