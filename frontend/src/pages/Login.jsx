import React from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        
        <p className="loginsignup-login">Don’t have an account<span> <Link to='/signup'>SignUp Here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree to the terms & policy</p>
        </div>
        <button>Login</button>
      </div>
      
    </div>
  )
}

export default Login
