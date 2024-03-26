import React from 'react'
import contact_banner from '../images/contact_banner.png'
import './ContactPage.css'
import instagram_icon from '../images/instagram_icon.png'
import twitter_icon from '../images/twitter_icon.png'
import email_icon from '../images/email_icon.png'
import linked_icon from '../images/linkedin_icon.png'
import github_icon from '../images/github_icon.png'

const ContactPage = () => {
  return (
    <div className='contactPage'>
        <img src={contact_banner} alt="" />
        <div className="socials">
            <div className="footer-icon-container">
                <a href={instagram_icon} target="_blank" rel="noreferrer"><img src={instagram_icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
                <a href={twitter_icon} target="_blank" rel="noreferrer"><img src={twitter_icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
                <a href="https://google.com" target="_blank" rel="noreferrer"><img src={email_icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
                <a href="https://www.linkedin.com/in/imanishimwe-adolphe-b14623250/" target="_blank" rel="noreferrer"><img src={linked_icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
                <a href="https://github.com/Iadolphe007" target="_blank" rel="noreferrer"><img src={github_icon} alt="" /></a>
            </div>
            </div>
        <div>
            <h4>get in touch with our socials or use you email</h4>
        </div>
    </div>
  )
}

export default ContactPage
