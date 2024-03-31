import React from 'react'
import './Footer.css'
import instagram_icon from '../images/instagram_icon.png'
import twitter_icon from '../images/twitter_icon.png'
import email_icon from '../images/email_icon.png'
import linked_icon from '../images/linkedin_icon.png'
import github_icon from '../images/github_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
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
      <p>Developers</p>
      <div>
        <p>Imanishimwe Adolphe</p>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
              <a href="https://www.instagram.com/adolph_07/" target="_blank" rel="noreferrer"><img src={instagram_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="https://twitter.com/iadolphe007" target="_blank" rel="noreferrer"><img src={twitter_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="mailto:iadolphe007@gmail.com" target="_blank" rel="noreferrer"><img src={email_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="https://www.linkedin.com/in/imanishimwe-adolphe-b14623250/" target="_blank" rel="noreferrer"><img src={linked_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="https://github.com/Iadolphe007" target="_blank" rel="noreferrer"><img src={github_icon} alt="" /></a>
          </div>
        </div>
      </div>
      <div>
        <p>Mutaganda Elysee</p>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
              <a href="https://www.instagram.com/mutagandaelysee?igsh=eW90d2dnMHR5djF1" target="_blank" rel="noreferrer"><img src={instagram_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="https://x.com/MutagandaElysee?t=f34YZEq-6EJCn0alFEmwag&s=09" target="_blank" rel="noreferrer"><img src={twitter_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="mailto:mutagandaelysee2@gmail.com" target="_blank" rel="noreferrer"><img src={email_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="https://www.linkedin.com/in/mutagandaelysee2/" target="_blank" rel="noreferrer"><img src={linked_icon} alt="" /></a>
          </div>
          <div className="footer-icon-container">
              <a href="https://github.com/M-Elysee" target="_blank" rel="noreferrer"><img src={github_icon} alt="" /></a>
          </div>
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
