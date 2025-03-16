import React from 'react'
import './Navbar.css'
import nhhiketext from '../../assets/northen-hikers-text-logo.png'
const Navbar = () => {
  return (
    <div className='nh-navbar'>
        <div className='nh-navbar-logo'>
          <img src={nhhiketext} alt="" />
        </div>
      <ul>
        <li><a href="#Solo">SOLO</a></li>
        <li><a href="#backpacking">BACKPACKING</a></li>
        <li><a href="#urben">URBEN</a></li>
        <li><a href="#winter">WINTER</a></li>
        <li><a href="#Woods">WOODS</a></li>
        <li><a href="#desrt">DESERT</a></li>
        <li><a href="#scrambling">SCRAMBLING</a></li>
      </ul>
    </div>
  )
}

export default Navbar
