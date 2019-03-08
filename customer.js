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
                context.maxval = "00.00";
                context.minval = "00.00";
                complete();
                });
    }


    function getProductsFiltered(req, res, mysql, context, complete){
      var query = YOTE.queryText20;
      var minv = req.params.minval;
      var maxv = req.params.maxval;
      context.maxval = req.params.maxval;
      context.minval = req.params.minval;
      if (req.params.maxbool === "false"){
            maxv = "1000000000";
      }
      else{context.maxchecked = "checked";}
      if (req.params.minbool === "false"){
            minv = "0";
      }
      else{context.minchecked = "checked";}
      var inserts = [maxv, minv];
      if (req.params.namebool === "true"){
            query = YOTE.queryText34;
            inserts = [maxv, minv, req.params.nameval];
            context.nameval = req.params.nameval;
      }
      mysql.pool.query(query, inserts, function(error, results, fields){
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
            context.jsscripts = ["filter.js"];
            getCategories(res, mysql, context, complete);
            getProducts(res, mysql, context, complete);
            function complete(){
                qs = qs + 1;
                if(qs >= 2){
                    res.render('customer', context);
                }
            }
    });

    router.get('/filter/:maxbool/:maxval/:minbool/:minval/:namebool/:nameval', function(req, res){
            var context = {};
            var qs = 0;
            var mysql = req.app.get('mysql');
            context.jsscripts = ["filter.js"];
            getCategories(res, mysql, context, complete);
            getProductsFiltered(req, res, mysql, context, complete);
            function complete(){
                qs = qs + 1;
                if(qs >= 2){
                    res.render('customer', context);
                }
            }
    });

    return router;
}();
