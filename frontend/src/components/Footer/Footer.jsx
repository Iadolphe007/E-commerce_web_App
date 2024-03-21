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
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>E-market</p>
      </div>
      <ul className='footer-links'>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={twitter_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={email_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={linked_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={github_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer
