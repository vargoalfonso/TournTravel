
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './CSS/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import FlightBooking from './flightlistingpage';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FlightBooking />
// );