import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css'

const Signup = () => {
  return (
    <div className='signup'>
       <div className="signup-container">
        <h1>Sign up</h1>
        <div className='signup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='confirm Password' />
        </div>
        
        <p className="loginsignup-login">Arleady have an account<span> <Link to='/login'>Login Here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree to the terms & policy</p>
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Signup
