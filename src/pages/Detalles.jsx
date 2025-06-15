import React, { useEffect, useState } from 'react';
import MenuLateral from '../components/MenuLateral';
import './home.css';

function Home() {
  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/product')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));

    fetch('http://localhost:8081/api/clientes')
      .then(res => res.json())
      .then(data => setClientes(data))
      .catch(err => console.error('Error al cargar clientes:', err));

    fetch('http://localhost:8081/api/ventas')
      .then(res => res.json())
      .then(data => setVentas(data))
      .catch(err => console.error('Error al cargar ventas:', err));
  }, []);

  return (
    <div className="home-container">
      <MenuLateral />

      <main className="contenido-home">
        <h1 className="home-title">Bienvenido a UrbanCRM 🧢</h1>
        <h3 className="home-subtitle">Tu CRM de confianza para gestión urbana</h3>

        <div className="home-resumen-cifras">
          <div className="home-resumen-card">
            <h2>{productos.length}</h2>
            <p>Productos</p>
          </div>
          <div className="home-resumen-card">
            <h2>{clientes.length}</h2>
            <p>Clientes</p>
          </div>
          <div className="home-resumen-card">
            <h2>{ventas.length}</h2>
            <p>Ventas</p>
          </div>
        </div>

        <div className="home-mensaje-final">
          Explora tus datos con estilo urbano. ¡Gracias por usar UrbanCRM!
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 UrbanCRM - Síguenos en
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
