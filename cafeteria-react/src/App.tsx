import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Register from "./pages/Register"
import Login from "./pages/Login"
import MenuPage from './pages/MenuPage';

// Rutas protegidas
import ProtectedRoute from "./routes/ProtectedRoute"



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Rutas protegidas */}
        <Route path='/menu' element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        {/* Cualquier otra ruta */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
