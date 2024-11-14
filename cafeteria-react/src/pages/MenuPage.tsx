import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MenuPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/');
        toast.success('Sesión cerrada exitosamente.');
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="/menu" className="text-lg font-bold text-gray-800">
                            CAFETERIA UNACH
                        </a>
                    </div>
                    <div className="space-x-4">
                        {/* <a href="/dashboard" className="text-gray-600 hover:text-gray-800">
                            Dashboard
                        </a>
                        <a href="/profile" className="text-gray-600 hover:text-gray-800">
                            Profile
                        </a>
                        <a href="/settings" className="text-gray-600 hover:text-gray-800">
                            Settings
                        </a> */}
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu Section */}
            <section className="py-16 min-h-dvh">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Menú de Comida</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Item 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Hamburguesa Clásica</h3>
                            <p className="text-gray-600 mb-4">
                                Deliciosa hamburguesa con carne de res, lechuga, tomate y queso.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$120 MXN</p>
                        </div>
                        {/* Item 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Pizza Margarita</h3>
                            <p className="text-gray-600 mb-4">
                                Pizza con salsa de tomate, mozzarella fresca y albahaca.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$150 MXN</p>
                        </div>
                        {/* Item 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Ensalada César</h3>
                            <p className="text-gray-600 mb-4">
                                Ensalada con lechuga romana, pollo a la parrilla, crutones y aderezo César.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$90 MXN</p>
                        </div>
                        {/* Item 4 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Tacos de Carnitas</h3>
                            <p className="text-gray-600 mb-4">
                                Tacos con carnitas de cerdo, cebolla y cilantro.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$80 MXN</p>
                        </div>
                        {/* Item 5 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Sushi Variado</h3>
                            <p className="text-gray-600 mb-4">
                                Selección de sushi con salmón, atún, camarón y aguacate.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$200 MXN</p>
                        </div>
                        {/* Item 6 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Torta de Milanesa</h3>
                            <p className="text-gray-600 mb-4">
                                Torta con milanesa de res, lechuga, jitomate, aguacate y mayonesa.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$110 MXN</p>
                        </div>
                        {/* Item 7 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Tacos al Pastor</h3>
                            <p className="text-gray-600 mb-4">
                                Tacos de carne al pastor servidos con piña, cebolla, cilantro y salsa de tu elección.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$75 MXN</p>
                        </div>

                        {/* Item 8 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Enchiladas Verdes</h3>
                            <p className="text-gray-600 mb-4">
                                Tortillas rellenas de pollo bañadas en salsa verde, acompañadas de crema, queso y arroz.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$95 MXN</p>
                        </div>

                        {/* Item 9 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Pozole Rojo</h3>
                            <p className="text-gray-600 mb-4">
                                Tradicional pozole rojo con carne de cerdo, servido con rábanos, lechuga, limón y tostadas.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$120 MXN</p>
                        </div>

                        {/* Item 10 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Chilaquiles con Huevo</h3>
                            <p className="text-gray-600 mb-4">
                                Chilaquiles bañados en salsa roja o verde, servidos con dos huevos al gusto y frijoles.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$85 MXN</p>
                        </div>

                        {/* Item 11 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Quesadilla de Flor de Calabaza</h3>
                            <p className="text-gray-600 mb-4">
                                Quesadilla rellena de flor de calabaza con queso, acompañada de salsa y guacamole.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$50 MXN</p>
                        </div>
                        {/* Item 12 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Agua de Horchata</h3>
                            <p className="text-gray-600 mb-4">
                                Refrescante agua de horchata preparada con arroz, leche, canela y un toque de vainilla.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$35 MXN</p>
                        </div>

                        {/* Item 13 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Limonada Natural</h3>
                            <p className="text-gray-600 mb-4">
                                Limonada preparada con jugo de limón fresco, azúcar y agua mineral o natural.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$30 MXN</p>
                        </div>

                        {/* Item 14 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Café de Olla</h3>
                            <p className="text-gray-600 mb-4">
                                Tradicional café de olla con piloncillo y canela, preparado al estilo mexicano.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$25 MXN</p>
                        </div>

                        {/* Item 15 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">Chocolate Caliente</h3>
                            <p className="text-gray-600 mb-4">
                                Cremoso chocolate caliente preparado con leche y un toque de canela.
                            </p>
                            <p className="text-lg font-bold text-blue-600">$40 MXN</p>
                        </div>
                        {/* Más items... */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 Cafeteria. Todos los derechos reservados.</p>
                    <p>Hecho con ❤️ por Alumnos de la Universidad Autonoma de Chiapas</p>
                </div>
            </footer>
        </div>
    )
}


export default MenuPage