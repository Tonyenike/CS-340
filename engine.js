module.exports = class queries{

constructor(){
// get information for all customers.
this.queryText1 = "SELECT * FROM `customer`";

// get all information for all transactions
this.queryText2 = "SELECT * FROM `transaction`";

// get all information for all shipments
this.queryText3 = "SELECT * FROM `shipment`";

// get all information for all products
this.queryText4 = "SELECT * FROM `product`";

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
this.queryText14 = "INSERT INTO `transaction` (`customer`, `date`, `payment_method`, `payment_total`) VALUES (:customerInput, :dateInput, :methodInput, :totalInput)";

// add a new shipment
this.queryText15 = "INSERT INTO `shipment` (`supplier_name`, `shipping_service_name`, `date`, `damaged`) VALUES (:supplierInput, :serviceInput, :dateInput, :damagedInput)";

// add a new product
this.queryText16 = "INSERT INTO `product` (`name`, `selling_price`) VALUES (:nameInput, :priceInput)";

// add a new item
this.queryText17 = "INSERT INTO `inventory_item` (`pid`, `serial`, `buying_price`, `shipmentID`, `transactionID`) VALUES (:pidInput, :serialInput, :priceInput, :shipmentInput, :transactionInput)";

// add a new category
this.queryText18 = "INSERT INTO `category` (`name`) VALUES (:nameInput)";

// add a new entry to the product category table
this.queryText19 = "INSERT INTO `product_category` (`cid`, `pid`) VALUES (:cidInput, :pidInput)";

// filter products by price
this.queryText20 = "SELECT * FROM `product` WHERE `selling_price` <= :maxPrice AND `selling_price` >= :minPrice";

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
}
}


// Note that we don't need to var queryText = "UPDATE the CATEGORY/PRODUCT relationship table, we only need to add / remove entries in this table.