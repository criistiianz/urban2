import React from 'react';
import { Link } from 'react-router-dom';
import '../css/clientes.css';

const Clientes = () => {
  const clientes = [
    { id: 1, nombre: "Juan Pérez", correo: "juanp@example.com", telefono: "3001234567" },
    { id: 2, nombre: "Laura Gómez", correo: "laurag@example.com", telefono: "301765421" },
    { id: 1, nombre: "Cristian Zapata", correo: "cristianz@example.com", telefono: "3212334655" },
    { id: 2, nombre: "Andres Escobar", correo: "andrese@example.com", telefono: "30075545281" },
    { id: 1, nombre: "Duvian Pérez", correo: "duvianp@example.com", telefono: "3211230077" },
    { id: 2, nombre: "Sebastian Restrepo", correo: "sebasr@example.com", telefono: "3017784400" },
  ];

  return (
    <div className="background-container">
      <div className="home-container">
        <div className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Clientes">Clientes</Link></li>
            <li><Link to="/Estadisticas">Estadisticas</Link></li>
            <li><Link to="/Productos">Producto</Link></li>
            <li><Link to="/Usuarios">Usuarios</Link></li>
            <li><Link to="/ventas">Ventas</Link></li>
          </ul>
        </div>
        <div className="content">
          <h1>Clientes</h1>
          <ul className="clientes-lista">
            {clientes.map((cliente) => (
              <li key={cliente.id}>
                <strong>{cliente.nombre}</strong> - {cliente.correo} - {cliente.telefono}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
     
 );
};

export default Clientes;
