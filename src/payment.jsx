import React, { useState } from "react";
import "./CSS/payment.css";
import { useNavigate } from "react-router-dom";

function Paymentmethod({ onSubmit }) {
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
    navigate("/Eticket");
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
            <strong></strong> Passanger(s) Detail
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
            00:39:27
          </h3>
        </div>
        <div className="gap"></div>
        <div className="contactdetail-right1">
          <form onSubmit={handleSubmit} className="contactdetail-form2">
            {/* Travel Detail */}
            <p className="right1">How You Would Like to Pay</p>
            <div className="form-group">
              <label>
                <input type="radio" name="myRadio" value="option1" />
                Virtual Account
              </label>
              <label>
                <input type="radio" name="myRadio" value="option2" />
                Manual Transfer
              </label>
              <label>
                <input type="radio" name="myRadio" value="option3" />
                ATM/ Other Banks
              </label>
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
            <div className="button-wrapper">
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSearch}
              >
                Continue to Payment
              </button>
            </div>
            <p>
              By continuing to pay,you have agreed to Vision Tour and Travel's
              Terms & Conditions and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Paymentmethod;
