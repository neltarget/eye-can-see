// components/sections/OutreachSlideshow.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  School,
  Heart,
} from "lucide-react";

const OutreachSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data for outreach programs - replace with actual images and data
  const outreachPrograms = [
    {
      id: 1,
      title: "School Vision Screening",
      description:
        "Conducting vision screenings for local and global public schools to identify vision problems in young children.",
      icon: <School className="w-8 h-8" />,
      image: "/api/placeholder/800/400",
      stats: "50,000+ Children Screened",
    },
    {
      id: 2,
      title: "Community Eye Camps",
      description:
        "Setting up temporary eye care camps in remote villages to provide free eye exams and treatments.",
      icon: <Users className="w-8 h-8" />,
      image: "/api/placeholder/800/400",
      stats: "200+ Communities Served",
    },
    {
      id: 3,
      title: "Surgical Outreach",
      description:
        "Performing sight-restoring surgeries for those suffering from cataracts and other treatable conditions.",
      icon: <Heart className="w-8 h-8" />,
      image: "/api/placeholder/800/400",
      stats: "10,000+ Surgeries Completed",
    },
    {
      id: 4,
      title: "Medical Training",
      description:
        "Training local healthcare workers and volunteers to provide sustainable eye care in their communities.",
      icon: <Play className="w-8 h-8" />,
      image: "/api/placeholder/800/400",
      stats: "500+ Volunteers Trained",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % outreachPrograms.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + outreachPrograms.length) % outreachPrograms.length
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Outreach Programs</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Making a difference in communities worldwide through comprehensive
            eye care initiatives
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-96 bg-green-600">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
                  <div className="text-center text-cream-100">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-lg">Outreach Program Image</p>
                    <p className="text-sm opacity-75">
                      (Actual photos from our programs will be displayed here)
                    </p>
                  </div>
                </div>
                {/* Slide Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 text-gray-800">
                <div className="flex items-center mb-4">
                  <div className="text-green-600 mr-3">
                    {outreachPrograms[currentSlide].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-green-700">
                    {outreachPrograms[currentSlide].title}
                  </h3>
                </div>

                <p className="text-lg mb-6 leading-relaxed">
                  {outreachPrograms[currentSlide].description}
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                  <p className="text-green-800 font-semibold">
                    {outreachPrograms[currentSlide].stats}
                  </p>
                </div>

                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                  Learn More About This Program
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {outreachPrograms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Program Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {outreachPrograms.map((program, index) => (
              <button
                key={program.id}
                onClick={() => setCurrentSlide(index)}
                className={`p-4 rounded-lg text-left transition duration-300 ${
                  index === currentSlide
                    ? "bg-green-800 text-white"
                    : "bg-green-600/50 text-green-100 hover:bg-green-600"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className="text-cream-200 mr-2">{program.icon}</div>
                  <h4 className="font-semibold text-sm">{program.title}</h4>
                </div>
                <p className="text-xs opacity-90 line-clamp-2">
                  {program.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl mb-6 text-green-100">
            Ready to make a difference in someone's vision?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cream-500 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-cream-400 transition duration-300">
              Support Our Work
            </button>
            <button className="border-2 border-cream-200 text-cream-200 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
              View All Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutreachSlideshow;
