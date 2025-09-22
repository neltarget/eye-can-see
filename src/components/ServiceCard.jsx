import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="font-semibold mb-1">{service.title}</h3>
      <p className="text-sm text-slate-600 mb-3">{service.summary}</p>
      <div className="flex justify-between items-center">
        <Link to={`/services/${service.id}`} className="text-emerald-600">
          Learn more
        </Link>
        <Link
          to="/book"
          className="bg-emerald-600 text-white px-3 py-1 rounded"
        >
          Book
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
