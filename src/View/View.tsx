import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
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
				exact path='/about'
				render={() => {
					return <About/>
				}} 
			/>
		</main>
	)
}

export default View