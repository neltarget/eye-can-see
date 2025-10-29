// components/sections/WelcomeMessage.jsx
import React from "react";
import { Quote, Target, Shield } from "lucide-react";

const WelcomeMessage = () => {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Welcome to EYE CAN SEE
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-green-600" />
            </div>

            {/* Welcome Message */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                I welcome you to Eye Can See.{" "}
                <strong>
                  Over 700 million people in Africa and worldwide are blind or
                  visually impaired
                </strong>{" "}
                merely because they cannot afford the eyeglasses they need to
                see clearly. <strong>Eye Can See</strong> helps relieve the
                burden by creating a solution which provides people with free
                eye exam, prescription glasses, eye medications to people in
                need of eye care solely with the support of our volunteers and
                eye specialist locally and internationally.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                Prevention of ocular diseases should begin at an early stage in
                order to maintain a healthy vision. Visiting eye care
                professionals for a checkup is paramount to having clear vision
                in order for us to diagnose and treat to avoid many eye
                diseases.
              </p>

              <p className="text-xl leading-relaxed">
                As Eye Can See offers not only an opportunity to "create
                empowerment" for everyone, but to help people all over the world
                get involved and take charge of their vision. I thank you all
                for standing with us through means of donating financially to
                the organization, volunteering your time to reach out to many
                communities.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-lg font-semibold text-green-700">
                Dr. Light Amedzekor
              </p>
              <p className="text-gray-600">President & CEO, Eye Can See</p>
            </div>
          </div>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To prevent loss of sight and vision impairment through education
                and delivering comprehensive eye care examination worldwide.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Our Approach
              </h3>
              <p className="text-gray-600">
                Providing free eye exams, prescription glasses, and medications
                through our network of dedicated volunteers and specialists.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <Quote className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Our Promise
              </h3>
              <p className="text-gray-600">
                Ensuring finances are never a barrier to receiving the gift of
                sight and quality eye care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
