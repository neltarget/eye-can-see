// pages/who-we-are/MeetTheTeam.jsx
import React from "react";
import { Award, Stethoscope, Users, Phone } from "lucide-react";

const MeetTheTeam = () => {
  // Mock team data - replace with actual team members
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Light Amedzekor",
      position: "Founder & CEO",
      specialty: "Social Entrepreneur",
      bio: "Visionary leader dedicated to eliminating preventable blindness worldwide.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      position: "Chief Ophthalmologist",
      specialty: "Cataract Surgery Specialist",
      bio: "Board-certified ophthalmologist with 15+ years of experience in vision restoration.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      position: "Head Optometrist",
      specialty: "Pediatric Eye Care",
      bio: "Specialized in children's vision and school screening programs.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Program Director",
      specialty: "Community Outreach",
      bio: "Coordinates our global outreach programs and volunteer initiatives.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "Dr. James Okafor",
      position: "Surgical Director",
      specialty: "Glaucoma Specialist",
      bio: "Leads our surgical teams in sight-restoring procedures across Africa.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Maria Gonzalez",
      position: "Volunteer Coordinator",
      specialty: "Training & Development",
      bio: "Manages our international volunteer program and training initiatives.",
      image: "/api/placeholder/300/300",
    },
  ];

  const teamStats = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      label: "Medical Professionals",
      value: "50+",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Years Combined Experience",
      value: "200+",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Volunteers Worldwide",
      value: "500+",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Communities Served",
      value: "100+",
    },
  ];

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Meet Our Team
        </h1>
        <div className="w-20 h-1 bg-green-600"></div>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl">
          Get to know our skilled and compassionate eye care professionals from
          board-certified ophthalmologists, optometrists, opticians to friendly
          support staff who are dedicating their lives to help people see.
        </p>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {teamStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <div className="text-green-600 flex justify-center mb-3">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-green-700 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Our Leadership & Medical Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Team Member Image */}
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <p className="text-sm opacity-90">Team Member Photo</p>
                </div>
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-3">{member.specialty}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.bio}
                </p>

                <button className="w-full mt-4 bg-green-50 text-green-700 py-2 rounded-lg font-semibold text-sm hover:bg-green-100 transition duration-300">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          We're always looking for passionate individuals to join our team of
          dedicated professionals making a difference in global eye care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
            View Open Positions
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300">
            Volunteer With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
