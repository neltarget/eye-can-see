import React from 'react'

export default Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-semibold">Sight Givers Eye Clinic</h4>
          <p className="text-sm">
            Quality eye care — modern equipment — friendly staff
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={14} /> 12 Clinic Rd, Accra
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} /> <a href="tel:+233501234567">+233 50 123 4567</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
