import React from "react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
    return (
        <div className="bg-blue-500 h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">Bienvenido</h1>
                    <p className="text-gray-600 mt-2">Seleccione una opción</p>
                </div>
                <div className="space-y-6">
                    <Link
                        to="/login"
                        className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;