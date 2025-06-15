import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuLateral from 'components/MenuLateral';
import './usuarios.css';

const Usuarios = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const usuarios = [
    { id: 1, username: 'admin', role: 'admin', email: 'admin@urbancrm.com' }
  ];

  return (
    <div className="background-container">
      <div className="home-container">
        <MenuLateral />
        <div className="content">
          <h1>Usuarios</h1>
          <table className="usuarios-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(({ id, username, role, email }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{username}</td>
                  <td>{role}</td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
