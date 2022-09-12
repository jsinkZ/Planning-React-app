import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowIcon from '@mui/icons-material/ArrowDropDown'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined'
import EditIcon from '@mui/icons-material/Edit'

import classes from './Todo.module.scss'
import { colors } from '../../assets/js/colors'

const Todo = ({
	todo,
	selectedTodos,
	showNotes,
	isCompleted,
	onClickSelectTodo,
	onClickActionNotes,
	onClickConfirmRemove,
	onClickCompleteTodo,
	onClickEditTodo,
}) => {
	const isSelected = (todoId) => selectedTodos.includes(todoId)
	const onClickEdit = (event, todoId) => {
		event.stopPropagation()

		onClickEditTodo(todoId)
	}
	const style = {
		borderTopColor: isCompleted
			? colors.inactive
			: todo.tag && !isSelected(todo.id)
			? todo.tag.color
			: colors.defaultBlue,
		backgroundColor: selectedTodos.includes(todo.id) ? colors.defaultBlue : '',
		color: selectedTodos.includes(todo.id) ? 'white' : '',
		textDecoration: isCompleted ? 'line-through' : '',
	}

	return (
		<div className={classes.todoGroup}>
			{!isCompleted && (
				<Checkbox
					sx={{
						'&.Mui-checked': {
							color: colors.defaultBlue,
						},
					}}
					checked={isSelected(todo.id)}
					className={classes.checkBoxThisTodo}
					onChange={() => onClickSelectTodo(todo.id)}
					icon={<Brightness1OutlinedIcon />}
					checkedIcon={<Brightness1Icon />}
				/>
			)}

			<div className={classes.todoElement} onClick={!isCompleted ? () => onClickSelectTodo(todo.id) : null}>
				{todo.notes !== '' && showNotes.includes(todo.id) ? (
					<div
						onClick={(event) => event.stopPropagation()}
						className={`${classes.todoNotes} ${showNotes ? classes.show : ''}`}
						style={{ textDecoration: isCompleted ? 'line-through' : '' }}
					>
						{todo.notes}
					</div>
				) : (
					''
				)}

				<div style={style} className={classes.todoMain}>
					<Checkbox
						checked={isCompleted}
						onClick={(event) => event.stopPropagation()}
						onChange={() => onClickCompleteTodo(todo.id)}
						sx={{
							'&.Mui-checked': {
								color: colors.success,
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
					{!isCompleted && (
						<IconButton onClick={(event) => onClickEdit(event, todo.id)}>
							<EditIcon className={classes.edit} />
						</IconButton>
					)}
					<IconButton
						onClick={(event) => onClickConfirmRemove(event, todo.id, isCompleted)}
						className={classes.remove}
					>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default Todo
