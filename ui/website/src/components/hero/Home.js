import React from 'react'
import HeroSection from '.'
import FormSignup from '../FormSignup'
import Navbar from "../Navbar/Navbar"


const Home = () => {

  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <FormSignup/>
    </div>
  )
}

export default Home