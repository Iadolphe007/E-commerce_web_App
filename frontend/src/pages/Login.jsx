import React from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign In</h1>
        <div className='login-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={() => {
              alert("Sign in failed-backend not implemented")
            }}>Login</button>
        <p className="signup-login">Don’t have an account<span> <Link to='/signup' className='login-link'>SignUp Here</Link></span></p>
      </div>
      
    </div>
  )
}

export default Login
