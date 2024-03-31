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
        <h1>Developers</h1>
        <p>Hello there! 👋 We're Imanishimwe Adolphe and Mutaganda Elysee, a dynamic duo of full-stack developers passionate about crafting exceptional digital experiences.</p>
        <div className='developer'>
            <h2>About Imanishimwe Adolphe</h2>
            <p>I'm Imanishimwe Adolphe, a dedicated full-stack developer with a keen eye for frontend design and a knack for backend architecture. With a strong foundation in JavaScript, HTML, and CSS, I specialize in bringing creative ideas to life through intuitive user interfaces and robust backend systems.</p>
            <div className="socials">
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
        <div className='developer'>
            <h2>About Mutaganda Elysee</h2>
            <p>I'm Mutaganda Elysee, a talented full-stack developer with expertise in frontend development and backend integration. With a passion for problem-solving and a meticulous attention to detail, I brought invaluable skills to our projects, ensuring they meet the highest standards of functionality and performance.</p>
            <div className="socials">
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
        <h2>Our Collaboration</h2>
        <p>Together, we collaborated on this ecommerce portfolio project, leveraging our combined skills and expertise to create a seamless and visually stunning online shopping experience. we worked hand in hand to deliver a product that not only showcases our technical abilities but also reflects our dedication to excellence.</p>
        <p>We're excited to share our project with you and invite you to explore the innovative features and meticulous craftsmanship that went into its creation. Thank you for visiting, and feel free to reach out if you have any questions or feedback!</p>
        <div>
            <h4>get in touch with our socials or contact via email</h4>
        </div>
    </div>
  )
}

export default ContactPage
