import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import Header from '../Header/Header'
import View from '../View/View'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
			<Route
				exact path='/'
				render={() => {
					return <View />
				}}
			/>
    </div>
  )
}

export default App
