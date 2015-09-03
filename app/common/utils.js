import $ from '../../node_modules/jquery/dist/jquery.min';
import media from '../media/media';
import _ from '../../node_modules/underscore/underscore';
//import db from '../db-operations';

var utils = (function () {
    var CONSTS = {
        TITLE: {
            MIN: 3,
            MAX: 40
        },
        DESCRIPTION: {
            MIN: 10,
            MAX: Infinity
        },
        GENRE: {
            MIN: 3,
            MAX: 40
        },
        RATING: {
            MIN: 1,
            MAX: 5
        },
        DURATION: {
            MIN: 1,
            MAX: Infinity
        },
        TRAILER: {
            MIN: 1,
            MAX: Infinity
        },
        PUBLISHER: {
            MIN: 3,
            MAX: 40
        },
        AUTHOR: {
            MIN: 3,
            MAX: 40
        }
    };

    function validateString(str, min, max) {
        if (typeof (str) !== 'string' ||
            str.length < min ||
            str.length > max) {
            throw new Error('The string must have between ' + min + ' and ' + max + ' characters');
        }
    }

    function validateNumber(n, min, max) {
        if (typeof (n) !== 'number' ||
            n < min ||
            n > max) {
            throw new Error('The number must be between ' + min + ' and ' + max);
        }
    }

    var isValid = function isValid(input, min, max) {
        if (typeof (input) !== 'string' && typeof (input) !== 'number') {
            return false;
        }
        if (typeof (input) === 'string') {
            return input.length >= min && input.length <= max;
        }
        return input >= min && input <= max;
    };

    /*var submitForm = function () {
        var submitFormResult = {
                title: $('#title').val(),
                description: $('#description').val(),
                image: $('#image').val(),
                url: $('#url').val(),
                genre: $('#genre').val(),
                rating: $('#rating').val() * 1
            },

            newMedia = media.init(submitFormResult);

        db.create(mediaType, newMedia, function () {
            return;
        }, function (err) {
            console.log(err);
        });
    };*/

    /*var printMedia = function (mediaType) {
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
    };*/

    return {
        isValid: 'isValid',
        //submitForm,
        //printMedia,
        validateTitle: function (title) {
            validateString(title, CONSTS.TITLE.MIN, CONSTS.TITLE.MAX);
        },
        validateDescription: function (description) {
            validateString(description, CONSTS.DESCRIPTION.MIN, CONSTS.DESCRIPTION.MAX);
        },
        validateGenre: function (genre) {
            validateString(genre, CONSTS.GENRE.MIN, CONSTS.GENRE.MAX);
        },
        validateRating: function (rating) {
            validateNumber(rating, CONSTS.RATING.MIN, CONSTS.RATING.MAX);
        },
        validateDuration: function (duration) {
            validateString(duration, CONSTS.DURATION.MIN, CONSTS.DURATION.MAX);
        },
        validateTrailer: function (trailer) {
            validateString(trailer, CONSTS.TRAILER.MIN, CONSTS.TRAILER.MAX);
        },
        validatePublisher: function (publisher) {
            validateString(publisher, CONSTS.PUBLISHER.MIN, CONSTS.PUBLISHER.MAX);
        },
        validateAuthor: function (author) {
            validateString(author, CONSTS.AUTHOR.MIN, CONSTS.AUTHOR.MAX);
        }
    };
}());

export default utils;
