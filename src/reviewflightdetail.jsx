import React, { useState } from "react";
import "./CSS/reviewflightdetail.css";
import { useNavigate } from 'react-router-dom';

function ReviewFlightDetail({ onSubmit }) {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const [traveler, setTraveler] = useState({
    title: "Mr",
    firstname: "",
    lastname: "",
    nationality: "Indonesia",
  });

  const handleChange = (e, type = "contact") => {
    const { name, value } = e.target;
    if (type === "contact") {
      setContact((prev) => ({ ...prev, [name]: value }));
    } else {
      setTraveler((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ contact, traveler });
  };
  
    const handleSearch = () => {
  navigate('/paymentmethod');
};

  return (
    <div className="contactdetail-container">
      {/* Sidebar kiri */}
      <div className="contactdetail-left">
        <h2 className="sidebar-title">Your Flight</h2>
        <div className="sidebar-flightlist">
          <p>
            <strong>1.</strong> Jakarta → Bali
            <br />
            Tue, 10 Sep 2024
          </p>
          <p>
            <strong>2.</strong> Bali → Jakarta
            <br />
            Wed, 11 Sep 2024
          </p>
        </div>
      </div>

      {/* Form kanan */}
      <div className="detailright">
        <div className="contactdetail-right">
          <form onSubmit={handleSubmit} className="contactdetail-form">
            {/* Contact Detail */}
            <p className="right">Contact Detail</p>
            <div className="form-row">
              <div className="form-group">
                <label>Samuel Winara</label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mobile Number</label>
                <label>+628123456789</label>
              </div>
              <div className="form-group">
                <label>Email</label>
                <label>samuel.wi@gmail.com</label>
              </div>
            </div>
          </form>
        </div>
        <div className="gap"></div>
        <div className="contactdetail-right1">
          <form onSubmit={handleSubmit} className="contactdetail-form2">
            {/* Travel Detail */}
            <p className="right1">Travel Details</p>

            <div className="form-group">
              <label>Mr. Samuel Winata</label>
            </div>

            <div className="form-group">
              <label>Nationality</label>
              <label>Indonesia</label>
            </div>
          </form>
        </div>
        <div className="gap"></div>
        <div className="contactdetail-right1">
          <form onSubmit={handleSubmit} className="contactdetail-form3">
            <p className="right1">Price Detail</p>
            <div className="form-row">
              <label> Price You Pay</label>
              <label className="labelleft">Rp 1.900.000</label>
            </div>
             <hr className="divider" /> 
            <div className="form-row">
              <label>Airline 1</label>
              <label className="labelleft">Rp 1.000.000</label>
            </div>
            <div className="form-row">
              <label>Airline 2</label>
              <label className="labelleft">Rp 900.000</label>
            </div>
          </form>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="submit-btn" onClick={handleSearch}>
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewFlightDetail;
