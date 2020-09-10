import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import About from '../About/About'
import Home from '../Home/Home'
import Location from '../Location/Location'
import './View.scss'

// in Location Router, I made the path Denver for now as a bandaid. It kept rendering the Location page under About?
const View: React.FC = () => {
	return (
		<main>
			<Route
				exact path="/"
				render={() => {
					return <Home />
				}}
			/>
			<Route
				exact path='/about'
				render={() => {
					return <About/>
				}} />

				<Route 
				exact 
				path="/Denver"
				render={({ match }) => {
					return <Location />
				}}
			/>
		</main>
	)
}

export default View