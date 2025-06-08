import React from 'react';
import { Link } from 'react-router-dom';

const AccesoDenegado = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '2rem'}}>
      <h2>Acceso Denegado</h2>
      <p>No tienes permisos para acceder a esta página.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default AccesoDenegado;
