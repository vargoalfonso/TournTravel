import React from "react";
import "./CSS/HelpSupportPage.css";
import { useNavigate } from "react-router-dom";
import headlogo from './assets/visionandtour.png';

const HelpSupportPage = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => navigate('/login');
  const handleRegisterClick = () => navigate('/Register');
  const BantuanClick = () => navigate('/HelpSupportPage');

  return (
    <>
      <div className='list-navbar'>
        <div className='Head-logo'>
          <a href='/' onClick={e => {e.preventDefault(); navigate('/')}}>
            <img src={headlogo} className="logo" alt='headlogo'/>
          </a>
        </div>
        <ul>
          <li><a href=""> Pesanan</a></li>
          <li onClick={BantuanClick}><a href=""> Bantuan</a></li>
          <li><button onClick={handleLoginClick}>Login</button></li>
          <li><button onClick={handleRegisterClick}>Register</button></li>
        </ul>
      </div>
      <div className="help-container">
        <header className="help-header">
          <h1>Bantuan & Dukungan</h1>
          <p>Temukan jawaban, hubungi kami, atau cek pesan masuk.</p>
        </header>

        <section className="help-menu">
          <div className="help-card">
            <span className="icon">❓</span>
            <h3>Pusat Bantuan</h3>
            <p>Temukan jawaban cepat di FAQ & artikel kami.</p>
          </div>

          <div className="help-card">
            <span className="icon">💬</span>
            <h3>Hubungi Kami</h3>
            <p>Butuh bantuan? Chat atau hubungi CS.</p>
            <button className="btn">Chat dengan CS</button>
            <button className="btn secondary">Kirim Email</button>
          </div>

          <div className="help-card">
            <span className="icon">📬</span>
            <h3>Inbox</h3>
            <p>Lihat pesan & info terbaru dari Vision Tour.</p>
          </div>
        </section>

        <section className="faq-section">
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <details>
            <summary>Bagaimana cara memesan hotel?</summary>
            <p>Anda bisa memesan hotel melalui aplikasi atau website kami.</p>
          </details>
          <details>
            <summary>Bagaimana cara check-in penerbangan?</summary>
            <p>Gunakan kode booking untuk melakukan check-in online di maskapai.</p>
          </details>
          <details>
            <summary>Bagaimana cara mengubah atau membatalkan pesanan?</summary>
            <p>Buka menu Pesanan di akun Anda untuk opsi ubah atau batalkan.</p>
          </details>
          <details>
            <summary>Bagaimana cara menggunakan promo & diskon?</summary>
            <p>Masukkan kode promo di halaman pembayaran.</p>
          </details>
          <details>
            <summary>Bagaimana cara reset password akun saya?</summary>
            <p>Klik “Lupa Password” di halaman login.</p>
          </details>
        </section>

        <section className="contact-section">
          <h2>Masih Butuh Bantuan?</h2>
          <p>Chat live dengan Customer Service (24/7).</p>
          <p>Email: support@visiontour.com</p>
          <p>WhatsApp: +62 812-xxxx-xxxx</p>
        </section>
      </div>
    </>
  );
};

export default HelpSupportPage;
