//import $ from 'https://code.jquery.com/jquery-2.1.4.min';
import ui from './ui-controller';
import submit from './submit-form-operations';

var Controller = (function () {
    var HOME_TITLE = 'Welcome to JustLibrary';
    var MUSIC_TITLE = 'Music';
    var VIDEOS_TITLE = 'Video';
    var BOOKS_TITLE = 'Books';
    var SUBMIT_MEDIA_TITLE = 'Submit new media';
    var AVAILABLE_FILTERS = ['songs', 'videos', 'books'];
    var filter;
    var searchResults;

    var Controller = {
        loadHome: function () {
            ui.setTitle(HOME_TITLE);
            ui.printHome();
            filter = '';
            searchResults = '';
        },
        musicSearch: function () {
            ui.setTitle(MUSIC_TITLE);
            ui.printMusic();
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[0];
        },
        videoSearch: function () {
            ui.setTitle(VIDEOS_TITLE);
            ui.printSearchResults(searchResults);
            filter = AVAILABLE_FILTERS[1];
        },
        booksSearch: function () {
            ui.setTitle(BOOKS_TITLE);
            ui.printSearchResults(searchResults);
            filter = AVAILABLE_FILTERS[2];
        },
        submitMedia: function () {
            ui.setTitle(SUBMIT_MEDIA_TITLE);
            ui.printSubmitMediaForm();
            submit.setupAddMediaMenu();
        }
    };

    function search(options) {
        throw 'Not implemented!';
    }

    return Controller;
}());

export default Controller;
