// pages/patient-resources/FirstVisit.jsx
import React from "react";
import { Clock, User, FileText, Eye, Stethoscope, Heart } from "lucide-react";

const FirstVisit = () => {
  const visitSteps = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Welcome & Registration",
      description: "Friendly greeting and completion of necessary paperwork",
      duration: "10-15 minutes",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Medical History Review",
      description: "Discussion of your vision concerns and overall health",
      duration: "15 minutes",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Comprehensive Eye Exam",
      description: "Series of tests to evaluate your vision and eye health",
      duration: "30-45 minutes",
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Doctor Consultation",
      description: "Detailed discussion of findings and treatment options",
      duration: "15-20 minutes",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Treatment Plan & Next Steps",
      description: "Personalized care plan and follow-up recommendations",
      duration: "10 minutes",
    },
  ];

  const whatToBring = [
    "Current eyeglasses or contact lenses",
    "List of medications you're taking",
    "Insurance information (if applicable)",
    "Photo ID",
    "Any previous eye care records",
  ];

  const preparationTips = [
    "Allow 1.5-2 hours for your complete visit",
    "Bring sunglasses as dilation may make you light-sensitive",
    "Avoid wearing eye makeup for certain tests",
    "Write down any questions or concerns beforehand",
    "Arrive 15 minutes early for paperwork",
  ];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          What to Expect on Your First Visit
        </h1>
        <div className="w-20 h-1 bg-green-600 mb-4"></div>
        <p className="text-xl text-gray-600">
          Your journey to better vision starts here. We've designed your first
          visit to be comprehensive, comfortable, and completely free.
        </p>
      </div>

      {/* Overview Card */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-12">
        <div className="flex items-center mb-4">
          <Clock className="w-8 h-8 mr-4" />
          <div>
            <h2 className="text-2xl font-bold">Complete Visit: 1.5-2 Hours</h2>
            <p className="text-green-100">
              Thorough assessment at no cost to you
            </p>
          </div>
        </div>
        <p className="text-lg">
          We believe everyone deserves access to quality eye care. Your first
          visit includes a comprehensive examination, discussion with our eye
          care professionals, and a personalized treatment plan - completely
          free of charge.
        </p>
      </div>

      {/* Visit Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Your Visit Step-by-Step
        </h2>
        <div className="space-y-6">
          {visitSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-green-800">
                      {step.title}
                    </h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* What to Bring */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            What to Bring
          </h3>
          <ul className="space-y-3">
            {whatToBring.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            Preparation Tips
          </h3>
          <ul className="space-y-3">
            {preparationTips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Special Considerations */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-8">
        <h3 className="text-lg font-bold text-yellow-800 mb-2">
          Special Considerations
        </h3>
        <p className="text-yellow-700">
          If you have diabetes, high blood pressure, or a family history of eye
          diseases, please inform our staff. These conditions may require
          additional testing or more frequent monitoring.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-cream-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Ready for Your Visit?
        </h3>
        <p className="text-gray-600 mb-6">
          Schedule your free comprehensive eye exam today and take the first
          step toward better vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Book Appointment
          </button>
          <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
            Download Forms
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstVisit;
