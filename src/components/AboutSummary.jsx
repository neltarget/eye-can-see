import { Link } from "react-router-dom";
import doctorImage from "../assets/images/dr-light.png";
export default function AboutSummary() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
      {/* Doctor Image */}
      <div className="flex-shrink-0">
        <img
          src={doctorImage}
          alt="Dr. Light"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left space-y-4">
        <p className="text-lg text-gray-700">
          At <strong>Sight Givers® Eye Clinic</strong>, we’re dedicated to
          giving you clear, healthy vision with world-class care. Led by{" "}
          <strong>Dr. Light</strong>, an experienced American-trained eye
          specialist, we provide expert treatment using the latest equipment.
        </p>
        <Link
          to="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
