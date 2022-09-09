import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Header from './components/Header/Header'
import Editor from './pages/Editor/Editor'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Editor />}></Route>
				</Routes>
			</main>
		</div>
	)
}

export default App
