import Everlive from "../lib/everlive.all.min";
var db = (function () {
    var el = new Everlive('dmJhonVhIAcj1iJk');

    var db = {
        create: function (dataType, dataObj, successCb, errorCb) {
            var data = el.data(dataType);
            return data.create(dataObj).then(successCb, errorCb);
        },
        read: function (dataType, currentPage) {
            var data = el.data(dataType),
                query = new Everlive.Query(),
                pageSize = 3,
                page = currentPage || 1;


            query.skip((page - 1) * pageSize).take(pageSize);
            return data.get(query)
                .then(function (data) {
                        return data.result;
                    },
                    function (error) {
                        return error;
                    });
        },
        readById: function (dataType, id) {
            var data = el.data(dataType);

            return data.getById(id)
                .then(function (data) {
                        return data.result;
                    },
                    function (error) {
                        return error;
                    });
        },
        getItemsCount: function (dataType) {
            var data = el.data(dataType);
            return data.count()
                .then(function (data) {
                        return data.result;
                    },
                    function (error) {
                        alert(JSON.stringify(error));
                    });
        }
    };

    return db;

}());

export default db;
