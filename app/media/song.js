import media from './media/media'

var song = (function (parent) {
    var song = Object.create(parent);

    Object.defineProperties(song, {
        init: function (mediaObj) {
            parent.init.call(this);
            this._duration = mediaObj.duration;

            return this;
        },
        duration: {
            get: function () {
                return this._duration
            },
            set: function (value) {
                //validation
                this._duration = value;
            }
        }
    });

    return song;

}(media));

export default song;