import $ from '../../node_modules/jquery/dist/jquery.min';
import Handlebars from '../bower_components/handlebars/handlebars.min';
import _ from '../node_modules/underscore/underscore';
import db from './db-operations';

var UI = (function() {
    var HomeText = '<p>Lorem ipsum dolor sit amet, no integre mnesarchum vis. Regione virtute saperet at vel. Ne vim aeque molestiae. Dicit platonem inciderint per in. Ex his augue interpretaris.</p><p>No pro natum sadipscing, te eam quando probatus persequeris. Quo iudico facilisis te, vis mollis detracto et, an pro oratio adversarium. Denique mentitum eum eu. Id cum pericula hendrerit constituto, ea viris ponderum ius. Mei quot case antiopam ne.</p>';
    var clicked = false;

    function createMediaItems(mediaType) {
        var items = db.read(mediaType);
        var htmlTemplate;
        $.get('app/html-templates/media-item-template.html', function (data) {
            htmlTemplate = Handlebars.compile(data);
        });  

        items.then(function(data) {
            _.each(data, function (item) {
                var itemHtml = htmlTemplate(item);
                $('#content').append(itemHtml);
            });
        });
    }

    var UI = {
        setTitle: function (title) {
            $('#page-title').html(title);
        },
        printHome: function () {
            $('#content').html(HomeText);
            clicked = false;
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
        }
    };

    return UI;
}());

export default UI;
