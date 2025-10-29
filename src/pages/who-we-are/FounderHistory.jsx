// pages/who-we-are/FounderHistory.jsx
import React from "react";
import {
  MapPin,
  GraduationCap,
  Heart,
  Award,
  Users,
  Eye,
  Globe,
  Calendar,
  Star,
} from "lucide-react";
import doctor from "../../assets/images/doctor1.png";

const FounderHistory = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          History of Dr. Light Amedzekor
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
          Visionary leader and founder dedicated to eliminating preventable
          blindness worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - 2/3 width */}
        <div className="lg:col-span-2">
          {/* Story Content */}
          <div className="prose prose-lg max-w-none text-stone-700 space-y-8">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-lg italic text-green-800">
                "This was what had an impact on me and I will do everything I
                can to never let anyone go through what my mom suffered from."
              </p>
              <p className="text-green-700 font-semibold mt-2">
                - Dr. Light Amedzekor
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              <strong>Dr. Light Amedzekor</strong> was born in the United States
              and received comprehensive American education before moving to
              Ghana to help impoverished communities. Light became a visionary
              and social entrepreneur at a young age after witnessing his mother
              Victoria suffer from serious eye conditions. She later lost her
              sight in Ghana due to limited access to eye care services at that
              time.
            </p>

            <p className="text-lg leading-relaxed">
              From an early age, Dr. Amedzekor developed a profound commitment
              to helping others and pursued education with determination,
              understanding the challenges of poverty from his family's
              experiences. During college, he made history as the first
              African-American student government president, driving
              institutional changes while also serving as editor-in-chief of the
              school newspaper.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-amber-800 mb-2 text-xl">
                The Turning Point
              </h3>
              <p className="text-amber-800 text-lg">
                On January 1st 2012, Dr. Light followed his passion and founded{" "}
                <strong>Eye Can See Now Initiative</strong> to provide
                comprehensive eye care for children, adults, and senior citizens
                facing vision challenges.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              "Beyond my mother's experience, I encountered countless
              individuals who lacked basic knowledge about eye care and had no
              access to comprehensive eye examinations by qualified
              professionals. I envisioned creating pathways to educate
              communities and connect them with eye care specialists for optimal
              vision health," reflects Dr. Amedzekor.
            </p>

            <p className="text-lg leading-relaxed">
              Driven by unwavering enthusiasm, Dr. Light traveled extensively
              across Africa, particularly in Ghana, where he witnessed the
              devastating impact of untreated eye conditions. Many suffered from
              preventable blindness simply due to financial constraints. This
              realization ignited his mission to become the beacon of hope for
              those trapped in visual darkness.
            </p>

            <div className="bg-green-100 rounded-2xl p-8 mt-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Founder's Vision
              </h3>
              <p className="text-green-800 text-lg leading-relaxed">
                "My vision for this organization is to eradicate preventable
                blindness through education and ensure universal access to
                quality eye care. Financial limitations should never prevent
                anyone from experiencing the precious gift of sight."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts Sidebar - 1/3 width */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 sticky top-8">
            {/* Header with Doctor's Image */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4">
                <img
                  src={doctor}
                  alt="Dr. Light Amedzekor"
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 shadow-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-2xl border-4 border-amber-300 shadow-lg hidden">
                  DL
                </div>

                {/* Verified Badge */}
                <div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-2 rounded-full shadow-md">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-green-800">
                Dr. Light Amedzekor
              </h3>
              <p className="text-amber-600 font-medium text-lg">
                Founder & CEO
              </p>
              <div className="flex items-center mt-2 text-sm text-stone-500">
                <Star className="w-4 h-4 text-amber-400 mr-1" />
                <span>American-Trained Professional</span>
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="space-y-4">
              {/* Origin */}
              <div className="flex items-start space-x-4 p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-500">
                    Origin
                  </div>
                  <div className="font-semibold text-stone-800">
                    United States
                  </div>
                  <div className="text-xs text-stone-500">
                    American-born visionary
                  </div>
                </div>
              </div>

              {/* Education & Training */}
              <div className="flex items-start space-x-4 p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-500">
                    Education
                  </div>
                  <div className="font-semibold text-stone-800">
                    American-Trained
                  </div>
                  <div className="text-xs text-stone-500">
                    US educated professional
                  </div>
                </div>
              </div>

              {/* Organization Founded */}
              <div className="flex items-start space-x-4 p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-500">
                    Founded
                  </div>
                  <div className="font-semibold text-stone-800">
                    Eye Can See (2012)
                  </div>
                  <div className="text-xs text-stone-500">
                    Global initiative
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="flex items-start space-x-4 p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-500">
                    Impact
                  </div>
                  <div className="font-semibold text-stone-800">
                    50+ Communities
                  </div>
                  <div className="text-xs text-stone-500">Across Africa</div>
                </div>
              </div>

              {/* Medical Expertise */}
              <div className="flex items-start space-x-4 p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-500">
                    Expertise
                  </div>
                  <div className="font-semibold text-stone-800">
                    Eye Care Specialist
                  </div>
                  <div className="text-xs text-stone-500">
                    Vision restoration
                  </div>
                </div>
              </div>

              {/* Global Reach */}
              <div className="flex items-start space-x-4 p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-cyan-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-500">
                    Mission
                  </div>
                  <div className="font-semibold text-stone-800">
                    Global Vision Care
                  </div>
                  <div className="text-xs text-stone-500">
                    International outreach
                  </div>
                </div>
              </div>
            </div>

            {/* Callout Banner */}
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    American-trained professional bringing world-class eye care
                    to underserved communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderHistory;
