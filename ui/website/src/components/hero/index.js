import React, { useState } from 'react'
import Video from './video/bg-hero.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElement'
const HeroSection = () => { 
    const [hover, setHover] = useState(false) 
    const onHover = () => {
        setHover(!hover) 
    }
  return (
    <HeroContainer> 
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>100% Online Culinary Education</HeroH1>
            <HeroP>
                Sign Up for a Class Today 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
