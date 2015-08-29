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
			  //validation
				this.title = value;
			},
		},
		_description: {
			get: function () {
				return this.description;
			},
			set: function (value) {
				//validation
				this.description = value;
			}
		},
		_rating: {
			get: function () {
				return this.rating;
			},
			set: function (value) {
				//validation
				this.rating = value;
			}
		},
		_genre: {
			get: function () {
				return this.genre;
			},
			set: function (value) {
				//validation
				this.genre = value;
			}
		}
	});

	return media;
}());

export default media;