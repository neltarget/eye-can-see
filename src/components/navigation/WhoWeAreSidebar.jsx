// components/navigation/WhoWeAreSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Users, User, Target, Heart, MessageCircle } from "lucide-react";

const WhoWeAreSidebar = () => {
  const menuItems = [
    {
      path: "/who-we-are/about",
      icon: <Users className="w-5 h-5" />,
      label: "About E.C.S",
      description: "Learn about our organization",
    },
    {
      path: "/who-we-are/founder-history",
      icon: <User className="w-5 h-5" />,
      label: "Founder History",
      description: "Dr. Light Amedzekor's story",
    },
    {
      path: "/who-we-are/mission-vision",
      icon: <Target className="w-5 h-5" />,
      label: "Mission & Vision",
      description: "Our purpose and goals",
    },
    {
      path: "/who-we-are/meet-the-team",
      icon: <Heart className="w-5 h-5" />,
      label: "Meet The Team",
      description: "Our dedicated professionals",
    },
    {
      path: "/who-we-are/patient-testimonials",
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Patient Testimonials",
      description: "Stories from those we've helped",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6 pb-4 border-b border-green-100">
        Who We Are
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-start space-x-3 p-4 rounded-lg transition duration-300 group ${
                isActive
                  ? "bg-green-50 border-l-4 border-green-600 text-green-700"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`
            }
          >
            <div
              className={`mt-0.5 ${
                window.location.pathname === item.path
                  ? "text-green-600"
                  : "text-gray-400 group-hover:text-green-500"
              }`}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm md:text-base">
                {item.label}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {item.description}
              </div>
            </div>
          </NavLink>
        ))}
      </nav>

      {/* Quick Contact Info */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Quick Contact</h3>
        <p className="text-sm text-green-700">
          Have questions about our organization?
        </p>
        <button className="w-full mt-3 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhoWeAreSidebar;
