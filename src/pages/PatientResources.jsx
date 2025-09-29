// src/pages/patient-resources/PatientResources.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function PatientResources() {
  const activeClass = "text-blue-700 border-b-2 border-blue-700 font-semibold";
  const inactiveClass = "text-gray-600 hover:text-blue-700";

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Patient Resources Sub-menu */}
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start mb-10 border-b border-gray-300 pb-2 sticky top-20 bg-gray-50 z-10">
          <NavLink
            to="first-visit"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            What to Expect on Your First Visit
          </NavLink>
          <NavLink
            to="insurance-payment"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Insurance & Payment Options
          </NavLink>
          <NavLink
            to="downloadable-forms"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Downloadable Forms
          </NavLink>
          <NavLink
            to="faqs"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            FAQs
          </NavLink>
        </nav>

        {/* Render Sub-pages */}
        <Outlet />
      </div>
    </section>
  );
}
