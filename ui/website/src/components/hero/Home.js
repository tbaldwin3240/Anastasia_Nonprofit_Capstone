import React from 'react'
import HeroSection from '.'
import animatedroute from '../animatedroute'
import FrontCard from '../FrontCard'
import Navbar from "../Navbar/Navbar"
import Testimonials from '../Testimonials/Index';
import FormSignup from '../FormSignup'
import Mission from '../Testimonials/Mission.js'
import Footer from '../Footer/Footer'
import Form from '../Form'
import { BrowserRouter as Router } from 'react-router-dom';
import Holder from '../Holder';



const Home = () => {
 
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route path ="/" element={<HeroSection/>}/>

          <Route path ="/signup" element={<Form/>}/>

          <Route path ="/gallery" element={<Holder/>}/>

          <Route path ="/mission" element={<Mission/>}/>

          <Route path ="*" element={<HeroSection/>}/>

        </Routes>
       
        <Testimonials />
        <Footer/>
      </Router>
    </div>
  )
}

export default Home