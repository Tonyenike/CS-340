module.exports = function(){
    var express = require('express');
    var router = express.Router();
    }

// add a new customer
// VALUES (:fnameInput, :lnameInput, :phoneInput)";
var queryTextCreateCustomer = "INSERT INTO `customer` (`fname`, `lname`, `phonenumber`) VALUES (?, ?, ?)";

// add a new transaction
// VALUES (:customerInput, :dateInput, :methodInput, :totalInput)";
var queryTextCreateTransaction = "INSERT INTO `transaction` (`customer`, `date`, `payment_method`, `payment_total`) VALUES (?, ?, ?, ?)";

// add a new shipment
// VALUES (:supplierInput, :serviceInput, :dateInput, :damagedInput)";
var queryTextCreateShipment = "INSERT INTO `shipment` (`supplier_name`, `shipping_service_name`, `date`, `damaged`) VALUES (?, ?, ?, ?";

// add a new product
// VALUES (:nameInput, :priceInput)";
var queryTextCreateProduct = "INSERT INTO `product` (`name`, `selling_price`) VALUES (?, ?)";

// add a new item
// VALUES (:pidInput, :serialInput, :priceInput, :shipmentInput, :transactionInput)";
var queryTextCreateItem = "INSERT INTO `inventory_item` (`pid`, `serial`, `buying_price`, `shipmentID`, `transactionID`) VALUES (?, ?, ?, ?, ?)";

// add a new category
// VALUES (:nameInput)";
var queryTextCreateCategory = "INSERT INTO `category` (`name`) VALUES (?)";

// add a new entry to the product category table
// VALUES (:cidInput, :pidInput)";
var queryTextCreateCategoryProductRelation = "INSERT INTO `product_category` (`cid`, `pid`) VALUES (?,?)";

router.post('/createCustomer', function(req, res){
    var mysql = req.app.get('mysql');
    var inserts = [req.body.fnameInput, req.body.lnameInput, req.body.phoneInput];
    sql = mysql.pool.query(queryTextCreateCustomer,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});

router.post('/createTransaction', function(req, res){
    var mysql = req.app.get('mysql');
    var inserts = [req.body.customerInput, req.body.dateInput, req.body.methodInput, req.body.totalInput];
    sql = mysql.pool.query(queryTextCreateTransaction,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});

router.post('/createShipment', function(req, res){
    var mysql = req.app.get('mysql');
    var inserts = [req.body.supplierInput, req.body.serviceInput, req.body.dateInput, req.body.damagedInput];
    sql = mysql.pool.query(queryTextCreateShipment,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});

router.post('/createProduct', function(req, res){
    var mysql = req.app.get('mysql');
    var inserts = [req.body.nameInput, req.body.priceInput];
    sql = mysql.pool.query(queryTextCreateProduct,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});

router.post('/createItem', function(req, res){
    var mysql = req.app.get('mysql');
    var inserts = [req.body.pidInput, req.body.serialInput, req.body.priceInput, req.body.shipmentInput, req.body.transactionInput];
    sql = mysql.pool.query(queryTextCreateItem,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});

router.post('/createCategory', function(req, res){
    var mysql = req.app.get('mysql');
    var inserts = [req.body.nameInput];
    sql = mysql.pool.query(queryTextCreateCategory,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});

router.post('/createProductCategoryRelation', function(req, res){
    var mysql = req.app.get('mysql');

    var inserts = [req.body.cidInput, req.body.pidInput];
    sql = mysql.pool.query(queryTextCreateCategoryProductRelation,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            //res.redirect('/people');
        }
    });
});
