import React, { useState, useEffect } from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import './View.scss'

const View: React.FC = () => {
	return (
		<main>
			<Home />
			<About />
		</main>
	)
}

export default View