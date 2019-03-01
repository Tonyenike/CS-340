// customer.js stuff here.

module.exports = function(){

    var express = require('express');
    var yote = express();
    var router = express.Router();
    var YEET  = require('./engine.js');
    var YOTE = new YEET();

    function getCategories(res, mysql, context, complete){
        var q = YOTE.queryText6;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                res.write(JSON.stringify(error));
                res.end();
                }
                context.cat = results;
                complete();
                });
    }

    function getProducts(res, mysql, context, complete){
        var q = YOTE.queryText4;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                res.write(JSON.stringify(error));
                res.end();
                }
                context.products = results;
                complete();
                });
    }



    router.get('/', function(req, res){
            var context = {};
            var qs = 0;
            var mysql = req.app.get('mysql');
            getCategories(res, mysql, context, complete);
            getProducts(res, mysql, context, complete);
            function complete(){
                qs = qs + 1;
\               if(qs >= 2){
                    res.render('customer', context);
                }
            }
            });

    return router;
}();
