import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

export default function Contact() {
  return (
    <section className="relative py-6 bg-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full text-white shadow-md">
              <MessageCircle size={28} />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            We’d love to hear from you. Whether you want to book an appointment,
            ask a question, or need directions, we’re here to help!
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <span>
                Email:{" "}
                <a
                  href="mailto:info@sightgivers.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  info@sightgivers.com
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" />
              <span>
                Phone:{" "}
                <a
                  href="tel:+233240553897"
                  className="text-blue-600 font-medium hover:underline"
                >
                  +233 24 055 3897
                </a>
              </span>
            </div>
            {/* WhatsApp Link */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 text-xl" />
              <span>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/233240553897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  Chat with us
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <span>
                Location: Near Municipal Assembly, Ho, Volta Region, Ghana
              </span>
            </div>
            <div>
              <iframe
                className="w-full h-64 rounded-lg shadow"
                src="https://maps.google.com/maps?q=Sight%20Givers%20Eye%20Clinic%20Ho%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
                title="Sight Givers Map"
              />
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all shadow-md w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
