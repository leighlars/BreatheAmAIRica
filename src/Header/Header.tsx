import React from 'react'
import Search from '../Search/Search'
import './Header.scss'

const Header: React.FC = () => {
  
  return (
    <header className="header-container">
      <div className='logo-box'>
        <h1>Weather Or Not</h1> <br />
        <h4><i>Plan. Research. Experience.</i></h4>
      </div>
      <Search />
    </header>
  )
}

export default Header