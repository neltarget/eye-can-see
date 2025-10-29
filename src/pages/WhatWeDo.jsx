// pages/WhatWeDo.jsx
import React from "react";
import {
  Eye,
  Stethoscope,
  Users,
  School,
  Mail,
  Heart,
  RefreshCw,
  Utensils,
} from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Comprehensive Eye Exams",
      description:
        "Free comprehensive eye examinations conducted by qualified optometrists and ophthalmologists",
      features: [
        "Visual acuity testing",
        "Refraction assessment",
        "Eye health evaluation",
        "Prescription determination",
      ],
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical & Surgical Care",
      description:
        "Treatment for various eye conditions including glaucoma, cataracts, and other ocular diseases",
      features: [
        "Cataract surgeries",
        "Glaucoma management",
        "Medication distribution",
        "Surgical interventions",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Prescription Glasses",
      description:
        "Free prescription eyeglasses distributed to those who need them to see clearly",
      features: [
        "Custom prescriptions",
        "Durable frames",
        "Children's sizes",
        "Reading glasses",
      ],
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "School Vision Screenings",
      description:
        "Vision screening programs for local and global public and non-public schools",
      features: [
        "Early detection",
        "Child-friendly approach",
        "School partnerships",
        "Follow-up care",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: <School className="w-6 h-6" />,
      title: "Vision Screening",
      description:
        "We conduct vision screenings in schools and communities to identify potential vision problems",
    },
    {
      step: "02",
      icon: <Mail className="w-6 h-6" />,
      title: "Patient Notification",
      description:
        "We inform patients when vision problems are found and recommend comprehensive evaluation",
    },
    {
      step: "03",
      icon: <Heart className="w-6 h-6" />,
      title: "Comprehensive Care",
      description:
        "We provide free eye exams, medications, and treatments through our volunteer specialists",
    },
    {
      step: "04",
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Follow-up & Education",
      description:
        "We follow up with at-risk patients and provide education on eye health maintenance",
    },
  ];

  const focusAreas = [
    {
      condition: "Cataracts",
      description:
        "Clouding of the eye's natural lens, leading to blurred vision and blindness if untreated",
      treatment: "Surgical removal and intraocular lens implantation",
      impact: "Restores clear vision immediately after surgery",
    },
    {
      condition: "Glaucoma",
      description:
        "Group of eye conditions that damage the optic nerve, often due to high eye pressure",
      treatment:
        "Medication, laser treatment, or surgery to reduce eye pressure",
      impact: "Prevents further vision loss and blindness",
    },
    {
      condition: "Refractive Errors",
      description:
        "Common vision problems including nearsightedness, farsightedness, and astigmatism",
      treatment: "Prescription eyeglasses to correct vision",
      impact: "Instantly improves clarity of vision",
    },
    {
      condition: "Childhood Vision",
      description:
        "Vision problems in children that can affect learning and development",
      treatment: "Early detection through screening and appropriate correction",
      impact: "Supports educational success and normal development",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Bringing comprehensive eye care solutions to underserved
              communities worldwide, preventing blindness and restoring sight
              through our dedicated programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Our Mission in Action
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The imperative mission for <strong>Eye Can See</strong> is
                bringing about a solution that will provide preventions, and
                cure for patients affected by glaucoma, cataracts and other eye
                diseases. We work hand in hand with local and international eye
                clinics by investing financial resources in their social
                endeavor to eliminate patient impediment to eye care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Our programs are administered by optometrist and
                ophthalmologist. Our full range of services is brought to the
                people in their communities and villages regardless of where
                they're located.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a full spectrum of eye care services to ensure everyone
              has access to quality vision care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Initiative Program */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Eye Can See Global Initiative Program
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Our Global Initiative program identifies vision problems in
                young children and takes necessary steps to ensure they are
                addressed early, preventing lifelong vision impairment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <School className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        School & Community Screenings
                      </h4>
                      <p className="text-green-100">
                        We conduct vision screenings for local and global public
                        and non-public schools that have requested our services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Timely Communication
                      </h4>
                      <p className="text-green-100">
                        First and foremost, we inform patients by letter or by
                        word of mouth when a possible vision problem is found
                        and strongly recommend evaluation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Resource Provision
                      </h4>
                      <p className="text-green-100">
                        We encourage and help patients by providing them with
                        resources that will get them free comprehensive eye
                        exams.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Continuous Follow-up
                      </h4>
                      <p className="text-green-100">
                        We follow up with patients at risk of decreased vision
                        to help educate and enforce them to take charge of their
                        eye health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Holistic Eye Health</h3>
                <div className="space-y-4">
                  <div className="bg-green-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Medication Management
                    </h4>
                    <p className="text-green-100 text-sm">
                      Proper use of medications prescribed by our volunteer
                      doctors to manage eye conditions.
                    </p>
                  </div>
                  <div className="bg-green-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Nutritional Guidance</h4>
                    <p className="text-green-100 text-sm">
                      Education on watching what they eat to support overall eye
                      health and vision.
                    </p>
                  </div>
                  <div className="bg-green-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Preventive Education</h4>
                    <p className="text-green-100 text-sm">
                      Comprehensive education on maintaining eye health and
                      preventing vision loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              From screening to sustainable eye health - our comprehensive
              approach to vision care
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-700">
                        {step.step}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-green-200 -z-10"></div>
                    )}
                  </div>
                  <div className="text-green-600 flex justify-center mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized care for common eye conditions that affect millions
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  {area.condition}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>

                <div className="bg-green-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-green-800 mb-1">
                    Treatment Provided
                  </h4>
                  <p className="text-green-700 text-sm">{area.treatment}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Impact</h4>
                  <p className="text-blue-700 text-sm">{area.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Making Vision Care Accessible
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Together, we can eliminate preventable blindness and ensure
              everyone has access to quality eye care, regardless of their
              financial situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream-500 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream-400 transition duration-300">
                Support Our Work
              </button>
              <button className="border-2 border-cream-200 text-cream-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition duration-300">
                Volunteer With Us
              </button>
              <button className="border-2 border-cream-200 text-cream-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
