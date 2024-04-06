import React from 'react'
import Navbar from '../components/others/Navbar'
import Footer from '../components/others/Footer'
import About from '../components/About/About'
import CoursesContainer from '../components/HomeComponent/CoursesContainer'


const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <About/>
      <CoursesContainer/>
    
      <Footer/>
    </>
  )
}

export default AboutUs
