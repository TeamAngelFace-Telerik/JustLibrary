var media = (function(){
	var media = {
		init: function(mediaObj){
			this.title = mediaObj.title;
			this.duration = mediaObj.duration;

			return this;
		}
	};

	return media;
}());

export default media;