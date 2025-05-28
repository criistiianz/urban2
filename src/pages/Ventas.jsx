import React from 'react';
import { Link } from 'react-router-dom';

const Ventas = () => {
  const ventas = [
    {
      id: 1,
      cliente: "Juan Pérez",
      producto: "Camiseta Oversize Negra",
      fecha: "2025-05-20",
      cantidad: 2,
      total: "$100.000",
    },
    {
      id: 2,
      cliente: "Laura Gómez",
      producto: "Gorra Urbana Roja",
      fecha: "2025-05-22",
      cantidad: 1,
      total: "$45.000",
    },
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
          <h1>Ventas</h1>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.cliente}</td>
                  <td>{venta.producto}</td>
                  <td>{venta.fecha}</td>
                  <td>{venta.cantidad}</td>
                  <td>{venta.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ventas;
