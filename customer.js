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

    var duperror = false;
    
    function dupecheck(context){
        if(duperror){
            context.jsscripts.push("duplicate.js");
            duperror = false;
        }
    }

    function errorcheck(error,res){
        if(error.errno == 1062){
            duperror = true;
        }
        else{
            res.write(JSON.stringify(error));
            res.end();
        }
    }

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
                    errorcheck(error,res);
                }
                context.cat = results;
                var j;
                    for(j=0; j < context.cat.length; j++){
                        context.cat[j].mchecked = "checked";
                    }
                context.michecked = "checked";
                complete();
                });
    }


    function add_inventory(orderInfo, res, results, mysql, complete){

        // Orders the necessary quantities of inventory. 
        // TO DO: WE DO NOT ERROR CHECK TO MAKE SURE WE HAVE ENOUGH QTY YET!
        var query = YOTE.queryTextAddInventory; 
        var i;
        for(i = 0; i < orderInfo.productQTY.length; i++){
            var inserts = [results.insertId, orderInfo.productID[i], orderInfo.productQTY[i]];

            mysql.pool.query(query, inserts, function(error, results, fields){
                if(error){
                    errorcheck(error,res);
                }
                complete();
                // Success! But we do nothing.
            });
        }
    }



    function addOrder(orderInfo, res, query, inserts, mysql, complete){
        mysql.pool.query(query, inserts, function(error, results, fields){
                if(error){
                    errorcheck(error,res);
                }
                add_inventory(orderInfo, res, results, mysql, complete);
        });
    }

   
    function placeOrder(orderInfo, res, mysql, complete){
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
        if(orderInfo.returnbool){
            inserts = [orderInfo.returnval, dateval, orderInfo.paymentMethod, orderInfo.paymentTotal];
            addOrder(orderInfo, res, query, inserts, mysql, complete);
        }
        else if(orderInfo.customerbool){

            var cinserts = [orderInfo.fname, orderInfo.lname, orderInfo.pnumber];
            var cquery = YOTE.queryTextCreateCustomer;
            mysql.pool.query(cquery, cinserts, function(error, results, fields){
                if(error){
                    errorcheck(error,res);
                }
                if(duperror){
                    var i
                    for(i = 0; i < orderInfo.productQTY.length; i++){
                        complete();
                    }
                }
                else{
                    inserts = [results.insertId, dateval, orderInfo.paymentMethod, orderInfo.paymentTotal];
                    addOrder(orderInfo, res, query, inserts, mysql, complete);
                }
            });
        }
        else{
            inserts = [null, dateval, orderInfo.paymentMethod, orderInfo.paymentTotal];
            addOrder(orderInfo, res, query, inserts, mysql, complete);
        }
    }

 
    function getCategoriesSpecial(modRes, res, mysql, context, complete){
        var categories = modRes.categories;
        var totalcategories = modRes.totalcategories;
        var q = YOTE.queryText6;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                    errorcheck(error,res);
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
                if(modRes.miscbool)
                    context.michecked = "checked";
                complete();
                });
    }


    function getCustomers(res, mysql, context, complete){
        var q = YOTE.queryTextGetCustomers;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                    errorcheck(error,res);
                }
                context.customers = results;
                complete();
                });
    }

    function getProducts(res, mysql, context, complete){
        var q = YOTE.getProducts;
        mysql.pool.query(q, function(error, results, fields){
                if(error){
                    errorcheck(error,res);
                }
                context.products = results;
                context.maxval = "00.00";
                context.minval = "00.00";
                complete();
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
      if(categories.length === 0 && req.miscbool === false){
        console.log("yes");
        complete();   
        return;
      }     
      else{
         if(categories.length === 0){
            query = query + " AND P.id NOT IN (SELECT pid FROM product_category) GROUP BY P.id";
         }
         else{
            query = query + " AND (PC.cid = ? ";
            inserts = inserts.concat(categories);
            var i;
            for(i = 1; i < categories.length; i++){
                query = query + " OR PC.cid = ?";
            }
            if(req.miscbool){
                query = query + " OR P.id NOT IN (SELECT pid FROM product_category)";
            }
            query = query + ") GROUP BY P.id";
            }
      }
      mysql.pool.query(query, inserts, function(error, results, fields){
            if(error){
                errorcheck(error,res);
            }
            context.products = results;
            complete();
        });
    }


    router.get('/browse', function(req, res){
            var context = {};
            var qs = 0;
            maxval = 3;
            var mysql = req.app.get('mysql');
            context.jsscripts = ["sort.js", "filter.js", "order.js"];            
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];

            if(doOrder){
                placeOrder(orderInfo, res, mysql, completed);
                var maxvalue = orderInfo.productQTY.length;
                var comps = 0;
                function completed(){
                    comps = comps + 1;
                    if(comps >= maxvalue){
                        getCategories(res, mysql, context, complete);
                        getProducts(res, mysql, context, complete);
                        getCustomers(res, mysql, context, complete);
                    }
                }
            }
            else if(doFilter){
                getCategoriesSpecial(modRes, res, mysql, context, complete);
                getProductsFiltered(modRes, res, mysql, context, complete);
                getCustomers(res, mysql, context, complete);
            }
            else{
                getCategories(res, mysql, context, complete);
                getProducts(res, mysql, context, complete);
                getCustomers(res, mysql, context, complete);
            }
            function complete(){
                qs = qs + 1;
                if(qs >= maxval){
                    dupecheck(context);
                    res.render('customer', context);
                    doFilter = false;
                    doOrder = false;
                    modRes = {};
                }
            }
    });
    
    router.get('/', function(req, res){
        res.redirect('/customer/browse');
    }); 

    router.get('/info', function(req, res){
        
            var context = {};
            context.jsscripts = ["customers.js"];            
            context.cssPage=["https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"];

            res.render('custinfo.handlebars', context);

    });   

    return router;
}();
