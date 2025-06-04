import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../css/home.css';

const Home = () => {
  const { user, login, logout } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [totalProductos, setTotalProductos] = useState(500);
  const [totalClientes, setTotalClientes] = useState(220);
  const [ventasMes, setVentasMes] = useState(450);
  const [stockTotal, setStockTotal] = useState(520);

  useEffect(() => {
    // Simula carga de datos desde API
    fetch('/api/productos/count')
      .then(res => res.json())
      .then(data => setTotalProductos(data.total))
      .catch(err => console.error('Error al cargar productos:', err));

    fetch('/api/clientes/count')
      .then(res => res.json())
      .then(data => setTotalClientes(data.total))
      .catch(err => console.error('Error al cargar clientes:', err));

    fetch('/api/ventas/mes')
      .then(res => res.json())
      .then(data => setVentasMes(data.total))
      .catch(err => console.error('Error al cargar ventas:', err));

    fetch('/api/stock/total')
      .then(res => res.json())
      .then(data => setStockTotal(data.total))
      .catch(err => console.error('Error al cargar stock:', err));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Usuario o contraseña incorrectos');
    } else {
      setError('');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="background-container">
      <div className="home-container">
        <div className="content">
          <h1 className="home-title">Bienvenido a Urban Clothes CRM 👕🧢</h1>
          <p className="home-subtitle">Gestión rápida y sencilla de tus productos, clientes y ventas</p>

          <div className="home-resumen-cifras">
            <div className="home-resumen-card">
              <h2>{totalProductos}</h2>
              <p>Productos</p>
            </div>
            <div className="home-resumen-card">
              <h2>{totalClientes}</h2>
              <p>Clientes Activos</p>
            </div>
            <div className="home-resumen-card">
              <h2>{ventasMes}</h2>
              <p>Ventas este mes</p>
            </div>
            <div className="home-resumen-card">
              <h2>{stockTotal}</h2>
              <p>Stock total</p>
            </div>
          </div>

          <div className="home-accesos-rapidos">
            <Link to="/Productos" className="home-btn">Productos</Link>

            {user && user.role === 'admin' && (
              <>
                <Link to="/Clientes" className="home-btn">Clientes</Link>
                <Link to="/ventas" className="home-btn">Ventas</Link>
                <Link to="/Estadisticas" className="home-btn">Estadísticas</Link>
                <Link to="/Usuarios" className="home-btn">Usuarios</Link>
              </>
            )}
          </div>

          {!user && (
            <form onSubmit={handleLogin} className="login-form">
              <h3>Iniciar sesión</h3>
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="home-btn">Ingresar</button>
              {error && <p className="error-msg">{error}</p>}
            </form>
          )}

          {user && (
            <div>
              <p>Hola, {user.username} ({user.role})</p>
              <button onClick={logout} className="home-btn logout-btn">Cerrar sesión</button>
            </div>
          )}

          <p className="home-mensaje-final">“Viste tu éxito con cada venta”</p>
        </div>

        {/* Pie de página */}
        <footer className="footer">
          <div className="footer-content">
            <p>Contacto: urbancrm@example.com | Tel: +57 300 1234567</p>
            <p>
              Síguenos en:
              <a href="https://facebook.com/urbancrm" target="_blank" rel="noreferrer"> Facebook</a> |
              <a href="https://instagram.com/urbancrm" target="_blank" rel="noreferrer"> Instagram</a> |
              <a href="https://twitter.com/urbancrm" target="_blank" rel="noreferrer"> Twitter</a>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Home;
