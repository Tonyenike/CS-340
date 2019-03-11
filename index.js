// index.js stuff here.

module.exports = function(){

    var express = require('express');
    var router = express.Router();


    router.get('/', function(req, res){
            var context = {};
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            res.status(200).render('index', context);
            });

    return router;
}();
