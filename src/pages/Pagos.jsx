import React, { useState } from 'react';
import MenuLateral from '../components/MenuLateral';
import './pagos.css';

const pagosIniciales = [
  { id: 1, cliente: 'Juan Pérez', monto: 150000, fecha: '2025-06-10', estado: 'Pendiente' },
  { id: 2, cliente: 'Ana Gómez', monto: 230000, fecha: '2025-06-12', estado: 'Confirmado' },
  { id: 3, cliente: 'Luis Martínez', monto: 120000, fecha: '2025-06-14', estado: 'Pendiente' },
];

function Pagos() {
  const [pagos, setPagos] = useState(pagosIniciales);

  const confirmarPago = (id) => {
    setPagos(pagos.map(p =>
      p.id === id ? { ...p, estado: 'Confirmado' } : p
    ));
  };

  const cancelarPago = (id) => {
    setPagos(pagos.filter(p => p.id !== id));
  };

  return (
    <div className="home-container">
      <MenuLateral />

      <main className="content">
        <h1>💰 Gestión de Pagos</h1>
        <p>Administra los pagos realizados por tus clientes.</p>

        <table className="pagos-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map(({ id, cliente, monto, fecha, estado }) => (
              <tr key={id} className={estado === 'Confirmado' ? 'confirmado' : 'pendiente'}>
                <td>{cliente}</td>
                <td>${monto.toLocaleString()}</td>
                <td>{fecha}</td>
                <td>{estado}</td>
                <td>
                  {estado !== 'Confirmado' && (
                    <button className="btn-confirmar" onClick={() => confirmarPago(id)}>
                      Confirmar
                    </button>
                  )}
                  <button className="btn-cancelar" onClick={() => cancelarPago(id)}>
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
            {pagos.length === 0 && (
              <tr>
                <td colSpan="5">No hay pagos pendientes o registrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Pagos;
