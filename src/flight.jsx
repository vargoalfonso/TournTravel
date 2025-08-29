import React, { useState } from 'react';
import "./CSS/flight.css";
import { useNavigate } from 'react-router-dom';

function Flight() {
  const navigate = useNavigate();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      navigate('/');
    }
  };

  const handleSearch = () => {
  navigate('/FlightBooking');
};

  const handleClose = () => {
    navigate('/');
  };

  const [origin, setOrigin] = useState('Jakarta (CGK)');
  const [destination, setDestination] = useState('Bali (DPS)');
  const [departureDate, setDepartureDate] = useState('2024-09-10');
  const [returnDate, setReturnDate] = useState('2024-09-11');
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [passengers, setPassengers] = useState('1 Adult');
  const [seatClass, setSeatClass] = useState('Economy');

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>×</button>
        <div className="flight-header">
          <h1>✈️ Travel and Tour</h1>
        </div>
        <div className="flight-body">
          <div className="flight-grid">
            <div className="flight-input">
              <label>From</label>
              <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
                <option value="Jakarta (CGK)">Jakarta (CGK)</option>
                <option value="Surabaya (SUB)">Surabaya (SUB)</option>
              </select>
            </div>
            <div className="flight-input">
              <label>To</label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="Bali (DPS)">Bali (DPS)</option>
                <option value="Lombok (LOP)">Lombok (LOP)</option>
              </select>
            </div>
            <div className="flight-date">
              <label>Departure Date</label>
              <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            </div>
            <div className="flight-input flight-checkbox">
              <input
                type="checkbox"
                checked={isRoundTrip}
                onChange={(e) => setIsRoundTrip(e.target.checked)}
              />
              <label>Return date</label>
              {isRoundTrip && (
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              )}
            </div>
            <div className="flight-input">
              <label>Passengers</label>
              <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="1 Adult, 1 Child">1 Adult, 1 Child</option>
              </select>
            </div>
            <div className="flight-input">
              <label>Class</label>
              <select value={seatClass} onChange={(e) => setSeatClass(e.target.value)}>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>
          <button className="flight-search-btn"  onClick={handleSearch}>Search Flights</button>
        </div>
      </div>
    </div>
  );
}

export default Flight;