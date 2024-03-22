import React, { useContext, useState } from 'react';
import './navbar.css'
import logo from '../images/logo.png'
import cartIcon from '../images/cartIcon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
 //set the state of  the selected page 
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-log'>
        <img src={logo} alt="" />
        <p>E-market</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu('home')}}><Link to='/' style={{textDecoration: 'none', color: 'rgb(18, 83, 5)'}}>Home</Link>{menu==='home'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('mens')}}><Link style={{textDecoration: 'none', color: 'rgb(18, 83, 5)'}} to='/mens'>Mens category</Link>{menu==='mens'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none', color: 'rgb(18, 83, 5)'}} to='womens'>Womens category</Link>{menu==='womens'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('electronics')}}><Link style={{textDecoration: 'none', color: 'rgb(18, 83, 5)'}} 
          to='electronics'>Electronics</Link>{menu==='electronics'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('about')}}><Link style={{textDecoration: 'none', color: 'rgb(18, 83, 5)'}} to='about'>About</Link>{menu==='about'?<hr/>:<></>}</li>
        <li onClick={() => {setMenu('contact')}}><Link style={{textDecoration: 'none', color: 'rgb(18, 83, 5)'}} to='contact'>Contact</Link>{menu==='contact'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><img src={cartIcon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
