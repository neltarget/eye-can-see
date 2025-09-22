import { useParams, Link } from "react-router-dom";

export default function BookingConfirmation() {
  const { id } = useParams();
  const booking = JSON.parse(sessionStorage.getItem("last_booking") || "null");

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-2">Booking confirmed</h2>
      <p className="text-sm text-gray-600 mb-3">
        Reference: <span className="font-semibold">{id}</span>
      </p>

      {booking ? (
        <div className="text-left bg-gray-50 p-3 rounded mb-4">
          <div>
            <strong>Name:</strong> {booking.name}
          </div>
          <div>
            <strong>Phone:</strong> {booking.phone}
          </div>
          <div>
            <strong>Service:</strong> {booking.serviceId}
          </div>
          <div>
            <strong>Date:</strong> {booking.date}
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-600 mb-4">
          No booking details found (demo session).
        </p>
      )}

      <p className="text-sm">
        Please arrive 10 minutes early. We’ll send a reminder SMS.
      </p>

      <div className="mt-4">
        <Link to="/" className="bg-emerald-600 text-white px-4 py-2 rounded">
          Back to home
        </Link>
      </div>
    </div>
  );
}
