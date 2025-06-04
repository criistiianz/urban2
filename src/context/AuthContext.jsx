import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const usuariosDemo = [
  { username: 'admin', password: 'admin123', role: 'admin' },
 ];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const usuario = usuariosDemo.find(
      u => u.username === username && u.password === password
    );
    if (usuario) {
      setUser({ username: usuario.username, role: usuario.role });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
