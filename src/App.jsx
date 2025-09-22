import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shop from "./pages/Shop";

import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/doctor" element={<Doctors />} />
            <Route path="/booking" element={<Booking />} />
            <Route
              path="/booking/confirmation/:id"
              element={<BookingConfirmation />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center p-4">
          <p>
            &copy; {new Date().getFullYear()} Sight Givers Eye Clinic. All
            rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}
