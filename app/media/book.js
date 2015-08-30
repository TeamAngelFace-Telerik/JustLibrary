import media from './media';

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
                //validation
                this.publisher = value;
            }
        },
        _author: {
            get: function () {
                return this.author;
            },
            set: function (value) {
                //validation
                this.author = value;
            }
        }
    });
    return book;
}(media));

export default book;