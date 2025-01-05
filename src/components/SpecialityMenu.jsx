import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div className='flex flex-col justify-center gap-2 py-4 items-center'>
      <h1 className='font-medium text-2xl'>Find By Speciality</h1>
      <p className='md:w-1/2 text-sm text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    <div className='flex flex-wrap pt-5 justify-center items-center gap-3'>
    {specialityData.map((item, index) => { return <Link onClick={()=>scrollTo(0,0)} className='flex flex-col justify-center items-center text-xs cursor-pointer  flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctor/${item.speciality}`}>
      <img className='w-16 mb-2' src={item.image} alt="" />
      <p>{item.speciality}</p>
    </Link>
})}

    </div>
    </div>
  )
}

export default SpecialityMenu
