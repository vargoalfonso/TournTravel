import React, { useState } from 'react';
import "./CSS/hotel.css";
import { useNavigate } from 'react-router-dom';

function Hotel(){
    const navigate = useNavigate();

    const handleOverlayClick = (e) =>{
        if (e.target.classList.contains('modal-overlay')) {
            navigate('/');
        }
    }
    const handleClose =() =>{
        navigate('/');
    }
     const handlebutton =() =>{
        navigate('/HotelBooking');
    }

    const[origin, setOrigin] = useState('Jakarta');
    const[checkInDate, setCheckInDate] = useState('2024-09-10');
    const[checkOutDate, setCheckOutDate] = useState('2024-09-11');
    const[guests, setGuests] = useState('1 Adult');
    const[rooms, setRooms] = useState('1 Room');  
    
    return(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className='modal-content'>
                <button className='modal-close' onClick={handleClose}>×</button>
                <div className="hotel-header">
                    <h1>🏨 Hotel Booking</h1>
                </div>
                <div className='hotel-body'>
                    <div className='hotel-grid'>
                   
                        <div className='hotel-input hotel-location'>
                            <label>Location</label>
                            <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
                        </div>
               
                        <div className='hotel-date'>
                            <label>Check-in Date</label>
                            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                        </div>
                        <div className='hotel-date'>
                            <label>Check-out Date</label>
                            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                        </div>
                    
                        <div className='hotel-input'>
                            <label>Guests</label>
                            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                                <option value="1 Adult">1 Adult</option>
                                <option value="2 Adults">2 Adults</option>
                            </select>
                        </div>
                        <div className='hotel-input'>
                            <label>Rooms</label>
                            <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                                <option value="1 Room">1 Room</option>
                                <option value="2 Rooms">2 Rooms</option>
                            </select>
                        </div>
                    </div>
                    <button className='hotel-search-btn' onClick={handlebutton}>Search</button>
                </div>
            </div>
        </div>
    )
}
export default Hotel;