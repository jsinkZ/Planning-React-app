import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { green } from '@mui/material/colors'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowIcon from '@mui/icons-material/ArrowDropDown'

import classes from './Todos.module.scss'

const Todos = ({ todoItems }) => {
	const [showNotes, setShowNotes] = React.useState([])
	const [selectedTodos, setSelectedTodos] = React.useState([])

	const onClickCheckBox = (event) => {
		event.stopPropagation()
	}

	const onClickRemove = (event) => {
		event.stopPropagation()
	}

	const onClickSelectTodo = (todo) => {
		if (selectedTodos.includes(todo)) {
			setSelectedTodos(selectedTodos.filter((td) => td !== todo))
		} else {
			setSelectedTodos([...selectedTodos, todo])
		}
	}

	const onClickActionNotes = (event, todoId) => {
		event.stopPropagation()

		if (showNotes.includes(todoId)) setShowNotes(showNotes.filter((td) => td !== todoId))
		else setShowNotes([...showNotes, todoId])
	}

	return (
		<div className={classes.todos}>
			<h2> Todos </h2>
			<h3 style={{ color: selectedTodos.length > 0 ? 'black' : '#B1B1B1' }} className={classes.selectedTodos}>
				Selected: {selectedTodos.length}{' '}
			</h3>
			<div className={classes.actionToSelected}>
				<Checkbox
					sx={{
						'&.Mui-checked': {
							color: green['700'],
						},
					}}
				/>
				<IconButton className={classes.remove}>
					<DeleteIcon />
				</IconButton>
			</div>
			<div className={classes.todoElemets}>
				{todoItems.map((todo) => {
					const style = {
						borderTopColor: todo.tag.color ? todo.tag.color : '#4150B6',
						backgroundColor: selectedTodos.includes(todo.id) ? '#4150B6' : '',
						color: selectedTodos.includes(todo.id) ? 'white' : '',
					}

					return (
						<div className={classes.todoElement} onClick={() => onClickSelectTodo(todo.id)} key={todo.id}>
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
										onClick={(event) => onClickActionNotes(event, todo.id)}
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
