import React from 'react';
import { Link } from 'react-router-dom'; 


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
           </div>
         </div>
       </div>
     );
};

export default Productos;
