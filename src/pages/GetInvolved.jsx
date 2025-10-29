// pages/GetInvolved.jsx
import React, { useState } from "react";
import {
  Users,
  Heart,
  Clock,
  Mail,
  FileText,
  CheckCircle,
  ArrowRight,
  Download,
  Send,
} from "lucide-react";

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState("volunteer");

  const waysToHelp = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and make a direct impact in communities",
      features: [
        "Flexible scheduling",
        "Training provided",
        "Various roles available",
        "Make a difference",
      ],
      color: "green",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Donate",
      description:
        "Support our mission financially to help provide free eye care services",
      features: [
        "One-time donations",
        "Monthly support",
        "Equipment donations",
        "Sponsor a surgery",
      ],
      color: "blue",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Internship",
      description:
        "Gain valuable experience through our internship programs for students",
      features: [
        "Academic credit",
        "Professional training",
        "Field experience",
        "Networking opportunities",
      ],
      color: "purple",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Spread the Word",
      description:
        "Help us reach more people by sharing our mission with your network",
      features: [
        "Social media sharing",
        "Community outreach",
        "Event hosting",
        "Awareness campaigns",
      ],
      color: "orange",
    },
  ];

  const volunteerRoles = [
    {
      title: "Vision Screening Assistant",
      description: "Help conduct vision screenings in schools and communities",
      requirements: [
        "Training provided",
        "Good with people",
        "Detail-oriented",
      ],
      timeCommitment: "4-8 hours/week",
    },
    {
      title: "Community Outreach Coordinator",
      description:
        "Organize and coordinate eye care camps in local communities",
      requirements: [
        "Organizational skills",
        "Communication skills",
        "Community knowledge",
      ],
      timeCommitment: "6-10 hours/week",
    },
    {
      title: "Medical Volunteer",
      description:
        "Provide eye care services as a qualified optometrist or ophthalmologist",
      requirements: [
        "Medical qualification",
        "License to practice",
        "2+ years experience",
      ],
      timeCommitment: "Flexible",
    },
    {
      title: "Administrative Support",
      description:
        "Assist with paperwork, patient records, and office organization",
      requirements: ["Computer skills", "Organized", "Attention to detail"],
      timeCommitment: "4-6 hours/week",
    },
  ];

  const requiredQualifications = [
    "Ability to work well with others",
    "Strong writing skills",
    "Assertive, skilled and well spoken",
    "Detail-oriented",
    "Ability to work independently",
    "Skilled in multi-tasking",
  ];

  const preferredSkills = [
    "Film and production",
    "Advertisement and promotion",
    "Graphic design",
    "Computer literate",
    "Statistical analysis",
    "Administrative duties",
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Send your resume and cover letter to HR@eyecansee.org",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Letter of Recommendation",
      description: "Qualified applicants submit one letter of recommendation",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Application Review",
      description: "Our team carefully reviews all applications",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Interview",
      description: "Selected applicants are invited for an interview",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Training & Onboarding",
      description: "Successful candidates receive comprehensive training",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const programBenefits = [
    {
      icon: "🎓",
      title: "Academic Development",
      description:
        "Valuable experience for undergraduates and graduate students",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Make a difference in international healthcare programs",
    },
    {
      icon: "🤝",
      title: "Networking",
      description:
        "Connect with healthcare professionals and like-minded individuals",
    },
    {
      icon: "📅",
      title: "Flexible Schedule",
      description:
        "Commitment that fits around your schedule (8 weeks preferred)",
    },
    {
      icon: "🏥",
      title: "Hands-on Experience",
      description: "Work directly with patients and eye care professionals",
    },
    {
      icon: "📈",
      title: "Skill Development",
      description: "Learn new skills and enhance your professional abilities",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8">
              Willing to help prevent blindness globally? We can't do it on our
              own, we need your help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream-500 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream-400 transition duration-300">
                Apply Now
              </button>
              <button className="border-2 border-cream-200 text-cream-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Ways You Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              There are so many ways you can help on your flexible schedule.
              Join us in making vision care accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysToHelp.map((way, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border-l-4 ${
                  way.color === "green"
                    ? "border-green-500"
                    : way.color === "blue"
                    ? "border-blue-500"
                    : way.color === "purple"
                    ? "border-purple-500"
                    : "border-orange-500"
                }`}
              >
                <div
                  className={`mb-4 ${
                    way.color === "green"
                      ? "text-green-600"
                      : way.color === "blue"
                      ? "text-blue-600"
                      : way.color === "purple"
                      ? "text-purple-600"
                      : "text-orange-600"
                  }`}
                >
                  {way.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-600 mb-4">{way.description}</p>
                <ul className="space-y-2">
                  {way.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-4 py-2 rounded-lg font-semibold transition duration-300 ${
                    way.color === "green"
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : way.color === "blue"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : way.color === "purple"
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-orange-600 hover:bg-orange-700 text-white"
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Internship Opportunities */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab("volunteer")}
                className={`px-6 py-3 font-semibold rounded-t-lg transition duration-300 ${
                  activeTab === "volunteer"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-100"
                }`}
              >
                Volunteer Opportunities
              </button>
              <button
                onClick={() => setActiveTab("internship")}
                className={`px-6 py-3 font-semibold rounded-t-lg transition duration-300 ${
                  activeTab === "internship"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-100"
                }`}
              >
                Internship Program
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === "volunteer" && (
                <div>
                  <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Volunteer Opportunities
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    We provide training for certain specialized service areas by
                    our qualified optometrists and ophthalmologists. Whether
                    you're a medical professional or someone with a passion for
                    helping others, we have a role for you.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {volunteerRoles.map((role, index) => (
                      <div
                        key={index}
                        className="border border-green-200 rounded-xl p-6 hover:shadow-md transition duration-300"
                      >
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          {role.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{role.description}</p>
                        <div className="space-y-2 mb-4">
                          {role.requirements.map((req, reqIndex) => (
                            <div
                              key={reqIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {req}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {role.timeCommitment}
                          </span>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition duration-300">
                            Apply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "internship" && (
                <div>
                  <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Internship Program
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-4">
                        Program Overview
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Our program offers many benefits to undergraduates and
                        graduate students with an opportunity to interact, help
                        people in need of eye care, and have a high impact in
                        our international healthcare program.
                      </p>
                      <p className="text-gray-600 mb-4">
                        This Volunteer or Internship program has a flexible
                        schedule of commitment that would fit around your
                        schedule but 8 weeks of commitment is preferable. The
                        internship opportunity is available year-round.
                      </p>
                      <p className="text-gray-600 mb-6">
                        Interns who would like to work with patients in
                        conducting vision screening and other responsibilities
                        will be trained by our optometrists, ophthalmologists or
                        knowledgeable staff members.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Note to Applicants
                        </h4>
                        <p className="text-blue-700 text-sm">
                          We're not looking for any specific applicants so
                          please feel free to demonstrate your talents,
                          abilities, strength, expertise and experiences. We may
                          not be able to reply to every applicant but all
                          applicants will be contacted via email due to our high
                          volume of applications.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-4">
                        Program Benefits
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {programBenefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="bg-green-50 rounded-lg p-4"
                          >
                            <div className="text-2xl mb-2">{benefit.icon}</div>
                            <h4 className="font-semibold text-green-800 mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-green-700 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
              Qualifications & Skills
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Required Qualifications */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Required Qualifications
                </h3>
                <ul className="space-y-3">
                  {requiredQualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preferred Skills */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  Preferred Skills
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  The following types of interests and skills are a plus:
                </p>
                <ul className="space-y-3">
                  {preferredSkills.map((skill, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Application Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {applicationProcess.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="text-white">{step.icon}</div>
                    </div>
                    {index < applicationProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-white/30 -z-10"></div>
                    )}
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-lg font-semibold mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-green-100 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-green-100 mb-6 text-lg">
                Seeking an opportunity? Kindly submit your resume and cover
                letter, indicating the position or field of interest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cream-500 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-cream-400 transition duration-300 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Application Guide
                </button>
                <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Start Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">
                Application Requirements
              </h3>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Submit resume and cover letter to{" "}
                    <strong>HR@eyecansee.org</strong>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Clearly mention you're applying for volunteer or internship
                    position
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Include your availability in the application</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Qualified applicants need to submit one letter of
                    recommendation
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our team of dedicated volunteers and interns working to
                eliminate preventable blindness worldwide. Your time and skills
                can help bring the gift of sight to those in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition duration-300">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about volunteering or internships? We're here to
              help!
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Mail className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-green-700">
                    Email Applications To
                  </h3>
                  <a
                    href="mailto:HR@eyecansee.org"
                    className="text-green-600 hover:text-green-700 text-xl font-semibold"
                  >
                    HR@eyecansee.org
                  </a>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-green-800 font-semibold mb-2">
                  Application Tips:
                </p>
                <ul className="text-green-700 text-sm space-y-1 text-left">
                  <li>
                    • Clearly state the position you're applying for (volunteer
                    or internship)
                  </li>
                  <li>• Include your resume and cover letter</li>
                  <li>• Mention your availability and preferred schedule</li>
                  <li>• Highlight your relevant skills and experiences</li>
                  <li>• Don't forget to include your contact information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
