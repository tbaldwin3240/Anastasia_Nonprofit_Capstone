import React from 'react'
import HeroSection from '.'

import FrontCard from '../FrontCard'
import Navbar from "../Navbar/Navbar"
import FormSignup from '../FormSignup'
import Footer from '../Footer/Footer'
import Form from '../Form'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';






const Home = () => {

  return (
    <div>



    <Router>
      
        <div  className='App'>
          <Navbar/>
          <Footer/>
        </div>
        <Routes>
          <Route path ="/" element={<HeroSection/>}>
          </Route> 
          <Route path ="/services" element={<Holder/>}>
          </Route> 
          <Route path ="/contactus" element={<Contact/>}>
          </Route> 
          <Route path ="/about" element={<About/>}>
          </Route>
          <Route path ="/signup" element={<Form/>}>
          </Route>

          <Route path ="*" element={<HeroSection/>}>
          </Route>
      </Routes>
    </Router>

    </div>
  )
}

export default Home