import { useState, useEffect } from 'react';
import planelogo from './assets/plane.png'
import hotellogo from './assets/hotel.png'
import headlogo from './assets/visionandtour.png'
import { useNavigate } from 'react-router-dom'
import "./CSS/App.css";

const cards = [
  {
    img: 'https://cdn1-production-images-kly.akamaized.net/KrT0wN2GXC73Q5f-v11IUYDTfMI=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4770934/original/018943800_1710311605-mountains-8451480_1280.jpg',
    title: 'Card title',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    img: 'https://cdn1-production-images-kly.akamaized.net/KrT0wN2GXC73Q5f-v11IUYDTfMI=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4770934/original/018943800_1710311605-mountains-8451480_1280.jpg',
    title: 'Card title',
    text: 'This card has supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://cdn1-production-images-kly.akamaized.net/KrT0wN2GXC73Q5f-v11IUYDTfMI=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4770934/original/018943800_1710311605-mountains-8451480_1280.jpg',
    title: 'Card title',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
  },
  {
    img: 'https://cdn1-production-images-kly.akamaized.net/KrT0wN2GXC73Q5f-v11IUYDTfMI=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4770934/original/018943800_1710311605-mountains-8451480_1280.jpg',
    title: 'Card title',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    img: 'https://cdn1-production-images-kly.akamaized.net/KrT0wN2GXC73Q5f-v11IUYDTfMI=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4770934/original/018943800_1710311605-mountains-8451480_1280.jpg',
    title: 'Card title',
    text: 'This card has supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://cdn1-production-images-kly.akamaized.net/KrT0wN2GXC73Q5f-v11IUYDTfMI=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4770934/original/018943800_1710311605-mountains-8451480_1280.jpg',
    title: 'Card title',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
  },
];

function Home() {
  const navigate = useNavigate(); 
  // Cek status login dari localStorage
  const [loginRole, setLoginRole] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('loginRole');
    setLoginRole(role);
  }, []);

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const Regisnavigate = useNavigate(); 

  const handleRegisterClick = () => {
    Regisnavigate('/Register'); 
  };
   const BantuanClick = () => {
    Regisnavigate('/HelpSupportPage'); 
  };

  const PesananClick = () => {
    Regisnavigate('/PesananSaya'); 
  };
  const Flightnavigate = useNavigate(); 

  const handleFlightClick = () => {
    Flightnavigate('/Flight'); 
  };
  const Hotelnavigate = useNavigate();
  const handleHotelClick =() =>{
    Hotelnavigate('/Hotel')
  }
  return (
    <>
      <div className='listnavbar'>
        <div className='Head-logo'>
          <a href=''>
            <img src={headlogo} className="logo" alt='headlogo'/>
          </a>
        </div>
        <ul>
          <li onClick={PesananClick}><a href=""> Pesanan</a></li>
          <li onClick={BantuanClick}><a href=""> Bantuan</a></li>
          {loginRole && (
            <li>
              <div className="user-card" style={{position: 'relative'}}>
                <span
                  style={{cursor: 'pointer'}}
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  Hi, {loginRole === 'user' ? 'User' : 'Company'}
                </span>
                {showDropdown && (
                  <div className="user-dropdown">
                    <p className="logout-btn" onClick={() => {
                      localStorage.removeItem('loginRole');
                      setLoginRole(null);
                      window.location.reload();
                    }}>Logout</p>
                  </div>
                )}
              </div>
            </li>
          )}
          { !loginRole && <>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
          </> }
        </ul>
      </div>

      <div className="hero-section" style={{
        background: loginRole === 'user'
          ? 'linear-gradient(135deg, #dbeafe, #bae6fd, #ccfbf1)'
          : loginRole === 'company'
            ? 'linear-gradient(135deg, #f3e8ff, #e9d5ff, #c7d2fe)'
            : 'linear-gradient(135deg, #dbeafe, #bae6fd, #ccfbf1)'
      }}>
        <h1>
          Jelajahi Dunia Bersama <span className="highlight">Vision Tour</span>
        </h1>
        <p>
          Temukan destinasi impian Anda dengan layanan terpercaya dan pengalaman tak terlupakan
        </p>

        {/* Search Bar */}
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Mau ke mana? Coba cari destinasi impianmu..."
          />
          <button className="search-btn">Cari</button>
        </div>

        {/* Popular destinations */}
        <div className="popular-destinations">
          <span>Bali</span>
          <span>Jakarta</span>
          <span>Yogyakarta</span>
          <span>Lombok</span>
          <span>Bandung</span>
        </div>
      </div>

      <div className='List'>
        <a href="#" onClick={e => { e.preventDefault(); handleHotelClick(); }}>
  <img src={hotellogo} className="logohotel" alt="hotel logo" />
  <p>Hotel</p>
</a>
        <a href="#" onClick={e=>{e.preventDefault(); handleFlightClick();}} target="_blank">
          <img src={planelogo} className="logoflight flight" alt="flight logo" />
          <p>Flight</p>
        </a>
      </div>
<div className='section-header'>
      <h2 className='section-title'>Destinasi Populer</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt="City" className="card-img" />
            <div className="card-body">
              <h5>{card.title}</h5>
              <p>{card.text}</p>
            </div>
            <div className="card-footer">Last updated 3 mins ago</div>
          </div>
        ))}
      </div>
      </div>

      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>Vision Tour</h4>
      <p>Mitra perjalanan terpercaya Anda untuk eksplorasi tanpa batas.</p>
    </div>

    <div className="footer-section">
      <h4>Bantuan</h4>
      <ul>
        <li><a href="#">Pusat Bantuan</a></li>
        <li><a href="#">Cara Pesan</a></li>
        <li><a href="#">Hubungi Kami</a></li>
        <li><a href="#">Syarat & Ketentuan</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Produk</h4>
      <ul>
        <li><a href="#">Tiket Pesawat</a></li>
        <li><a href="#">Hotel</a></li>
        <li><a href="#">Kereta Api</a></li>
        <li><a href="#">Aktivitas & Rekreasi</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Ikuti Kami</h4>
      <div className="social-icons">
        <a href="#">🌐 FB</a>
        <a href="#">📸 IG</a>
        <a href="#">🐦 X</a>
        <a href="#">▶️ YouTube</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025  Vision Tour. All Rights Reserved.</p>
  </div>
</footer>

    </>
  )
}


export default Home;
