import React from "react";
import "./CSS/PesananSaya.css";
import { useNavigate } from 'react-router-dom'
import headlogo from './assets/visionandtour.png';

function PesananSaya() {
  const navigate = useNavigate();
  const handleLoginClick = () => navigate('/login');
  const handleRegisterClick = () => navigate('/Register');
  const BantuanClick = () => navigate('/HelpSupportPage');
  const PesananClick = () => navigate('/PesananSaya');
  return (
    <>
      <div className='list-navbar'>
        <div className='Head-logo'>
          <a href='/' onClick={e => {e.preventDefault(); navigate('/')}}>
            <img src={headlogo} className="logo" alt='headlogo'/>
          </a>
        </div>
        <ul>
          <li onClick={PesananClick}><a href=""> Pesanan</a></li>
          <li onClick={BantuanClick}><a href=""> Bantuan</a></li>
          <li><button onClick={handleLoginClick}>Login</button></li>
          <li><button onClick={handleRegisterClick}>Register</button></li>
        </ul>
      </div>
      <div className="pesanan-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-section">
            <div className="avatar">VA</div>
            <div>
              <h4 className="username">Vargo Alfonso</h4>
              <span className="badge">Bronze Priority</span>
            </div>
          </div>

          <nav className="menu">
            <ul>
              <li>Kartu Saya</li>
              <li className="active">Pesanan Saya</li>
              <li>Daftar Pembelian</li>
              <li>Refunds</li>
              <li>Notifikasi Harga</li>
              <li>Detail Penumpang</li>
              <li>Pengaturan Notifikasi</li>
            </ul>
          </nav>

          <div className="bottom-menu">
            <button className="btn-secondary">Akun Saya</button>
            <button className="btn-logout">Log Out</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="banner">
            <h3>Vision Tour Easy Reschedule</h3>
            <p>Mengubah jadwal perjalanan jadi lebih mudah.</p>
            <a href="/" className="learn-more">Pelajari Selengkapnya</a>
          </div>

          <section className="section-card">
            <h4>E-ticket & Voucher Aktif</h4>
            <div className="empty-state">
              <div className="icon">💤</div>
              <p><strong>Belum Ada Pesanan</strong></p>
              <span>Pesanan Anda akan muncul di sini. Yuk buat pesanan pertama Anda!</span>
            </div>
          </section>

          <section className="section-card">
            <h4>Daftar Pembelian</h4>
            <a href="/" className="link">Lihat Riwayat Pembelian</a>
          </section>
        </main>
      </div>
    </>
  );
}

export default PesananSaya;
