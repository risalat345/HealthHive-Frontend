import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='mt-5'>
       <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10'>
              {/* left */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-14'>
              <h1 className='md:text-2xl text-md text-white font-bold'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
      
      <button onClick={()=>{navigate("/login");scrollTo(0,0)}} className='flex justify-center items-center gap-2 px-8 py-2 bg-white text-gray-600 rounded-full hover:scale-105 transition-all duration-300'>
          Create Account
      </button>
            </div>
            {/* right */}
            <div className='md:w-1/3 w-1/2 relative'>
      <img className=' absolute bottom-0 md:left-20 left-44' src={assets.appointment_img} alt="" />
            </div>
          </div>
    </div>
  )
}

export default Banner
