// get information for all customers.
var queryText = "SELECT * FROM `customer`";

// get all information for all transactions
var queryText = "SELECT * FROM `transaction`";

// get all information for all shipments
var queryText = "SELECT * FROM `shipment`";

// get all information for all products
var queryText = "SELECT * FROM `product`";

// get information for every inventory item
var queryText = "SELECT * FROM `inventory_item`";

// get information for all categories
var queryText = "SELECT * FROM `category`";

// get information for a customer by id
var queryText = "SELECT * FROM `customer` WHERE `id` = :customer_id_selected_from_page";

// get information for a transaction by id
var queryText = "SELECT * FROM `transaction` WHERE `id` = :transaction_id_selected_from_page";

// get information for a shipment by id
var queryText = "SELECT * FROM `shipment` WHERE `id` = :shipment_id_selected_from_page";

// get information for a product by id
var queryText = "SELECT * FROM `product` WHERE `id` = :product_id_selected_from_page";

// get information for a inventory_item by id
var queryText = "SELECT * FROM `inventory_item` WHERE `id` = :item_id_selected_from_page";

// get information for a category by id
var queryText = "SELECT * FROM `category` WHERE id = :category_id_selected_from_page";

// add a new customer
var queryText = "INSERT INTO `customer` (`fname`, `lname`, `phonenumber`) VALUES (:fnameInput, :lnameInput, :phoneInput)";

// add a new transaction
var queryText = "INSERT INTO `transaction` (`customer`, `date`, `payment_method`, `payment_total`) VALUES (:customerInput, :dateInput, :methodInput, :totalInput)";

// add a new shipment
var queryText = "INSERT INTO `shipment` (`supplier_name`, `shipping_service_name`, `date`, `damaged`) VALUES (:supplierInput, :serviceInput, :dateInput, :damagedInput)";

// add a new product
var queryText = "INSERT INTO `product` (`name`, `selling_price`) VALUES (:nameInput, :priceInput)";

// add a new item
var queryText = "INSERT INTO `inventory_item` (`pid`, `serial`, `buying_price`, `shipmentID`, `transactionID`) VALUES (:pidInput, :serialInput, :priceInput, :shipmentInput, :transactionInput)";

// add a new category
var queryText = "INSERT INTO `category` (`name`) VALUES (:nameInput)";

// add a new entry to the product category table
var queryText = "INSERT INTO `product_category` (`cid`, `pid`) VALUES (:cidInput, :pidInput)";

// filter products by price
var queryText = "SELECT * FROM `product` WHERE `selling_price` <= :maxPrice AND `selling_price` >= :minPrice";

// filter products by name
var queryText = "SELECT * FROM `product` WHERE `name` = nameInput";

// delete transaction by transaction ID
var queryText = "DELETE FROM `transaction` WHERE `id` = :idInput";

// delete customer by customer id
var queryText = "DELETE FROM `customer` WHERE `id` = :idInput";

// delete a shipment shipment id
var queryText = "DELETE FROM `shipment` WHERE `id` = :idInput";

// delete a product by product id
var queryText = "DELETE FROM `product` WHERE `id` = :idInput";

// delete an inventory_item by item id.
var queryText = "DELETE FROM `inventory_item` WHERE `id` = :idInput";

// delete a category by category id
var queryText = "DELETE FROM `category` WHERE id = :idInput";

// update a row in the INVENTORY_ITEM table
var queryText = "UPDATE inventory_item SET pid = :pid_of_choice, serial = :serial_of_choice, buying_price = :buying_price_of_choice, shipmentID = :shipmentID_of_choice, transactionID = :transactionID_of_choice WHERE id = :id_to_change";

// update a row in the CUSTOMER table
var queryText = "UPDATE customer SET fname = :fname_of_choice, lname = :lname_of_choice, phone_number = :phone_number_of_choice WHERE id = :id_to_change";

// update a row in the TRANSACTION table
var queryText = "UPDATE transaction SET customer = :customer_of_choice, date = :date_of_choice, payment_method = :payment_method_of_choice, payment_total = :payment_total_of_choice WHERE id = :id_to_change";


// update a row in the SHIPMENT table
var queryText = "UPDATE shipment SET supplier_name = :supplier_name_of_choice, shipping_service_name = :shipping_service_name_of_choice, date = :date_of_choice, damaged = :damaged_of_choice WHERE id = :id_to_change";

// update a row in the PRODUCT table
var queryText = "UPDATE product SET name = :name_of_choice, selling_price = :selling_price_of_choice WHERE id = :id_to_change";

// update a row in the CATEGORY table
var queryText = "UPDATE category SET name = :name_of_choice WHERE id = :id_to_change";

// Note that we don't need to var queryText = "UPDATE the CATEGORY/PRODUCT relationship table, we only need to add / remove entries in this table.
