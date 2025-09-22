import React from 'react'


  function Doctors() {
      const DOCTOR = {
        id: "dr-adeso",
        name: "Dr. Adeso",
        specialty: "Ophthalmologist",
      };
      return (
        <div className="p-6 bg-white rounded-lg shadow-sm max-w-md mx-auto text-center">
          <div className="h-24 w-24 rounded-full bg-slate-200 mx-auto mb-3"></div>
          <h2 className="text-xl font-semibold">{DOCTOR.name}</h2>
          <p className="text-sm text-slate-500">{DOCTOR.specialty}</p>
          <p className="mt-2 text-slate-600">
            Dedicated to providing the best eye care with compassion and
            professionalism.
          </p>
        </div>
      );
}

export default Doctors