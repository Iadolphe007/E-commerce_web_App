import React from 'react'
import './Footer.css'
import instagram_icon from '../images/instagram_icon.png'
import twitter_icon from '../images/twitter_icon.png'
import email_icon from '../images/email_icon.png'
import linked_icon from '../images/linkedin_icon.png'
import github_icon from '../images/github_icon.png'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className="footer-logo">
        <img src={logo} alt="" />
        <p>E-market</p>
      </div> */}
      <ul className='footer-links'>
        <li>Products</li>
        <li>Refund Policy</li>
        <li>Track your order</li>
        <li>Feedback</li>
        <li> privacy Policy</li>
        <li>Terms and conditions</li>
      </ul>
      <div className='newsletter'>
        <h1>Subscribe with Email</h1>
        <div>
            <input type="email" placeholder='your email adress' />
            <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <a href="#" target="_blank"><img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icon-container">
            <a href="https://twitter.com/iadolphe007" target="_blank"><img src={twitter_icon} alt="" /></a>
        </div>
        <div className="footer-icon-container">
            <a href="#" target="_blank"><img src={email_icon} alt="" /></a>
        </div>
        <div className="footer-icon-container">
            <a href="https://www.linkedin.com/in/imanishimwe-adolphe-b14623250/" target="_blank"><img src={linked_icon} alt="" /></a>
        </div>
        <div className="footer-icon-container">
            <a href="https://github.com/Iadolphe007" target="_blank"><img src={github_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
            <hr />
            <p>©2024 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer
