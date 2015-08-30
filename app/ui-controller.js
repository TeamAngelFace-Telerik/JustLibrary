import $ from '../../node_modules/jquery/dist/jquery.min';

var UI = (function () {
    var HomeText = '<p>Lorem ipsum dolor sit amet, no integre mnesarchum vis. Regione virtute saperet at vel. Ne vim aeque molestiae. Dicit platonem inciderint per in. Ex his augue interpretaris.</p><p>No pro natum sadipscing, te eam quando probatus persequeris. Quo iudico facilisis te, vis mollis detracto et, an pro oratio adversarium. Denique mentitum eum eu. Id cum pericula hendrerit constituto, ea viris ponderum ius. Mei quot case antiopam ne.</p>';

    var UI = {
        setTitle: function (title) {
            $('#page-title').html(title);
        },
        printHome: function () {
            $('#content').html(HomeText);
        },
        printSearchResults: function (results) {
            $('#content').html('Search is Not implemented!');
        },
        printSubmitMediaForm: function () {
            $.when(
                //error?
                $.get('app/html-templates/submit-media.html', function (data) {
                    $('#content').html(data);
                }).then(function(){
                    $('#duration-container').hide();
                    $('#author-container').hide();
                    $('#publisher-container').hide();
                    $('#trailer-container').hide();
                }));       
        }
    };

    return UI;
}());

export default UI;