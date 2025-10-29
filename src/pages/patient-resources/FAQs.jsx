// pages/patient-resources/FAQs.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Glasses,
  Stethoscope,
  Heart,
} from "lucide-react";

const FAQs = () => {
  const [openCategory, setOpenCategory] = useState("procedures");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqCategories = [
    {
      id: "procedures",
      title: "Eye Procedures & Treatments",
      icon: <Stethoscope className="w-5 h-5" />,
      questions: [
        {
          id: "proc1",
          question: "What eye conditions do you treat?",
          answer:
            "We treat a wide range of eye conditions including cataracts, glaucoma, refractive errors (nearsightedness, farsightedness, astigmatism), diabetic retinopathy, macular degeneration, and various eye infections. Our team includes specialists for different eye conditions.",
        },
        {
          id: "proc2",
          question: "How long does a comprehensive eye exam take?",
          answer:
            "A comprehensive eye exam typically takes 1.5 to 2 hours. This includes registration, various vision tests, eye health evaluation, consultation with the doctor, and discussion of treatment options. We ensure thorough assessment while respecting your time.",
        },
        {
          id: "proc3",
          question: "Do you perform eye surgeries?",
          answer:
            "Yes, we perform various eye surgeries including cataract surgery, glaucoma procedures, and other sight-restoring operations. Our surgical services are provided by board-certified ophthalmologists using modern techniques and equipment.",
        },
        {
          id: "proc4",
          question: "Is the dilation necessary during eye exams?",
          answer:
            "Dilation is often necessary for a comprehensive eye exam as it allows our doctors to thoroughly examine the retina and optic nerve. It helps detect conditions like diabetes, high blood pressure, macular degeneration, and retinal detachments. The effects typically last 4-6 hours.",
        },
      ],
    },
    {
      id: "glasses",
      title: "Eyeglasses & Vision Correction",
      icon: <Glasses className="w-5 h-5" />,
      questions: [
        {
          id: "glass1",
          question: "How long does it take to get prescription glasses?",
          answer:
            "Typically, prescription glasses are ready within 1-2 weeks after your eye exam. This allows time for lens customization and quality assurance. In some cases, we may have ready-made options available sooner for basic prescriptions.",
        },
        {
          id: "glass2",
          question: "Do you provide free eyeglasses?",
          answer:
            "Yes, we provide free prescription eyeglasses to those in need through our charitable programs. The availability may depend on current inventory and specific prescription requirements. We work to ensure everyone who needs glasses can receive them.",
        },
        {
          id: "glass3",
          question: "What types of lenses are available?",
          answer:
            "We offer various lens types including single vision, bifocals, trifocals, and progressive lenses. We also provide options for anti-reflective coating, UV protection, photochromic (transition) lenses, and impact-resistant materials for safety.",
        },
        {
          id: "glass4",
          question: "Can I get replacement glasses if mine break?",
          answer:
            "Yes, we can provide replacement glasses. Please bring your broken glasses to our office, and we will assess the damage. If you have a current prescription, we can make new glasses. We also offer repair services when possible.",
        },
      ],
    },
    {
      id: "general",
      title: "General Eye Care Questions",
      icon: <Eye className="w-5 h-5" />,
      questions: [
        {
          id: "gen1",
          question: "How often should I have an eye exam?",
          answer:
            "Adults should have comprehensive eye exams every 1-2 years, or more frequently if you have existing eye conditions, diabetes, high blood pressure, or a family history of eye disease. Children should have their first eye exam at 6 months, again at age 3, and before starting school.",
        },
        {
          id: "gen2",
          question: "What are the symptoms that indicate I need an eye exam?",
          answer:
            "Common symptoms include blurred vision, frequent headaches, eye strain, difficulty seeing at night, double vision, seeing halos around lights, dry or itchy eyes, floaters or flashes of light, and any sudden vision changes. If you experience any of these, schedule an exam.",
        },
        {
          id: "gen3",
          question: "Are your services really free?",
          answer:
            "Yes, all our services including comprehensive eye exams, prescription glasses, eye medications, and surgeries are provided completely free of charge. We are funded through donations, grants, and the support of volunteers to ensure finances are never a barrier to eye care.",
        },
        {
          id: "gen4",
          question: "Do I need a referral to make an appointment?",
          answer:
            "No, you do not need a referral to schedule an appointment with us. You can book directly through our website, by phone, or by visiting our office. We welcome both scheduled appointments and walk-ins based on availability.",
        },
      ],
    },
    {
      id: "cost",
      title: "Cost & Insurance Questions",
      icon: <Heart className="w-5 h-5" />,
      questions: [
        {
          id: "cost1",
          question: "Is there any cost for your services?",
          answer:
            "No, all our services are provided completely free of charge. This includes eye examinations, diagnostic tests, prescription glasses, medications, and surgical procedures. We believe financial constraints should never prevent anyone from receiving quality eye care.",
        },
        {
          id: "cost2",
          question: "Do you accept insurance?",
          answer:
            "While we provide services free of charge regardless of insurance status, we can work with various insurance providers if you have coverage. Our team can help you understand your benefits and assist with any insurance paperwork if applicable.",
        },
        {
          id: "cost3",
          question:
            "What if I need specialized treatment not offered at your clinic?",
          answer:
            "If you require specialized care beyond our scope, we will refer you to appropriate specialists and can help coordinate your care. We maintain partnerships with various eye care facilities and specialists to ensure you receive the best possible treatment.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Common Questions
        </h1>
        <div className="w-20 h-1 bg-green-600 mb-4"></div>
        <p className="text-xl text-gray-600">
          Find answers to frequently asked questions about our services,
          procedures, and eye care in general.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
          <div className="text-sm text-gray-600">Free Services</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">1.5-2</div>
          <div className="text-sm text-gray-600">Hours per Visit</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">0</div>
          <div className="text-sm text-gray-600">Referral Needed</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
          <div className="text-sm text-gray-600">Support Available</div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-6">
        {faqCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Category Header */}
            <button
              onClick={() =>
                setOpenCategory(openCategory === category.id ? "" : category.id)
              }
              className="w-full flex items-center justify-between p-6 text-left hover:bg-green-50 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-green-800">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {category.questions.length} questions
                  </p>
                </div>
              </div>
              {openCategory === category.id ? (
                <ChevronUp className="w-5 h-5 text-green-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-green-600" />
              )}
            </button>

            {/* Category Questions */}
            {openCategory === category.id && (
              <div className="border-t border-gray-200">
                {category.questions.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition duration-300"
                    >
                      <span className="font-medium text-gray-800 pr-4">
                        {item.question}
                      </span>
                      {openItems[item.id] ? (
                        <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                    </button>
                    {openItems[item.id] && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Our friendly team is here to help with any questions you may have
          about eye care, our services, or scheduling an appointment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
            Contact Us Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300">
            Call: 0240553897
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
