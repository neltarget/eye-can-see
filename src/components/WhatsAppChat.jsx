import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/233240553897" // Doctor's WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
