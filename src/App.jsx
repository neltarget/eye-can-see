import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";

// About Pages
import About from "./pages/About";
import ClinicHistory from "./pages/about-pages/ClinicHistory";
import MissionVision from "./pages/about-pages/MissionVision";
import MeetTheTeam from "./pages/about-pages/MeetTheTeam";
import PatientTestimonials from "./pages/about-pages/PatientTestimonials";

// Service Pages
import EyeExams from "./pages/services-pages/EyeExams";
import GlassesContacts from "./pages/services-pages/GlassesContacts";
import CataractGlaucoma from "./pages/services-pages/CataractGlaucoma";
import DoorToDoor from "./pages/services-pages/DoorToDoor";

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
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route
              path="/booking/confirmation/:id"
              element={<BookingConfirmation />}
            />
            <Route path="/contact" element={<Contact />} />

            {/* About page with nested routes */}
            <Route path="/about" element={<About />}>
              <Route index element={<ClinicHistory />} />{" "}
              {/* Default sub-page */}
              <Route path="clinic-history" element={<ClinicHistory />} />
              <Route path="mission-vision" element={<MissionVision />} />
              <Route path="meet-the-team" element={<MeetTheTeam />} />
              <Route
                path="patient-testimonials"
                element={<PatientTestimonials />}
              />
            </Route>

            {/* Services Subpages */}
            <Route path="/services" element={<Services />}>
              <Route index element={<EyeExams />} />{" "}
              <Route path="/services/eye-exams" element={<EyeExams />} />
              <Route
                path="/services/glasses-contacts"
                element={<GlassesContacts />}
              />
              <Route
                path="/services/cataract-glaucoma"
                element={<CataractGlaucoma />}
              />
              <Route path="/services/door-to-door" element={<DoorToDoor />} />
            </Route>

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
