import React from "react";

// Placeholder testimonials data
const testimonials = [
  {
    name: "Kwame Nkrumah",
    review:
      "Fantastic service! My vision has never been clearer, and the staff were incredibly welcoming.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // example embed
  },
  {
    name: "Abena Owusu",
    review:
      "Dr. Light and his team made the entire eye exam process smooth and comfortable.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // Add more testimonials as needed
];

export default function PatientTestimonials() {
  return (
    <section className="bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">
          Patient Testimonials
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {t.name}
              </h2>
              <p className="text-gray-700 mb-4">{t.review}</p>
              <div className="aspect-video w-full">
                <iframe
                  src={t.video}
                  title={`Video testimonial by ${t.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
