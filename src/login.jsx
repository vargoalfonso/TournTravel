// src/login.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import headlogo from './assets/visionandtour.png';
import './CSS/login.css';

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');

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
          <div className="role-tabs">
            <button
              className={role === 'user' ? 'active' : ''}
              onClick={() => setRole('user')}
              type="button"
            >
              User
            </button>
            <button
              className={role === 'company' ? 'active' : ''}
              onClick={() => setRole('company')}
              type="button"
            >
              Company
            </button>
          </div>
          {role === 'user' ? (
            <form onSubmit={e => {e.preventDefault();
              const username = e.target[0].value;
              const password = e.target[1].value;
              if (username === 'user@email.com' && password === 'user123') {
                localStorage.setItem('loginRole', 'user');
                alert('Login User Berhasil!');
                navigate('/');
              } else {
                alert('Username atau Password User salah!');
              }
            }}>
              <input type="text" placeholder="Username" defaultValue="user@email.com" required />
              <input type="password" placeholder="Password" defaultValue="user123" required />
              <button type="submit">Login as User</button>
            </form>
          ) : (
            <form onSubmit={e => {e.preventDefault();
              const companyId = e.target[0].value;
              const password = e.target[1].value;
              if (companyId === 'company@gmail.com' && password === 'company123') {
                localStorage.setItem('loginRole', 'company');
                alert('Login Company Berhasil!');
                navigate('/');
              } else {
                alert('Company ID atau Password salah!');
              }
            }}>
              <input type="text" placeholder="Company ID" defaultValue="company@email.com" required />
              <input type="password" placeholder="Password" defaultValue="company123" required />
              <button type="submit">Login as Company</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
