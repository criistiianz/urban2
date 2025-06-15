import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

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

  const login = (nombreUsuario, clave) => {
    if (nombreUsuario === 'admin' && clave === '1234') {
      const usuarioLogueado = { nombre: 'Administrador', rol: 'admin' };
      setUsuario(usuarioLogueado);
      return { exito: true, usuario: usuarioLogueado };
    }
    return { exito: false, mensaje: 'Usuario o contraseña incorrectos' };
  };

 
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
