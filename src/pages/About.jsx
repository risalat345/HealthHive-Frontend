import React from 'react'
import about from "../assets/assets_frontend/about_image.png"
const About = () => {
  return (
    <div>
      <p className='text-2xl text-center my-5'>About <span className='font-bold '>Us</span></p>
  <div className='flex flex-col md:flex-row p-3 gap-3'>
    <div><img src={about} alt="" /></div>
    <div className='text-xs flex flex-col  gap-2'>
      <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>

<p> Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>

<p className='font-bold'>Our Vision</p>

<p> Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
    </div>
  </div>
  <p className='text-2xl my-6'>Why <span className='font-bold'>Choose Us</span></p>
  <div className='flex'>
    <div className='border border-gray-600 w-3/6 p-5 md:p-10'>
      <p className='font-bold mb-5'>Efficiency:</p>
      <p className='lex flex-wrap'>
      Streamlined appointment scheduling that fits into your busy lifestyle.
      </p>
    </div>
    <div className='border border-gray-600 w-3/6 p-5 md:p-10'>
      <p className='font-bold mb-5'>Convenience:</p>
      <p className='flex flex-wrap'>
      Access to a network of trusted healthcare professionals in your area.
      </p>
    </div>
  </div>
   </div>
  )
}

export default About
