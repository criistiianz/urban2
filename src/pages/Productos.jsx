import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuLateral from 'components/MenuLateral';
import './productos.css';
import camiseta1 from '../assets/camiseta1.jpeg';
import chaqueta from '../assets/chaqueta.jpeg';
import jogger from '../assets/jogger.jpeg';
import sudadera from '../assets/sudadera.jpeg';
import gorra from '../assets/gorra.jpeg';
import zapatillas from '../assets/zapatillas.webp';


const productos = [
  {
    id: 1,
    nombre: 'Camiseta Urbana',
    descripcion: 'Camiseta cómoda de algodón con diseño urbano',
    precio: 25000,
    tallas: ['S', 'M', 'L', 'XL'],
    stock: 12,
    imagen: camiseta1,
    categoria: 'Camiseta',
  },
  {
    id: 2,
    nombre: 'Chaqueta Denim',
    descripcion: 'Chaqueta de mezclilla estilo vintage',
    precio: 85000,
    tallas: ['M', 'L'],
    stock: 5,
    imagen: chaqueta,
    categoria: 'Chaqueta',
  },
  {
    id: 3,
    nombre: 'Pantalón Jogger',
    descripcion: 'Pantalón cómodo para uso diario',
    precio: 40000,
    tallas: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 20,
    imagen: jogger,
    categoria: 'Pantalón',
  },
  {
    id: 4,
    nombre: 'Sudadera Oversize',
    descripcion: 'Sudadera amplia con capucha, estilo urbano',
    precio: 60000,
    tallas: ['S', 'M', 'L'],
    stock: 15,
    imagen: sudadera,
    categoria: 'Sudadera',
  },
  {
    id: 5,
    nombre: 'Gorra Snapback',
    descripcion: 'Gorra urbana ajustable con diseño bordado',
    precio: 20000,
    tallas: ['Única'],
    stock: 30,
    imagen: gorra,
    categoria: 'Gorra',
  },
  {
    id: 6,
    nombre: 'Zapatillas Street',
    descripcion: 'Zapatillas cómodas para uso urbano diario',
    precio: 95000,
    tallas: ['38', '39', '40', '41', '42'],
    stock: 10,
    imagen: zapatillas,
    categoria: 'Calzado',
  },
];

const getEmoji = (categoria) => {
  switch (categoria) {
    case 'Camiseta':
      return '👕';
    case 'Chaqueta':
      return '🧥';
    case 'Pantalón':
      return '👖';
    default:
      return '🛍️';
  }
};

const Productos = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="background-container">
      <div className="home-container">
        <MenuLateral />
        <div className="content">
          <h1>Producto</h1>
          <div className="producto-lista">
            {productos.map((prod) => (
              <div key={prod.id} className="producto-card">
                <img src={prod.imagen} alt={prod.nombre} className="producto-imagen" />
                <div className="producto-info">
                  <h3 className="producto-nombre">
                    {getEmoji(prod.categoria)} {prod.nombre}
                  </h3>
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
