import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './contenedores/Home'; 
import Clientes from './pages/Clientes'; 
import Estadisticas from './pages/Estadisticas'; 
import Productos from './pages/Productos'; 
import Usuarios from './pages/Usuarios';
import Ventas from './pages/Ventas';
import AccesoDenegado from './pages/AccesoDenegado';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
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
