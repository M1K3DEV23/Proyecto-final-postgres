-- Elimina la base de datos si ya existe para asegurar que se pueda recrear sin conflictos
DROP DATABASE IF EXISTS cafeteria_unach;
-- Crea la base de datos
CREATE DATABASE cafeteria_unach;
-- Usa la base de datos recién creada
\ c cafeteria_unach;
-- Nota: en algunos sistemas puedes usar `USE nombre_de_tu_base_de_datos;`
-- Crear las tablas con sus respectivas claves primarias y foráneas
CREATE TABLE CatalogoPuestos (
    id_puesto VARCHAR(6) PRIMARY KEY,
    nombre_puesto VARCHAR(35)
);
CREATE TABLE AlimentosBebidas (
    id_alimentos_bebidas VARCHAR(6) PRIMARY KEY,
    categoria VARCHAR(35)
);
CREATE TABLE Productos (
    id_producto SERIAL PRIMARY KEY,
    nombre_producto VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    id_alimentos_bebidas VARCHAR(6),
    FOREIGN KEY (id_alimentos_bebidas) REFERENCES AlimentosBebidas(id_alimentos_bebidas)
);
CREATE TABLE Empleados (
    id_empleado SERIAL PRIMARY KEY,
    primer_nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(50) NOT NULL,
    apellido_materno VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(15),
    id_puesto VARCHAR(6),
    FOREIGN KEY (id_puesto) REFERENCES CatalogoPuestos(id_puesto)
);
CREATE TABLE Comandas (
    id_comanda SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    monto FLOAT NOT NULL,
    id_empleado INT,
    FOREIGN KEY (id_empleado) REFERENCES Empleados(id_empleado)
);
CREATE TABLE DetalleComanda (
    id_detalle SERIAL PRIMARY KEY,
    id_producto INT,
    id_comanda INT,
    cantidad INT NOT NULL,
    precio_final DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto),
    FOREIGN KEY (id_comanda) REFERENCES Comandas(id_comanda)
);
CREATE TABLE Estudiantes (
    matricula VARCHAR(8) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    primer_apellido VARCHAR(50) NOT NULL,
    segundo_apellido VARCHAR(50) NOT NULL,
    grado VARCHAR(5) NOT NULL,
    carrera VARCHAR(5) NOT NULL
);

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(80) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(128) NOT NULL
);