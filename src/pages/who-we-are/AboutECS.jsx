// pages/who-we-are/AboutECS.jsx
import React from "react";
import { Eye, Users, Heart, Globe } from "lucide-react";

const AboutECS = () => {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About Eye Can See
        </h1>
        <div className="w-20 h-1 bg-green-600"></div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none text-gray-700 mb-12">
        <p className="text-xl leading-relaxed mb-6">
          <strong>Eye Can See</strong> is a transformative initiative dedicated
          to eliminating preventable blindness and providing comprehensive eye
          care to underserved communities worldwide. Founded on the principle
          that financial constraints should never be a barrier to clear vision,
          we bring hope and healing to millions.
        </p>

        <p className="text-xl leading-relaxed mb-6">
          Our organization operates through a network of dedicated volunteers
          and eye care specialists who work tirelessly to deliver free eye
          exams, prescription glasses, and essential eye medications to those in
          need. We believe that prevention and early intervention are key to
          maintaining healthy vision for life.
        </p>
      </div>

      {/* Impact Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <Eye className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-green-700">700M+</div>
          <div className="text-sm text-gray-600">People Impacted</div>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-green-700">100%</div>
          <div className="text-sm text-gray-600">Volunteer Powered</div>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-green-700">Free</div>
          <div className="text-sm text-gray-600">Services Provided</div>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-green-700">Global</div>
          <div className="text-sm text-gray-600">Reach</div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                We treat every individual with dignity, respect, and the
                compassion they deserve.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">
                Accessibility
              </h3>
              <p className="text-gray-600">
                Financial barriers should never prevent anyone from receiving
                quality eye care.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We work within communities to provide sustainable,
                locally-relevant solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">
                Global Impact
              </h3>
              <p className="text-gray-600">
                We believe in making a worldwide difference, one community at a
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutECS;
