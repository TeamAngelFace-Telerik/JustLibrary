/* globals describe, it, require */
var expect = require('chai').expect;
import media from '../app/media/media';
import book from '../app/media/book';
import song from '../app/media/song';
import video from '../app/media/video';

describe('Creation of media', function () {
    var testMedia = {};
    beforeEach(function () {
        testMedia = {
            url: "https://netbeans.org/kb/docs/webclient/html5-js-support.html",
            image: "https://pbs.twimg.com/profile_images/461143248379998208/ULLAcf3x.jpeg",
            title: "Media title",
            description: "Valid description for media",
            rating: 4,
            genre: "NotSoHorror"
        };
    });
    describe('Valid creation', function () {
        it('Media to be successfuly created with correct params', function () {
            function fn() {
                media.init(testMedia);
            }

            expect(fn).not.to.throw();
        });
    });
    describe('Invalid creation', function () {
        it('Media should throw with invalid title', function () {
            testMedia.title = "Ye";
            function fn() {
                media.init(testMedia);
            }

            expect(fn).to.throw();
        });
        it('Media should throw with invalid description', function () {
            testMedia.description = "Yey be";
            function fn() {
                media.init(testMedia);
            }

            expect(fn).to.throw();
        });
        it('Media should throw with invalid rating - string', function () {
            testMedia.rating = "Ye";
            function fn() {
                media.init(testMedia);
            }

            expect(fn).to.throw();
        });
        it('Media should throw with invalid rating - number', function () {
            testMedia.rating = "138";
            function fn() {
                media.init(testMedia);
            }

            expect(fn).to.throw();
        });
        it('Media should throw with invalid genre', function () {
            testMedia.genre = "Ye";
            function fn() {
                media.init(testMedia);
            }

            expect(fn).to.throw();
        });
    });
});
describe('Creation of book', function () {
    var testBook = {};
    beforeEach(function () {
        testBook = {
            url: "https://netbeans.org/kb/docs/webclient/html5-js-support.html",
            image: "https://pbs.twimg.com/profile_images/461143248379998208/ULLAcf3x.jpeg",
            title: "Book title",
            description: "Valid description for book",
            rating: 4,
            genre: "NotSoHorror",
            publisher: "Goshko",
            author: "Pak Goshko"
        };
    });
    describe('Valid creation', function () {
        it('Book to be successfuly created with correct params', function () {
            function fn() {
                book.init(testBook)
            }
            expect(fn).to.not.throw(Error);
        });
    });

    describe('Invalid creation', function () {
        it('Book should throw with invalid publisher', function () {
            testBook.publisher = "38";
            function fn() {
                book.init(testBook);
            }

            expect(fn).to.throw();
        });
        it('Book should throw with invalid author', function () {
            testBook.author = "Ye";
            function fn() {
                book.init(testBook);
            }

            expect(fn).to.throw();
        });
    })
});
describe('Creation of song', function () {
    var testSong = {};
    beforeEach(function () {
        testSong = {
            url: "https://netbeans.org/kb/docs/webclient/html5-js-support.html",
            image: "https://pbs.twimg.com/profile_images/461143248379998208/ULLAcf3x.jpeg",
            title: "Song title",
            description: "Valid description for song",
            rating: 4,
            genre: "NotSoHorror",
            duration: "123:32"
        };
    });
    describe('Valid creation', function () {
        it('Song to be successfuly created with correct params', function () {
            function fn() {
                song.init(testSong);
            }

            expect(fn).not.to.throw();
        });
    });
    describe('Invalid creation', function () {
        it('Song should throw with invalid duration', function () {
            testSong.duration = "";
            function fn() {
                song.init(testSong);
            }

            expect(fn).to.throw();
        });
    })
});
describe('Creation of video', function () {
    var testVideo = {};
    beforeEach(function () {
        testVideo = {
            url: "https://netbeans.org/kb/docs/webclient/html5-js-support.html",
            image: "https://pbs.twimg.com/profile_images/461143248379998208/ULLAcf3x.jpeg",
            title: "Song title",
            description: "Valid description for song",
            rating: 4,
            genre: "NotSoHorror",
            duration: "123:32",
            trailer: "SomeTrailerURL"
        };
    });
    describe('Valid creation', function () {
        it('Video to be successfuly created with correct params', function () {
            function fn() {
                video.init(testVideo);
            }

            expect(fn).not.to.throw();
        });
    });
    describe('Invalid creation', function () {
        it('Video should throw with invalid duration', function () {
            testVideo.duration = "";
            function fn() {
                video.init(testVideo);
            }

            expect(fn).to.throw();
        });
        it('Video should throw with invalid trailer', function () {
            testVideo.trailer = "";
            function fn() {
                video.init(testVideo);
            }

            expect(fn).to.throw();
        });
    })
});