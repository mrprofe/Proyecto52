SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- Ejempo 1: Selección con filtros sin Índices

SELECT * 
FROM customers
WHERE Email = 'email8405@example.com';

-- Ejempo 2: Join entre Tablas sin Índices

SELECT O.CustomerID,O.OrderID, P.ProductName, OD.Quantity, OD.UnitPrice
FROM Orders O
JOIN OrderDetails OD ON O.OrderID = OD.OrderID
JOIN Products P ON OD.ProductID = P.ProductID
and o.orderid = 9964


-- Ejemplo 3: grupación y Ordenación sin Índices

SELECT O.CustomerID, SUM(OD.Quantity) AS TotalProductsSold
FROM OrderDetails OD
JOIN Orders O ON OD.OrderID = O.OrderID
where o.orderid = 9964
GROUP BY O.CustomerID
ORDER BY TotalProductsSold DESC;
GO




SET STATISTICS IO OFF;
SET STATISTICS TIME OFF;
