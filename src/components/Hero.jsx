import heroImage from "../assets/images/sightgivers-hero.png";
import { Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-[70vh] w-full flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="bg-black/50 p-8 rounded-lg text-white mx-8">
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Clear Vision, Caring Hands
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Expert eye care, affordable lenses, and modern technology — right
            here in Ho.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Book Appointment
            </Link>

            <a
              href="tel:+233240553897"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
