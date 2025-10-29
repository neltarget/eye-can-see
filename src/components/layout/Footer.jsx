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
} from "lucide-react";

// Import logo from assets
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/who-we-are/about" },
    { name: "Our Mission", href: "/who-we-are/mission-vision" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Patient Resources", href: "/patient-resources" },
    { name: "Eye Health Videos", href: "/eye-health-video" },
  ];

  const services = [
    "Free Eye Exams",
    "Prescription Glasses",
    "Eye Medications",
    "Surgical Procedures",
    "School Vision Screenings",
    "Community Outreach",
  ];

  const socialMedia = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
  ];

  return (
    <footer className="bg-green-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Eye Can See Logo"
                  className="size-20 object-contain"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback logo placeholder */}
                <div className="h-12 w-12 bg-cream-500 rounded-full flex items-center justify-center text-green-800 font-bold text-lg hidden">
                  ECS
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <h3 className="text-xl font-bold">EYE CAN SEE</h3>
                <p className="text-green-200 text-sm">LET THERE BE LIGHT</p>
              </div>
            </div>
            <p className="text-green-200 mb-6 text-sm">
              Bringing clear vision to millions worldwide through free eye care
              services, education, and community outreach programs.
            </p>
            <button className="bg-cream-500 text-green-800 px-6 py-2 rounded-lg font-semibold hover:bg-cream-400 transition duration-300 flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-green-200 hover:text-cream-300 transition duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-200">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-green-200 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-200">
              Contact Info
            </h3>

            {/* Office Hours */}
            <div className="flex items-start space-x-3 mb-4">
              <Clock className="w-5 h-5 text-cream-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-cream-200 text-sm">
                  Office Hours
                </h4>
                <p className="text-green-200 text-sm">
                  Mon-Fri: 8:00 AM – 5:00 PM
                </p>
                <p className="text-green-200 text-sm">
                  Saturday: 9:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="w-5 h-5 text-cream-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-cream-200 text-sm">
                  Address
                </h4>
                <p className="text-green-200 text-sm">
                  Eye Can See
                  <br />
                  P.O. BOX HP 47
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 mb-4">
              <Phone className="w-5 h-5 text-cream-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-cream-200 text-sm">Phone</h4>
                <a
                  href="tel:0240553897"
                  className="text-green-200 hover:text-cream-300 transition duration-300 text-sm"
                >
                  0240 553 897
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 mb-4">
              <Mail className="w-5 h-5 text-cream-300 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-cream-200 text-sm">Email</h4>
                <a
                  href="mailto:hr@eyecansee.org"
                  className="text-green-200 hover:text-cream-300 transition duration-300 text-sm"
                >
                  hr@eyecansee.org
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-cream-500 hover:text-green-800 transition duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-300 text-sm text-center md:text-left">
              © {currentYear} Eye Can See. All rights reserved. | Bringing
              vision and hope to communities worldwide.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-green-300 hover:text-cream-300 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-green-300 hover:text-cream-300 transition duration-300"
              >
                Terms of Service
              </Link>
              <a
                href="#top"
                className="text-green-300 hover:text-cream-300 transition duration-300"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
