// pages/patient-resources/DownloadableForms.jsx
import React from "react";
import {
  Download,
  FileText,
  ClipboardList,
  Shield,
  UserCheck,
  Calendar,
} from "lucide-react";

const DownloadableForms = () => {
  const forms = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Patient Registration Form",
      description:
        "Complete this form to register as a new patient with our eye care services",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Consent for Treatment",
      description:
        "Authorization for eye examinations, procedures, and treatment plans",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Medical Records Release",
      description:
        "Request to transfer your eye care records to or from another provider",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Medical History Update",
      description:
        "Update your medical history, medications, and insurance information",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Cancellation",
      description: "Form to cancel or reschedule your eye care appointment",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Privacy Acknowledgement",
      description: "Acknowledgement of receipt of privacy practices notice",
    },
  ];

  const downloadInstructions = [
    "Click the download button for your desired form",
    "Print the form on standard letter-size paper",
    "Complete all sections thoroughly and accurately",
    "Bring the completed form to your appointment",
    "For assistance, contact our office at 0240553897",
  ];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Downloadable Forms
        </h1>
        <div className="w-20 h-1 bg-green-600 mb-4"></div>
        <p className="text-xl text-gray-600">
          Save time at your appointment by downloading and completing these
          forms in advance.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-3">
          Before You Download
        </h2>
        <ul className="space-y-2">
          {downloadInstructions.map((instruction, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 text-blue-700"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
              <span>{instruction}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Forms Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Available Forms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {form.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">
                      {form.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6">{form.description}</p>

              <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                <Download className="w-4 h-4" />
                <span>Download Form</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Form Submission Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-green-700 mb-2">
            Bring to Appointment
          </h3>
          <p className="text-gray-600 text-sm">
            Print and complete forms, then bring them to your scheduled visit
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-blue-700 mb-2">Email in Advance</h3>
          <p className="text-gray-600 text-sm">
            Scan completed forms and email to Sightgivers2020@gmail.com
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
            <ClipboardList className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-orange-700 mb-2">
            Complete at Office
          </h3>
          <p className="text-gray-600 text-sm">
            Arrive 30 minutes early to complete forms at our office
          </p>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-cream-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Need Help With Forms?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team is here to assist you with any questions about completing
          these forms. Don't hesitate to reach out for help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Contact Our Office
          </button>
          <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
            Request Assistance
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadableForms;
