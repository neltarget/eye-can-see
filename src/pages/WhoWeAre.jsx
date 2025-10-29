// pages/WhoWeAre.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import WhoWeAreSidebar from "../components/navigation/WhoWeAreSidebar";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation for Who We Are sub-pages */}
        <div className="lg:w-1/4">
          <WhoWeAreSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
