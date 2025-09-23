export default function Doctor() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            src="/doctor-light.jpg" // Replace with actual photo
            alt="Dr. Light - Sight Givers Eye Clinic"
            className="rounded-2xl shadow-lg max-w-sm w-full h-auto"
          />
        </div>

        {/* Doctor Bio */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Meet Dr. Light
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr. Light is the lead optometrist and founder of{" "}
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
            the right lenses, glasses, and preventive care. His mission is
            simple:{" "}
            <em>
              to give every patient the gift of excellent vision and confidence
              in daily life
            </em>
            .
          </p>

          {/* Quick Info / Highlights */}
          <ul className="space-y-2 text-gray-700">
            <li>
              👨‍⚕️ <strong>Specialty:</strong> General Optometry & Vision Care
            </li>
            <li>
              🏥 <strong>Experience:</strong> Years of dedicated service in Ho,
              Ghana
            </li>
            <li>
              📚 <strong>Approach:</strong> Patient-centered, professional, and
              compassionate
            </li>
            <li>
              👓 <strong>Services:</strong> Eye exams, prescriptions, glasses,
              and contact lenses
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
