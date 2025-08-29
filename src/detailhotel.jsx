import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/detailhotel.css";

const hotelData = {
  name: "Hotel 1",
  rating: 5,
  location: "Sudirman, Jakarta",
  images: [
    "https://www.kayak.co.id/rimg/himg/2e/7b/a5/expedia_group-94818-faad0b-358361.jpg?width=1366&height=768&crop=true",
    "https://www.kayak.co.id/rimg/himg/2e/7b/a5/expedia_group-94818-faad0b-358361.jpg?width=1366&height=768&crop=true",
    "https://www.kayak.co.id/rimg/himg/2e/7b/a5/expedia_group-94818-faad0b-358361.jpg?width=1366&height=768&crop=true",
    "https://www.kayak.co.id/rimg/himg/2e/7b/a5/expedia_group-94818-faad0b-358361.jpg?width=1366&height=768&crop=true",
    "https://www.kayak.co.id/rimg/himg/2e/7b/a5/expedia_group-94818-faad0b-358361.jpg?width=1366&height=768&crop=true",
    "https://www.kayak.co.id/rimg/himg/2e/7b/a5/expedia_group-94818-faad0b-358361.jpg?width=1366&height=768&crop=true",
  ],
  rooms: [
    {
      type: "Double or Twin Deluxe",
      icon: "🛏🛏",
      options: [
        { desc: "With Breakfast\n*Cancellation Policy", guests: 1, price: 700000 },
        { desc: "Without Breakfast\n*non-refundable", guests: 1, price: 600000 },
      ],
    },
    {
      type: "Single",
      icon: "🛏",
      options: [
        { desc: "With Breakfast\n*non-refundable", guests: 1, price: 500000 },
        { desc: "Without Breakfast\n*non-refundable", guests: 1, price: 400000 },
      ],
    },
  ],
};

function DetailHotel() {
  const navigate = useNavigate();

  const handleSearch = () => {
  navigate('/ContactHotelDetail');
};



  return (
    <div className="detailhotel-container">
      {/* Summary */}
      <div className="detailhotel-summary">
        Jakarta <br />
        10 Sep 2024 - 11 Sep 2024 | 1 Night(s) | 1 Adult(s), 1 Room
      </div>

      {/* Gallery */}
      <div className="detailhotel-gallery">
        <div className="gallery-main">
          <img src={hotelData.images[0]} alt="main" />
          <img src={hotelData.images[1]} alt="main" />
        </div>
        <div className="gallery-thumbnails">
          {hotelData.images.slice(2).map((img, i) => (
            <img key={i} src={img} alt="thumb" />
          ))}
        </div>
      </div>

      {/* Hotel Information */}
      <div className="detailhotel-info">
        <h3>{hotelData.name}</h3>
        <p>{"⭐".repeat(hotelData.rating)}</p>
        <p>{hotelData.location}</p>
      </div>

      {/* Room Types */}
      <div className="detailhotel-rooms">
        <h3>Room Type</h3>
        {hotelData.rooms.map((room, i) => (
          <div key={i} className="room-card">
            <div className="room-header">
              <span className="room-icon">{room.icon}</span>
              <h4>{room.type}</h4>
            </div>
            <table className="room-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Guest(s)</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {room.options.map((opt, j) => (
                  <tr key={j}>
                    <td>
                      {opt.desc.split("\n").map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </td>
                    <td>{opt.guests}</td>
                    <td>Rp. {opt.price.toLocaleString()}</td>
                    <td>
                      <button
                        className="choose-btn"
                        onClick={() => navigate("/ContactHotelDetail")}
                      >
                        Choose
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailHotel;
