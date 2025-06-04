import React from 'react';
import { Link } from 'react-router-dom';
import '../css/usuarios.css'; 


const Usuarios = () => {
  const usuarios = [
    { id: 1, username: 'admin', role: 'admin', email: 'admin@urbancrm.com' },
    { id: 2, username: 'vendedor1', role: 'vendedor', email: 'vendedor1@urbancrm.com' },
    { id: 3, username: 'vendedor2', role: 'vendedor', email: 'vendedor2@urbancrm.com' },
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
          <h1>Usuarios</h1>
          <table className="usuarios-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(({ id, username, role, email }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{username}</td>
                  <td>{role}</td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
