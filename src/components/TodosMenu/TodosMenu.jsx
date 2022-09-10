import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

import classes from './TodosMenu.module.scss'
import Todo from '../Todo/Todo'
import { colors } from '../../assets/js/colors'

const TodosMenu = ({
	todoItems,
	selectedTodos,
	isSelectedAll,
	completedTodos,
	onClickCompleteTodo,
	onClickSelectTodo,
	onChangeSelectAllTodo,
	onClickRemoveTodo,
	onClickCompleteSelectedTodos,
	onClickRemoveSelectedTodos,
	onClickEditTodo,
}) => {
	const [showNotes, setShowNotes] = React.useState([])

	const onChangeCheckBox = () => {}

	const onClickActionNotes = (event, todoId) => {
		event.stopPropagation()

		if (showNotes.includes(todoId)) setShowNotes(showNotes.filter((td) => td !== todoId))
		else setShowNotes([...showNotes, todoId])
	}

	const onClickConfirmRemove = (event, todoId, isCompleted = false) => {
		event.stopPropagation()

		const thisArray = isCompleted ? completedTodos : todoItems
		const thisTodo = thisArray.find((td) => td.id === todoId)
		const isAccept = window.confirm(`Are you sure you want to remove todo: '${thisTodo.name}' ?`)

		if (isAccept) onClickRemoveTodo(todoId, isCompleted)
	}

	const onClickConfirmRemoveSelected = (selectedTodos) => {
		const todosArray = todoItems
			.filter((td) => selectedTodos.includes(td.id))
			.map((td) => `\n'${td.name}'`)
			.join(',')
		const isAccept = window.confirm(`Are you sure you want to remove todos: ${todosArray} ?`)

		if (isAccept) onClickRemoveSelectedTodos(selectedTodos)
	}

	return (
		<div className={classes.todos}>
			<h2> Todos </h2>
			{todoItems.length > 0 && (
				<>
					<h3
						style={{ color: selectedTodos.length > 0 ? 'black' : colors.inactive }}
						className={classes.selectedTodos}
					>
						Selected: {selectedTodos.length}
					</h3>
					<div className={classes.todoElements}>
						<div className={classes.actionToSelected}>
							<Checkbox
								checked={isSelectedAll}
								className={classes.checkBoxThisTodo}
								onChange={onChangeSelectAllTodo}
								icon={<Brightness1OutlinedIcon />}
								checkedIcon={<Brightness1Icon />}
								sx={{
									'&.Mui-checked': {
										color: colors.defaultBlue,
									},
								}}
							/>
							<IconButton
								disabled={selectedTodos.length < 2}
								className={classes.checkBoxFinished}
								onClick={() => onClickCompleteSelectedTodos(selectedTodos)}
								sx={{
									color: colors.success,
								}}
							>
								<CheckBoxIcon />
							</IconButton>
							<IconButton
								className={classes.remove}
								disabled={!(selectedTodos.length > 1)}
								onClick={selectedTodos.length > 1 ? () => onClickConfirmRemoveSelected(selectedTodos) : null}
							>
								<DeleteIcon />
							</IconButton>
						</div>
						{todoItems.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								selectedTodos={selectedTodos}
								showNotes={showNotes}
								onClickCompleteTodo={onClickCompleteTodo}
								onClickSelectTodo={onClickSelectTodo}
								onChangeCheckBox={onChangeCheckBox}
								onClickConfirmRemove={onClickConfirmRemove}
								onClickActionNotes={onClickActionNotes}
								onClickEditTodo={onClickEditTodo}
							/>
						))}
					</div>
				</>
			)}
			{completedTodos.length > 0 && (
				<>
					<h2> Completed todos </h2>
					<div className={classes.todoElements}>
						{completedTodos.map((todo) => (
							<Todo
								key={todo.id}
								todo={todo}
								selectedTodos={selectedTodos}
								showNotes={showNotes}
								onClickCompleteTodo={onClickCompleteTodo}
								onChangeCheckBox={onChangeCheckBox}
								onClickConfirmRemove={onClickConfirmRemove}
								onClickActionNotes={onClickActionNotes}
								isCompleted
							/>
						))}
					</div>
				</>
			)}
			{todoItems.length + completedTodos.length === 0 && (
				<p> ✋ Now todo list is clean, but you can create a new one </p>
			)}
		</div>
	)
}

export default TodosMenu
