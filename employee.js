// employee.js stuff here.

module.exports = function(){

    var express = require('express');
    var router = express.Router();
    var YEET  = require('./engine.js');
    var queries = new YEET();
    var YOTE  = require('./create.js');


    router.get('/', function(req, res){
            var context = {};
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            res.render('redirect', context);
            });
    
    router.get('/home', function(req, res){
            var context = {};
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            res.render('emphome', context);
            });
    
    router.get('/modify', function(req, res){
            var context = {};
            res.render('employee', context);
            });
    
    router.get('/customers', function(req, res){
            var context = {};
            var mysql = req.app.get('mysql');
            var query = queries.queryTextGetCustomers;
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            mysql.pool.query(query, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.customers = results;
                complete();
            });

            function complete(){
                res.render('empcustomers', context);
            }
    });

    router.get('/transactions', function(req, res){
            var context = {};
            var mysql = req.app.get('mysql');
            var query = queries.queryTextGetTransactions;
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            mysql.pool.query(query, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.transactions = results;
                complete();
            });

            function complete(){
                res.render('emptransactions', context);
            }
            });
    
    router.get('/shipments', function(req, res){
            var context = {};
            var mysql = req.app.get('mysql');
            var query = queries.queryTextGetShipments;
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            mysql.pool.query(query, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.shipments = results;
                complete();
            });

            function complete(){
                res.render('empshipments', context);
            }
            });
    
    return router;
}();
