import media from './media';
import utils from '../common/utils';

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
                utils.validateDuration(value);
                this.duration = value;
            }
        },
        _trailer: {
            get: function () {
                return this.trailer;
            },
            set: function (value) {
                utils.validateTrailer(value);
                this.trailer = value;
            }
        }
    });

    return video;
}(media));

export default video;