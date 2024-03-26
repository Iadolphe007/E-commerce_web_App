import React from 'react'
import './Aboutpage.css'
import './Aboutpage.css';
import about_banner from '../images/about_banner.png'

const Aboutpage = () => {
  return (
    <div className='about-page'>
        <div>
            <img src={about_banner} alt="" />
            <p>
                 <span>Welcome, your go-to destination for all your shopping needs!</span>
            </p>
            <div className="welcome">
                <p>
                    we are committed to providing you with a seamless and enjoyable online shopping experience. Whether you're searching for the latest fashion trends, tech gadgets, home essentials, or unique gifts, we've got you covered.
                </p>
            </div>
            <hr />
            <div className="mission">
                <h2>Our Mission</h2>
                <p>
                Our mission is to bring you the best selection of products from around the world, all in one convenient place. We handpick each item in our store, focusing on quality, value, and style to ensure that you receive only the best products.
                </p>
            </div>
            <hr />
            <div className="chooseuse">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>
                        <span>Wide Range of Products:</span> From fashion and electronics to home decor and wellness products, we offer a diverse range of items to suit every lifestyle and preference.
                    </li>
                    <li><span>Quality Assurance:</span> We partner with trusted brands and suppliers to deliver high-quality products that meet our rigorous standards.</li>
                    <li><span>Exceptional Customer Service:</span> Our dedicated customer support team is here to assist you with any inquiries or concerns you may have. We strive to provide prompt and friendly assistance to ensure your complete satisfaction.</li>
                </ul>
            </div>
            <hr />
            <div className="promise">
                <p>
                    we are passionate about exceeding your expectations. We are continuously evolving and improving our services to better serve you, our valued customers. Your satisfaction is our top priority, and we are committed to providing you with an exceptional shopping experience every time you visit our store.
                </p>
            </div>
            <hr />
            <div className="touch">
                <h2>Get in Touch</h2>
                <p>
                    We love hearing from our customers! If you have any questions, feedback, or suggestions, please don't hesitate to contact us. Our team is here to assist you and ensure that your shopping experience is nothing short of amazing.
                </p>
            </div>
            <h4 className='ending'>Thank you for choosing Us. Happy shopping!</h4>
        </div>
    </div>
  )
}

export default Aboutpage
