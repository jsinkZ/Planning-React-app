import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { green } from '@mui/material/colors'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined'

import classes from './Todos.module.scss'
import Todo from '../Todo/Todo'

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

			<div className={classes.todoElemets}>
				<div className={classes.actionToSelected}>
					<Checkbox
						className={classes.checkBoxThisTodo}
						onClick={onClickCheckBox}
						icon={<Brightness1OutlinedIcon />}
						checkedIcon={<Brightness1Icon />}
					/>
					<Checkbox
						className={classes.checkBoxFinished}
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

				{todoItems.map((todo) => {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							selectedTodos={selectedTodos}
							showNotes={showNotes}
							onClickSelectTodo={onClickSelectTodo}
							onClickCheckBox={onClickCheckBox}
							onClickRemove={onClickRemove}
							onClickActionNotes={onClickActionNotes}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Todos
