import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // State for filter visibility on mobile

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
    <div>
      <p className="text-gray-600 my-2 text-center text-2xl">
        Browse through the doctors specialist
      </p>

      {/* Mobile Filter Button */}
      <div className="flex flex-col md:hidden my-4 px-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-blue-500 text-white p-2 rounded-lg shadow-md mb-4"
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
        {showFilter && (
          <div className="flex flex-wrap gap-2">
            {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((special, index) => (
              <p
                key={index}
                onClick={() => {
                  setShowFilter(false); // Close filter on selection
                  speciality === special ? navigate('/doctor') : navigate(`/doctor/${special}`);
                }}
                className={`border border-gray-500 px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm rounded-lg ${
                  speciality === special ? 'bg-gray-200 text-black' : ''
                }`}
              >
                {special}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="hidden md:flex flex-col gap-4 my-10 text-gray-600 w-1/4 h-screen sticky top-0 overflow-hidden">
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((special, index) => (
            <p
              key={index}
              onClick={() => {
                speciality === special ? navigate('/doctor') : navigate(`/doctor/${special}`);
              }}
              className={`border border-gray-500 p-2 hover:bg-gray-200 cursor-pointer text-sm rounded-lg ${
                speciality === special ? 'bg-gray-200 text-black' : ''
              }`}
            >
              {special}
            </p>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex flex-wrap w-full md:w-3/4 m-10 overflow-hidden">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointments/${item._id}`);
              }}
              key={index}
              className="w-[130px] h-fit m-3 flex-col p-3 border border-blue-200 rounded-lg text-[10px] bg-white text-gray-600 flex justify-center hover:translate-y-[-10px] transition-all duration-500 items-center"
            >
              <img src={item.image} alt="" />
              <div className="flex gap-2 items-center">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="font-bold">{item.name}</p>
              <p>{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
