// src/components/About.jsx

export default function About() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            About Sight Givers Eye Clinic
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sight Givers Eye Clinic is a trusted eye care facility in Ho, Ghana,
            dedicated to providing quality and affordable services to patients
            of all ages. With modern equipment and a commitment to excellence,
            we ensure accurate diagnoses and personalized treatment.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our clinic is led by{" "}
            <span className="font-semibold">Dr. Light</span>, a
            highly experienced optometrist passionate about improving vision and
            enhancing lives. Patients commend the clinic for its
            professionalism, warm hospitality, and outstanding care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond eye tests and treatment, we also provide a range of
            eyeglasses and contact lenses tailored to your style, comfort, and
            budget — helping you see clearly and confidently every day.
          </p>
        </div>

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="/about-eye-care.jpg"
            alt="Eye care at Sight Givers"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
