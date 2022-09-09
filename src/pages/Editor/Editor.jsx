import React from 'react'

import TodoEditor from './TodoEditor/TodoEditor'
import TodosMenu from '../../components/TodosMenu/TodosMenu'
import { todos } from '../../assets/js/todos'

const Main = () => {
	// сделать одну функцию по нахождению todo по id
	// Добавить кнопку отмены изменеий

	const [todoItems, setTodoItems] = React.useState(todos.filter((td) => !td.isDone))
	const [archiveTodos, setArchiveTodos] = React.useState(todos.filter((td) => td.isDone))
	const [todoValue, setTodoValue] = React.useState('')
	const [todoNotes, setTodoNotes] = React.useState('')
	const [selectedTag, setSelectedTag] = React.useState('')
	const [selectedTodos, setSelectedTodos] = React.useState([])
	const [editingTodo, setEditingTodo] = React.useState(null)

	const onChangeValue = (event) => setTodoValue(event.target.value)
	const onChangeNotes = (event) => setTodoNotes(event.target.value)
	const onClickSetTag = (tagName) => setSelectedTag(tagName)
	const createId = () => Math.random().toString(16).slice(2)

	const onClickCreateTodo = () => {
		if (editingTodo) {
			const thisTodo = todos.find((td) => editingTodo === td.id)
			thisTodo.name = todoValue
			thisTodo.notes = todoNotes
			thisTodo.tag = selectedTag
		} else {
			if (todoValue !== '') {
				const newTodo = {
					id: createId(),
					name: todoValue,
					notes: todoNotes,
					tag: selectedTag,
				}

				todos.push(newTodo)
				setTodoItems([...todos])
			}
		}

		setTodoValue('')
		setTodoNotes('')
		setSelectedTag('')
		setEditingTodo(null)
	}

	const isSelectedAll = selectedTodos.length === todoItems.length && selectedTodos.length !== 0

	const onClickSelectTodo = (todoId) => {
		if (selectedTodos.includes(todoId)) setSelectedTodos(selectedTodos.filter((td) => todoId !== td))
		else setSelectedTodos([...selectedTodos, todoId])
	}

	const onChangeSelectAllTodo = () => {
		if (isSelectedAll) setSelectedTodos([])
		else setSelectedTodos(todoItems.filter((td) => !td.isDone).map((td) => td.id))
	}

	const onClickRemoveTodo = (todoId, isDone) => {
		const index = todos.findIndex((td) => td.id === todoId)

		if (isDone) {
			setArchiveTodos(archiveTodos.filter((td) => td.id !== todoId))
		} else {
			if (selectedTodos.includes(todoId)) setSelectedTodos(selectedTodos.filter((td) => td !== todoId))
			setTodoItems(todoItems.filter((td) => td.id !== todoId))
		}

		if (editingTodo === todoId) {
			setTodoValue('')
			setTodoNotes('')
			setSelectedTag('')
			setEditingTodo(null)
		}

		todos.splice(index, 1)
	}

	const onClickDoneTodo = (todoId) => {
		const thisTodo = todos.find((td) => td.id === todoId)
		const index = todos.findIndex((td) => td.id === todoId)

		if (archiveTodos.includes(thisTodo)) {
			setArchiveTodos(archiveTodos.filter((td) => todoId !== td.id))
			setTodoItems([...todoItems, thisTodo])
		} else {
			if (selectedTodos.includes(todoId)) setSelectedTodos(selectedTodos.filter((td) => todoId !== td))

			setArchiveTodos([...archiveTodos, thisTodo])
			setTodoItems(todoItems.filter((td) => todoId !== td.id))
		}

		todos[index].isDone = !thisTodo.isDone
	}

	const onClickDoneToSelectedTodos = (todosIdArray) => {
		const todosArray = todosIdArray.map((td) => todoItems.find((t) => td === t.id))

		todos.filter((td) => todosIdArray.includes(td.id)).map((td) => (td.isDone = true))

		setTodoItems(todoItems.filter((td) => !todosArray.includes(td)))
		setArchiveTodos([...archiveTodos, ...todosArray])
		setSelectedTodos([])
	}

	const onClickEditTodo = (todoId) => {
		const thisTodo = todoItems.find((td) => todoId === td.id)

		if (thisTodo.tag) setSelectedTag(thisTodo.tag)

		setEditingTodo(todoId)
		setTodoValue(thisTodo.name)
		setTodoNotes(thisTodo.notes)
	}

	const onClickRemoveSelectedTodos = (todosIdArray) => {
		const todosArray = todosIdArray.map((td) => todoItems.find((t) => td === t.id))

		setSelectedTodos([])
		setTodoItems(todoItems.filter((td) => !todosArray.includes(td)))

		if (todosIdArray.includes(editingTodo)) {
			setTodoValue('')
			setTodoNotes('')
			setSelectedTag('')
			setEditingTodo(null)
		}

		todosArray.map((td) => todos.splice(td.index, 1))
	}

	return (
		<>
			<TodoEditor
				todoValue={todoValue}
				todoNotes={todoNotes}
				selectedTag={selectedTag}
				editingTodo={editingTodo}
				onChangeValue={onChangeValue}
				onChangeNotes={onChangeNotes}
				onClickSetTag={onClickSetTag}
				onClickCreateTodo={onClickCreateTodo}
			/>
			<TodosMenu
				todoItems={todoItems}
				todoNotes={todoNotes}
				selectedTodos={selectedTodos}
				archiveTodos={archiveTodos}
				isSelectedAll={isSelectedAll}
				onClickSelectTodo={onClickSelectTodo}
				onChangeSelectAllTodo={onChangeSelectAllTodo}
				onClickRemoveTodo={onClickRemoveTodo}
				onClickDoneTodo={onClickDoneTodo}
				onClickDoneToSelectedTodos={onClickDoneToSelectedTodos}
				onClickRemoveSelectedTodos={onClickRemoveSelectedTodos}
				onClickEditTodo={onClickEditTodo}
			/>
		</>
	)
}

export default Main
