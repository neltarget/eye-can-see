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

          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8">
            {/* Header with Doctor's Image */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative mb-4">
                <img
                  src={doctorPlaceholder}
                  alt="Dr. Light Amedzekor"
                  className="w-24 h-24 rounded-full object-cover border-4 border-amber-300 shadow-md"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl border-4 border-amber-300 shadow-md hidden">
                  DL
                </div>

                {/* Verified Badge */}
                <div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-1 rounded-full">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-green-800">
                Dr. Light Amedzekor
              </h3>
              <p className="text-amber-600 font-medium">
                Founder & Visionary Leader
              </p>
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
