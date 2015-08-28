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
		title: {
			get: function () {
			  return this._title
			},
			set: function (value) {
			  //validation
				this._title = value;
			}
		},
		description: {
			get: function () {
				return this._description
			},
			set: function (value) {
				//validation
				this._description = value;
			}
		},
		rating: {
			get: function () {
				return this._rating
			},
			set: function (value) {
				//validation
				this._rating = value;
			}
		},
		genre: {
			get: function () {
				return this._genre
			},
			set: function (value) {
				//validation
				this._genre = value;
			}
		}
	});

	return media;
}());

export default media;