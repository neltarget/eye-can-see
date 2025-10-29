// pages/who-we-are/MissionVision.jsx
import React from "react";
import { Target, Eye, Plane, Building, Heart } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Mission & Vision
        </h1>
        <div className="w-20 h-1 bg-green-600"></div>
        <p className="text-xl text-gray-600 mt-4">
          Our guiding principles that drive everything we do
        </p>
      </div>

      <div className="space-y-12">
        {/* Vision Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl text-white overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Our Vision is to be one of the international eye care providers
                to deliver eye care to people in their villages, establish eye
                clinics and eye hospitals all over, and operate a flying eye
                hospital airplane traveling worldwide to perform surgeries for
                those who are blind.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-100">
                      Global Network
                    </h4>
                    <p className="text-green-200 text-sm">
                      Eye clinics and hospitals worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Plane className="w-5 h-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-100">
                      Flying Hospital
                    </h4>
                    <p className="text-green-200 text-sm">
                      Mobile surgical unit reaching remote areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-100">
                      Partnerships
                    </h4>
                    <p className="text-green-200 text-sm">
                      Collaborating to find cures for eye diseases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-100">Research</h4>
                    <p className="text-green-200 text-sm">
                      Advancing treatments for eye conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-green-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-green-700">Our Mission</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              Our mission is to prevent loss of sight and vision impairment
              through education and delivering comprehensive eye care
              examination including surgical interventions to help people
              worldwide, especially in the African continent, access quality
              services to preserve their sight and prevent blindness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 text-lg">
                  Prevention & Education
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Community eye health education
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    School vision screening programs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Early detection initiatives
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 text-lg">
                  Treatment & Care
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Free comprehensive eye exams
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Sight-restoring surgeries
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Prescription glasses distribution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-cream-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Join Our Mission
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Together, we can eliminate preventable blindness and ensure that
            everyone, regardless of their financial situation, has access to
            quality eye care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Support Our Work
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
              Learn How to Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
