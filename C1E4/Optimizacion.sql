--1) Consultas Anidadas y Subconsultas

-- Ejemplo: Subconsulta en la cláusula WHERE

SELECT ProductName, Price
FROM Products
WHERE Price > (
    SELECT AVG(Price)
    FROM Products
);

/*

Uso innecesario de subconsultas: 
A veces, se pueden reemplazar por JOINs o consultas con CTEs 
(Expresiones de Tabla Común) para mejorar la legibilidad y el rendimiento.

*/

-- Version optimizada

WITH AvgPrice AS (
    SELECT AVG(Price) AS AveragePrice FROM Products
)
SELECT ProductName, Price
FROM Products, AvgPrice
WHERE Price > AvgPrice.AveragePrice;

/*

Recomendaciones:

Limitar las subconsultas que se ejecutan por fila 
(evitar las correlacionadas cuando sea posible).

Usar índices en las columnas involucradas en subconsultas.

Considerar la reescritura de subconsultas complejas como JOINs.

*/

--2) JOINs y su Impacto en el Rendimiento

/*
Optimización de JOINs:

Crear índices en las columnas utilizadas en las condiciones del JOIN.

Reducir la cantidad de datos procesados mediante filtros (WHERE) 
antes del JOIN.

Evitar FULL OUTER JOINs si no son necesarios..

*/

-- INNER JOIN: Muestra solo las coincidencias entre Customers y Orders
SELECT 
    C.CustomerID, 
    C.FirstName, 
    C.LastName, 
    O.OrderID, 
    O.OrderDate, 
    O.TotalAmount
FROM Customers C 
INNER JOIN Orders O ON C.CustomerID = O.CustomerID;
GO

-- LEFT JOIN: Muestra todos los clientes, incluso si no tienen pedidos
SELECT 
    C.CustomerID, 
    C.FirstName, 
    C.LastName, 
    O.OrderID, 
    O.OrderDate, 
    O.TotalAmount
FROM Customers C
LEFT JOIN Orders O ON C.CustomerID = O.CustomerID;
GO

-- RIGHT JOIN: Muestra todos los pedidos, incluso si no hay cliente asociado
SELECT 
    C.CustomerID, 
    C.FirstName, 
    C.LastName, 
    O.OrderID, 
    O.OrderDate, 
    O.TotalAmount
FROM Customers C
RIGHT JOIN Orders O ON C.CustomerID = O.CustomerID;
GO

-- FULL OUTER JOIN: Muestra todos los clientes y pedidos, incluso si no hay coincidencias
SELECT 
    C.CustomerID, 
    C.FirstName, 
    C.LastName, 
    O.OrderID, 
    O.OrderDate, 
    O.TotalAmount
FROM Customers C
FULL OUTER JOIN Orders O ON C.CustomerID = O.CustomerID;
GO

-- Sin filtro (menos eficiente)
SELECT Customers.FirstName, Customers.LastName, Orders.TotalAmount
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

-- Con filtro previo (más eficiente)
SELECT Customers.FirstName, Customers.LastName, Orders.TotalAmount
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.TotalAmount > 600;


--3) Uso de Vistas y Materialización de Resultados

-- Vista
CREATE VIEW CustomerOrders AS
SELECT 
    c.CustomerID,
    c.FirstName,
    c.LastName,
    o.OrderID,
    o.OrderDate,
    o.TotalAmount
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID;

select * from CustomerOrders

-- Materializar consultas
SELECT 
    c.CustomerID,
    c.FirstName,
    c.LastName,
    o.OrderID,
    o.OrderDate,
    o.TotalAmount
	into TablaCustomerOrders
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID;

select * from TablaCustomerOrders