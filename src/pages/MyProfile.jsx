import React, { useState } from "react";
import profile from "../assets/assets_frontend/profile_pic.png";

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: "Edward Vincent",
    image: profile,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    birthday: "20 July, 2024",
  });

  const [isEdit, setisEdit] = useState(false);

  const handleAddressChange = (field, value) => {
    setuserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        />
        <div className="text-center md:text-left">
          {isEdit ? (
            <input
              value={userData.name}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-full md:w-auto"
            />
          ) : (
            <p className="text-xl md:text-2xl font-bold">{userData.name}</p>
          )}
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-3">
        <p className="border-b border-gray-500 w-fit text-lg font-semibold">
          Contact Information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
          <p className="font-medium">Email:</p>
          <p className="col-span-2">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              value={userData.phone}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              type="text"
              className="border border-gray-300 rounded px-2 py-1 col-span-2"
            />
          ) : (
            <p className="col-span-2">{userData.phone}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
          <p className="font-medium">Address:</p>
          <div className="col-span-2">
            {isEdit ? (
              <>
                <input
                  value={userData.address.line1}
                  onChange={(e) => handleAddressChange("line1", e.target.value)}
                  type="text"
                  className="border rounded px-2 py-1 mb-2 w-full"
                  placeholder="Address Line 1"
                />
                <input
                  value={userData.address.line2}
                  onChange={(e) => handleAddressChange("line2", e.target.value)}
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                  placeholder="Address Line 2"
                />
              </>
            ) : (
              <>
                <p>{userData.address.line1}</p>
                <p>{userData.address.line2}</p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="border-b border-gray-500 w-fit text-lg font-semibold">
            Basic Information
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setuserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="col-span-2 border rounded px-2 py-1"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="col-span-2">{userData.gender}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                value={userData.birthday}
                onChange={(e) =>
                  setuserData((prev) => ({
                    ...prev,
                    birthday: e.target.value,
                  }))
                }
                type="date"
                className="col-span-2 border rounded px-2 py-1"
              />
            ) : (
              <p className="col-span-2">{userData.birthday}</p>
            )}
          </div>

          <div className="flex justify-center md:justify-start gap-2 my-5">
            {isEdit ? (
              <button
                className="px-4 py-2 border border-black rounded-lg transition-all hover:text-white hover:bg-black"
                onClick={() => setisEdit(false)}
              >
                Save Information
              </button>
            ) : (
              <button
                className="px-4 py-2 transition-all border border-black rounded-lg hover:text-white hover:bg-black"
                onClick={() => setisEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
