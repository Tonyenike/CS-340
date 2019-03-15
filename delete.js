module.exports = function() {
  var express = require('express');
  var router = express.Router();

  // delete transaction by transaction ID
 queryDelTransaction = "DELETE FROM `transaction` WHERE `id` = ?";

  // delete customer by customer id
  queryDelCustomer = "DELETE FROM `customer` WHERE `id` = ?";

  // delete a shipment shipment id
  queryDelShipment = "DELETE FROM `shipment` WHERE `id` = ?";

  // delete a product by product id
  queryDelProduct = "DELETE FROM `product` WHERE `id` = ?";

  // delete an inventory_item by item id.
  queryDelItem = "DELETE FROM `inventory_item` WHERE `id` = ?";

  // delete a category by category id
  queryDelCategory = "DELETE FROM `category` WHERE id = ?";

  router.delete('/deleteCustomer/:id', function(req, res) {
    //console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelCustomer, inserts, function(error, results, fields) {
      if (error) {
        //console.log("FAILURE ON DELETE");
        res.write(JSON.stringify(error));
        //res.status(400);
        res.end();
      } else {
        //console.log("SUCCESS ON DELETE");
        //console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteTransaction/:id', function(req, res) {
    //console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelTransaction, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        //res.status(400);
        res.end();
      } else {
        //console.log("SUCCESS ON DELETE");
        //console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteShipment/:id', function(req, res) {
   // console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelShipment, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        //res.status(400);
        res.end();
      } else {
        // console.log("SUCCESS ON DELETE");
        //console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteProduct/:id', function(req, res) {
    console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelProduct, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        console.log("SUCCESS ON DELETE");
        console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteItem/:id', function(req, res) {
    console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelItem, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        console.log("SUCCESS ON DELETE");
        console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });

  router.delete('/deleteCategory/:id', function(req, res) {
    console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.id];
    sql = mysql.pool.query(queryDelCategory, inserts, function(error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        console.log("SUCCESS ON DELETE");
        console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });
  
    router.delete('/deleteProductCategoryRelationShip/:pid/:cid', function(req, res) {
    console.log("DELETE CALLED");
    var mysql = req.app.get('mysql');
    var inserts = [req.params.pid, req.params.cid];
    sql = mysql.pool.query(queryDelProductCategoryRel, inserts, function(error, results, fields) {
      if (error) {
        console.log("FAILURE ON DELETE");
        console.log(sql.sql);
        res.write(JSON.stringify(error));
        res.status(400);
        res.end();
      } else {
        console.log("SUCCESS ON DELETE");
        console.log(sql.sql);
        res.status(202);
        res.redirect('/employee');
      }
    });
  });


  return router;
}();
