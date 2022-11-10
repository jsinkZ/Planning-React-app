import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'normalize-css'

import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home'

const App = () => {
	return (
		<div className='app'>
			<nav className='sidebar'>
				<Sidebar />
			</nav>
			<div className='mainActionPage'>
				<header>
					<Header />
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />}></Route>
					</Routes>
				</main>
			</div>
		</div>
	)
}

export default App
