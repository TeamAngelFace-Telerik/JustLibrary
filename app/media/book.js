import media from './media/media'

var book = (function (parent) {
    var book = Object.create(parent);

    Object.defineProperties(book, {
        init: function (mediaObj) {
            parent.init.call(this);
            this._publisher = mediaObj.publisher;
            this._author = mediaObj.author;

            return this;
        },
        publisher: {
            get: function () {
                return this._publisher
            },
            set: function (value) {
                //validation
                this._publisher = value;
            }
        },
        trailer: {
            get: function () {
                return this._author
            },
            set: function (value) {
                //validation
                this._author = value;
            }
        }
    });

    return book;
}(media));

export default book;