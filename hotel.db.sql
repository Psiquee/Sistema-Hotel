--


-- Tabla: EMPLEADOS
CREATE TABLE EMPLEADOS (
    [Id-empleado] INTEGER PRIMARY KEY,
    Nombre        TEXT    NOT NULL,
    Apellido      TEXT    NOT NULL,
    Cargo         TEXT    NOT NULL,
    Telefono      TEXT,
    Email         TEXT
);

INSERT INTO EMPLEADOS (
                          [Id-empleado],
                          Nombre,
                          Apellido,
                          Cargo,
                          Telefono,
                          Email
                      )
                      VALUES (
                          500,
                          'Juan',
                          'Romero',
                          'Recepcionista',
                          '3564586947',
                          'juanrom@live.com'
                      );

INSERT INTO EMPLEADOS (
                          [Id-empleado],
                          Nombre,
                          Apellido,
                          Cargo,
                          Telefono,
                          Email
                      )
                      VALUES (
                          501,
                          'C�sar',
                          'Bustos',
                          'Conserje',
                          '3564123456',
                          'cesar@outlook.com'
                      );

INSERT INTO EMPLEADOS (
                          [Id-empleado],
                          Nombre,
                          Apellido,
                          Cargo,
                          Telefono,
                          Email
                      )
                      VALUES (
                          502,
                          'Rosana',
                          'Cabrera',
                          'Mucama',
                          '3564808586',
                          'rosanac@gmail.com'
                      );


-- Tabla: HABITACIONES
CREATE TABLE HABITACIONES (
    [Id-habitacion]   INTEGER PRIMARY KEY,
    [Num-habitacion]  INTEGER NOT NULL,
    [Tipo-habitacion] TEXT    NOT NULL,
    [Precio-noche]    REAL    NOT NULL,
    Estado            TEXT    NOT NULL
);

INSERT INTO HABITACIONES (
                             [Id-habitacion],
                             [Num-habitacion],
                             [Tipo-habitacion],
                             [Precio-noche],
                             Estado
                         )
                         VALUES (
                             200,
                             20,
                             'Simple',
                             10000.0,
                             'Ocupada'
                         );

INSERT INTO HABITACIONES (
                             [Id-habitacion],
                             [Num-habitacion],
                             [Tipo-habitacion],
                             [Precio-noche],
                             Estado
                         )
                         VALUES (
                             201,
                             21,
                             'Doble',
                             20000.0,
                             'A confirmar'
                         );

INSERT INTO HABITACIONES (
                             [Id-habitacion],
                             [Num-habitacion],
                             [Tipo-habitacion],
                             [Precio-noche],
                             Estado
                         )
                         VALUES (
                             202,
                             22,
                             'Suite',
                             40000.0,
                             'Disponible'
                         );

INSERT INTO HABITACIONES (
                             [Id-habitacion],
                             [Num-habitacion],
                             [Tipo-habitacion],
                             [Precio-noche],
                             Estado
                         )
                         VALUES (
                             203,
                             23,
                             'Familiar',
                             30000.0,
                             'Ocupada'
                         );


-- Tabla: HUESPEDES
CREATE TABLE HUESPEDES (
    [Id-huesped] INTEGER PRIMARY KEY,
    Nombre       TEXT    NOT NULL,
    Apellido     TEXT    NOT NULL,
    Direccion    TEXT,
    Telefono     TEXT,
    Mail         TEXT
);

INSERT INTO HUESPEDES (
                          [Id-huesped],
                          Nombre,
                          Apellido,
                          Direccion,
                          Telefono,
                          Mail
                      )
                      VALUES (
                          100,
                          'Sofia',
                          'Villa',
                          'San Fco',
                          '3564-123456',
                          'sofivilla@gmail.com'
                      );

INSERT INTO HUESPEDES (
                          [Id-huesped],
                          Nombre,
                          Apellido,
                          Direccion,
                          Telefono,
                          Mail
                      )
                      VALUES (
                          101,
                          'Carlos',
                          'Castro',
                          'C�rdoba',
                          '351-654321',
                          'carloscastro@gmail.com'
                      );

INSERT INTO HUESPEDES (
                          [Id-huesped],
                          Nombre,
                          Apellido,
                          Direccion,
                          Telefono,
                          Mail
                      )
                      VALUES (
                          102,
                          'Emma',
                          'P�rez',
                          'Rosario',
                          '3412-987654',
                          'emmaperez@gmail.com'
                      );

INSERT INTO HUESPEDES (
                          [Id-huesped],
                          Nombre,
                          Apellido,
                          Direccion,
                          Telefono,
                          Mail
                      )
                      VALUES (
                          103,
                          'Liliana',
                          'Casta�o',
                          'Mendoza',
                          '2612-112233',
                          'liliana@gmail.com'
                      );


-- Tabla: PAGOS
CREATE TABLE  PAGOS (
    [Id-pago]     INTEGER PRIMARY KEY,
    [Id-reserva]  INTEGER NOT NULL,
    [Fecha-pago]  TEXT    NOT NULL,
    [Monto-pago]  REAL    NOT NULL,
    [Metodo-pago] TEXT    NOT NULL,
    [Id-empleado] INTEGER,
    FOREIGN KEY (
        [Id-reserva]
    )
    REFERENCES RESERVAS ([Id-reserva]),
    FOREIGN KEY (
        [Id-empleado]
    )
    REFERENCES EMPLEADOS ([Id-empleado]) 
);

INSERT INTO PAGOS (
                      [Id-pago],
                      [Id-reserva],
                      [Fecha-pago],
                      [Monto-pago],
                      [Metodo-pago],
                      [Id-empleado]
                  )
                  VALUES (
                      20,
                      50,
                      '2024-10-18',
                      30000.0,
                      'EFECTIVO',
                      501
                  );

INSERT INTO PAGOS (
                      [Id-pago],
                      [Id-reserva],
                      [Fecha-pago],
                      [Monto-pago],
                      [Metodo-pago],
                      [Id-empleado]
                  )
                  VALUES (
                      21,
                      51,
                      '2024-10-20',
                      40000.0,
                      'D�BITO',
                      501
                  );

INSERT INTO PAGOS (
                      [Id-pago],
                      [Id-reserva],
                      [Fecha-pago],
                      [Monto-pago],
                      [Metodo-pago],
                      [Id-empleado]
                  )
                  VALUES (
                      22,
                      52,
                      '2024-10-23',
                      120000.0,
                      'EFECTIVO',
                      501
                  );

INSERT INTO PAGOS (
                      [Id-pago],
                      [Id-reserva],
                      [Fecha-pago],
                      [Monto-pago],
                      [Metodo-pago],
                      [Id-empleado]
                  )
                  VALUES (
                      23,
                      53,
                      '2024-10-28',
                      90000.0,
                      'TRANSFERENCIA',
                      502
                  );


-- Tabla: RESERVAS
CREATE TABLE  RESERVAS (
    [Id-reserva]     INTEGER PRIMARY KEY,
    [Id-huesped]     INTEGER NOT NULL,
    [Id-habitacion]  INTEGER NOT NULL,
    [Fecha-llegada]  TEXT    NOT NULL,
    [Fecha-salida]   TEXT    NOT NULL,
    [Num-noches]     INTEGER NOT NULL,
    [Precio-total]   REAL    NOT NULL,
    [Estado-reserva] TEXT    NOT NULL,
    FOREIGN KEY (
        [Id-huesped]
    )
    REFERENCES HUESPEDES ([Id-huesped]),
    FOREIGN KEY (
        [Id-habitacion]
    )
    REFERENCES HABITACIONES ([Id-habitacion]) 
);

INSERT INTO RESERVAS (
                         [Id-reserva],
                         [Id-huesped],
                         [Id-habitacion],
                         [Fecha-llegada],
                         [Fecha-salida],
                         [Num-noches],
                         [Precio-total],
                         [Estado-reserva]
                     )
                     VALUES (
                         50,
                         100,
                         200,
                         '2024-10-15',
                         '2024-10-18',
                         3,
                         30000.0,
                         'CONFIRMADO'
                     );

INSERT INTO RESERVAS (
                         [Id-reserva],
                         [Id-huesped],
                         [Id-habitacion],
                         [Fecha-llegada],
                         [Fecha-salida],
                         [Num-noches],
                         [Precio-total],
                         [Estado-reserva]
                     )
                     VALUES (
                         51,
                         101,
                         201,
                         '2024-10-18',
                         '2024-10-20',
                         2,
                         40000.0,
                         'PENDIENTE'
                     );

INSERT INTO RESERVAS (
                         [Id-reserva],
                         [Id-huesped],
                         [Id-habitacion],
                         [Fecha-llegada],
                         [Fecha-salida],
                         [Num-noches],
                         [Precio-total],
                         [Estado-reserva]
                     )
                     VALUES (
                         52,
                         102,
                         202,
                         '2024-10-20',
                         '2024-10-23',
                         3,
                         120000.0,
                         'CANCELADO'
                     );

INSERT INTO RESERVAS (
                         [Id-reserva],
                         [Id-huesped],
                         [Id-habitacion],
                         [Fecha-llegada],
                         [Fecha-salida],
                         [Num-noches],
                         [Precio-total],
                         [Estado-reserva]
                     )
                     VALUES (
                         53,
                         103,
                         203,
                         '2024-10-25',
                         '2024-10-28',
                         3,
                         90000.0,
                         'CONFIRMADO'
                     );


COMMIT TRANSACTION;

