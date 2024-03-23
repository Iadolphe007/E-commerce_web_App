import React from 'react'
import './Hero.css'
import arrow_icon from '../images/arrow_icon.png'
import hero_image from '../images/hero_image.png'
 
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
            <p>ELEVATE</p>
            <p>SHOPPING</p>
            <p>XPerience</p>
        </div> 
        <div className="hero-latest-btn">
            <div>Explore More</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} alt="" />
    </div>
  )
}

export default Hero
