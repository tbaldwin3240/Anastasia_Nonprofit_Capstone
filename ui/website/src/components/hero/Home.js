import React from 'react'
import HeroSection from '.'
import FrontCard from '../FrontCard'
import Navbar from "../Navbar/Navbar"
import FormSignup from '../FormSignup'
import Footer from '../Footer/Footer'




const Home = () => {

  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <FormSignup/>
      <FrontCard/>  
    <Footer/>
    </div>
  )
}

export default Home