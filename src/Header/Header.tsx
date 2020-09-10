import React from 'react'
import Search from '../Search/Search'
import './Header.scss'
import globe from '../assets/globe.png'
import { NavLink } from 'react-router-dom'

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
      <nav>
        <NavLink to='/' 
          className='nav-btns'>
            Home
        </NavLink>
        <NavLink to='/about' 
          className='nav-btns'>
            About
        </NavLink>
        <NavLink to='/saved-cities' 
          className='nav-btns'>
            My Cities
        </NavLink>
      </nav>
    </header>
  )
}

export default Header