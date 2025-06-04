import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ rolesPermitidos, children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // No está logueado
    return <Navigate to="/" replace />;
  }

  if (rolesPermitidos && !rolesPermitidos.includes(user.role)) {
    // No tiene permiso
    return <Navigate to="/acceso-denegado" replace />;
  }

  return children;
};

export default PrivateRoute;
