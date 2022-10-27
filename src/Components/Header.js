import React from 'react'
import logo from '../logo.svg';

function Header() {
  return (
    <div className='row'>
        <h1 className='app-name'>
          <img className='app-logo' src={logo} alt='logo'/>
          <span>EasyParking</span>
        </h1>
    </div>
  )
}

export default Header;