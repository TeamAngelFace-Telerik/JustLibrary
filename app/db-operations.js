import media from './media/media';

var db = (function(){
	var el = new Everlive('dmJhonVhIAcj1iJk');

	var db = {
		create: function(dataType, dataObj){
			var data = el.data(dataType);
			data.create(media.init(dataObj));
		},
		read: function(dataType){
			var data = el.data(dataType);
			var result = 0;
			var query = new Everlive.Query();

			return data.get(query)
		    .then(function(data){
		        return JSON.stringify(data.result);
		    },
		    function(error){
		        return JSON.stringify(error);
		    });
		}
	};

	return db;
	
}());

export default db;