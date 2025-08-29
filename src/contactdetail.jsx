import React, { useState } from "react";
import "./CSS/contactdetail.css";
import { useNavigate } from "react-router-dom";

function ContactDetail({ onSubmit }) {
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
   const handleSearch = () => {
  navigate('/ReviewFlightDetail');
};

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ contact, traveler });
  };

  return (
    <div className="contactdetail-container">
      {/* Sidebar kiri */}
      <div className="contactdetail-left">
        <h2 className="sidebar-title">Your Flight</h2>
        <div className="sidebar-flightlist">
          <p>
            <strong>1.</strong> Jakarta → Bali<br />
            Tue, 10 Sep 2024
          </p>
          <p>
            <strong>2.</strong> Bali → Jakarta<br />
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
          <p>Contact Detail for e-Ticket / Voucher</p>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={contact.firstname}
                onChange={(e) => handleChange(e, "contact")}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={contact.lastname}
                onChange={(e) => handleChange(e, "contact")}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="phone"
                value={contact.phone}
                onChange={(e) => handleChange(e, "contact")}
                placeholder="+62"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={(e) => handleChange(e, "contact")}
                required
              />
            </div>
          </div>
          </form>
          </div>
          <div className="gap">
            
          </div>
           <div className="contactdetail-right1">
         <form onSubmit={handleSubmit} className="contactdetail-form12">
          {/* Travel Detail */}
          <p className="right1">Travel Details</p>
          <p>Adult 1</p>

          <div className="form-group">
            <label>Title</label>
            <select
              name="title"
              value={traveler.title}
              onChange={(e) => handleChange(e, "traveler")}
            >
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={traveler.firstname}
                onChange={(e) => handleChange(e, "traveler")}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={traveler.lastname}
                onChange={(e) => handleChange(e, "traveler")}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Nationality</label>
            <select
              name="nationality"
              value={traveler.nationality}
              onChange={(e) => handleChange(e, "traveler")}
            >
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>

         
            </form>
            
            </div>
            <div className="button-wrapper">
  <button type="submit" className="submit-btn" onClick={handleSearch}>Continue</button>
</div>

      </div>
    </div>
  );
}

export default ContactDetail;
