import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Login from '../pages/Login';
import Usuarios from '../pages/Usuarios';
import Detalles from '../pages/Detalles';
import Pagos from '../pages/Pagos'; 
import RutaProtegida from '../components/RutaProtegida';

const Enrutador = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/productos" element={<Productos />} />

      <Route
        path="/usuarios"
        element={
          <RutaProtegida rolesPermitidos={['admin']}>
            <Usuarios />
          </RutaProtegida>
        }
      />

      <Route
        path="/detalles"
        element={
          <RutaProtegida rolesPermitidos={['admin']}>
            <Detalles />
          </RutaProtegida>
        }
      />

      <Route
        path="/pagos"
        element={
          <RutaProtegida rolesPermitidos={['admin']}>
            <Pagos />
          </RutaProtegida>
        }
      />
    </Routes>
  );
};

export default Enrutador;
