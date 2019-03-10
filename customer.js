// customer.js stuff here.

module.exports = function(){

    var pack = require('./server.js');

    var io = pack[0];
    var OTHER = pack[1];

    var express = require('express');
    var yote = express();
    var router = express.Router();
    var YEET  = require('./engine.js');
    var YOTE = new YEET();


    var doFilter = false;
    var modRes = {};

    var doOrder = false;
    var orderInfo = {};

    io.on('connection', function(socket){
        socket.on('products-ordered',function(content){
            doOrder = true;    
            orderInfo = content;
        });
       socket.on('applyf',function(content){
           doFilter = true;
           modRes = content;
       });
    });



    function getCategories(res, mysql, context, complete){
        var q = YOTE.queryText6;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                res.write(JSON.stringify(error));
                res.end();
                }
                context.cat = results;
                var j;
                    for(j=0; j < context.cat.length; j++){
                        context.cat[j].mchecked = "checked";
                    }
                complete();
                });
    }

    function addOrder(query, inserts, mysql){
    
        mysql.pool.query(query, inserts, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
        });
    }

   
    function placeOrder(orderInfo, res, mysql){
        var query = YOTE.queryTextCreateTransaction;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var dateval = yyyy + '-' + mm + '-' + dd;
        var inserts = new Array(4);

        if(orderInfo.customerbool){

            var cinserts = [orderInfo.fname, orderInfo.lname, toString(orderInfo.pnumber)];
            var cquery = YOTE.queryTextCreateCustomer;
            mysql.pool.query(cquery, cinserts, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
                else{
                    inserts = [results.insertId, dateval, orderInfo.paymentMethod, orderInfo.paymentTotal];
                    addOrder(query, inserts, mysql);
                }
            });




        }
        else{
            inserts = [null, dateval, orderInfo.paymentMethod, toString(orderInfo.paymentTotal)];
            addOrder(query, inserts, mysql);
        }
    }

 
    function getCategoriesSpecial(modRes, res, mysql, context, complete){
        var categories = modRes.categories;
        var totalcategories = modRes.totalcategories;
        var q = YOTE.queryText6;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                res.write(JSON.stringify(error));
                res.end();
                }
                context.cat = results;
                var i;
                var j = 0;
                for(i = 0; i < totalcategories.length; i++){
                    if(modRes.totalcategories[i] === categories[j]){
                        context.cat[i].mchecked = "checked";
                        j = j + 1;
                        i = -1;
                    }
                }
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
    function setOrder(res, mysql, context, complete, ordercontent){
        ordercontent.sett = 0;
        var q1 = YOTE.queryText14; //Adding a new transaction.
        var q2 = YOTE.queryText15; //If the customer entered their info, then we need to add them as well.
        mysql.pool.query(q1, function(error, results, fields){
                if(error){
                    res.write(JSON.stringify(error));
                    res.end();
                }
        });
    }


    function getProductsFiltered(req, res, mysql, context, complete){
      
      var categories = req.categories;
      var query = YOTE.queryText20;
      var minv = req.minval;
      var maxv = req.maxval;
      context.maxval = req.maxval;
      context.minval = req.minval;
      if (req.maxbool === false){
            maxv = "1000000000";
      }
      else{context.maxchecked = "checked";}
      if (req.minbool === false){
            minv = "0";
      }
      else{context.minchecked = "checked";}
      var inserts = [maxv, minv];
      if (req.namebool === true){
            query = YOTE.queryText34;
            inserts = [maxv, minv, req.nameval];
            context.nameval = req.nameval;
      }
      if(categories.length === 0){
        complete();   
        return;
      }     
      else{
         query = query + " AND (PC.cid = ? ";
         inserts = inserts.concat(categories);
         var i;
        for(i = 1; i < categories.length; i++){
            query = query + " OR PC.cid = ?";
        }
        query = query + ") GROUP BY P.id";
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
            maxval = 2;
            var mysql = req.app.get('mysql');
            context.jsscripts = ["filter.js", "order.js"];
            if(doOrder){
                placeOrder(orderInfo, res, mysql);
            }
            if(doFilter){
                getCategoriesSpecial(modRes, res, mysql, context, complete);
                getProductsFiltered(modRes, res, mysql, context, complete);
            }
            else{
                getCategories(res, mysql, context, complete);
                getProducts(res, mysql, context, complete);
            }
            function complete(){
                qs = qs + 1;
                if(qs >= maxval){
                    res.render('customer', context);
                    doFilter = false;
                    modRes = {};
                }
            }
    });
    
    return router;
}();
