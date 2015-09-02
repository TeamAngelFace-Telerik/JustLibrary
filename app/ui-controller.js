import $ from '../../node_modules/jquery/dist/jquery.min';
import Handlebars from '../bower_components/handlebars/handlebars.min';
import _ from '../node_modules/underscore/underscore';
import db from './db-operations';

var UI = (function() {
    var clicked = false,
        htmlTemplate,
        htmlTemplateBig;

    $.get('app/html-templates/media-item-template.html', function (data) {
        htmlTemplate = Handlebars.compile(data);
    });

    $.get('app/html-templates/media-item-template-big.html', function (data) {
        htmlTemplateBig = Handlebars.compile(data);
    });


    function createMediaItems(mediaType) {
        var items = db.read(mediaType),
            $content = $('#content');
        items.then(function(data) {
            $content.html('');
            _.each(data, function (item) {
                item.hasVideo = (item.url.indexOf('youtube.com/watch?v=') > -1);
                if(item.hasVideo){
                    item.watchVideo = item.url.replace('www.youtube.com/watch?v=', 'www.youtube.com/embed/');
                }
                var itemHtml = htmlTemplate(item);
                $content.append(itemHtml);
                $('#' + item.Id).on('click', function(){
                    expandMediaItem(item);
                });
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

    function expandMediaItem(itemObj){
        var itemHtml = htmlTemplateBig(itemObj);
        if (!($('#big-item-container').length)) {
            $('<div />').attr('id', 'big-item-container').appendTo($('#content'));
        }
        if(!($('#filter').length)){
            $('<div />').attr('id', 'filter').css({
                width: '100%',
                height: '150%',
                background: '#fff',
                opacity: '0.4',
                'z-index': '5',
                position: 'absolute',
                top: '0',
                left: '0'
            }).appendTo($('body'));
        }


        $('#big-item-container').html(itemHtml).fadeOut(0).fadeIn(500).css('z-index', '10').on('click', function(){
                    $(this).fadeOut(500).css('z-index', '');
                    $('#filter').hide();
                });
        $('#filter').show();
    }


    var UI = {
        setTitle: function (title) {
            $('#page-title').html(title);
        },
        printHome: function () {
            $('#content').css({
                height: '',
                'overflow-y': ''
            });
            clicked = false;
            $.get('app/html-templates/home.html', function (data) {
                $('#content').html(data);
            });
            $('#content').show();
        },
        printMusic: function () {
            $('#content').html('').css({
                height: '500px',
                'overflow-y': 'auto'
            });

            clicked = false;
            createMediaItems('Song');
            $('#content').show();
        },
        printVideo: function () {
            $('#content').html('').css({
                height: '500px',
                'overflow-y': 'auto'
            });
            clicked = false;
            createMediaItems('Video');
            $('#content').show();
        },
        printBooks: function () {
            $('#content').html('').css({
                height: '500px',
                'overflow-y': 'auto'
            });
            clicked = false;
            createMediaItems('Book');
            $('#content').show();
        },
        printSearchResults: function (results) {
            $('#content').show();
            $('#content').html('Search is Not implemented!');
            clicked = false;
        },
        printSubmitMediaForm: function () {     
            $.get('app/html-templates/submit-media.html', function (data) {
                if(!clicked){
                    $('#content').html(data);
                    $('#content').hide().css({
                        height: '',
                        'overflow-y': ''
                    });
                    clicked = true;
                }
            });    
        },        
    };

    return UI;
}());

export default UI;
