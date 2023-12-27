import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Socialite</h3>
                <span className='loginDesc'>Connect with the world around you.</span>
            </div>
            <div className='loginRight'>
            <div className='loginBox'>
                <input placeholder='email' className='loginInput'/>
                <input placeholder='password' className='loginInput'/>
                <button className='loginButton'>Log In</button>
                <span className='loginForgotPass'>Forgot Password</span>
                <button className='loginRegButton'>Create new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login