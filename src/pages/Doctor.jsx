import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false); // State to toggle filter visibility

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="p-4">
      <p className="text-gray-600 my-2 text-center text-2xl">
        Browse through the doctors specialist
      </p>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => setIsFilterVisible((prev) => !prev)}
      >
        {isFilterVisible ? 'Close Filter' : 'Filter'}
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        {isFilterVisible && (
          <div className="flex flex-col gap-4 my-6 text-gray-600 md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
            {[
              'General physician',
              'Gynecologist',
              'Dermatologist',
              'Pediatricians',
              'Neurologist',
              'Gastroenterologist',
            ].map((specialtyName) => (
              <p
                key={specialtyName}
                onClick={() =>
                  speciality === specialtyName
                    ? navigate('/doctor')
                    : navigate(`/doctor/${specialtyName}`)
                }
                className={`border border-gray-500 p-2 hover:bg-gray-200 cursor-pointer text-sm rounded-lg ${
                  speciality === specialtyName ? 'bg-gray-200 text-black' : ''
                }`}
              >
                {specialtyName}
              </p>
            ))}
          </div>
        )}

        {/* Right Content */}
        <div className={`flex flex-wrap justify-center gap-4 ${isFilterVisible ? 'md:w-3/4' : 'w-full'}`}>
          {filterDoc.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointments/${item._id}`)}
              className="w-full sm:w-[150px] lg:w-[200px] p-4 border border-blue-200 rounded-lg text-sm bg-white text-gray-600 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer"
            >
              <div className="w-full h-fit overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.name || 'Doctor'}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 items-center justify-center my-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="font-bold text-center">{item.name}</p>
              <p className="text-center">{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
