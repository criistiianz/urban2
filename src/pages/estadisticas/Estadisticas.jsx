import React from 'react';
import { Link } from 'react-router-dom';  
import { VictoryPie } from 'victory';
import './estadisticas.css'; 

const Estadisticas = () => {
  const datosVentas = [
    { cliente: "Juan Pérez", ventas: 5 },
    { cliente: "Laura Gómez", ventas: 3 },
    { cliente: "Cristian Zapata", ventas: 8 },
    { cliente: "Andres Escobar", ventas: 2 },
    { cliente: "Duvian Pérez", ventas: 4 },
    { cliente: "Sebastian Restrepo", ventas: 6 },
  ];

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

        <div className="content estadisticas-container">
          <h1>Estadísticas de Ventas por Cliente</h1>

          <VictoryPie
            data={datosVentas}
            x="cliente"
            y="ventas"
            colorScale={["#f39c12", "#e67e22", "#d35400", "#f1c40f", "#e74c3c", "#f39c12"]}
            labels={({ datum }) => `${datum.cliente}\n${datum.ventas}`}
            style={{
              labels: { fill: "#ecf0f1", fontSize: 12, fontWeight: 'bold' }
            }}
            innerRadius={60}  // Donut
            padAngle={3}
            width={400}
            height={400}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Estadisticas;
