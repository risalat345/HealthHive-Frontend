import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10'>
        {/* left */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 pb-64 md:py-20'>
        <h1 className='text-2xl text-white font-bold'>Boook Appointments <br />With Trusted Doctor</h1>
<div className='flex justify-center items-center gap-2'>
    <img className='w-20' src={assets.group_profiles} alt="" />
<p className='text-[10px] text-white'>Simply browse through our extensive list of trusted doctors, 
schedule your appointment hassle-free.</p>
</div>
<a className='flex justify-center items-center gap-2 px-3 py-2 bg-white text-gray-600 rounded-full hover:scale-105 transition-all duration-300' href='#speciality'>
    Boook Appointments <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
</a>
      </div>
      {/* right */}
      <div className='md:w-1/2 relative'>
<img className=' absolute bottom-0' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
