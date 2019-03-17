// employee.js stuff here.

module.exports = function(){

    var pack = require('./server.js');

    var io = pack[0];
    var OTHER = pack[1];

    var express = require('express');
    var router = express.Router();
    var YEET  = require('./engine.js');
    var queries = new YEET();
    var YOTE  = require('./create.js');


    var deleteItems = false;
    var deleteItemsContent = {};

    io.on('connection', function(socket){
       socket.on('applyf',function(content){
       });
       socket.on('deleteItems',function(content){
            deleteItems = true;
            deleteItemsContent = content;
       });
    });

    router.get('/', function(req, res){
            res.redirect('/employee/customers');
            });
    
    router.get('/modify', function(req, res){
            var context = {};
            res.render('employee', context);
            });
    
    router.get('/customers', function(req, res){
            var context = {};
            var mysql = req.app.get('mysql');
            var query = queries.queryTextGetCustomers;
            context.jsscripts=["sort.js"];
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

    function renderTransactions(req, res){
        var context = {};
        var mysql = req.app.get('mysql');
        var query = queries.queryTextGetTransactions;
        context.jsscripts=["sort.js"];
        context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
        mysql.pool.query(query, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.transactions = results;
            res.render('emptransactions', context);
        });
    }


    function deleteTransactionStuff(req, res){
        var comps = 0;
        var maxval = 2;
        var mysql = req.app.get('mysql');
        var query1 = queries.modifyTransactionTotal;
        var query2 = queries.modifyTransactionItems;
        var inserts1 = [deleteItemsContent.newTotal, deleteItemsContent.transaction];
        var inserts2 = deleteItemsContent.inventoryToRefund;
        var i;
        for(i = 1; i < inserts2.length; i++){
            query2 = query2 + " OR id = ?";
        }
        mysql.pool.query(query1, inserts1, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            complete();
        });
        mysql.pool.query(query2, inserts2, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            complete();
        });
        function complete(){
            comps = comps + 1;
            if(comps >= maxval){
                deleteItems = false;
                renderTransactions(req, res);
            }
        }
    }

    router.get('/transactions', function(req, res){
        if(deleteItems){
            deleteTransactionStuff(req, res);
        }
        else{
            renderTransactions(req, res);
        }
    });
    
    router.get('/shipments', function(req, res){
            var context = {};
            var mysql = req.app.get('mysql');
            var query = queries.queryTextGetShipments;
            context.jsscripts=["sort.js"];
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

    router.get('/inspecttransaction/:id', function(req, res){
            var context = {};
            var completeCounter = 0;
            var mysql = req.app.get('mysql');
            var query1 = queries.getTransactionItems;
            var query2 = queries.getTransactionInfo;
            var inserts = [req.params.id];
            context.jsscripts=["sort.js", "buttonfuncs.js"];
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            
            mysql.pool.query(query1, inserts, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.items = results;
                complete();
            });
            mysql.pool.query(query2, inserts, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.transactions = results;
                complete();
            });


            
            function complete(){
                completeCounter = completeCounter + 1;
                if(completeCounter >= 2)
                    res.render('inspecttransaction', context);
            }

    });

    router.get('/deletetransaction/:id', function(req, res){
        var context = {};
        var mysql = req.app.get('mysql');
        var query = queries.deleteTransaction;
        var inserts = [req.params.id];
            
        mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            res.redirect('/employee/transactions');
        });
    });

        
    
    router.get('/inspectshipment/:id', function(req, res){
            var context = {};
            var completeCounter = 0;
            var mysql = req.app.get('mysql');
            var query1 = queries.getShipmentItems;
            var query2 = queries.getShipmentInfo;
            var inserts = [req.params.id];
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];
            mysql.pool.query(query1, inserts, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.items = results;
                complete();
            });
            mysql.pool.query(query2, inserts, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                context.shipments = results;
                complete();
            });


            
            function complete(){
                completeCounter = completeCounter + 1;
                if(completeCounter >= 2)
                    res.render('inspectshipment', context);
            }

    });
    
    return router;
}();
