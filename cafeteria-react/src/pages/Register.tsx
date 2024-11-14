import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { registerUser, RegisterPayload } from '../lib/api'


const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterPayload>({
        username: "",
        email: "",
        password: "",
    });


    const navigate = useNavigate()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();


        try {
            const response = await registerUser(formData);


            if (response.success) {
                toast.success("Registro exitoso. Por favor, inicia sesión.");

                setTimeout(() => {
                    navigate('/login')
                }, 2500);

            } else {
                toast.error('Error al registrar el usuario.');
            }

        } catch (error) {
            toast.error('Ocurrió un error al registrar el usuario.');
        }
    }


    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        id="username"
                        label="Nombre de Usuario"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        id="email"
                        label="Correo Electrónico"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        id="password"
                        label="Contraseña"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button label="Registrarse" type="submit" />
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes una cuenta?{" "}
                        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Inicia Sesión
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Register;