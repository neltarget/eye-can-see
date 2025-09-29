import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip with typing dots */}
      {showTooltip && (
        <div className="mb-2 bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-md flex items-center space-x-2">
          <span>👋 Hi! Chat with Dr. Light</span>
          <div className="flex space-x-1">
            <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
            <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></span>
            <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/233240553897"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
        title="Chat with us on WhatsApp"
      >
        {/* Softer + Smaller Pulse */}
        <span className="absolute inline-flex h-12 w-12 rounded-full bg-green-400 opacity-40 animate-ping"></span>
        <FaWhatsapp size={24} className="relative z-10" />
      </a>
    </div>
  );
}
