import React from 'react'
import { Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import classes from './Modal.module.scss'
import { colors } from '../../assets/js/colors'

const Modal = ({ title = 'Modal title', content = 'Modal content', isOpen, isAlert, callback }) => {
	const [open, setOpen] = React.useState(isOpen)

	const onClickCloseModal = () => setOpen(false)
	const onClickAcceptModal = (cb) => {
		if (!isAlert) cb()

		setOpen(false)
	}

	return (
		<div className={`${classes.modal} ${!open ? classes.modalClosed : ''}`}>
			<div className={classes.modalWindow}>
				<div className={classes.modalHeader}>
					<IconButton onClick={onClickCloseModal}>
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
						onClick={onClickCloseModal}
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
						onClick={() => onClickAcceptModal(callback)}
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
