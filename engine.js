module.exports = class queries{

constructor(){
// get information for all customers.
this.queryText1 = "SELECT * FROM `customer`";

// get all information for all transactions
this.queryTextGetTransactions = "SELECT T.id, T.payment_method, T.payment_total, " + 
                                "C.fname, C.lname, DATE_FORMAT(T.date, '%W, %M %D, %Y') AS date " + 
                                "FROM transaction T LEFT JOIN customer C ON C.id = T.customer";

this.getAllProducts = "SELECT * FROM product";

this.queryTextGetShipments = "SELECT S.id, S.damaged, S.supplier_name, S.shipping_service_name, " + 
                             "DATE_FORMAT(S.date, '%W, %M %D, %Y') AS date FROM shipment S";

this.queryTextGetCustomers = "SELECT * FROM customer";

this.deleteTransaction = "DELETE FROM transaction WHERE id = ?";

// get all information for all shipments
this.queryText3 = "SELECT * FROM `shipment`";

this.modifyTransactionTotal = "UPDATE transaction SET payment_total = ? WHERE id = ?";
this.modifyTransactionItems = "UPDATE inventory_item SET transactionID = NULL WHERE id = ?";


// get all information for all products
this.getProducts = "SELECT * FROM product P " +
                    "LEFT JOIN (SELECT P.id AS piddle, COUNT(I.id) AS quantity FROM product P INNER JOIN inventory_item I ON I.pid = P.id " +
                    "WHERE I.transactionID IS NULL GROUP BY P.id) AS quantities ON quantities.piddle = P.id"; 

// get information for every inventory item
this.queryText5 = "SELECT * FROM `inventory_item`";

// get information for all categories
this.queryText6 = "SELECT * FROM `category`";

// get information for a customer by id
this.queryText7 = "SELECT * FROM `customer` WHERE `id` = :customer_id_selected_from_page";

// get information for a transaction by id
this.queryText8 = "SELECT * FROM `transaction` WHERE `id` = :transaction_id_selected_from_page";

// get information for a shipment by id
this.queryText9 = "SELECT * FROM `shipment` WHERE `id` = :shipment_id_selected_from_page";

// get information for a product by id
this.queryText10 = "SELECT * FROM `product` WHERE `id` = :product_id_selected_from_page";

// get information for a inventory_item by id
this.queryText11 = "SELECT * FROM `inventory_item` WHERE `id` = :item_id_selected_from_page";

// get information for a category by id
this.queryText12 = "SELECT * FROM `category` WHERE id = :category_id_selected_from_page";

// add a new customer
this.queryText13 = "INSERT INTO `customer` (`fname`, `lname`, `phonenumber`) VALUES (:fnameInput, :lnameInput, :phoneInput)";

// add a new transaction
this.queryText14 = "INSERT INTO `transaction` (`customer`, `date`, `payment_method`, `payment_total`) VALUES (?, ?, ?, ?)";

// add a new shipment
this.addNewShipment = "INSERT INTO `shipment` (`supplier_name`, `shipping_service_name`, `date`, `damaged`) VALUES (?, ?, ?, ?)";

// add a new product
this.queryText16 = "INSERT INTO product (name, selling_price) VALUES (?, ?)";

// add a new item
this.insertInventory = "INSERT INTO `inventory_item` (`pid`, `serial`, `buying_price`, `shipmentID`, `transactionID`) VALUES (?, ?, ?, ?, NULL)";

// add a new category
this.queryText18 = "INSERT INTO `category` (`name`) VALUES (:nameInput)";

// add a new entry to the product category table
this.queryText19 = "INSERT INTO `product_category` (`cid`, `pid`) VALUES (:cidInput, :pidInput)";

// filter products by price
this.queryText20 = "SELECT * FROM product P " +
                    "LEFT JOIN product_category PC ON PC.pid = P.id " + 
                    "LEFT JOIN (SELECT P.id AS piddle, COUNT(I.id) AS quantity FROM product P INNER JOIN inventory_item I ON I.pid = P.id " +
                    "WHERE I.transactionID IS NULL GROUP BY P.id) AS quantities ON quantities.piddle = P.id " + 
                    "WHERE (selling_price <= ? AND selling_price >= ?)";

// filter products by name
this.queryText21 = "SELECT * FROM `product` WHERE `name` = nameInput";

// delete transaction by transaction ID
this.queryText22 = "DELETE FROM `transaction` WHERE `id` = :idInput";

// delete customer by customer id
this.queryText23 = "DELETE FROM `customer` WHERE `id` = :idInput";

// delete a shipment shipment id
this.queryText24 = "DELETE FROM `shipment` WHERE `id` = :idInput";

// delete a product by product id
this.queryText25 = "DELETE FROM `product` WHERE `id` = :idInput";

// delete an inventory_item by item id.
this.queryText26 = "DELETE FROM `inventory_item` WHERE `id` = :idInput";

// delete a category by category id
this.queryText27 = "DELETE FROM `category` WHERE id = :idInput";

// update a row in the INVENTORY_ITEM table
this.queryText28 = "UPDATE inventory_item SET pid = :pid_of_choice, serial = :serial_of_choice, buying_price = :buying_price_of_choice, shipmentID = :shipmentID_of_choice, transactionID = :transactionID_of_choice WHERE id = :id_to_change";

// update a row in the CUSTOMER table
this.queryText29 = "UPDATE customer SET fname = :fname_of_choice, lname = :lname_of_choice, phone_number = :phone_number_of_choice WHERE id = :id_to_change";

// update a row in the TRANSACTION table
this.queryText30 = "UPDATE transaction SET customer = :customer_of_choice, date = :date_of_choice, payment_method = :payment_method_of_choice, payment_total = :payment_total_of_choice WHERE id = :id_to_change";


// update a row in the SHIPMENT table
this.queryText31 = "UPDATE shipment SET supplier_name = :supplier_name_of_choice, shipping_service_name = :shipping_service_name_of_choice, date = :date_of_choice, damaged = :damaged_of_choice WHERE id = :id_to_change";

// update a row in the PRODUCT table
this.queryText32 = "UPDATE product SET name = :name_of_choice, selling_price = :selling_price_of_choice WHERE id = :id_to_change";

// update a row in the CATEGORY table
this.queryText33 = "UPDATE category SET name = :name_of_choice WHERE id = :id_to_change";

this.queryText34 = "SELECT P.id, P.selling_price, P.name, quantities.quantity FROM product P " +
                   "LEFT JOIN product_category PC ON PC.pid = P.id " +
                   "LEFT JOIN (SELECT P.id, COUNT(I.id) AS quantity FROM product P INNER JOIN inventory_item I ON I.pid = P.id " +
                   "WHERE I.transactionID IS NULL GROUP BY P.id) AS quantities ON quantities.id = P.id " + 
                   "WHERE (selling_price <= ? AND selling_price >= ? AND name LIKE '%' ? '%')";

this.queryTextCreateTransaction = "INSERT INTO `transaction` (`customer`, `date`, `payment_method`, `payment_total`) VALUES (?, ?, ?, ?)";

this.queryTextCreateCustomer = "INSERT INTO customer (fname, lname, phone_number) VALUES (?, ?, ?)";

this.queryTextAddInventory = "UPDATE inventory_item SET transactionID = ? WHERE id IN (SELECT * FROM (SELECT id FROM inventory_item WHERE pid = ? AND transactionID IS NULL LIMIT ?) temp_tab)"; 

this.queryTextGetQty = "SELECT COUNT(id) FROM inventory_item WHERE pid = ? GROUP BY pid";

this.getTransactionItems = "SELECT I.id, P.name, P.selling_price, I.serial FROM inventory_item I INNER JOIN " +
                           "product P ON P.id = I.pid WHERE I.transactionID = ?";

this.getTransactionInfo = "SELECT T.id, C.fname, C.lname, T.payment_method, T.payment_total, " +
                          "DATE_FORMAT(T.date, '%W, %M %D, %Y') AS date FROM transaction T LEFT JOIN " +
                          "customer C ON C.id = T.customer WHERE T.id = ?";

this.getShipmentItems = "SELECT I.id, P.name, I.buying_price, I.serial FROM inventory_item I INNER JOIN " +
                           "product P ON P.id = I.pid WHERE I.shipmentID = ?";

this.getShipmentInfo = "SELECT S.id, S.damaged, S.supplier_name, S.shipping_service_name, " +
                          "DATE_FORMAT(S.date, '%W, %M %D, %Y') AS date FROM shipment S WHERE S.id = ?";
}
}


// Note that we don't need to var queryText = "UPDATE the CATEGORY/PRODUCT relationship table, we only need to add / remove entries in this table.
