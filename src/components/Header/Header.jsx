import React from 'react'
import { Avatar } from '@mui/material'

import classes from './Header.module.scss'
import SearchInput from '../SearchInput'
import avatarURL from './../../assets/img/jsinkAvatar.jpg'
import Notifications from './Notifycations'

const Header = () => {
	const style = { display: 'flex', width: '35%', border: '1px solid #F4F4F4', borderRadius: '25px' }

	// TODO make user page with edit and logout

	return (
		<div className={classes.headerActions}>
			<SearchInput style={style} />
			<div className={classes.accountInfo}>
				<Notifications />
				<p> Artemiy V. </p>
				<Avatar alt='Artemiy Voronin' src={avatarURL} />
			</div>
		</div>
	)
}

export default Header
