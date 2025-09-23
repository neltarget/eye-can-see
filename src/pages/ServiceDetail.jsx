import { useParams, Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { Calendar } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Service Not Found
        </h2>
        <Link to="/services" className="text-blue-600 hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">{service.icon}</div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          {service.title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">{service.detail}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/services"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition"
          >
            ← Back to Services
          </Link>

          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Calendar className="w-5 h-5" />
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
