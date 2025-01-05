import React from 'react'
import contact from "../assets/assets_frontend/contact_image.png"
const Contact = () => {
  return (
    <div>
      <p className='text-2xl my-7 text-center'>Contact <span className='font-bold'>Us</span></p>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='md:w-6/12 md:ml-32'><img src={contact} alt="" /></div>
        <div className='md:w-6/12 flex flex-col gap-4'>
          <p className='font-bold'>OUR OFFICE</p>
          <p className='text-sm'>54709 Willms Station <br />
            Suite 350, Washington, USA</p>
          <p className='text-sm'>Tel: (415) 555‑0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className='font-bold'> Careers at HealthHive</p>
          <p className='text-sm'>Learn more about our teams and job openings.</p>
          <button className='px-2 py-2 hover:text-white hover:bg-black border border-black rounded-lg'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
