import media from './media/media';

var song = (function (parent) {
    var song = Object.create(parent);

    Object.defineProperties(song, {
        init: function (mediaObj) {
            parent.init.call(this);
            this._duration = mediaObj.duration;

            return this;
        },
        _duration: {
            get: function () {
                return this.duration;
            },
            set: function (value) {
                //validation
                this.duration = value;
            }
        }
    });

    return song;

}(media));

export default song;