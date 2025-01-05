import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4">
      <p className="my-3 font-bold text-2xl text-center">My Appointments</p>
      <div className="space-y-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div 
            className="flex flex-wrap items-center justify-between gap-4 p-4 border-t border-b border-gray-500"
            key={index}
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img 
                className="w-32 h-32 object-cover rounded-md"
                src={item.image}
                alt="Doctor" 
              />
            </div>
            
            {/* Doctor Details */}
            <div className="flex-1 text-sm md:text-base space-y-1">
              <p className="font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="mt-2 font-semibold">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p>
                <span className="font-semibold">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <button 
                className="w-full sm:w-auto px-4 py-2 text-sm hover:bg-primary transition-all duration-300 hover:text-white text-black border border-gray-400 rounded-lg"
              >
                Pay Online
              </button>
              <button 
                className="w-full sm:w-auto px-4 py-2 text-sm border hover:bg-red-500 hover:text-white transition-all duration-300 border-gray-400 rounded-lg"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
