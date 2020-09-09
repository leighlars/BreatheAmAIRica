import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Header from '../Header/Header'
import View from '../View/View'

function App() {
  return (
    <div className="App">
      <Header/>
			<Route exact path='/' render={() => {
				return <View />
			}}/>
    </div>
  );
}

export default App
