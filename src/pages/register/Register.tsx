import React from 'react'
import './register.css';

const Register = () => {
  return (
    <div className='register'>
        <div className='registerWrapper'>
            <div className='registerLeft'>
                <h3 className='registerLogo'>Socialite</h3>
                <span className='registerDesc'>Connect with the world around you.</span>
            </div>
            <div className='registerRight'>
            <div className='registerBox'>
                <input placeholder='email' className='registerInput'/>
                <input placeholder='password' className='registerInput'/>
                <button className='registerButton'>Sign up</button>
 
                <button className='registerRegButton'>Log into account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register