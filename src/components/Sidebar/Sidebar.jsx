import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

import classes from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<>
			<h2 className={classes.sidebarLogo}> .studio </h2>
			<ul className={`${classes.sidebarBlock} ${classes.sideBarBlockMain}`}>
				<li>
					<NavLink className={(navData) => (navData.isActive ? 'linkActive' : 'link')} to='/'>
						<HomeIcon /> Overview
					</NavLink>
				</li>
				<li>
					<NavLink className={(navData) => (navData.isActive ? 'linkActive' : 'link')} to='/stats'>
						<EqualizerIcon /> Stats
					</NavLink>
				</li>
			</ul>
			<ul className={`${classes.sidebarBlock}`}>
				<li>
					<NavLink className={(navData) => (navData.isActive ? 'linkActive' : 'link')} to='/settings'>
						<SettingsIcon /> Settings
					</NavLink>
				</li>
				<li>
					<NavLink className={(navData) => (navData.isActive ? 'linkActive' : 'link')} to='/logout'>
						<LogoutIcon /> Log out
					</NavLink>
				</li>
			</ul>
		</>
	)
}

export default Sidebar
