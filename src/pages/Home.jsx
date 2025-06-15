import React, { useEffect, useState } from 'react';
import MenuLateral from '../components/MenuLateral';
import { motion } from 'framer-motion';
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

    fetch('http://localhost:8081/api/pagos') // conectamos ventas con pagos
      .then(res => res.json())
      .then(data => {
        setVentas(data);
      })
      .catch(err => console.error('Error al cargar ventas:', err));
  }, []);

  const totalVentas = ventas.reduce((acum, venta) => acum + (venta.total || 0), 0);

  return (
    <div className="home-container">
      <MenuLateral />

      <main className="contenido-home">
        <motion.h1 
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenido a UrbanCRM 🧢
        </motion.h1>

        <motion.h3 
          className="home-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Tu CRM de confianza para gestión urbana
        </motion.h3>

        <div className="home-resumen-cifras">
          <motion.div 
            className="home-resumen-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2>{productos.length || '0'}</h2>
            <p>Productos</p>
          </motion.div>

          <motion.div 
            className="home-resumen-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2>{clientes.length || '0'}</h2>
            <p>Clientes</p>
          </motion.div>

          <motion.div 
            className="home-resumen-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2>${totalVentas.toLocaleString()}</h2>
            <p>Ventas</p>
          </motion.div>
        </div>

        <motion.div 
          className="home-mensaje-final"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Explora tus datos con estilo urbano. ¡Gracias por usar UrbanCRM!
        </motion.div>
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
