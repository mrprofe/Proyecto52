-- Crea los indices de Customer 
CREATE NONCLUSTERED INDEX IDX_Customers_Email
ON Customers (Email);

-- Crea los indices de Orders
CREATE NONCLUSTERED INDEX IDX_Orders_CustomerID
ON Orders (CustomerID);

-- Crea los indices de Products
CREATE NONCLUSTERED INDEX IDX_Products_Price
ON Products (Price);

-- Crea los indices de Orders Details
CREATE NONCLUSTERED INDEX IDX_OrderDetails_OrderID
ON OrderDetails (OrderID);

CREATE NONCLUSTERED INDEX IDX_OrderDetails_ProductID
ON OrderDetails (ProductID);

