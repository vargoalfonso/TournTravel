import React, { useState } from "react";
import "./CSS/etickethotel.css";
import { useNavigate } from "react-router-dom";

function Etickethotel({ onSubmit }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ contact, traveler });
  };

  const handleSearch = () => {
    navigate("/");
  };

  return (
    <div className="contactdetail-container">
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

      {/* Form kanan */}
      <div className="detailright">
        <div className="contactdetail-right">
          <h3>
            We’re holding this price for you! Let’s complete your payment in
            00:17:26
          </h3>
        </div>
        <div className="gap"></div>
        <div className="contactdetail-right">
          <h3>
            Check your email (samuel.wi@gmail.com) for payment instructions.
          </h3>
        </div>
        <div className="gap"></div>
        <div className="contactdetail-right1">
          <form onSubmit={handleSubmit} className="contactdetail-form2">
            {/* Travel Detail */}
            <p className="right1">Virtual Account</p>
            <div className="form-group">
              <p>Account Number : <strong>22222085945840078</strong></p>
              <p>Account Holder Name : <strong>TVLK 609475840</strong></p>
              <hr className="divider" />
              <p>Transfer Amount : <strong>Rp 1.920.000</strong></p>
            </div>
          </form>
        </div>
        <div className="gap"></div>
        <div className="contactdetail-right1">
          <form onSubmit={handleSubmit} className="contactdetail-form3">
            <p className="right1">Price Detail</p>
            <div className="form-group">
              <label>How to Transfer</label>
              <ol className="transfer-steps">
                <li>Open your mobile banking / internet banking app.</li>
                <li>Select the option <strong>Transfer</strong> → <strong>Virtual Account</strong>.</li>
                <li>Enter the Virtual Account Number: <strong>22222085945840078</strong>.</li>
                <li>Input the transfer amount: <strong>Rp 1.920.000</strong>.</li>
                <li>Confirm the account holder name: <strong>TVLK 609475840</strong>.</li>
                <li>Proceed with the transfer and save the receipt.</li>
                <li>Your e-ticket will be sent to your email after payment is verified.</li>
              </ol>
            </div>
          </form>
        </div>
          <button
                type="submit"
                className="submit-btn"
                onClick={handleSearch}
              >
                Back to Home
              </button>
      </div>
    </div>
  );
}

export default Etickethotel;
