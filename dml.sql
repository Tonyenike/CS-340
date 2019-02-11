-- These are some Database Manipulation queries for a partially implemented Project Website
-- Your submission should contain ALL the queries required to implement ALL the
-- functionalities listed in the Project Specs.

-- get information for all customers.
SELECT * FROM customer;

-- get all information for all orders.
SELECT * FROM order;

-- get all information for all products.
SELECT * FROM product;

-- get information for every inventory item.
SELECT * FROM inventory_item;

-- get information for all categories.
SELECT * FROM category;

-- get information for a customer by id.
SELECT * FROM customer WHERE id = :customer_id_selected_from_page;

-- get information for a order by id.
SELECT * FROM order WHERE id = :order_id_selected_from_page;

-- get information for a product by id.
SELECT * FROM product WHERE id = :product_id_selected_from_page;

-- get information for a inventory_item by id.
SELECT * FROM inventory_item WHERE id = :item_id_selected_from_page;

-- get information for a category by id.
SELECT * FROM category WHERE id = :category_id_selected_from_page;
