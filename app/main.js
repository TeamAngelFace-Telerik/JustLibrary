import sammy from '../node_modules/sammy/lib/min/sammy-latest.min';
import appController from './controller';
import $ from '../../node_modules/jquery/dist/jquery.min';

var app = sammy('body', function () {
    this.get('#/home', function () {
        $('#submit-media-menu').on('click', function(){
            appController.submitMedia();
        });
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