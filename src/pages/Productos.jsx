import React from 'react';
import { Link } from 'react-router-dom';
import '../css/producto.css';

const productos = [
  {
    id: 1,
    nombre: 'Camiseta Urbana',
    descripcion: 'Camiseta cómoda de algodón con diseño urbano',
    precio: 25000,
    tallas: ['S', 'M', 'L', 'XL'],
    stock: 12,
    imagen: 'https://via.placeholder.com/100?text=Camiseta',
    categoria: 'Camiseta',
  },
  {
    id: 2,
    nombre: 'Chaqueta Denim',
    descripcion: 'Chaqueta de mezclilla estilo vintage',
    precio: 85000,
    tallas: ['M', 'L'],
    stock: 5,
    imagen: 'https://via.placeholder.com/100?text=Chaqueta',
    categoria: 'Chaqueta',
  },
  {
    id: 3,
    nombre: 'Pantalón Jogger',
    descripcion: 'Pantalón cómodo para uso diario',
    precio: 40000,
    tallas: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 20,
    imagen: 'https://via.placeholder.com/100?text=Pantalón',
    categoria: 'Pantalón',
  },
];

const getEmoji = (categoria) => {
  switch(categoria) {
    case 'Camiseta': return '👕';
    case 'Chaqueta': return '🧥';
    case 'Pantalón': return '👖';
    default: return '🛍️';
  }
}

const Productos = () => {
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

        <div className="content">
          <h1>Producto</h1>

          <div className="producto-lista">
            {productos.map(prod => (
              <div key={prod.id} className="producto-card">
                <img src={prod.imagen} alt={prod.nombre} className="producto-imagen" />
                <div className="producto-info">
                  <h3 className="producto-nombre">{getEmoji(prod.categoria)} {prod.nombre}</h3>
                  <p>{prod.descripcion}</p>
                  <p><strong>Precio:</strong> ${prod.precio.toLocaleString()}</p>
                  <p><strong>Tallas:</strong> {prod.tallas.join(', ')}</p>
                  <p><strong>Stock:</strong> {prod.stock}</p>
                  <p><strong>Categoría:</strong> {prod.categoria}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Productos;
