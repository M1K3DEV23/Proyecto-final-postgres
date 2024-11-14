-- Inserción de datos en CatalogoPuestos
INSERT INTO CatalogoPuestos (id_puesto, nombre_puesto)
VALUES ('1', 'ADMINISTRADOR'),
    ('2', 'CONTADOR'),
    ('3', 'CAJERO/A'),
    ('4', 'ENCARGADO BARRA'),
    ('5', 'ENCARGADO COCINA'),
    ('6', 'AUXILIAR BARRA'),
    ('7', 'AUXILIAR COCINA'),
    ('8', 'INTENDENCIA'),
    ('9', 'VIGILANCIA'),
    ('10', 'BARISTA'),
    ('11', 'CHEF'),
    ('12', 'MESERO/A'),
    ('13', 'GERENTE DE TURNO'),
    ('14', 'LAVAPLATOS'),
    ('15', 'COORDINADOR DE EVENTOS'),
    ('16', 'ENCARGADO DE INVENTARIO'),
    ('17', 'SUPERVISOR DE LIMPIEZA');
-- Inserción de datos en AlimentosBebidas
INSERT INTO AlimentosBebidas (id_alimentos_bebidas, categoria)
VALUES ('A00001', 'DESAYUNOS'),
    ('B00001', 'BEBIDAS EMBOTELLADAS'),
    ('A00002', 'SNACKS'),
    ('A00003', 'COMIDAS'),
    ('A00004', 'POSTRES'),
    ('B00002', 'LACTEOS'),
    ('B00003', 'AGUAS FRESCAS'),
    ('B00004', 'CAFÉ Y TÉ'),
    ('B00005', 'BEBIDAS ENERGIZANTES'),
    ('A00005', 'ENSALADAS'),
    ('A00006', 'SOPAS'),
    ('A00007', 'ENTRADAS'),
    ('A00008', 'PLATOS FUERTES'),
    ('B00006', 'SMOOTHIES'),
    ('B00007', 'JUGOS NATURALES'),
    ('B00008', 'LICUADOS'),
    ('B00009', 'CERVEZA SIN ALCOHOL'),
    ('B00010', 'VINO SIN ALCOHOL');
-- Inserción de datos en Productos
INSERT INTO Productos (nombre_producto, precio, id_alimentos_bebidas)
VALUES ('Chilaquiles Verdes', 60.00, 'A00001'),
    ('Molletes', 55.00, 'A00001'),
    ('Tamales de Elote', 40.00, 'A00001'),
    ('Omelette de Champiñones', 65.00, 'A00001'),
    ('Avena con Fruta', 35.00, 'A00001'),
    ('Tacos de Pastor', 75.00, 'A00003'),
    ('Enchiladas Rojas', 70.00, 'A00003'),
    ('Hamburguesa', 85.00, 'A00003'),
    ('Quesadillas de Huitlacoche', 50.00, 'A00003'),
    ('Ensalada César', 65.00, 'A00003'),
    ('Limonada', 20.00, 'B00003'),
    ('Horchata', 25.00, 'B00003'),
    ('Café de Olla', 18.00, 'B00004'),
    ('Té Helado', 22.00, 'B00004'),
    ('Smoothie de Mango', 30.00, 'B00006');
-- Inserción de datos en Empleados
INSERT INTO Empleados (
        primer_nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        id_puesto
    )
VALUES (
        'Juan',
        'Pérez',
        'Hernández',
        'juan.perez@cafeteria.com',
        '9611234567',
        '1'
    ),
    (
        'María',
        'López',
        'García',
        'maria.lopez@cafeteria.com',
        '9612345678',
        '2'
    ),
    (
        'Carlos',
        'Ramírez',
        'Martínez',
        'carlos.ramirez@cafeteria.com',
        '9613456789',
        '3'
    ),
    (
        'Ana',
        'Sánchez',
        'Rodríguez',
        'ana.sanchez@cafeteria.com',
        '9614567890',
        '4'
    ),
    (
        'Luis',
        'Gómez',
        'Torres',
        'luis.gomez@cafeteria.com',
        '9615678901',
        '5'
    ),
    (
        'Laura',
        'Martínez',
        'Luna',
        'laura.martinez@cafeteria.com',
        '9616789012',
        '6'
    ),
    (
        'José',
        'Flores',
        'Núñez',
        'jose.flores@cafeteria.com',
        '9617890123',
        '7'
    ),
    (
        'Elena',
        'Vargas',
        'Cruz',
        'elena.vargas@cafeteria.com',
        '9618901234',
        '8'
    ),
    (
        'Miguel',
        'Ortega',
        'Rivera',
        'miguel.ortega@cafeteria.com',
        '9619012345',
        '9'
    ),
    (
        'Sofía',
        'Mendoza',
        'Morales',
        'sofia.mendoza@cafeteria.com',
        '9610123456',
        '10'
    ),
    (
        'Ricardo',
        'Reyes',
        'Castañeda',
        'ricardo.reyes@cafeteria.com',
        '9611234568',
        '11'
    ),
    (
        'Paola',
        'Díaz',
        'Herrera',
        'paola.diaz@cafeteria.com',
        '9612345679',
        '12'
    ),
    (
        'Fernando',
        'Rivas',
        'Juárez',
        'fernando.rivas@cafeteria.com',
        '9613456780',
        '13'
    ),
    (
        'Gabriela',
        'Rojas',
        'Velázquez',
        'gabriela.rojas@cafeteria.com',
        '9614567891',
        '14'
    ),
    (
        'Jorge',
        'León',
        'Paredes',
        'jorge.leon@cafeteria.com',
        '9615678902',
        '15'
    ),
    (
        'Natalia',
        'Castillo',
        'Pérez',
        'natalia.castillo@cafeteria.com',
        '9616789013',
        '16'
    ),
    (
        'Andrés',
        'Silva',
        'Ramos',
        'andres.silva@cafeteria.com',
        '9617890124',
        '17'
    ),
    (
        'Valeria',
        'Ibarra',
        'Gutiérrez',
        'valeria.ibarra@cafeteria.com',
        '9618901235',
        '1'
    ),
    (
        'Raúl',
        'Moreno',
        'Zamora',
        'raul.moreno@cafeteria.com',
        '9619012346',
        '2'
    ),
    (
        'Alejandra',
        'Pacheco',
        'Salinas',
        'alejandra.pacheco@cafeteria.com',
        '9610123457',
        '3'
    );
-- Inserción de datos en Comandas
INSERT INTO Comandas (fecha, hora, monto, id_empleado)
VALUES ('2024-08-15', '09:15:00', 130.00, 1),
    ('2024-08-16', '10:30:00', 150.00, 2),
    ('2024-09-05', '11:45:00', 155.00, 3),
    ('2024-09-10', '12:00:00', 130.00, 4),
    ('2024-09-25', '13:15:00', 145.00, 5),
    ('2024-10-10', '14:30:00', 100.00, 6),
    ('2024-10-20', '15:45:00', 165.00, 7),
    ('2024-10-30', '16:00:00', 140.00, 8),
    ('2024-11-01', '17:15:00', 180.00, 9),
    ('2024-11-10', '18:30:00', 110.00, 1);
-- Inserción de datos en DetalleComanda
INSERT INTO DetalleComanda (id_producto, id_comanda, cantidad, precio_final)
VALUES (3, 1, 2, 80.00),
    -- Tamales de Elote (2 x 40.00)
    (14, 1, 1, 25.00),
    -- Horchata
    (15, 1, 1, 30.00),
    -- Smoothie de Mango
    (8, 2, 2, 140.00),
    -- Enchiladas Rojas
    (14, 2, 1, 25.00),
    -- Horchata
    (13, 2, 1, 18.00),
    -- Café de Olla
    (3, 3, 1, 40.00),
    -- Tamales de Elote
    (4, 3, 1, 60.00),
    -- Chilaquiles Verdes
    (12, 3, 1, 20.00),
    -- Limonada
    (5, 4, 1, 35.00),
    -- Avena con Fruta
    (4, 4, 2, 130.00),
    -- Omelette de Champiñones
    (9, 5, 1, 75.00),
    -- Tacos de Pastor
    (10, 5, 1, 65.00),
    -- Ensalada César
    (4, 6, 1, 60.00),
    -- Chilaquiles Verdes
    (12, 6, 1, 20.00),
    -- Limonada
    (1, 7, 2, 100.00),
    -- Huevos con Jamón
    (8, 7, 1, 70.00),
    -- Enchiladas Rojas
    (11, 8, 1, 85.00),
    -- Hamburguesa
    (13, 8, 2, 36.00),
    -- Café de Olla
    (2, 9, 2, 110.00),
    -- Molletes
    (15, 9, 2, 60.00),
    -- Smoothie de Mango
    (4, 10, 1, 65.00),
    -- Omelette de Champiñones
    (10, 10, 1, 45.00);
-- Ensalada César