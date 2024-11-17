-- Elimina los indices de Customer
drop index IDX_Customers_Email on Customers;

-- Elimina los indices de Orders
drop index IDX_Orders_CustomerID on Orders;

-- Elimina los indices de Products
drop index IDX_Products_Price on Products;

-- Elimina los indices de OrderDetails
drop index IDX_OrderDetails_OrderID on OrderDetails;
drop index IDX_OrderDetails_ProductID on OrderDetails;

