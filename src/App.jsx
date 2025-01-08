import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Doctor from "../src/pages/Doctor"
import Contact from "../src/pages/Contact"
import Login from "../src/pages/Login"
import MyAppointments from "../src/pages/MyAppointments"
import MyProfile from "../src/pages/MyProfile"
import Appointments from "../src/pages/Appointments"
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/HealthHive-Frontend' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/doctor/:speciality' element={<Doctor/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointments/:docId' element={<Appointments/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
