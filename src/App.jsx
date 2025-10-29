// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Main Pages
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import GetInvolved from "./pages/GetInvolved";
import PatientResources from "./pages/PatientResources";
import EyeHealth from "./pages/EyeHealth";

// Who We Are Sub-pages
import AboutECS from "./pages/who-we-are/AboutECS";
import FounderHistory from "./pages/who-we-are/FounderHistory";
import MissionVision from "./pages/who-we-are/MissionVision";
import MeetTheTeam from "./pages/who-we-are/MeetTheTeam";
import PatientTestimonials from "./pages/who-we-are/PatientTestimonials";

// Patient Resources Sub-pages
import FirstVisit from "./pages/patient-resources/FirstVisit";
import DownloadableForms from "./pages/patient-resources/DownloadableForms";
import FAQs from "./pages/patient-resources/FAQs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Who We Are Main Page & Sub-pages */}
            <Route path="/who-we-are" element={<WhoWeAre />}>
              <Route index element={<AboutECS />} />
              <Route path="about" element={<AboutECS />} />
              <Route path="founder-history" element={<FounderHistory />} />
              <Route path="mission-vision" element={<MissionVision />} />
              <Route path="meet-the-team" element={<MeetTheTeam />} />
              <Route
                path="patient-testimonials"
                element={<PatientTestimonials />}
              />
            </Route>

            {/* What We Do */}
            <Route path="/what-we-do" element={<WhatWeDo />} />

            {/* Get Involved */}
            <Route path="/get-involved" element={<GetInvolved />} />

            {/* Patient Resources Main Page & Sub-pages */}
            <Route path="/patient-resources" element={<PatientResources />}>
              <Route index element={<FirstVisit />} />
              <Route path="first-visit" element={<FirstVisit />} />
              <Route
                path="downloadable-forms"
                element={<DownloadableForms />}
              />
              <Route path="FAQs" element={<FAQs/>} />
            </Route>

            {/* Eye Health Video */}
            <Route path="/eye-health-video" element={<EyeHealth />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Simple 404 component
function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Return to Home
      </a>
    </div>
  );
}

export default App;
