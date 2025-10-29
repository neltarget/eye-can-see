// pages/EyeHealth.jsx
import React from "react";
import { Play, Eye } from "lucide-react";

const EyeHealth = () => {
  const eyeHealthVideos = [
    {
      id: 1,
      title: "Understanding Cataracts",
      embedLink: "https://www.youtube.com/embed/xiK5aFkK5cI",
      description: "Learn about causes, symptoms, and prevention of cataracts.",
      category: "conditions",
    },
    {
      id: 2,
      title: "Glaucoma Prevention",
      embedLink: "https://www.youtube.com/embed/5dG4a_bgU2U",
      description: "How to detect and prevent glaucoma early.",
      category: "conditions",
    },
    {
      id: 3,
      title: "Daily Eye Health Habits",
      embedLink: "https://www.youtube.com/embed/4uG5M5L6h4E",
      description: "Simple routines for maintaining optimal vision.",
      category: "prevention",
    },
    {
      id: 4,
      title: "Children's Vision Care",
      embedLink: "https://www.youtube.com/embed/6dLZ1-MkG4w",
      description: "Early detection and care for children's eye health.",
      category: "children",
    },
    {
      id: 5,
      title: "Nutrition for Better Vision",
      embedLink: "https://www.youtube.com/embed/7tG4PaUzLc4",
      description: "Foods and nutrients that protect your eyes.",
      category: "nutrition",
    },
    {
      id: 6,
      title: "Digital Eye Strain Relief",
      embedLink: "https://www.youtube.com/embed/xvjK-9NpQ8E",
      description: "Tips to reduce eye strain from screen time.",
      category: "prevention",
    },
    {
      id: 7,
      title: "Diabetic Retinopathy",
      embedLink: "https://www.youtube.com/embed/9hA2K4d7N8A",
      description: "Understanding risks and prevention for diabetics.",
      category: "conditions",
    },
    {
      id: 8,
      title: "Importance of Regular Eye Exams",
      embedLink: "https://www.youtube.com/embed/2J8Q5k5f4vE",
      description: "Why comprehensive eye exams are crucial.",
      category: "prevention",
    },
    {
      id: 9,
      title: "Refractive Errors Explained",
      embedLink: "https://www.youtube.com/embed/3M3Z2Q5Q5vE",
      description:
        "Understanding nearsightedness, farsightedness & astigmatism.",
      category: "treatment",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eye Health Videos
            </h1>
            <p className="text-xl text-green-100">
              Educational videos to help you understand and maintain optimal eye
              health
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyeHealthVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Video Embed */}
                <div className="relative h-48 bg-gray-900">
                  <iframe
                    src={video.embedLink}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Personalized Eye Care Advice?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            While these videos provide general information, nothing replaces a
            comprehensive eye exam.
          </p>
          <button className="bg-cream-500 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream-400 transition duration-300">
            Book an Eye Exam
          </button>
        </div>
      </section>
    </div>
  );
};

export default EyeHealth;
