//import $ from 'https://code.jquery.com/jquery-2.1.4.min';
import ui from './ui-controller';
import submit from './submit-form-operations';
import $ from '../../node_modules/jquery/dist/jquery.min';
import sammy from '../node_modules/sammy/lib/min/sammy-latest.min';

var Controller = (function () {
    var HOME_TITLE = 'Welcome to JustLibrary',
        MUSIC_TITLE = 'Music',
        VIDEOS_TITLE = 'Video',
        BOOKS_TITLE = 'Books',
        SUBMIT_MEDIA_TITLE = 'Submit new media',
        SEARCH = 'Search results';

    var Controller = {
        loadHome: function () {
            ui.setTitle(HOME_TITLE);
            ui.printHome();
            // filter = '';
            // searchResults = '';
        },
        printMusic: function () {
            ui.setTitle(MUSIC_TITLE);
            ui.printMedia('Song');
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[0];
        },
        printVideo: function () {
            ui.setTitle(VIDEOS_TITLE);
            ui.printMedia('Video');
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[1];
        },
        printBooks: function () {
            ui.setTitle(BOOKS_TITLE);
            ui.printMedia('Book');
            // ui.printSearchResults(searchResults);
            // filter = AVAILABLE_FILTERS[2];
        },
        search: function(mediaType, text){
            ui.setTitle(SEARCH);
            ui.printSearchResults(mediaType, text);
        },
        submitMedia: function () {
            ui.setTitle(SUBMIT_MEDIA_TITLE);
            submit.setupAddMediaMenu();
            ui.printSubmitMediaForm();
            
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
