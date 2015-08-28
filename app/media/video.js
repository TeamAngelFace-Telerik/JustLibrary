import media from './media/media'

var video = (function (parent) {
    var video = Object.create(parent);

    Object.defineProperties(video, {
        init: function (mediaObj) {
            parent.init.call(this);
            this._duration = mediaObj.duration;
            this._trailer = mediaObj.url;

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
        },
        trailer: {
            get: function () {
                return this._trailer
            },
            set: function (value) {
                //validation
                this._trailer = value;
            }
        }
    });

    return video;
}(media));

export default video;