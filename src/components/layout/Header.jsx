// components/layout/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

// Import logo from assets (using placeholder - replace with actual logo)
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const location = useLocation();

  const navigation = [
    {
      name: "Who We Are",
      href: "/who-we-are",
      current: location.pathname.startsWith("/who-we-are"),
      dropdown: [
        { name: "About E.C.S", href: "/who-we-are/about" },
        { name: "Founder History", href: "/who-we-are/founder-history" },
        { name: "Mission & Vision", href: "/who-we-are/mission-vision" },
        { name: "Meet The Team", href: "/who-we-are/meet-the-team" },
        {
          name: "Patient Testimonials",
          href: "/who-we-are/patient-testimonials",
        },
      ],
    },
    {
      name: "What We Do",
      href: "/what-we-do",
      current: location.pathname === "/what-we-do",
    },
    {
      name: "Get Involved",
      href: "/get-involved",
      current: location.pathname === "/get-involved",
    },
    {
      name: "Patient Resources",
      href: "/patient-resources",
      current: location.pathname.startsWith("/patient-resources"),
      dropdown: [
        { name: "First Visit Guide", href: "/patient-resources/first-visit" },
        {
          name: "Downloadable Forms",
          href: "/patient-resources/downloadable-forms",
        },
        {
          name: "Common Questions",
          href: "/patient-resources/common-questions",
        },
      ],
    },
    {
      name: "Eye Health",
      href: "/eye-health-video",
      current: location.pathname === "/eye-health-video",
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setHoverDropdown(null);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (index) => {
    setHoverDropdown(index);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={closeAllDropdowns}
          >
            {/* Logo Image */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Eye Can See Logo"
                className="size-24 object-contain"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback logo placeholder */}
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg hidden">
                ECS
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-green-700">
                EYE CAN SEE
              </span>
              <span className="text-xs text-green-600 font-medium tracking-wider">
                LET THERE BE LIGHT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center space-x-1 py-2 text-base font-semibold transition duration-300 ${
                        item.current
                          ? "text-green-600 border-b-2 border-green-600"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition duration-300 ${
                          activeDropdown === index || hoverDropdown === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {(activeDropdown === index || hoverDropdown === index) && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            onClick={closeAllDropdowns}
                            className="block px-4 py-3 text-base text-gray-700 hover:bg-green-50 hover:text-green-700 transition duration-300"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeAllDropdowns}
                    className={`py-2 text-base font-semibold transition duration-300 ${
                      item.current
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Donate Now Button - Desktop */}
          <div className="hidden lg:block">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center text-base">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(navigation.indexOf(item))}
                        className={`flex items-center justify-between w-full px-4 py-4 text-left font-semibold rounded-lg transition duration-300 text-base ${
                          item.current
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition duration-300 ${
                            activeDropdown === navigation.indexOf(item)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === navigation.indexOf(item) && (
                        <div className="mt-1 space-y-1 pl-6">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={closeAllDropdowns}
                              className="block px-4 py-3 text-base text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg transition duration-300"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={closeAllDropdowns}
                      className={`block px-4 py-4 font-semibold rounded-lg transition duration-300 text-base ${
                        item.current
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Donate Now Button */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-green-600 text-white px-4 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center text-base">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
