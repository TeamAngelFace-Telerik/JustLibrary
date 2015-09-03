import media from '..app/media/media';
import book from '..app/media/book';
import song from '..app/media/song';
import video from '..app/media/video';
var expect = require('chai').expect;


describe('Creation of media', function() {
    describe('Valid creation', function () {
        it('Media to be successfuly created with correct params', function() {
            /* 	this.url = mediaObj.url;
             this.image = mediaObj.image;
             this._title = mediaObj.title;
             this._description = mediaObj.description;
             this._rating = mediaObj.rating;
             this._genre = mediaObj.genre;
*/
             var testMedia = {
                     url: "https://netbeans.org/kb/docs/webclient/html5-js-support.html",
                     image: "https://pbs.twimg.com/profile_images/461143248379998208/ULLAcf3x.jpeg",
                     title: "Media title",
                     description: "Valid description for media",
                     rating: 4,
                     genre: "NotSoHorror"
                 };
            expect(media.init(testMedia)).not.to.throw();
        });
    });
    describe('Invalid creation', function () {
        var testMedia = {
            url: "https://netbeans.org/kb/docs/webclient/html5-js-support.html",
            image: "https://pbs.twimg.com/profile_images/461143248379998208/ULLAcf3x.jpeg",
            title: "Media title",
            description: "Valid description for media",
            rating: 4,
            genre: "NotSoHorror"
        };
        // Image and url are validated by browser input fields.
        //it('Media should throw with invalid url', function () {

        //});
        //it('Media should throw with invalid image', function () {
        //
        //});
        it('Media should throw with invalid title', function () {
               testMedia.title = "Ye";
                expect(media.init(testMedia)).to.throw();
        });
        it('Media should throw with invalid description', function () {
            testMedia.description = "Yey be";
            expect(media.init(testMedia)).to.throw();
        });
        it('Media should throw with invalid rating - string', function () {
            testMedia.rating = "Ye";
            expect(media.init(testMedia)).to.throw();
        });
        it('Media should throw with invalid rating - number', function () {
            testMedia.rating = "138";
            expect(media.init(testMedia)).to.throw();
        });
        it('Media should throw with invalid genre', function () {
            testMedia.genre = "Ye";
            expect(media.init(testMedia)).to.throw();
        });
    })

});