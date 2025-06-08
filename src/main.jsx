import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'; 
import Clientes from './pages/clientes/Clientes'; 
import Estadisticas from './pages/estadisticas/Estadisticas'; 
import Productos from './pages/productos/Productos'; 
import Usuarios from './pages/usuarios/Usuarios';
import Ventas from './pages/ventas/Ventas';
import AccesoDenegado from './pages/accesodenegado/AccesoDenegado';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login/Login';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />

          {/* Rutas protegidas */}
          <Route 
            path="/Clientes" 
            element={
              <PrivateRoute rolesPermitidos={['admin', 'vendedor']}>
                <Clientes />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/ventas" 
            element={
              <PrivateRoute rolesPermitidos={['admin', 'vendedor']}>
                <Ventas />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/Estadisticas" 
            element={
              <PrivateRoute rolesPermitidos={['admin', 'vendedor']}>
                <Estadisticas />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/Usuarios" 
            element={
              <PrivateRoute rolesPermitidos={['admin']}>
                <Usuarios />
              </PrivateRoute>
            } 
          />

          {/* Página acceso denegado */}
          <Route path="/acceso-denegado" element={<AccesoDenegado />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
