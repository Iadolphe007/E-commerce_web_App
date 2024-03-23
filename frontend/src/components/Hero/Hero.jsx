import React from 'react'
import './Hero.css'
import arrow_icon from '../images/arrow_icon.png'
import hero_image from '../images/hero_image.png'
 
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src="" alt="" />
            </div>
            <p>Collection</p>
            <p>for everyone</p>
        </div> 
        <div className="hero-latest-btn">
            <div>Top sales</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} alt="" />
    </div>
  )
}

export default Hero
