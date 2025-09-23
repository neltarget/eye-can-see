import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

export default function Services() {
  return (
    <section className="bg-white py-2 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          At <strong>Sight Givers Eye Clinic</strong>, we combine modern
          technology with compassionate care. Explore our range of services
          designed to protect and improve your vision.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-2xl shadow-md p-3 text-left hover:shadow-lg transition"
            >
              <div className="mb-1 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-1.5">{service.shortDescription}</p>
              <Link
                to={`/services/${service.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
