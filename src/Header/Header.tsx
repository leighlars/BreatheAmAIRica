import React from 'react'
import Search from '../Search/Search'
import './Header.scss'
import america from '../assets/america.png'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  
  return (
    <header className="header-container">
      <div className='top-header'>
      <div className='logo-box'>
        <span className='company-logo'>
          <img src={america} alt='Blue map of USA' className='map-icon' />
          <h1 className='company-name'>Breathe AmAIRica</h1>
        </span>
        <h2 className='tagline'><i>Plan. Go. Breathe.</i></h2>
      </div>
      <nav>
        <NavLink to='/' 
          className='nav-btns'>
            HOME
        </NavLink>
        <NavLink to='/about' 
          className='nav-btns'>
            ABOUT
        </NavLink>
        {/* <NavLink to='/saved-cities' 
          className='nav-btns'>
            My Cities
        </NavLink> */}
      </nav>
      </div>
      <Search />
    </header>
  )
}

export default Header