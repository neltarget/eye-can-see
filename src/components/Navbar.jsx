import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Sight Givers Eye Clinic
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/services" className="hover:text-blue-600">
          Services
        </Link>
        <Link to="/doctor" className="hover:text-blue-600">
          Doctor
        </Link>
        <Link to="/shop" className="hover:text-blue-600">
          Shop
        </Link>
        <Link to="/cart" className="hover:text-blue-600">
          Cart
        </Link>
        <Link to="/booking" className="hover:text-blue-600">
          Booking
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
}
