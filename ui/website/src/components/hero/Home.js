import React from 'react'
import HeroSection from '.'
import FormSignup from '../FormSignup'
import Navbar from "../Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Home = () => {

  return (
    <div>
    <Router>
      
        <div className="App">
          <Navbar/>
        </div>
        <Routes>
          <Route path ="/" element={<HeroSection/>}>
          </Route>
          <Route path ="/signup" element={<FormSignup/>}>
          </Route>
          <Route path ="*" element={<HeroSection/>}>
          </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default Home