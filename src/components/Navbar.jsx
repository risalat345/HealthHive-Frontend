import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { assets } from '../assets/assets_frontend/assets';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <nav className="flex items-center justify-between py-4 px-4 md:px-8 bg-white shadow-md relative">
      <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
  <button className="focus:outline-none">
    <div className="space-y-1">
      <span
        className={`block h-1 w-6 bg-black rounded transition-transform duration-300 ${
          showMenu ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span
        className={`block h-1 w-6 bg-black rounded transition-opacity duration-300 ${
          showMenu ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`block h-1 w-6 bg-black rounded transition-transform duration-300 ${
          showMenu ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </div>
  </button>
</div>

        {/* Logo and Brand */}

        <div onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-2">
          <div className="logo">
            <img src={logo} alt="Logo" className="w-8" />
          </div>
          <div className="brand text-green-500 font-bold text-lg">
            Health<span className="text-black">Hive</span>
          </div>
        </div>

        {/* Menu Toggle Button */}
        

        {/* Menu Items */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center absolute md:static w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
            showMenu ? 'top-16 left-0' : 'top-[-500px] left-0'
          } md:top-auto md:left-auto`}
        >
          <ul className='flex flex-col md:flex-row items-center md:gap-6 gap-4 py-4 md:py-0'>
    <NavLink to={"/"}>
        <li>Home</li>
      <hr className='border-none outline-none hidden h-0.5 bg-primary w-3/5 mx-auto'/>
      </NavLink>



      <NavLink to={"/doctor"}> 
        <li>All Doctors</li>
      <hr className='border-none outline-none hidden h-0.5 bg-primary w-3/5 mx-auto'/>
      </NavLink>
       <NavLink to={"/about"}>
        <li>About</li>
      <hr className='border-none outline-none hidden h-0.5 bg-primary w-3/5 mx-auto'/>
      </NavLink>
       <NavLink to={"/contact"}>
        <li>Contact</li>
      <hr className='border-none outline-none hidden h-0.5 bg-primary w-3/5 mx-auto'/>
      </NavLink>
    </ul>
        </div>

        {/* Profile / Login Section */}
        <div className=" md:flex md:ml-4">
          {token ? (
            <div className="relative flex items-center gap-2 cursor-pointer group">
              <img
                className="w-8 h-8 rounded-full"
                src={assets.profile_pic}
                alt="Profile"
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg min-w-max right-0 top-10 z-20">
                <div className="flex flex-col p-4 gap-2">
                  <p
                    onClick={() => navigate('/my-profile')}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate('/my-appointments')}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-light"
            >
              Create Account
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
