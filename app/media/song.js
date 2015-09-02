import media from './media';
import utils from '../common/utils';

var song = (function (parent) {
    var song = Object.create(parent);

    Object.defineProperties(song, {
        init: {
            value: function (mediaObj) {
                parent.init.call(this, mediaObj);
                this._duration = mediaObj.duration;

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
        }
    });

    return song;

}(media));

export default song;