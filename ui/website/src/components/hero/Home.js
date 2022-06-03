import React from 'react'
import HeroSection from '.'

import FrontCard from '../FrontCard'
import Navbar from "../Navbar/Navbar"
import FormSignup from '../FormSignup'
import Footer from '../Footer/Footer'
import Form from '../Form'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../About'






const Home = () => {

  return (
    <div>



    <Router>
      
        <div  className='App'>
          <Navbar />
          <About/>
          <Footer/>
        </div>
        <Routes>
          <Route path ="/" element={<HeroSection/>}>
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