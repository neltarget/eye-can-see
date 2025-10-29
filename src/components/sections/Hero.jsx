// components/sections/Hero.jsx
import React from "react";
import { Eye, Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            LET THERE BE
            <span className="block text-cream-200">LIGHT</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-cream-100">
            Bringing Clear Vision to Millions Worldwide
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-2 text-cream-200" />
              <div className="text-3xl font-bold">700M+</div>
              <div className="text-cream-100">People Helped</div>
            </div>
            <div className="flex flex-col items-center">
              <Eye className="w-12 h-12 mb-2 text-cream-200" />
              <div className="text-3xl font-bold">Free</div>
              <div className="text-cream-100">Eye Exams</div>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-12 h-12 mb-2 text-cream-200" />
              <div className="text-3xl font-bold">100%</div>
              <div className="text-cream-100">Volunteer Powered</div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cream-500 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream-400 transition duration-300 shadow-lg">
              Donate Now
            </button>
            <button className="border-2 border-cream-200 text-cream-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300">
              Volunteer Today
            </button>
            <button className="border-2 border-cream-200 text-cream-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 text-cream-50 fill-current"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
