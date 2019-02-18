-- get information for all customers.
SELECT * FROM `customer`;

-- get all information for all transactions
SELECT * FROM `transaction`;

-- get all information for all shipments
SELECT * FROM `shipment`;

-- get all information for all products
SELECT * FROM `product`;

-- get information for every inventory item
SELECT * FROM `inventory_item`;

-- get information for all categories
SELECT * FROM `category`;

-- get information for a customer by id
SELECT * FROM `customer` WHERE `id` = :customer_id_selected_from_page;

-- get information for a transaction by id
SELECT * FROM `transaction` WHERE `id` = :transaction_id_selected_from_page;

-- get information for a shipment by id
SELECT * FROM `shipment` WHERE `id` = :shipment_id_selected_from_page;

-- get information for a product by id
SELECT * FROM `product` WHERE `id` = :product_id_selected_from_page;

-- get information for a inventory_item by id
SELECT * FROM `inventory_item` WHERE `id` = :item_id_selected_from_page;

-- get information for a category by id
SELECT * FROM `category` WHERE id = :category_id_selected_from_page;

-- add a new customer
INSERT INTO `customer` (`fname`, `lname`, `phonenumber`) VALUES (:fnameInput, :lnameInput, :phoneInput);

-- add a new transaction
INSERT INTO `transaction` (`customer`, `date`, `payment_method`, `payment_total`) VALUES (:customerInput, :dateInput, :methodInput, :totalInput);

-- add a new shipment
INSERT INTO `shipment` (`supplier_name`, `shipping_service_name`, `date`, `damaged`) VALUES (:supplierInput, :serviceInput, :dateInput, :damagedInput);

-- add a new product
INSERT INTO `product` (`name`, `selling_price`) VALUES (:nameInput, :priceInput);

-- add a new item
INSERT INTO `inventory_item` (`pid`, `serial`, `buying_price`, `shipmentID`, `transactionID`) VALUES (:pidInput, :serialInput, :priceInput, :shipmentInput, :transactionInput);

-- add a new category
INSERT INTO `category` (`name`) VALUES (:nameInput);

-- add a new entry to the product category table
INSERT INTO `product_category` (`cid`, `pid`) VALUES (:cidInput, :pidInput);

-- filter products by price
SELECT * FROM `product` WHERE `selling_price` <= :maxPrice AND `selling_price` >= :minPrice;

-- filter products by name
SELECT * FROM `product` WHERE `name` = nameInput;

-- delete transaction by transaction ID
DELETE FROM `transaction` WHERE `id` = :idInput;

-- delete customer by customer id
DELETE FROM `customer` WHERE `id` = :idInput;

-- delete a shipment shipment id
DELETE FROM `shipment` WHERE `id` = :idInput;

-- delete a product by product id
DELETE FROM `product` WHERE `id` = :idInput;

-- delete an inventory_item by item id.
DELETE FROM `inventory_item` WHERE `id` = :idInput;

-- delete a category by category id
DELETE FROM `category` WHERE id = :idInput;

-- Update a row in the INVENTORY_ITEM table
UPDATE inventory_item SET pid = :pid_of_choice, serial = :serial_of_choice, buying_price = :buying_price_of_choice,
shipmentID = :shipmentID_of_choice, transactionID = :transactionID_of_choice WHERE id = :id_to_change;

-- Update a row in the CUSTOMER table
UPDATE customer SET fname = :fname_of_choice, lname = :lname_of_choice, phone_number = :phone_number_of_choice WHERE id = :id_to_change;

-- Update a row in the TRANSACTION table
UPDATE transaction SET customer = :customer_of_choice, date = :date_of_choice, 
payment_method = :payment_method_of_choice, payment_total = :payment_total_of_choice WHERE id = :id_to_change;


-- Update a row in the SHIPMENT table
UPDATE shipment SET supplier_name = :supplier_name_of_choice, shipping_service_name = :shipping_service_name_of_choice,
date = :date_of_choice, damaged = :damaged_of_choice WHERE id = :id_to_change;

-- Update a row in the PRODUCT table
UPDATE product SET name = :name_of_choice, selling_price = :selling_price_of_choice WHERE id = :id_to_change;

-- Update a row in the CATEGORY table
UPDATE category SET name = :name_of_choice WHERE id = :id_to_change;

-- Note that we don't need to update the CATEGORY/PRODUCT relationship table, we only need to add / remove entries in this table.



