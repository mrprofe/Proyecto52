-- Crear base de datos
CREATE DATABASE TestIndexDB;
GO

USE TestIndexDB;
GO

-- Crear tabla de Clientes
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Email NVARCHAR(100),
    Phone NVARCHAR(15),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Crear tabla de Pedidos
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT,
    OrderDate DATETIME DEFAULT GETDATE(),
    TotalAmount DECIMAL(18, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
GO

-- Crear tabla de Productos
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(100),
    Price DECIMAL(18, 2),
    Stock INT
);
GO

-- Crear tabla de Detalles del Pedido (relaciona pedidos con productos)
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY IDENTITY(1,1),
    OrderID INT,
    ProductID INT,
    Quantity INT,
    UnitPrice DECIMAL(18, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

---------------------------------------------------------------

-- Generar 10,000 registros para la tabla Customers
DECLARE @i INT = 1;
WHILE @i <= 10000
BEGIN
    INSERT INTO Customers (FirstName, LastName, Email, Phone)
    VALUES (
        'FirstName' + CAST(@i AS NVARCHAR(50)),        -- Nombre
        'LastName' + CAST(@i AS NVARCHAR(50)),         -- Apellido
        'email' + CAST(@i AS NVARCHAR(50)) + '@example.com',  -- Email
        '555-010' + CAST(@i AS NVARCHAR(5))            -- Teléfono
    );
    SET @i = @i + 1;
END;
GO

select * from Customers;


-- Generar 10,000 registros para la tabla Orders
DECLARE @i INT = 1;
DECLARE @maxCustomers INT;

-- Obtener el máximo ID de cliente para generar relaciones válidas
SELECT @maxCustomers = COUNT(*) FROM Customers;

WHILE @i <= 10000
BEGIN
    INSERT INTO Orders (CustomerID, OrderDate, TotalAmount)
    VALUES (
        (RAND() * @maxCustomers) + 1,   -- CustomerID (aleatorio entre 1 y el número máximo de clientes)
        DATEADD(DAY, (RAND() * 365), GETDATE()),  -- OrderDate (fecha aleatoria dentro del último año)
        ROUND(RAND() * 1000, 2)          -- TotalAmount (monto aleatorio entre 0 y 1000)
    );
    SET @i = @i + 1;
END;
GO

select * from Orders;

-- Generar 10,000 registros para la tabla Products
DECLARE @i INT = 1;

WHILE @i <= 10000
BEGIN
    INSERT INTO Products (ProductName, Price, Stock)
    VALUES (
        CONCAT('Product ', @i),            -- ProductName (nombre del producto con un número incremental)
        ROUND(RAND() * 1000, 2),           -- Price (precio aleatorio entre 0 y 1000)
        FLOOR(RAND() * 500) + 1            -- Stock (stock aleatorio entre 1 y 500)
    );
    SET @i = @i + 1;
END;
GO

select * from Products;

-- Generar 10,000 registros para la tabla OrderDetails
DECLARE @i INT = 1;

WHILE @i <= 10000
BEGIN
    INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice)
    VALUES (
        (SELECT TOP 1 OrderID FROM Orders ORDER BY NEWID()),   -- Selecciona aleatoriamente un OrderID
        (SELECT TOP 1 ProductID FROM Products ORDER BY NEWID()), -- Selecciona aleatoriamente un ProductID
        FLOOR(RAND() * 10) + 1,   -- Quantity (cantidad aleatoria entre 1 y 10)
        ROUND(RAND() * 100, 2)    -- UnitPrice (precio aleatorio entre 0 y 100)
    );
    SET @i = @i + 1;
END;
GO

select * from OrderDetails;