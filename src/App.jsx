import React from 'react'

import './App.scss'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Main />
		</div>
	)
}

export default App
