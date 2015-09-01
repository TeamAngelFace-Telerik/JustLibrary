import $ from '../../node_modules/jquery/dist/jquery.min';
import Handlebars from '../bower_components/handlebars/handlebars.min';
import _ from '../node_modules/underscore/underscore';
import db from './db-operations';

var UI = (function() {
    var clicked = false,
        htmlTemplate;

    $.get('app/html-templates/media-item-template.html', function (data) {
        htmlTemplate = Handlebars.compile(data);
    });


    function createMediaItems(mediaType) {
        var items = db.read(mediaType),
            $content = $('#content');
        items.then(function(data) {
            $content.html('');
            _.each(data, function (item) {
                var itemHtml = htmlTemplate(item);
                $content.append(itemHtml);
            }, function(err){
                $content.append('Error reading database: ' + err);
            });
        });

        $('<div />').attr('id', 'loading').text('LOADING').css({
            'margin-left': '40%',
            'color': '#fff',
            'font-size':'50px'
        }).appendTo($content).fadeIn(10).fadeOut(10).fadeIn(10);
    }

    var UI = {
        setTitle: function (title) {
            $('#page-title').html(title);
        },
        printHome: function () {
            clicked = false;
            $.get('app/html-templates/home.html', function (data) {
                $('#content').html(data);
            });
        },
        printMusic: function () {
            $('#content').html('');
            clicked = false;
            createMediaItems('Song');

        },
        printVideo: function () {
            $('#content').html('');
            clicked = false;
            createMediaItems('Video');
        },
        printBooks: function () {
            $('#content').html('');
            clicked = false;
            createMediaItems('Book');
        },
        printSearchResults: function (results) {
            $('#content').html('Search is Not implemented!');
            clicked = false;
        },
        printSubmitMediaForm: function () {
            $.when(
                // error?
                
                $.get('app/html-templates/submit-media.html', function (data) {
                    if(!clicked){
                        $('#content').html(data);
                        $('#content').hide();
                    }
                }).then(function(){
                    if(!clicked){
                        $('#duration-container').hide();
                        $('#author-container').hide();
                        $('#publisher-container').hide();
                        $('#trailer-container').hide();    
                    }
                    clicked = true;
                }));       
        },
        
    };

    return UI;
}());

export default UI;
