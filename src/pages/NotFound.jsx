import { Link } from "react-router-dom";
import { EyeOff } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center">
        <EyeOff className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          404 — Page Out of Sight
        </h1>
        <p className="text-gray-600 mb-6">
          Looks like this page lost its vision 👓.
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
