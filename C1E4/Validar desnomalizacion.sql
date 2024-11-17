-- Crear tabla desnormalizada
CREATE TABLE DesnormalizedOrders (
    OrderID INT,
    CustomerID INT,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Email NVARCHAR(100),
    OrderDate DATETIME,
    TotalAmount DECIMAL(18, 2),
    ProductID INT,
    ProductName NVARCHAR(100),
    Quantity INT,
    UnitPrice DECIMAL(18, 2),
    TotalLineAmount AS (Quantity * UnitPrice) PERSISTED
);
GO


-- Poblar tabla desnormalizada con datos consolidados
INSERT INTO DesnormalizedOrders (OrderID, CustomerID, FirstName, LastName, Email, OrderDate, TotalAmount, ProductID, ProductName, Quantity, UnitPrice)
SELECT 
    o.OrderID,
    c.CustomerID,
    c.FirstName,
    c.LastName,
    c.Email,
    o.OrderDate,
    o.TotalAmount,
    od.ProductID,
    p.ProductName,
    od.Quantity,
    od.UnitPrice
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID;
GO

-- Consultar datos de la tabla desnormalizada
SELECT 
    OrderID,
    FirstName + ' ' + LastName AS CustomerName,
    Email,
    OrderDate,
    ProductName,
    Quantity,
    UnitPrice,
    TotalLineAmount
FROM DesnormalizedOrders
ORDER BY OrderDate DESC;
GO


-- Consulta en modelo normalizado
SELECT 
    o.OrderID,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    c.Email,
    o.OrderDate,
    p.ProductName,
    od.Quantity,
    od.UnitPrice,
    od.Quantity * od.UnitPrice AS TotalLineAmount
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID
ORDER BY o.OrderDate DESC;
GO


-- Medir tiempo para consulta desnormalizada
SET STATISTICS TIME ON;

SELECT 
    OrderID,
    FirstName + ' ' + LastName AS CustomerName,
    Email,
    OrderDate,
    ProductName,
    Quantity,
    UnitPrice,
    TotalLineAmount
FROM DesnormalizedOrders
ORDER BY OrderDate DESC;


-- Medir tiempo para consulta normalizada
SELECT 
    o.OrderID,
    c.FirstName + ' ' + c.LastName AS CustomerName,
    c.Email,
    o.OrderDate,
    p.ProductName,
    od.Quantity,
    od.UnitPrice,
    od.Quantity * od.UnitPrice AS TotalLineAmount
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID
ORDER BY o.OrderDate DESC;

SET STATISTICS TIME OFF;

