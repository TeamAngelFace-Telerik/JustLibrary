import media from './media/media';

var video = (function (parent) {
    var video = Object.create(parent);

    Object.defineProperties(video, {
        init: function (mediaObj) {
            parent.init.call(this);
            this._duration = mediaObj.duration;
            this._trailer = mediaObj.url;

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
        },
        _trailer: {
            get: function () {
                return this.trailer;
            },
            set: function (value) {
                //validation
                this.trailer = value;
            }
        }
    });

    return video;
}(media));

export default video;