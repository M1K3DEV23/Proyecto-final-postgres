import React from "react";
import { Navigate } from 'react-router-dom';
import { toast } from "react-toastify";



interface ProtectedRouteProps {
    children: React.ReactElement;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        toast.warning('Por favor, inicia sesión.');
        return <Navigate to="/login" replace />;
    }

    return children;
}


export default ProtectedRoute