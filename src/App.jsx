// App.jsx
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Register from "./register";
import Flight from "./flight";
import Hotel from "./hotel";
import FlightBooking from "./flightlistingpage";
import ContactDetail from "./contactdetail";
import ReviewFlightDetail from "./reviewflightdetail";
import Paymentmethod from "./payment";
import Eticket from "./eticket";
import HotelBooking from "./hotellistingpage";
import DetailHotel from "./detailhotel";
import ContactHotelDetail from "./contacthoteldetail"
import HotelPaymentmethod from "./hotelpayment"
import EticketHotel from "./etickethotel";
import HelpSupportPage from "./HelpSupportPage";
import PesananSaya from "./PesananSaya";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Flight" element={<Flight />} />
      <Route path="/Hotel" element={<Hotel />} />
      <Route path="/FlightBooking" element={<FlightBooking />} />
      <Route path="/ContactDetail" element={<ContactDetail />} />
      <Route path="/ReviewFlightDetail" element={<ReviewFlightDetail />} />
      <Route path="/Paymentmethod" element={<Paymentmethod />} />
      <Route path="/Eticket" element={<Eticket />} />
      <Route path="/HotelBooking" element={<HotelBooking />} />
      <Route path="/DetailHotel" element={<DetailHotel />} />
      <Route path="/ContactHotelDetail" element={<ContactHotelDetail />} />
      <Route path="/HotelPaymentmethod" element={<HotelPaymentmethod />} />
      <Route path="/EticketHotel" element={<EticketHotel />} />
      <Route path="/HelpSupportPage" element={<HelpSupportPage />} />
      <Route path="/PesananSaya" element={<PesananSaya />} />
    </Routes>
  );
}

export default App;
