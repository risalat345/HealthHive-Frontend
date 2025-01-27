import React from 'react'
import logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <div>
        <div className=' bottom-0 py-5 flex flex-col md:flex-row mt-36'>
      <div className="md:w-6/12 ">
       <div className="logo flex items-center">
        <img src={logo} alt="" />
       
            <div className="brand text-green-500 font-bold">Health<span className='text-black'>Hive</span></div>
            </div>
    <p className='text-xs ml-2 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
      <div className="md:w-3/12 text-center px-7 mt-5 flex flex-col gap-2">
      <h1 className='font-bold mb-6 text-md'>Company</h1>
      <p>Home</p>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Privacy Policy</p>
      </div>
      <div className="md:w-3/12 text-center mt-5 flex flex-col gap-2">
      <h1 className=' font-bold mb-6 text-md'>Get In Touch</h1>
      <p>+8801833264547</p>
      <p>ashrafresalat34@gmail.com</p>
      </div>
    </div>
    <hr />
    <h1 className='text-center text-gray-500 py-3'>Made By Ashraf Uddin</h1>
    </div>
    
  )
}

export default Footer
