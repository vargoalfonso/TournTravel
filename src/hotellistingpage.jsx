import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/hotellistingpage.css";

const hotelsList = [
  {
    id: 1,
    name: "Hotel 1",
    type: "Hotel",
    rating: 5,
    location: "Sudirman, Jakarta",
    price: 900000,
  },
  {
    id: 2,
    name: "Hotel 2",
    type: "Hotel",
    rating: 3,
    location: "Tebet, Jakarta",
    price: 450000,
  },
  {
    id: 3,
    name: "Capsule Stay",
    type: "Capsule Hotel",
    rating: 2,
    location: "Depok, Jakarta",
    price: 200000,
  },
];

function HotelBooking() {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceLimit, setPriceLimit] = useState(1000000);
  const navigate = useNavigate();

  // toggle rating
  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  // toggle type
  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // filter hotels
  const filteredHotels = hotelsList.filter((h) => {
    return (
      (selectedRatings.length === 0 || selectedRatings.includes(h.rating)) &&
      (selectedTypes.length === 0 || selectedTypes.includes(h.type)) &&
      h.price <= priceLimit
    );
  });

  const Hoteldetail = () => {
    navigate("/DetailHotel");
  };

  return (
    <div className="hotelbooking-container">
      {/* Sidebar Filter */}
      <div className="hotelbooking-sidebar">
        <h2 className="sidebar-title">Filter</h2>

        {/* Rating Filter */}
        <div className="sidebar-filter">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedRatings.includes(star)}
                onChange={() => toggleRating(star)}
              />
              {"⭐".repeat(star)}
            </label>
          ))}
        </div>

        {/* Accommodation Type */}
        <div className="sidebar-filter">
          <p className="sidebar-title">Accommodation Type</p>
          {["Hotel", "Capsule Hotel"].map((type) => (
            <label key={type} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              {type}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="sidebar-filter">
          <p className="filter-label">Price</p>
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="filter-range"
          />
          <div className="filter-range-labels">
            <span>Rp. 0</span>
            <span>Rp. {priceLimit.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Hotel List */}
      <div className="hotelbooking-list">
        <div className="hotelbooking-summary">
          Jakarta <br />
          10 Sep 2024 - 11 Sep 2024 | 1 Night(s) | 1 Adult(s), 1 Room
        </div>

        <div className="hotelbooking-hotels">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotelbooking-item">
              <div className="hotelbooking-item-info">
                <div className="hotel-icon">🏨</div>
                <div>
                  <div className="hotelbooking-item-name">{hotel.name}</div>
                  <div className="hotelbooking-item-rating">
                    {"⭐".repeat(hotel.rating)}
                  </div>
                  <div className="hotelbooking-item-location">
                    {hotel.location}
                  </div>
                </div>
              </div>
              <div className="hotelbooking-item-action">
                <div className="hotelbooking-item-price">
                  Rp. {hotel.price.toLocaleString()}
                </div>
                <button
                  onClick={() => navigate("/DetailHotel")}
                  className="hotelbooking-item-btn"
                >
                  Choose
                </button>
              </div>
            </div>
          ))}

          {filteredHotels.length === 0 && (
            <div className="hotelbooking-nohotel">
              No hotels match the filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelBooking;
