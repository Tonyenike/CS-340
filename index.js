// index.js stuff here.

module.exports = function(){

    var express = require('express');
    var router = express.Router();


    router.get('/', function(req, res){
            var context = {};
            res.status(200).render('index', {});
            });

    return router;
}();
