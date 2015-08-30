import media from './media';

var video = (function (parent) {
    var video = Object.create(parent);

    Object.defineProperties(video, {
        init: {
            value: function (mediaObj) {
                parent.init.call(this, mediaObj);
                this._duration = mediaObj.duration;
                this._trailer = mediaObj.trailer;

                return this;
            }
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