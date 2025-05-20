import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  const totalProductos = 45;
  const totalClientes = 120;
  const ventasMes = 350;
  const stockTotal = 800;

  return (
    <div className="background-container"> 
      <div className="home-container"> 
      
        <div className="content"> 
          <h1 className="home-title">Bienvenido a Urban Clothes CRM 👕🧢</h1>
          <p className="home-subtitle">Gestión rápida y sencilla de tus productos, clientes y ventas</p>

          <div className="home-resumen-cifras">
            <div className="home-resumen-card">
              <h2>{totalProductos}</h2>
              <p>Productos</p>
            </div>
            <div className="home-resumen-card">
              <h2>{totalClientes}</h2>
              <p>Clientes Activos</p>
            </div>
            <div className="home-resumen-card">
              <h2>{ventasMes}</h2>
              <p>Ventas este mes</p>
            </div>
            <div className="home-resumen-card">
              <h2>{stockTotal}</h2>
              <p>Stock total</p>
            </div>
          </div>

          <div className="home-accesos-rapidos">
            <Link to="/Productos" className="home-btn">Productos</Link>
            <Link to="/Clientes" className="home-btn">Clientes</Link>
            <Link to="/ventas" className="home-btn">Ventas</Link>
            <Link to="/Estadisticas" className="home-btn">Estadísticas</Link>
          </div>

          <p className="home-mensaje-final">“Viste tu éxito con cada venta”</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
