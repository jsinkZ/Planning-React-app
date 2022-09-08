import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { green } from '@mui/material/colors'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowIcon from '@mui/icons-material/ArrowDropDown'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined'

import classes from './Todo.module.scss'

const Todo = ({
	todo,
	selectedTodos,
	showNotes,
	onClickSelectTodo,
	onClickCheckBox,
	onClickRemove,
	onClickActionNotes,
}) => {
	const style = {
		borderTopColor: todo.tag.color ? todo.tag.color : '#4150B6',
		backgroundColor: selectedTodos.includes(todo.id) ? '#4150B6' : '',
		color: selectedTodos.includes(todo.id) ? 'white' : '',
	}

	return (
		<div className={classes.todoGroup}>
			<Checkbox
				className={classes.checkBoxThisTodo}
				onClick={onClickCheckBox}
				icon={<Brightness1OutlinedIcon />}
				checkedIcon={<Brightness1Icon />}
			/>
			<div className={classes.todoElement} onClick={() => onClickSelectTodo(todo.id)}>
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
		</div>
	)
}

export default Todo
