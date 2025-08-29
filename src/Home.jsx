import { useState } from 'react'
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

function home() {
  const navigate = useNavigate(); 

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
      <div className='list-navbar'>
        <div className='Head-logo'>
          <a href=''>
            <img src={headlogo} className="logo" alt='headlogo'/>
          </a>
        </div>
        <ul>
          <li onClick={PesananClick}><a href=""> Pesanan</a></li>
          <li onClick={BantuanClick}><a href=""> Bantuan</a></li>
           <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleRegisterClick}>Register</button>
          
        </ul>
      </div>

      <div className='searchbar'>
        <input
          type="text"
          id="header-search"
          placeholder="Mau ke mana? Coba cari destinasi impianmu..."
        />
      </div>

      <div className='List'>
        <a href="#" onClick={e => { e.preventDefault(); handleHotelClick(); }}>
  <img src={hotellogo} className="logohotel" alt="hotel logo" />
  <p>Hotel</p>
</a>handleHotelClick
        <a href="#" onClick={e=>{e.preventDefault(); handleFlightClick();}} target="_blank">
          <img src={planelogo} className="logoflight flight" alt="flight logo" />
          <p>Flight</p>
        </a>
      </div>

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
    </>
  )
}


export default home;
