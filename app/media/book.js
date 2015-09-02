import media from './media';
import utils from '../common/utils';

var book = (function (parent) {
    var book = Object.create(parent);

    Object.defineProperties(book, {
        init: {
            value: function (mediaObj) {
                parent.init.call(this, mediaObj);
                this._publisher = mediaObj.publisher;
                this._author = mediaObj.author;

                return this;
            }
        },
        _publisher: {
            get: function () {
                return this.publisher;
            },
            set: function (value) {
                utils.validatePublisher(value);
                this.publisher = value;
            }
        },
        _author: {
            get: function () {
                return this.author;
            },
            set: function (value) {
                utils.validateAuthor(value);
                this.author = value;
            }
        }
    });
    return book;
}(media));

export default book;