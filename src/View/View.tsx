import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Location from '../Location/Location'
import './View.scss'

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
				exact path="/:location"
				render={({ match }) => {
					return <Location />
				}}
			/>
		</main>
	)
}

export default View