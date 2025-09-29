import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  const activeClass = "text-blue-700 border-b-2 border-blue-700 font-semibold";
  const inactiveClass = "text-gray-600 hover:text-blue-700";

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About Sub-menu */}
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start mb-10 border-b border-gray-300 pb-2 sticky top-20 bg-gray-50 z-10">
          <NavLink
            to="clinic-history"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Clinic History
          </NavLink>
          <NavLink
            to="mission-vision"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Mission & Vision
          </NavLink>
          <NavLink
            to="meet-the-team"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Meet The Team
          </NavLink>
          <NavLink
            to="patient-testimonials"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Patient Testimonials
          </NavLink>
        </nav>

        {/* Render Sub-pages */}
        <Outlet />
      </div>
    </section>
  );
}
