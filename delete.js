module.exports = function() {
  var express = require('express');
  var router = express.Router();

  // delete transaction by transaction ID
  this.queryDelTransaction = "DELETE FROM `transaction` WHERE `id` = ?";

  // delete customer by customer id
  this.queryDelCustomer = "DELETE FROM `customer` WHERE `id` = ?";

  // delete a shipment shipment id
  this.queryDelShipment = "DELETE FROM `shipment` WHERE `id` = ?";

  // delete a product by product id
  this.queryDelProduct = "DELETE FROM `product` WHERE `id` = ?";

  // delete an inventory_item by item id.
  this.queryDelItem = "DELETE FROM `inventory_item` WHERE `id` = ?";

  // delete a category by category id
  this.queryDelCategory = "DELETE FROM `category` WHERE id = ?";

  router.delete('/deleteCustomer/:id', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelCustomer, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        res.status(202).end();
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteTransaction/:id', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelTransaction, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        res.status(202).end();
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteShipment/:id', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelShipment, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        res.status(202).end();
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteProduct/:id', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelProduct, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        res.status(202).end();
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteItem/:id', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelItem, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        res.status(202).end();
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteCategory/:id', function(req, res) {
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelCategory, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        res.status(202).end();
        res.redirect('/employee');
      }
    });
  });


  return router;
}();
