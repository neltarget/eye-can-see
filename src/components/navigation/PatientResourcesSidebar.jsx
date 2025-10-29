// components/navigation/PatientResourcesSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Calendar, Download, HelpCircle, Phone, Clock } from "lucide-react";

const PatientResourcesSidebar = () => {
  const menuItems = [
    {
      path: "/patient-resources/first-visit",
      icon: <Calendar className="w-5 h-5" />,
      label: "First Visit Guide",
      description: "What to expect on your first visit",
    },
    {
      path: "/patient-resources/downloadable-forms",
      icon: <Download className="w-5 h-5" />,
      label: "Downloadable Forms",
      description: "Record release, consent forms, etc.",
    },
    {
      path: "/patient-resources/common-questions",
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Common Questions",
      description: "Procedures, glasses, and more",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6 pb-4 border-b border-green-100">
        Patient Resources
      </h2>

      <nav className="space-y-2 mb-8">
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

      {/* Quick Contact & Hours */}
      <div className="space-y-4">
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-3">
            <Clock className="w-4 h-4 text-green-600" />
            <h3 className="font-semibold text-green-800">Office Hours</h3>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-600">Mon-Fri:</span>
              <span className="text-green-700 font-medium">
                8:00 AM - 5:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday:</span>
              <span className="text-green-700 font-medium">
                9:00 AM - 5:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday:</span>
              <span className="text-green-700 font-medium">Closed</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-3">
            <Phone className="w-4 h-4 text-blue-600" />
            <h3 className="font-semibold text-blue-800">Emergency Contact</h3>
          </div>
          <p className="text-sm text-blue-700 mb-2">
            For urgent eye care needs during office hours
          </p>
          <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300">
            Call: 0240553897
          </button>
        </div>

        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Need Help?</h3>
          <p className="text-sm text-orange-700 mb-3">
            Can't find what you're looking for?
          </p>
          <button className="w-full bg-orange-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-orange-700 transition duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientResourcesSidebar;
