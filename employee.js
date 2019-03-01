// employee.js stuff here.

module.exports = function(){

    var express = require('express');
    var router = express.Router();
    var YEET  = require('./engine.js');
    var YOTE  = require('./create.js');




    router.get('/', function(req, res){
            var context = {};
            res.render('employee', context);
            });

    return router;
}();
