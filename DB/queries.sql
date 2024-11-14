/*markdown
# Consultas
*/

/*markdown
## Tabla `CatalogoPuestos`
*/

SELECT nombre_puesto
FROM CatalogoPuestos
ORDER BY nombre_puesto;

/*markdown
## Tabla `AlimentosBebidas`
*/

SELECT id_alimentos_bebidas, categoria
FROM AlimentosBebidas
ORDER BY categoria;

SELECT id_alimentos_bebidas, categoria
FROM AlimentosBebidas
WHERE id_alimentos_bebidas LIKE 'A%'
ORDER BY categoria;

SELECT id_alimentos_bebidas, categoria
FROM AlimentosBebidas
WHERE id_alimentos_bebidas LIKE 'B%'
ORDER BY categoria;

/*markdown
## Tabla de `Productos`
*/

SELECT nombre_producto, precio, id_alimentos_bebidas
FROM Productos
ORDER BY nombre_producto DESC;

SELECT nombre_producto, precio, id_alimentos_bebidas
FROM Productos
WHERE precio > 30.00
ORDER BY precio ASC;

SELECT p.id_producto, p.nombre_producto, p.precio, a.categoria AS categoria_alimentos_bebidas
FROM Productos p
JOIN AlimentosBebidas a ON p.id_alimentos_bebidas = a.id_alimentos_bebidas
ORDER BY p.id_producto;

/*markdown
## Tabla `Empleados`
*/

SELECT e.primer_nombre, e.apellido_paterno, e.apellido_materno, e.email, e.telefono, p.nombre_puesto
FROM Empleados e
JOIN CatalogoPuestos p ON e.id_puesto = p.id_puesto;

/*markdown
## Tabla de `Comandas`
*/

SELECT c.fecha, c.hora, c.monto, e.apellido_paterno, e.apellido_materno
FROM Comandas c
JOIN Empleados e ON c.id_empleado = e.id_empleado;

/*markdown
## Tabla `DetallesComanda`
*/

SELECT 
    dc.id_detalle, 
    p.nombre_producto AS nombre_producto, 
    c.fecha AS fecha_comanda, 
    c.hora AS hora_comanda, 
    dc.cantidad, 
    dc.precio_final
FROM 
    DetalleComanda dc
JOIN 
    Productos p ON dc.id_producto = p.id_producto
JOIN 
    Comandas c ON dc.id_comanda = c.id_comanda
ORDER BY 
    c.id_comanda, p.nombre_producto;


/*markdown
## Tabla `Estudiantes`
*/

SELECT matricula, nombre, primer_apellido, segundo_apellido, grado, carrera
FROM Estudiantes
ORDER BY primer_apellido, segundo_apellido;