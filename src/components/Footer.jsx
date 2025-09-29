import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <p>
        &copy; {new Date().getFullYear()} Sight Givers Eye Clinic. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
