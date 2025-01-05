import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  const fetchDocInfo = async () => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    let currentDayIndex = today.getDay(); // Get the current day index (0 = SUN, 1 = MON, etc.)

    // Rearrange the daysOfWeek array to start with the current day
    const orderedDaysOfWeek = [
      ...daysOfWeek.slice(currentDayIndex),
      ...daysOfWeek.slice(0, currentDayIndex),
    ];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); // Move to the next day

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Set end time to 9:00 PM

      // Start time logic
      if (i === 0) {
        if (currentDate.getHours() < 10) {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        } else {
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment by 30 minutes
      }

      setDocSlots((prev) => [
        ...prev,
        {
          day: orderedDaysOfWeek[i],
          date: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + i
          ).getDate(), // Fix date calculation
          slots: timeSlots,
        },
      ]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    if (docSlots.length > 0 && slotIndex >= 0) {
      // Automatically select the first time slot for the selected day
      setSelectedTime(docSlots[slotIndex].slots[0]?.time);
    }
  }, [docSlots, slotIndex]);

  if (!docInfo) {
    return <div>Loading...</div>; // Show a loading state until `docInfo` is available
  }

  return (
    <div className="my-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <img
            className="bg-green-500 rounded-lg"
            src={docInfo.image || 'default-image.jpg'} // Fallback to a default image if `image` is null
            alt="Appointment"
          />
        </div>
        <div className="w-full border border-gray-500 rounded-lg p-3">
          <div className="flex gap-1 items-center">
            <p className="font-bold">{docInfo.name}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"
              />
            </svg>
          </div>
          <div className="flex gap-2 items-center">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="px-3 py-1 rounded-full border border-green-400">
              {docInfo.experience}
            </button>
          </div>
          <div className="flex gap-1 items-center my-3">
            <p>About </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"
              />
            </svg>
          </div>
          <p className="text-sm">{docInfo.about}</p>
          <p className="my-3">
            Appointment Fee: <span className="font-bold">${docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slot */}
      <div>
        <p className="text-center my-5 font-bold">Booking Slot</p>
        <div className="flex gap-3 justify-center items-center">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                onClick={() => {
                  setSlotIndex(index);
                  setSelectedTime(item.slots[0]?.time); // Automatically select the first time slot for the selected day
                }}
                className={`border cursor-pointer border-gray-600 w-16 flex flex-col justify-center items-center rounded-lg text-xs p-2 hover:text-white hover:bg-black transition-all duration-500 ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`}
                key={index}
              >
                <p>{item.day}</p>
                <p className="text-center">{item.date}</p>
              </div>
            ))}
        </div>
        
        {/* Display Time Slots for Selected Day */}
        <div className="mt-5 text-center">
          {docSlots[slotIndex] && (
            <div>
              <p className="font-bold">Available Times</p>
              <ul className='flex flex-wrap gap-3'>
                {docSlots[slotIndex].slots.map((slot, index) => (
                  <li key={index} className="text-sm ">
                    <p
                      onClick={() => setSelectedTime(slot.time)}
                      className={`text-sm rounded-lg cursor-pointer p-2 border hover:text-white hover:bg-black transition-all duration-500 border-gray-600 ${
                        selectedTime === slot.time ? "bg-primary text-white" : "bg-gray-200"
                      }`}
                    >
                      {slot.time}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
  <button className="bg-primary px-10 py-2 text-white rounded-lg my-5 hover:text-[17px] transition-all">
    Book An Appointment
  </button>
</div>
<RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    </div>
  );
};

export default Appointments;
