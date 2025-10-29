// components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Eye,
  Users,
  Stethoscope,
  School,
  ArrowUp,
} from "lucide-react";

// Import logo from assets
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/", icon: Eye },
    { name: "About Us", href: "/who-we-are/about", icon: Users },
    { name: "Our Mission", href: "/who-we-are/mission-vision", icon: Heart },
    { name: "What We Do", href: "/what-we-do", icon: Stethoscope },
    { name: "Get Involved", href: "/get-involved", icon: Users },
    { name: "Patient Resources", href: "/patient-resources", icon: School },
    { name: "Eye Health Videos", href: "/eye-health-video", icon: Eye },
  ];

  const services = [
    { name: "Free Eye Exams", icon: Eye },
    { name: "Prescription Glasses", icon: Eye },
    { name: "Eye Medications", icon: Stethoscope },
    { name: "Surgical Procedures", icon: Stethoscope },
    { name: "School Vision Screenings", icon: School },
    { name: "Community Outreach", icon: Users },
  ];

  const socialMedia = [
    { name: "Facebook", href: "#", icon: Facebook, color: "hover:bg-blue-600" },
    { name: "Twitter", href: "#", icon: Twitter, color: "hover:bg-blue-400" },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
      color: "hover:bg-pink-600",
    },
    { name: "YouTube", href: "#", icon: Youtube, color: "hover:bg-red-600" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-50 text-stone-800 border-t border-stone-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Organization Info - 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex items-start space-x-4 mb-6">
              {/* Logo */}
              <div className="shrink-0">
                <img
                  src={logo}
                  alt="Eye Can See Logo"
                  className="h-16 w-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback logo placeholder */}
                <div className="h-16 w-16 bg-amber-300 rounded-full flex items-center justify-center text-green-800 font-bold text-lg hidden">
                  ECS
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <h3 className="text-2xl font-bold text-green-800">
                  EYE CAN SEE
                </h3>
                <p className="text-amber-300 font-medium">LET THERE BE LIGHT</p>
              </div>
            </div>

            <p className="text-stone-600 mb-6 leading-relaxed text-sm">
              Bringing clear vision and hope to millions worldwide through
              comprehensive eye care services, education, and sustainable
              community outreach programs across underserved regions.
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 flex items-center shadow-md hover:shadow-lg">
              <Heart className="w-4 h-4 mr-2 text-amber-300" />
              Donate Now
            </button>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-green-800 flex items-center">
              <Users className="w-5 h-5 mr-2 text-amber-300" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-stone-600 hover:text-green-700 transition-all duration-300 flex items-center group text-sm py-1"
                    >
                      <Icon className="w-4 h-4 mr-3 text-amber-300 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-green-800 flex items-center">
              <Stethoscope className="w-5 h-5 mr-2 text-amber-300" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li
                    key={service.name}
                    className="flex items-center text-stone-600 text-sm"
                  >
                    <Icon className="w-3 h-3 mr-2 text-amber-300 flex-shrink-0" />
                    {service.name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Hours - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 text-green-800 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-amber-300" />
              Contact Info
            </h3>

            <div className="space-y-4">
              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-700 text-sm">
                    Office Hours
                  </h4>
                  <p className="text-stone-600 text-sm">
                    Mon-Fri: 8:00 AM – 5:00 PM
                  </p>
                  <p className="text-stone-600 text-sm">
                    Saturday: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-700 text-sm">
                    Address
                  </h4>
                  <p className="text-stone-600 text-sm">
                    P.O. BOX HP 47
                    <br />
                    Municipal Assembly, Ho
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-700 text-sm">
                    Phone
                  </h4>
                  <a
                    href="tel:0240553897"
                    className="text-stone-600 hover:text-green-700 transition duration-300 text-sm"
                  >
                    +233 240 553 897
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-stone-700 text-sm">
                    Email
                  </h4>
                  <a
                    href="mailto:hr@eyecansee.org"
                    className="text-stone-600 hover:text-green-700 transition duration-300 text-sm break-all"
                  >
                    hr@eyecansee.org
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-stone-700 text-sm mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-amber-200 transition-all duration-300 hover:text-white shadow-xs hover:shadow-md transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-200 bg-stone-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-stone-600 text-sm text-center md:text-left">
              © {currentYear} Eye Can See Foundation. All rights reserved. |
              Bringing vision and hope to communities worldwide.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-stone-600 hover:text-green-700 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-stone-600 hover:text-green-700 transition duration-300"
              >
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="text-stone-600 hover:text-green-700 transition duration-300 flex items-center"
              >
                <ArrowUp className="w-4 h-4 mr-1 text-amber-300" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
