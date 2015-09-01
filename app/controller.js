//import $ from 'https://code.jquery.com/jquery-2.1.4.min';
import ui from './ui-controller';
import submit from './submit-form-operations';
import $ from '../../node_modules/jquery/dist/jquery.min';

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
            // filter = '';
            // searchResults = '';
        },
        musicSearch: function () {
            ui.setTitle(MUSIC_TITLE);
            ui.printMusic();
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[0];
        },
        videoSearch: function () {
            ui.setTitle(VIDEOS_TITLE);
            ui.printVideo();
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[1];
        },
        booksSearch: function () {
            ui.setTitle(BOOKS_TITLE);
            ui.printBooks();
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[2];
        },
        submitMedia: function () {
            ui.setTitle(SUBMIT_MEDIA_TITLE);
            ui.printSubmitMediaForm();
            submit.setupAddMediaMenu();

            if (localStorage.savedForm !== undefined) {
                var formObject = JSON.parse(localStorage.savedForm);
                fillForm(formObject);
            }

            $('#submit-form').on('blur', 'input', function () {
                var formObject = $('#submit-form').serializeObject();
                localStorage.savedForm = JSON.stringify(formObject);
            });

            $('#submit-form').on('submit reset', function () {
                localStorage.removeItem('savedForm');
            });
        }
    };

    function search(options) {
        throw 'Not implemented!';
    }

    function fillForm(formObject) {
        var $submitForm = $('#submit-form');
        for (var key in formObject) {
            $submitForm.find('#' + key).val(formObject[key]);
        }
    }

    $.fn.serializeObject = function () {
        var formData = {};
        var formArray = this.serializeArray();

        for (var i = 0, n = formArray.length; i < n; ++i)
            formData[formArray[i].name] = formArray[i].value;

        return formData;
    };

    return Controller;
}());

export default Controller;
