// pages/who-we-are/FounderHistory.jsx
import React from "react";
import { Calendar, MapPin, GraduationCap, Heart } from "lucide-react";

const FounderHistory = () => {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          History of Dr. Light Amedzekor
        </h1>
        <div className="w-20 h-1 bg-green-600"></div>
      </div>

      {/* Founder Profile */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Profile Image Section */}
          <div className="bg-green-600 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold">Dr. Light Amedzekor</h2>
              <p className="text-green-100">Founder & CEO</p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="lg:col-span-2 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Born</div>
                  <div className="font-semibold">March 9, 1987</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Birthplace</div>
                  <div className="font-semibold">United States</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Education</div>
                  <div className="font-semibold">USA Educated</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Founded</div>
                  <div className="font-semibold">January 1, 2012</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
          <p className="text-lg italic text-green-800">
            "This was what had an impact on me and I will do everything I can to
            never let anyone go through what my mom suffered from."
          </p>
          <p className="text-green-700 font-semibold mt-2">
            - Dr. Light Amedzekor
          </p>
        </div>

        <p>
          <strong>Dr. Light Amedzekor</strong> was born in the United States on
          March 9th, 1987 and received all his education from USA before moving
          to Ghana to help impoverished people. Light became a visionary and a
          social entrepreneur at a young age after watching his mother Victoria
          suffer from serious eye conditions. She later lost her sight in Ghana
          due to lack of accessibility of eye care at that time.
        </p>

        <p>
          At an early age, Dr. Amedzekor developed an altruistic love of helping
          others and was devoted to his education because he knew where he came
          from and remembered how impoverished his family was, as education in
          Ghana was not free. At college, he was the first African-American
          student government president, who committed to change how things were
          running at school and also served as the editor-in-chief of the school
          newspaper.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">
            The Turning Point
          </h3>
          <p className="text-yellow-800">
            On January 1st 2012, Dr. Light followed his passion and founded{" "}
            <strong>Eye Can See Now Initiative</strong> solely to help children,
            adults including seniors citizens with eye problems.
          </p>
        </div>

        <p>
          "Besides my mom, I saw so many people who lack the knowledge about eye
          care and needed avenues of getting a comprehensive eye exam by a
          qualified optometrist or an ophthalmologist and I thought on how we
          can get them educated and connected with an eye doctor to get the best
          eye care possible," says Light Amedzekor.
        </p>

        <p>
          With so much enthusiasm, Dr. Light traveled to African countries
          especially Ghana and saw how people were suffering from serious eye
          problems and in some cases blind merely because of the lack of
          financial support to get an eye exam. This was where Dr. Light
          realized that with his help he can be the light at the end of the
          tunnel for those suffering from eye care.
        </p>

        <div className="bg-green-100 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold text-green-800 mb-3">
            Founder's Vision
          </h3>
          <p className="text-green-800">
            "My vision of the organization is to educate and eliminate
            preventable blindness and for people to have full access to eye care
            which finances should not be a barrier to having the gift of sight."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderHistory;
