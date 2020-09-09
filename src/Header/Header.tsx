import React from 'react'
import Search from '../Search/Search'
import './Header.scss'

const Header: React.FC = () => {
  
  return (
    <header className="header-container">
      <h1>Weather <br/> 
        Or Not</h1>
      <Search />
    </header>
  )
}

export default Header