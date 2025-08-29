// src/login.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import headlogo from './assets/visionandtour.png';
import './CSS/login.css';

function Login() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="Login-view">
      <div className="list-navbar">
        <div className="Head-logo">
          <a href="">
            <img src={headlogo} className="logo" alt="headlogo" />
          </a>
        </div>
        <ul>
          <li><a href="">Pesanan</a></li>
          <li><a href="">Bantuan</a></li>
          <button>Login</button>
          <button>Register</button>
        </ul>
      </div>

      <div className="modal-overlay" onClick={handleClose}>
        <div className="login-form" onClick={(e) => e.stopPropagation()}>
          <h2>Login</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
