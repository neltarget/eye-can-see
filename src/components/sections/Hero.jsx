import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight, Eye, Users } from "lucide-react";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import hero4 from "../../assets/images/hero4.png";
import hero5 from "../../assets/images/hero5.png";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Give the Gift of Clear Vision",
    text: "Join us in ending preventable blindness for millions worldwide",
    cta: "Donate to Restore Sight",
    stats: "700M+ need eye care",
  },
  {
    id: 2,
    image: hero2,
    title: "Help Children See Their Future",
    text: "Clear vision helps children learn, play, and reach their potential",
    cta: "Sponsor a Child's Vision",
    stats: "10K+ children helped",
  },
  {
    id: 3,
    image: hero3,
    title: "Transform Lives with Surgery",
    text: "A simple procedure can restore sight and independence",
    cta: "Fund Sight-Restoring Surgery",
    stats: "5K+ surgeries completed",
  },
  {
    id: 4,
    image: hero4,
    title: "Build Sustainable Eye Care",
    text: "Empower communities with lasting vision solutions",
    cta: "Support Community Training",
    stats: "500+ volunteers trained",
  },
  {
    id: 5,
    image: hero5,
    title: "Be Their Light in Darkness",
    text: "Your generosity brings hope where vision is lost",
    cta: "Make a Life-Changing Gift",
    stats: "50+ communities served",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute inset-0 bg-green-900/40" />
        </div>

        {/* Main content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            {/* Stats badge */}
            <div className="mb-3">
              <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Eye size={16} className="mr-2" />
                {slides[current].stats}
              </span>
            </div>

            {/* Title & description */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-xl md:text-2xl mb-5 text-white/90 max-w-2xl mx-auto">
              {slides[current].text}
            </p>

            {/* CTA button */}
            <div className="flex justify-center mb-3">
              <button className="flex items-center justify-center gap-3 bg-amber-200 hover:bg-amber-300 text-green-900 px-4 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102">
                <Heart size={22} />
                {slides[current].cta}
              </button>
            </div>

            {/* 🔽 Navigation Dots (moved here, below CTA) */}
            <div className="flex justify-center gap-3 mt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === current
                      ? "bg-amber-300"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Stats bar below hero */}
      <div className="bg-green-800/90 backdrop-blur-sm border-t border-green-700">
        <div className="container mx-auto px-4 py-2">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center justify-center">
              <Users className="w-6 h-6 mb-1 text-amber-300" />
              <div className="text-lg font-bold text-white">700M+</div>
              <div className="text-white/90 text-sm">Need Eye Care</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Eye className="w-6 h-6 mb-1 text-amber-300" />
              <div className="text-lg font-bold text-white">100%</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Heart className="w-6 h-6 mb-1 text-amber-300" />
              <div className="text-lg font-bold text-white">50+</div>
              <div className="text-white/90 text-sm">Communities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
