import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-white to-emerald-50 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Clearer vision starts here</h1>
        <p className="mt-2 text-slate-600">
          Comprehensive eye care for the whole family. Book an appointment today
          or call us.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            to="/book"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
          >
            Book Appointment
          </Link>
          <a
            href="tel:+233501234567"
            className="border px-4 py-2 rounded-lg inline-flex items-center gap-2"
          >
            <Phone size={14} />
            Call Clinic
          </a>
        </div>
      </div>
      <div className="w-48 h-48 bg-slate-100 rounded-lg flex items-center justify-center">
        <Calendar size={48} />
      </div>
    </div>
  );
}
