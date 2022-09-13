import React from 'react'
import { Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import classes from './Modal.module.scss'

const Modal = ({ title = 'Modal title', content = 'Some text in modal content!' }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.modalWindow}>
				<div className={classes.modalHeader}>
					<IconButton>
						<CloseIcon />
					</IconButton>
				</div>
				<h2> {title} </h2>
				<p> {content} </p>
				<div className={classes.buttons}>
					<Button color='error'> Decline </Button>
					<Button color='success'> Accept </Button>
				</div>
			</div>
		</div>
	)
}

export default Modal
