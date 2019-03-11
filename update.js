module.exports = function() {
  var express = require('express');
  var router = express.Router();

  // update a row in the CUSTOMER table
  queryUpdateCustomer = "UPDATE customer SET fname = ?, lname = ?, phone_number = ? WHERE id = ?";

  router.put('/updateCustomer', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.body.fnameInput, req.body.lnameInput, req.body.phoneInput, req.body.idCustUpdate];
    sql = mysql.pool.query(queryUpdateCustomer, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      } else {
        res.status(200);
        res.redirect('/employee');
      }
    });
  });

  // update a row in the TRANSACTION table
  queryUpdateTransaction = "UPDATE transaction SET customer = ?, date = ?, payment_method = ?, payment_total = ? WHERE id = ?";

  router.put('/updateTransaction', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.body.customerInput, req.body.dateInput, req.body.methodInput, req.body.totalInput, req.body.idTransUpdate];
    sql = mysql.pool.query(queryUpdateTransaction, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      } else {
        res.status(200);
        res.redirect('/employee');
      }
    });
  });

  // update a row in the SHIPMENT table
  queryUpdateShipment = "UPDATE shipment SET supplier_name = ?, shipping_service_name = ?, date = ?, damaged = ? WHERE id = ?";

  router.put('/updateShipment', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.body.supplierInput, req.body.supplierInput, req.body.serviceInput, req.body.dateInput, req.body.damagedInput, req.body.idShipUpdate];
    sql = mysql.pool.query(queryUpdateShipment, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      } else {
        res.status(200);
        res.redirect('/employee');
      }
    });
  });

  // update a row in the PRODUCT table
  queryUpdateProduct = "UPDATE product SET name = ?, selling_price = ? WHERE id = ?";

  router.put('/updateProduct', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.body.nameInput, req.body.priceInput, req.body.idProdUpdate];
    sql = mysql.pool.query(queryUpdateProduct, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      } else {
        res.status(200);
        res.redirect('/employee');
      }
    });
  });

  // update a row in the INVENTORY_ITEM table
  queryUpdateItem = "UPDATE inventory_item SET pid = ?, serial = ?, buying_price = ?, shipmentID = ?, transactionID = ? WHERE id = ?";

  router.put('/updateItem', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.body.pidInput, req.body.serialInput, req.body.priceInput, req.body.shipmentInput, req.body.transactionInput, req.body.idItemUpdate];
    sql = mysql.pool.query(queryUpdateItem, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      } else {
        res.status(200);
        res.redirect('/employee');
      }
    });
  });

  // update a row in the CATEGORY table
  queryUpdateCategory = "UPDATE category SET name = ? WHERE id = ?";

  router.put('/updateCategory', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.body.nameInput, req.body.idCatUpdate];
    sql = mysql.pool.query(queryUpdateCategory, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      } else {
        res.status(200);
        res.redirect('/employee');
      }
    });
  });

  return router;
}();
