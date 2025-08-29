import React, { useState } from "react";
import "./CSS/contacthotel.css";
import { useNavigate } from 'react-router-dom';

function ContactHotelDetail() {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "+62",
    guestFullName: "",
  });
  const [bookingForOther, setBookingForOther] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((s) => ({ ...s, [name]: value }));
  }

  const handleContinue = () => {
    navigate('/HotelPaymentmethod');
  };

  return (
    <div className="contacthotel-container">
      {/* Left column: Hotel summary */}
      <aside className="hotel-summary">
        <h3>Hotel Summary</h3>
        <div className="hotel-header">
          <span className="hotel-name">Hotel 1</span>
          <span className="hotel-rating">★★★★★</span>
        </div>

        <div className="hotel-image">
          <div className="icon-box">🛏🛏</div>
        </div>

        <div className="check-section">
          <div>
            <div className="label">Check-in</div>
            <div className="value">10 Sep 2024</div>
          </div>
          <div className="arrow">→</div>
          <div>
            <div className="label">Check-out</div>
            <div className="value">11 Sep 2024</div>
          </div>
        </div>

        <ul className="hotel-info">
          <li>1 Guest(s)</li>
          <li>Double or Twin Deluxe</li>
          <li>With Breakfast</li>
          <li>Cancellation Policy</li>
        </ul>

        <div className="total-price">
          <div>
            <div className="label">Total Room Price</div>
            <div className="small">1 Room(s), 1 Night(s)</div>
          </div>
          <div className="price">Rp. 750.000</div>
        </div>
      </aside>

      {/* Right column: Form area */}
      <main className="form-section">
        <div className="login-box">Login Detail Placeholder</div>

        <section className="contact-box">
          <h4>Contact Detail</h4>
          <p>Contact Detail for e-Ticket / Voucher</p>

          <div className="form-grid">
            <label>
              <span>Full Name</span>
              <input
                name="fullName"
                value={contact.fullName}
                onChange={handleChange}
                placeholder="Full name"
              />
            </label>

            <label>
              <span>Mobile Number</span>
              <input
                name="mobile"
                value={contact.mobile}
                onChange={handleChange}
              />
            </label>

            <label className="wide">
              <span>Email</span>
              <input
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </label>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  checked={!bookingForOther}
                  onChange={() => setBookingForOther(false)}
                />
                I am the Guest
              </label>
              <label>
                <input
                  type="radio"
                  checked={bookingForOther}
                  onChange={() => setBookingForOther(true)}
                />
                I am booking for other person
              </label>
            </div>

            <label className="wide">
              <span>Guest's Full Name</span>
              <input
                name="guestFullName"
                value={contact.guestFullName}
                onChange={handleChange}
                placeholder="Guest full name"
              />
            </label>
          </div>
        </section>

        <section className="price-box">
          <h4>Price Details</h4>
          <div className="highlight">
            <span>Price You Pay</span>
            <strong>Rp. 750.000</strong>
          </div>

          <div className="details">
            <div>
              <span>Room Price</span>
              <span>Rp. 700.000</span>
            </div>
            <div>
              <span>Taxes and Fees</span>
              <span>Rp. 50.000</span>
            </div>
          </div>
        </section>

        <div className="btn-wrapper">
          <button className="continue-btn" onClick={handleContinue}>Continue</button>
        </div>
      </main>
    </div>
  );
}
export default ContactHotelDetail;