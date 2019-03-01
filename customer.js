// customer.js stuff here.

var express = require('express');
var router = express.Router();
var YEET  = require('./engine.js');

    function getCategories(res, mysql, context){
    mysql.pool.query(YEET.QueryText6, function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        context.categories  = results;
    });
}




router.get('/customer', function(req, res){
    var callbackCount = 0;
    var context = {};
    cotext.style = "customer.css";
    context.script = "customer.js";
    var mysql = req.app.get('mysql');
    getCategories(res, mysql, context);
    res.render('/customer.handlebars', context);
});
