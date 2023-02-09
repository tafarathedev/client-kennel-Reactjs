import React from 'react'
import Hero from '../Component/Hero'
import About from '../Component/About'
import Services from "../Component/Services"
import Contact from "../Component/Contact"
import Testimonial from "../Component/Testimonial"   

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Services/>
      <Contact/>
      <Testimonial/>
    </>
  )
}

export default Home