import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { green } from '@mui/material/colors'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowIcon from '@mui/icons-material/ArrowDropDown'

import classes from './Todos.module.scss'

const Todos = ({ todoItems }) => {
	const [showNotes, setShowNotes] = React.useState([])

	const onClickCheckBox = (event) => {
		event.stopPropagation()
	}

	const onClickRemove = (event) => {
		event.stopPropagation()
	}

	const onClickActionNotes = (todoId) => {
		if (showNotes.includes(todoId)) setShowNotes(showNotes.filter((td) => td !== todoId))
		else setShowNotes([...showNotes, todoId])
	}

	return (
		<div className={classes.todos}>
			<h2> Todos </h2>
			<div className={classes.todoElemets}>
				{todoItems.map((todo) => {
					const style = {
						borderTopColor: todo.tag.color ? todo.tag.color : '#4150B6',
					}

					return (
						<div className={classes.todoElement} onClick={() => onClickActionNotes(todo.id)} key={todo.id}>
							{todo.notes !== '' && showNotes.includes(todo.id) ? (
								<div
									onClick={(event) => event.stopPropagation()}
									className={`${classes.todoNotes} ${showNotes ? classes.show : ''}`}
								>
									{todo.notes}
								</div>
							) : (
								''
							)}

							<div style={style} className={classes.todoMain}>
								<Checkbox
									onClick={onClickCheckBox}
									sx={{
										'&.Mui-checked': {
											color: green['700'],
										},
									}}
								/>
								{todo.name}
								{todo.notes !== '' ? (
									<IconButton
										onClick={() => onClickActionNotes(todo.id)}
										className={`${classes.arrow} ${showNotes.includes(todo.id) ? classes.openedArrow : ''}`}
									>
										<ArrowIcon />
									</IconButton>
								) : (
									''
								)}
								<IconButton onClick={onClickRemove} className={classes.remove}>
									<DeleteIcon />
								</IconButton>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Todos
