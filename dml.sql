-- These are some Database Manipulation queries for a partially implemented Project Website
-- Your submission should contain ALL the queries required to implement ALL the
-- functionalities listed in the Project Specs.

-- get information for all customers.
SELECT * FROM `customer`;

-- get all information for all transactions
SELECT * FROM `tranaction`;

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

-- get information for a tranaction by id
SELECT * FROM `tranaction` WHERE `id` = :transaction_id_selected_from_page;

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

-- filter transactions by customer ID
SELECT * FROM `transaction` WHERE `cid` = :cidInput;

-- filter transaction by date
SELECT * FROM `transaction` WHERE `DATE` >= :minDate AND `date` <= :maxDate;

-- filter transaction by customer ID and date
SELECT * FROM `transaction` WHERE `cid` = :cidInput AND `date` >= :minDate AND `date` <= :maxDate;
