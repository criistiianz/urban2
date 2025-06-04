import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ventas.css';

const Ventas = () => {
  const clientes = [
    { id: 1, nombre: "Juan Pérez" },
    { id: 2, nombre: "Laura Gómez" },
    { id: 3, nombre: "Cristian Zapata" },
    { id: 4, nombre: "Andres Escobar" },
    { id: 5, nombre: "Duvian Pérez" },
    { id: 6, nombre: "Sebastian Restrepo" },
  ];

  const ventas = [
    {
      id: 1,
      idCliente: 1,
      producto: "Camiseta Oversize Negra",
      fecha: "2025-05-20",
      cantidad: 2,
      total: "$100.000",
    },
    {
      id: 2,
      idCliente: 2,
      producto: "Gorra Urbana Roja",
      fecha: "2025-05-22",
      cantidad: 1,
      total: "$45.000",
    },
    {
      id: 3,
      idCliente: 3,
      producto: "Buzo Hoodie Gris",
      fecha: "2025-05-23",
      cantidad: 1,
      total: "$85.000",
    },
    {
      id: 4,
      idCliente: 4,
      producto: "Jeans Rotos Azul Oscuro",
      fecha: "2025-05-24",
      cantidad: 1,
      total: "$120.000",
    },
    {
      id: 5,
      idCliente: 5,
      producto: "Camiseta Blanca Estampada",
      fecha: "2025-05-25",
      cantidad: 2,
      total: "$110.000",
    },
    {
      id: 6,
      idCliente: 6,
      producto: "Sudadera Negra Slim",
      fecha: "2025-05-26",
      cantidad: 1,
      total: "$95.000",
    },
  ];

  const obtenerNombreCliente = (idCliente) => {
    const cliente = clientes.find(c => c.id === idCliente);
    return cliente ? cliente.nombre : "Cliente no encontrado";
  };

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
        <div className="content ventas-container">
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
                  <td>{obtenerNombreCliente(venta.idCliente)}</td>
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
