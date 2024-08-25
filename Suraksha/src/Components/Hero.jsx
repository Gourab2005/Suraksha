import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='Hero'>
        <h1 className="title">Empowering Women with Real-Time Safety Support</h1>
        <p className="para">Our platform provides a secure, anonymous space for reporting safety concerns within educational institutions. We aim to create a safer environment by encouraging community support and immediate response to incidents.</p>
        <div className="buttons">
            <Link to="/login" className="btn login-btn">Login</Link>
            <Link to="/signup" className="btn signup-btn">Signup</Link>
        </div>
    </div>
  )
}

export default Hero;
