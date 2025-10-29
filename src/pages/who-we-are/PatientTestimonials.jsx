// pages/who-we-are/PatientTestimonials.jsx
import React, { useState } from "react";
import { Play, Pause, Volume2, Quote } from "lucide-react";

const PatientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Victoria A.",
      age: 68,
      location: "Ghana",
      condition: "Cataracts",
      story:
        "After years of struggling with poor vision, the Eye Can See team restored my sight through cataract surgery. I can now see my grandchildren clearly for the first time in years.",
      videoThumbnail: "/api/placeholder/400/300",
      duration: "2:30",
    },
    {
      id: 2,
      name: "Samuel K.",
      age: 12,
      location: "Kenya",
      condition: "Vision Impairment",
      story:
        "I couldn't see the board in school and was falling behind. Eye Can See gave me glasses and now I can learn properly. I want to be a doctor when I grow up.",
      videoThumbnail: "/api/placeholder/400/300",
      duration: "1:45",
    },
    {
      id: 3,
      name: "Grace M.",
      age: 45,
      location: "Nigeria",
      condition: "Glaucoma",
      story:
        "The free eye exam saved my sight. They detected my glaucoma early and provided medication. I'm forever grateful for this organization.",
      videoThumbnail: "/api/placeholder/400/300",
      duration: "3:15",
    },
    {
      id: 4,
      name: "Mohamed J.",
      age: 8,
      location: "Tanzania",
      condition: "Congenital Cataracts",
      story:
        "Born with cataracts, I never knew what clear vision was until the flying eye hospital team came to our village. Now I can see the world in color!",
      videoThumbnail: "/api/placeholder/400/300",
      duration: "2:50",
    },
  ];

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Patient Testimonials
        </h1>
        <div className="w-20 h-1 bg-green-600"></div>
        <p className="text-xl text-gray-600 mt-4">
          Real stories from real people whose lives have been transformed
          through restored vision
        </p>
      </div>

      {/* Featured Testimonial */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Video Section */}
          <div className="bg-green-600 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Patient Video Testimonials
              </h3>
              <p className="text-green-100">
                Hear directly from those we've helped
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition duration-300">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition duration-300">
                  <Pause className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Current Testimonial Content */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center mb-4">
              <Quote className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-700">
                Success Stories
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "{testimonials[activeTestimonial].story}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-green-800">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeTestimonial].age} years,{" "}
                      {testimonials[activeTestimonial].location}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      Condition: {testimonials[activeTestimonial].condition}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonials[activeTestimonial].duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition duration-300 ${
                      index === activeTestimonial
                        ? "bg-green-600"
                        : "bg-green-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Testimonials Grid */}
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          More Inspiring Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition duration-300 hover:shadow-xl ${
                index === activeTestimonial ? "ring-2 ring-green-500" : ""
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">
                      {testimonial.name}
                    </h3>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      {testimonial.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {testimonial.age} years • {testimonial.location} •{" "}
                    {testimonial.condition}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {testimonial.story}
                  </p>
                  <button className="mt-3 text-green-600 text-sm font-semibold hover:text-green-700 transition duration-300">
                    Watch Full Story →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share Your Story CTA */}
      <div className="text-center mt-12 bg-cream-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Share Your Story
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Has Eye Can See made a difference in your life? We'd love to hear your
          story and share it to inspire others.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
          Share Your Experience
        </button>
      </div>
    </div>
  );
};

export default PatientTestimonials;
