import React, { createContext, useContext, useState, useEffect } from 'react';

// Contexto y hook para usarlo fácilmente
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Estado usuario: null = no autenticado
  const [usuario, setUsuario] = useState(null);

  // Opcional: persistir sesión en localStorage para que no se pierda al recargar
  useEffect(() => {
    const userStorage = localStorage.getItem('usuario');
    if (userStorage) {
      setUsuario(JSON.parse(userStorage));
    }
  }, []);

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
    } else {
      localStorage.removeItem('usuario');
    }
  }, [usuario]);

  // Función login que valida credenciales y establece usuario
  const login = (nombreUsuario, clave) => {
    // Aquí podrías hacer llamada real a backend
    if (nombreUsuario === 'admin' && clave === '1234') {
      const usuarioLogueado = { nombre: 'Administrador', rol: 'admin' };
      setUsuario(usuarioLogueado);
      return { exito: true, usuario: usuarioLogueado };
    }
    return { exito: false, mensaje: 'Usuario o contraseña incorrectos' };
  };

  // Logout borra el usuario
  const logout = () => {
    setUsuario(null);
  };

  const autenticado = !!usuario;

  return (
    <AuthContext.Provider value={{ usuario, login, logout, autenticado }}>
      {children}
    </AuthContext.Provider>
  );
};
