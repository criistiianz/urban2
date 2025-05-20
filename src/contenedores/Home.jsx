import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="background-container">
       <div className="home-container">
          <div className="sidebar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Clientes">Clientes</a></li>
              <li><a href="/Estadisticas">Estadisticas</a></li>
              <li><a href="/Productos">Producto</a></li>
              <li><a href="/Usuarios">Usuarios</a></li>
              <li><a href="/ventas">Ventas</a></li>
            </ul>
          </div>
          <div className="content">
            <h1>Urban-Clothes</h1>
          </div>
        </div>
      </div>
   );
};

export default Home;
