import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MenuLateral from '../components/MenuLateral';
import './login.css';

const Login = () => {
  const { login, logout, user } = useAuth();
  const navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [esError, setEsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultado = login(nombreUsuario, clave);

    if (resultado.exito) {
      setMensaje(`✅ ¡Bienvenido ${resultado.usuario.nombre}!`);
      setEsError(false);

      setTimeout(() => {
        setMensaje('');
        navigate('/usuarios');
      }, 1500);
    } else {
      setMensaje(`❌ ${resultado.mensaje}`);
      setEsError(true);
    }
  };

  const handleLogout = () => {
    logout();
    setMensaje('✅ Sesión cerrada');
    setEsError(false);
  };

  return (
    <div className="login-page-container">
      <MenuLateral />

      <div className="login-content">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Inicio de sesión</h3>

          {mensaje && (
            <div className={esError ? 'error-msg' : 'success-msg'}>
              {mensaje}
            </div>
          )}

          {!user ? (
            <>
              <input
                type="text"
                placeholder="Usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                required
                autoFocus
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />

              <button type="submit" className="home-btn">
                Iniciar sesión
              </button>
            </>
          ) : (
            <>
              <p className="bienvenida-login">👋 Hola, {user.nombre}</p>
              <button onClick={handleLogout} className="cerrar-btn">
                Cerrar sesión
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
