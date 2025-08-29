import React, { useState } from "react";
import "./CSS/eticket.css";
import { useNavigate } from "react-router-dom";

function Eticket({ onSubmit }) {
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
      <div className="contactdetail-left">
        <h2 className="sidebar-title">Flight Summary</h2>
        <div className="sidebar-flightlist">
          <p>
            <strong>1.</strong> Jakarta → Bali
            <br />
            Tue, 10 Sep 2024
          </p>
          <p>
            <hr className="divider" />
            <strong>2.</strong> Bali → Jakarta
            <br />
            Wed, 11 Sep 2024
          </p>
          <hr className="divider" />
          <p>
            <strong></strong> Passenger(s) Detail
            <br />
            Mr. Samuel Winata
          </p>
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

export default Eticket;
