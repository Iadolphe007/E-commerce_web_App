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
            <button onClick={() => {
              alert("Sign up failed-backend not implemented")
            }}>Sign Up</button>
            <p className="signup-login">Arleady have an account<span> <Link to='/login' className='signup-link'>Login Here</Link></span></p>
        </div>
    </div>
  )
}

export default Signup
