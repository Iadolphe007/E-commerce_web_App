import React from 'react';
import './navbar.css'
import logo from '../images/logo.png'
import cartIcon from '../images/cartIcon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-log'>
        <img src={logo} alt="" />
        <p>E-market</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Mens Wear</li>
        <li>Womens Wear</li>
        <li>Electronics</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-login-cart">
      <img src={cartIcon} alt="" />
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
