import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/paymenthotel.css";

function HotelPaymentmethod() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("virtual");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Etickethotel");
  };

  return (
    <div className="payment-container">
      {/* Sidebar kiri */}
      <div className="payment-left">
        <h2 className="sidebar-title">Hotel Summary</h2>
        <div className="hotel-info">
          <h3>Hotel 1 <span>★★★★★</span></h3>
          <div className="date-box">
            <div className="checkin">
              <p>Check-in</p>
              <strong>10 Sep 2024</strong>
            </div>
            <span className="arrow">→</span>
            <div className="checkout">
              <p>Check-out</p>
              <strong>11 Sep 2024</strong>
            </div>
          </div>

          <p>1 Guest(s)</p>
          <p>Double or Twin Deluxe</p>
          <p>With Breakfast</p>
          <p>Cancellation Policy</p>

          <h4>Guest(s)</h4>
          <p>- Samuel Winata</p>

          <h4>Contact Detail</h4>
          <p>- Billy K.</p>
          <p>+628987654321</p>
        </div>
      </div>

      {/* Content kanan */}
      <div className="payment-right">
        <div className="info-box">
          <h3>
            We’re holding this price for you! Let’s complete your payment in{" "}
            <span className="timer">00:39:27</span>
          </h3>
        </div>

        <div className="payment-method-box">
          <h4>How You Would Like to Pay</h4>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="radio"
                name="payment"
                value="virtual"
                checked={selectedPayment === "virtual"}
                onChange={() => setSelectedPayment("virtual")}
              />
              Virtual Account
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="manual"
                checked={selectedPayment === "manual"}
                onChange={() => setSelectedPayment("manual")}
              />
              Manual Transfer
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="atm"
                checked={selectedPayment === "atm"}
                onChange={() => setSelectedPayment("atm")}
              />
              ATM / Other Banks
            </label>

            <div className="price-box">
              <h4>Total Price</h4>
              <div className="row">
                <span>Hotel 1</span>
                <span>Rp. 700.000</span>
              </div>
              <div className="row">
                <span>Taxes and Fees</span>
                <span>Rp. 50.000</span>
              </div>
              <hr />
              <div className="row total">
                <strong>Total Price</strong>
                <strong>Rp. 750.000</strong>
              </div>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="submit-btn">
                Pay with Virtual Account
              </button>
            </div>
            <p className="tnc">
              By continuing to pay you have agreed to Vision Tour and Travel's{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HotelPaymentmethod;
