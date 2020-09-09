import React from 'react'
import Search from '../Search/Search'
import './Header.scss'
import globe from '../assets/globe.png'

const Header: React.FC = () => {
  
  return (
    <header className="header-container">
      <div className='logo-box'>
        <span className='company-logo'>
          <img src={globe} alt='Blue geometric globe' className='globe-image' />
          <h1 className='company-name'>Weather Or Not</h1>
        </span>
        <h2 className='tagline'><i>Plan. Research. Experience.</i></h2>
      </div>
      <Search />
    </header>
  )
}

export default Header