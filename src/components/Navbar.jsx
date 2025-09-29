import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/images/sight-givers.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      submenu: [
        { name: "Clinic History", path: "/about/clinic-history" },
        { name: "Mission & Vision", path: "/about/mission-vision" },
        { name: "Meet The Team", path: "/about/meet-the-team" },
        { name: "Patient Testimonials", path: "/about/patient-testimonials" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Eye Exams", path: "/services/eye-exams" },
        {
          name: "Glasses & Contact Lenses",
          path: "/services/glasses-contact-lenses",
        },
        {
          name: "Cataract Surgery & Glaucoma",
          path: "/services/cataract-glaucoma",
        },
        { name: "Door To Door Services", path: "/services/door-to-door" },
      ],
    },
    { name: "Patient Resources", path: "/patient-resources" },
    { name: "Eye Health Videos", path: "/eye-health-videos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-blue-600 text-white text-sm py-1 px-6 flex justify-between items-center hidden md:flex">
        <div className="flex gap-4 items-center">
          <Phone size={16} /> <a href="tel:+233240553897">+233 240 553 897</a>
          <Mail size={16} />{" "}
          <a href="mailto:info@sightgivers.com">info@sightgivers.com</a>
        </div>
        <div className="flex gap-3 items-center">
          <a href="#" className="hover:text-gray-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          <img src={logo} className="w-24 h-12" alt="Sight Givers Logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.name}
                className="relative group flex items-center gap-1 cursor-pointer"
              >
                <span className="font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1">
                  {link.name} <ChevronDown size={16} />
                </span>
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible min-w-[200px]">
                  {link.submenu.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-700 hover:bg-blue-100 ${
                          isActive ? "text-blue-600 font-semibold" : ""
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
          <Link
            to="/booking"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {/* Top bar info */}
          <div className="flex flex-col gap-2 mb-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone size={16} /> +233 240 553 897
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> info@sightgivers.com
            </div>
            <div className="flex gap-2">
              <Facebook size={16} /> <Twitter size={16} />{" "}
              <Instagram size={16} />
            </div>
          </div>

          {navLinks.map((link, idx) =>
            link.submenu ? (
              <div key={idx} className="flex flex-col gap-2">
                <button
                  className="flex justify-between w-full font-medium text-gray-700"
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === idx ? null : idx)
                  }
                >
                  {link.name}{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openSubmenu === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSubmenu === idx && (
                  <div className="flex flex-col pl-4 mt-1">
                    {link.submenu.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block py-1 text-gray-700 hover:text-blue-600 ${
                            isActive ? "text-blue-600 font-semibold" : ""
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center mt-2"
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
