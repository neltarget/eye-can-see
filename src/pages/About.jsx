import doctorImage from "../assets/images/dr-light.png";
import { Link } from "react-router-dom";
import { Stethoscope, Building2, BookOpen, Glasses } from "lucide-react";
export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Doctor Image */}
        <div className="flex flex-col justify-center">
          <img
            src={doctorImage}
            alt="Dr. Light - Sight Givers Eye Clinic"
            className="rounded-2xl shadow-lg max-w-sm w-full h-auto size-30"
          />
          {/* Quick Info / Highlights */}
          <ul className="space-y-3 text-gray-700 mt-6">
            <li className="flex items-center gap-2">
              <Stethoscope className="text-blue-600" size={20} />
              <span>
                <strong>Specialty:</strong> Ophthalmologist & General Optometry
                (American-trained)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Building2 className="text-blue-600" size={20} />
              <span>
                <strong>Experience:</strong> Years of dedicated service in Ho,
                Ghana.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen className="text-blue-600" size={20} />
              <span>
                <strong>Approach:</strong> Patient-centered, professional, and
                compassionate.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Glasses className="text-blue-600" size={20} />
              <span>
                <strong>Services:</strong> Eye exams, Eye surgery,
                prescriptions, glasses, and contact lenses.
              </span>
            </li>
          </ul>
        </div>

        {/* Doctor Bio */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Meet Dr. Light
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr. Light is the lead ophthalmologist and founder of{" "}
            <strong>Sight Givers Eye Clinic</strong>. With years of clinical
            experience and a deep passion for improving vision, he has dedicated
            his career to helping patients in Ho and beyond enjoy healthier eyes
            and clearer sight.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Known for his{" "}
            <span className="font-semibold">
              professionalism, humility, and patient-first approach
            </span>
            , Dr. Light takes the time to understand each patient’s needs. His
            warm personality and attention to detail have earned him the trust
            of hundreds of families across the region.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Beyond eye testing and treatment, he ensures patients are well
            educated about their eye health and provides guidance on choosing
            the right lenses, glasses, and preventive care.
            <br />
            His mission is simple:{" "}
            <em>
              to give every patient the gift of excellent vision and confidence
              in daily life
            </em>
            .
          </p>
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
