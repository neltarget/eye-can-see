// // src/components/About.jsx

// export default function About() {
//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div>
//           <h2 className="text-3xl font-bold mb-4 text-blue-700">
//             About Sight Givers Eye Clinic
//           </h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Sight Givers Eye Clinic is a trusted eye care facility in Ho, Ghana,
//             dedicated to providing quality and affordable services to patients
//             of all ages. With modern equipment and a commitment to excellence,
//             we ensure accurate diagnoses and personalized treatment.
//           </p>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Our clinic is led by{" "}
//             <span className="font-semibold">Dr. Light</span>, a
//             highly experienced optometrist passionate about improving vision and
//             enhancing lives. Patients commend the clinic for its
//             professionalism, warm hospitality, and outstanding care.
//           </p>
//           <p className="text-gray-700 leading-relaxed">
//             Beyond eye tests and treatment, we also provide a range of
//             eyeglasses and contact lenses tailored to your style, comfort, and
//             budget — helping you see clearly and confidently every day.
//           </p>
//         </div>

//         {/* Image / Illustration */}
//         <div className="flex justify-center">
//           <img
//             src="../assets/image/dr-light.png"
//             alt="Eye care at Sight Givers"
//             className="rounded-2xl shadow-lg max-w-full h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import doctorImage from '../assets/images/dr-light.png'
export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Doctor Image */}
        <div className="flex flex-col justify-center">
          <img
            src={doctorImage}
            alt="Dr. Light - Sight Givers Eye Clinic"
            className="rounded-2xl shadow-lg max-w-sm w-full h-auto size-30"
          />
          {/* Quick Info / Highlights */}
          <ul className="space-y-2 text-gray-700 mt-3">
            <li>
              👨‍⚕️ <strong>Specialty:</strong> Ophthalmologist & General Optometry
            </li>
            <li>
              🏥 <strong>Experience:</strong> Years of dedicated service in Ho,
              Ghana.
            </li>
            <li>
              📚 <strong>Approach:</strong> Patient-centered, professional, and
              compassionate.
            </li>
            <li>
              👓 <strong>Services:</strong> Eye exams, Eye surgery,
              prescriptions, glasses, and contact lenses.
            </li>
          </ul>
        </div>

        {/* Doctor Bio */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Meet Dr. Light
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr. Light is the lead ophthalmologist and founder of{" "}
            <strong>Sight Givers Eye Clinic</strong>. With years of clinical
            experience and a deep passion for improving vision, he has dedicated
            his career to helping patients in Ho and beyond enjoy healthier eyes
            and clearer sight.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Known for his{" "}
            <span className="font-semibold">
              professionalism, humility, and patient-first approach
            </span>
            , Dr. Light takes the time to understand each patient’s needs. His
            warm personality and attention to detail have earned him the trust
            of hundreds of families across the region.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Beyond eye testing and treatment, he ensures patients are well
            educated about their eye health and provides guidance on choosing
            the right lenses, glasses, and preventive care. His mission is
            simple:{" "}
            <em>
              to give every patient the gift of excellent vision and confidence
              in daily life
            </em>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
