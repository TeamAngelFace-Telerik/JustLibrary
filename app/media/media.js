import utils from '../common/utils';

var media = (function(){
	var media = {
		init: function(mediaObj){
			this.url = mediaObj.url;
			this.image = mediaObj.image;
			this._title = mediaObj.title;
			this._description = mediaObj.description;
			this._rating = mediaObj.rating;
			this._genre = mediaObj.genre;

			return this;
		}
	};

	Object.defineProperties(media, {
		_title: {
			get: function () {
			  return this.title;
			},
			set: function (value) {
			  	utils.validateTitle(value);
				this.title = value;
			},
		},
		_description: {
			get: function () {
				return this.description;
			},
			set: function (value) {
				utils.validateDescription(value);
				this.description = value;
			}
		},
		_rating: {
			get: function () {
				return this.rating;
			},
			set: function (value) {
				utils.validateRating(value);
				this.rating = value;
			}
		},
		_genre: {
			get: function () {
				return this.genre;
			},
			set: function (value) {
				utils.validateGenre(value);
				this.genre = value;
			}
		}
	});

	return media;
}());

export default media;