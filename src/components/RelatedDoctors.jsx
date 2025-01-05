import React, {useState,useEffect, useContext } from 'react'

import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const RelatedDoctors = ({speciality,docId}) => {
  const {doctors}=useContext(AppContext)
  const [relDoc, setrelDoc] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    if(doctors.length > 0 && speciality){
      const doctorsData=doctors.filter((doc)=>doc.speciality===speciality && doc._id!=docId)
    setrelDoc(doctorsData)
    }
  }, [doctors,speciality,docId])
  
  return (
    <div className='flex flex-col items-center gap-2 text-gray-600 w-full mx-auto'>
    <h1 className='text-3xl font-bold'>Related Doctors</h1>
    <p>Simply browse through our extensive list of trusted doctors.</p>
    <div  className='flex flex-wrap gap-3 pt-5 gap-y-6'>
      {relDoc.slice(0,5).map((item,index)=>{
         return <div onClick={()=>{navigate(`/appointments/${item._id}`),scrollTo}} key={index} className=' w-[130px] flex-col p-3 border border-blue-200 rounded-lg text-[10px] bg-white text-gray-600 flex justify-center hover:translate-y-[-10px] transition-all duration-500 items-center'>
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
  </div>
  )
}

export default RelatedDoctors
