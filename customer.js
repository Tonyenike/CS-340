// customer.js stuff here.

module.exports = function(){

    console.log("wuss poppin'");

    var express = require('express');
    var yote = express();
    var router = express.Router();
    var YEET  = require('./engine.js');
    var YOTE = new YEET();

    function getCategories(res, mysql, context){
        var q = YOTE.queryText6;
        console.log(q);
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                res.write(JSON.stringify(error));
                res.end();
                }
                context.cat  = results;
                console.log(results[0].name);
                });
    }




    router.get('/', function(req, res){
            var context = {};
            var mysql = req.app.get('mysql');
            getCategories(res, mysql, context);
            res.render('customer', context);
            });

    return router;
}();
