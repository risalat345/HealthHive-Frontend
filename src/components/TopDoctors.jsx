import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const TopDoctors = () => {
  const {doctors}=useContext(AppContext)
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center gap-2 text-gray-600 w-full mx-auto'>
      <h1 className='text-3xl font-bold'>Top Doctors to Book</h1>
      <p className='text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div  className='flex flex-wrap gap-9 ml-7 md:ml-14 pt-5 gap-y-6'>
        {doctors.slice(0,10).map((item,index)=>{
           return <div onClick={()=>{navigate(`/appointments/${item._id}`),scrollTo(0,0)}} key={index} className=' w-[130px] flex-col p-3 border border-blue-200 rounded-lg text-[10px] bg-white text-gray-600 flex justify-center hover:translate-y-[-10px] transition-all duration-500 items-center'>
          <img src={item.image} alt="" />
          <div className='flex gap-2 items-center'>
            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
            <p>Availabel</p>
          </div>
          <p className='font-bold'>{item.name}</p>
          <p>{item.speciality}</p>
           </div>
        })}
      </div>
      <button onClick={()=>{navigate("/doctor");scrollTo(0,0)}} className='bg-gray-200 text-primary px-10 rounded-full py-2'>More</button>
    </div>
  )
}

export default TopDoctors
