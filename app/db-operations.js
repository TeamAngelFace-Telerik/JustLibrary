var db = (function(){
	var el = new Everlive('dmJhonVhIAcj1iJk');

	var db = {
		create: function(dataType, dataObj, successCb, errorCb){
			var data = el.data(dataType);
			return data.create(dataObj).then(successCb, errorCb);
		},
		read: function(dataType){
			var data = el.data(dataType),
				query = new Everlive.Query();

			return data.get(query)
		    .then(function(data){
		        return data.result;
		    },
		    function(error){
		        return error;
		    });
		}
	};

	return db;
	
}());

export default db;