import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./CSS/flightlistingpage.css";

const airlinesList = [
  { id: 1, name: "Airlines 1", time: "04:00 - 07:00", from: "CGK", to: "DPS", price: 900000 },
  { id: 2, name: "Airlines 2", time: "08:00 - 11:00", from: "CGK", to: "DPS", price: 1000000 },
  { id: 3, name: "Airlines 3", time: "13:00 - 15:00", from: "CGK", to: "DPS", price: 1200000 },
  { id: 4, name: "Airlines 4", time: "19:00 - 21:00", from: "CGK", to: "DPS", price: 800000 },
];

const timeRanges = [
  { label: "Pagi", start: 6, end: 12 },
  { label: "Siang", start: 12, end: 18 },
  { label: "Malam", start: 18, end: 24 },
];

function FlightBooking() {
  const [selectedFlights, setSelectedFlights] = useState({ 1: null, 2: null });
  const [activeStep, setActiveStep] = useState(1);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceLimit, setPriceLimit] = useState(1000000);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedFlights[1] && selectedFlights[2]) {
      navigate("/ContactDetail");
    }
  }, [selectedFlights, navigate]);

  // toggle airlines
  const toggleAirline = (airlineName) => {
    setSelectedAirlines((prev) =>
      prev.includes(airlineName)
        ? prev.filter((a) => a !== airlineName)
        : [...prev, airlineName]
    );
  };

  // parse time for filter
  const parseHour = (timeStr) => parseInt(timeStr.split(":")[0]);

  // filter flights
  const filteredFlights = airlinesList.filter((f) => {
    const depHour = parseHour(f.time.split(" - ")[0]);
    return (
      (selectedAirlines.length === 0 || selectedAirlines.includes(f.name)) &&
      f.price <= priceLimit &&
      (!selectedTime ||
        (depHour >= selectedTime.start && depHour < selectedTime.end))
    );
  });

  // handle choose flight
  const handleChooseFlight = (flight) => {
    setSelectedFlights((prev) => ({ ...prev, [activeStep]: flight }));
    // setelah pilih flight 1 → otomatis pindah ke 2
    if (activeStep === 1) setActiveStep(2);
  };

  return (
    <div className="flightbooking-container">

      <div className="flightbooking-sidebar">
        <div>
          <h2 className="sidebar-title">Your Flight</h2>
          <div className="sidebar-flightlist">
            <div
              className={`sidebar-flight ${
                activeStep === 1 ? "active" : "inactive"
              }`}
              onClick={() => setActiveStep(1)}
            >
              1. Jakarta - Bali<br />
              Tue, 10 Sep 2024
              {selectedFlights[1] && (
                <div className="sidebar-flight-detail">
                  {selectedFlights[1].name} | {selectedFlights[1].time}
                </div>
              )}
            </div>
            <div
              className={`sidebar-flight ${
                activeStep === 2 ? "active" : "inactive"
              }`}
              onClick={() => setActiveStep(2)}
            >
              2. Bali - Jkt<br />
              Wed, 11 Sep 2024
              {selectedFlights[2] && (
                <div className="sidebar-flight-detail">
                  {selectedFlights[2].name} | {selectedFlights[2].time}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="sidebar-title">Filter</h2>
          <div className="sidebar-filter">
            <p className="filter-label">Airline</p>
            {["Airlines 1", "Airlines 2", "Airlines 3", "Airlines 4"].map(
              (airline) => (
                <div key={airline}>
                  <label className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedAirlines.includes(airline)}
                      onChange={() => toggleAirline(airline)}
                    />
                    {airline}
                  </label>
                </div>
              )
            )}
          </div>

          <div className="sidebar-filter">
            <p className="sidebar-title">Time</p>
            <div className="filter-timerange">
              {timeRanges.map((time) => (
                <div
                  key={time.label}
                  className={`timerange-box ${
                    selectedTime?.label === time.label ? "active" : ""
                  }`}
                  onClick={() =>
                    setSelectedTime(
                      selectedTime?.label === time.label ? null : time
                    )
                  }
                >
                  {time.label}
                  <br />
                  <span className="timerange-time">{time.start}:00 - {time.end}:00</span>
                </div>
              ))}
            </div>
          </div>

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
      </div>

      {/* Flight List */}
      <div className="flightbooking-list">
        <div className="flightbooking-summary">
          {activeStep === 1
            ? "Jakarta (CGK) → Bali (DPS)"
            : "Bali (DPS) → Jakarta (CGK)"}
          <br />
          {activeStep === 1
            ? "Tue, 10 Sep 2024 | 1 Passenger(s) | Economy"
            : "Wed, 11 Sep 2024 | 1 Passenger(s) | Economy"}
        </div>

        <div className="flightbooking-flights">
          {filteredFlights.map((flight) => (
            <div key={flight.id} className="flightbooking-item">
              <div className="flightbooking-item-info">
                <div className="flightbooking-item-icon">✈</div>
                <div>
                  <div className="flightbooking-item-name">{flight.name}</div>
                  <div className="flightbooking-item-time">{flight.time}</div>
                  <div className="flightbooking-item-route">
                    {flight.from} → {flight.to}
                  </div>
                  <div className="flightbooking-item-detail">Flight Detail</div>
                </div>
              </div>
              <div className="flightbooking-item-action">
                <div className="flightbooking-item-price">
                  Rp. {flight.price.toLocaleString()}/pax
                </div>
                <button
                  onClick={() => handleChooseFlight(flight)}
                  className="flightbooking-item-btn"
                >
                  {selectedFlights[activeStep]?.id === flight.id
                    ? "Chosen"
                    : "Choose"}
                </button>
              </div>
            </div>
          ))}

          {filteredFlights.length === 0 && (
            <div className="flightbooking-noflight">No flights match the filter.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightBooking;
