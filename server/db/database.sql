-- Crear la base de datos
CREATE DATABASE HotelDB;

-- Seleccionar la base de datos
USE HotelDB;

-- Crear la tabla EMPLEADOS
CREATE TABLE EMPLEADOS (
    `Id_empleado` INTEGER PRIMARY KEY,
    `Nombre` TEXT NOT NULL,
    `Apellido` TEXT NOT NULL,
    `Cargo` TEXT NOT NULL,
    `Telefono` TEXT,
    `Email` TEXT
);

INSERT INTO EMPLEADOS (`Id_empleado`, `Nombre`, `Apellido`, `Cargo`, `Telefono`, `Email`)
VALUES 
    (500, 'Juan', 'Romero', 'Recepcionista', '3564586947', 'juanrom@live.com'),
    (501, 'César', 'Bustos', 'Conserje', '3564123456', 'cesar@outlook.com'),
    (502, 'Rosana', 'Cabrera', 'Mucama', '3564808586', 'rosanac@gmail.com');

-- Crear la tabla HABITACIONES
CREATE TABLE HABITACIONES (
    `Id_habitacion` INTEGER PRIMARY KEY,
    `Num_habitacion` INTEGER NOT NULL,
    `Tipo_habitacion` TEXT NOT NULL,
    `Precio_noche` REAL NOT NULL,
    `Estado` TEXT NOT NULL
);

INSERT INTO HABITACIONES (`Id_habitacion`, `Num_habitacion`, `Tipo_habitacion`, `Precio_noche`, `Estado`)
VALUES 
    (200, 20, 'Simple', 10000.0, 'Ocupada'),
    (201, 21, 'Doble', 20000.0, 'A confirmar'),
    (202, 22, 'Suite', 40000.0, 'Disponible'),
    (203, 23, 'Familiar', 30000.0, 'Ocupada');

-- Crear la tabla HUESPEDES
CREATE TABLE HUESPEDES (
    `Id_huesped` INTEGER PRIMARY KEY,
    `Nombre` TEXT NOT NULL,
    `Apellido` TEXT NOT NULL,
    `Direccion` TEXT,
    `Telefono` TEXT,
    `Mail` TEXT
);

INSERT INTO HUESPEDES (`Id_huesped`, `Nombre`, `Apellido`, `Direccion`, `Telefono`, `Mail`)
VALUES 
    (100, 'Sofia', 'Villa', 'San Fco', '3564-123456', 'sofivilla@gmail.com'),
    (101, 'Carlos', 'Castro', 'Córdoba', '351-654321', 'carloscastro@gmail.com'),
    (102, 'Emma', 'Pérez', 'Rosario', '3412-987654', 'emmaperez@gmail.com'),
    (103, 'Liliana', 'Castaño', 'Mendoza', '2612-112233', 'liliana@gmail.com');

-- Crear la tabla PAGOS
CREATE TABLE PAGOS (
    `Id_pago` INTEGER PRIMARY KEY,
    `Id_reserva` INTEGER NOT NULL,
    `Fecha_pago` TEXT NOT NULL,
    `Monto_pago` REAL NOT NULL,
    `Metodo_pago` TEXT NOT NULL,
    `Id_empleado` INTEGER,
    FOREIGN KEY (`Id_reserva`) REFERENCES RESERVAS(`Id_reserva`),
    FOREIGN KEY (`Id_empleado`) REFERENCES EMPLEADOS(`Id_empleado`)
);

INSERT INTO PAGOS (`Id_pago`, `Id_reserva`, `Fecha_pago`, `Monto_pago`, `Metodo_pago`, `Id_empleado`)
VALUES 
    (20, 50, '2024-10-18', 30000.0, 'EFECTIVO', 501),
    (21, 51, '2024-10-20', 40000.0, 'DÉBITO', 501),
    (22, 52, '2024-10-23', 120000.0, 'EFECTIVO', 501),
    (23, 53, '2024-10-28', 90000.0, 'TRANSFERENCIA', 502);

-- Crear la tabla RESERVAS
CREATE TABLE RESERVAS (
    `Id_reserva` INTEGER PRIMARY KEY,
    `Id_huesped` INTEGER NOT NULL,
    `Id_habitacion` INTEGER NOT NULL,
    `Fecha_llegada` TEXT NOT NULL,
    `Fecha_salida` TEXT NOT NULL,
    `Num_noches` INTEGER NOT NULL,
    `Precio_total` REAL NOT NULL,
    `Estado_reserva` TEXT NOT NULL,
    FOREIGN KEY (`Id_huesped`) REFERENCES HUESPEDES(`Id_huesped`),
    FOREIGN KEY (`Id_habitacion`) REFERENCES HABITACIONES(`Id_habitacion`)
);

INSERT INTO RESERVAS (`Id_reserva`, `Id_huesped`, `Id_habitacion`, `Fecha_llegada`, `Fecha_salida`, `Num_noches`, `Precio_total`, `Estado_reserva`)
VALUES 
    (50, 100, 200, '2024-10-15', '2024-10-18', 3, 30000.0, 'CONFIRMADO'),
    (51, 101, 201, '2024-10-18', '2024-10-20', 2, 40000.0, 'PENDIENTE'),
    (52, 102, 202, '2024-10-20', '2024-10-23', 3, 120000.0, 'CANCELADO'),
    (53, 103, 203, '2024-10-25', '2024-10-28', 3, 90000.0, 'CONFIRMADO');
