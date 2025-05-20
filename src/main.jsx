import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './contenedores/Home'; 
import Clientes from './pages/Clientes'; 
import Estadisticas from './pages/Estadisticas'; 
import Productos from './pages/Productos'; 
import Usuarios from './pages/Usuarios';
import Ventas from './pages/Ventas';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Estadisticas" element={<Estadisticas />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
