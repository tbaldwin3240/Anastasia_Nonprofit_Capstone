import React from 'react'
import HeroSection from '.'

import FrontCard from '../FrontCard'
import Navbar from "../Navbar/Navbar"
import Testimonials from '../Testimonials/Index';
import FormSignup from '../FormSignup'
import Footer from '../Footer/Footer'
import Form from '../Form'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';






const Home = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route path ="/" element={<HeroSection/>}>
            </Route>

            <Route path ="/signup" element={<Form/>}>
            </Route>

            <Route path ="*" element={<HeroSection/>}>
            </Route>
        </Routes>
        <Testimonials />
        <Footer/>
      </Router>
    </div>
  )
}

export default Home