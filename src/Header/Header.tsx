import React from 'react'
import Search from '../Search/Search'
import './Header.scss'
import globe from '../assets/globe.png'

const Header: React.FC = () => {
  
  return (
    <header className="header-container">
      <div className='logo-box'>
        <h1 className='company-name'>Weather Or Not</h1>
        <img src={globe} alt='Blue geometric globe' />
        <h4 className='tagline'><i>Plan. Research. Experience.</i></h4>
      </div>
      <Search />
    </header>
  )
}

export default Header