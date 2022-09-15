import React from 'react'
import { Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import classes from './Modal.module.scss'
import { colors } from '../../assets/js/colors'

const Modal = ({
	title = 'Modal title',
	content = 'Modal content',
	isDisplay,
	isAlert,
	callback,
	setDisplayModal,
}) => {
	const onClickActionModal = (cb) => {
		if (!isAlert && cb) cb()

		setDisplayModal(false)
	}

	return (
		<div className={`${classes.modal} ${!isDisplay ? classes.modalClosed : ''}`}>
			<div className={classes.modalWindow}>
				<div className={classes.modalHeader}>
					<IconButton onClick={() => onClickActionModal()}>
						<CloseIcon
							sx={{
								color: colors.error,
								'&:hover': {
									color: colors.errorHover,
								},
							}}
						/>
					</IconButton>
				</div>
				<h2> {title} </h2>
				<p> {content} </p>
				<div className={classes.buttons}>
					<Button
						onClick={() => onClickActionModal()}
						variant='contained'
						sx={{
							backgroundColor: colors.error,
							'&:hover': {
								backgroundColor: colors.errorHover,
							},
						}}
					>
						Decline
					</Button>
					<Button
						onClick={() => onClickActionModal(callback)}
						variant='contained'
						sx={{
							backgroundColor: colors.success,
							'&:hover': {
								backgroundColor: colors.successHover,
							},
						}}
					>
						Accept
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Modal
