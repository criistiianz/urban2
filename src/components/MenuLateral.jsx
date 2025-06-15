import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './menuLateral.css';

function MenuLateral() {
  const { usuario, logout } = useAuth();

  return (
    <div className="sidebar"> 
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/productos">📦 Productos</Link></li>
        <li><Link to="/pagos">💰 Pagos</Link></li>
        <li><Link to="/detalles">🧾 Detalles</Link></li>
        <li><Link to="/usuarios">👥 Usuarios</Link></li>
        <li><Link to="/login">🔐 Login</Link></li>
        {usuario && (
          <li className="cerrar-sesion">
            <button onClick={logout} className="btn-cerrar">
              🚪 Cerrar sesión
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MenuLateral;
